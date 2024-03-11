#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Created on Wednesday - May 10 2023, 14:33:12

@author: Michele Svanera, University of Glasgow

This code is used to run the experiment.
The position of the boxes and the target cannot be changed.
 
"""

################################################################################################################
## Imports 

from psychopy import visual, core, event, logging, monitors
from psychopy import prefs as pyschopy_prefs
from psychopy import gui

import os, sys
from os.path import join as opj
from datetime import datetime as dt
from time import gmtime, strftime
import pandas as pd
import numpy as np
import json


################################################################################################################
## Paths and Constants

Fullscreen = True
Screen_dimensions = (1920, 1080)
Background_color = 'gray'
Fps_update_rate = 1                             # sec

Path_in_sounds = '../in/'
Root_dir = '../'     #'D:/Mucklis_lab/MIB/stimulus_src/'
Dir_save = Root_dir + 'out/'
Log_name = 'myLogFile.log'
Csv_name = 'design.csv'
Frames_durations_name = 'frames_durations.npy'
json_filename = 'last_parameters.json'

# Messages
init_mess_1 = "Please follow displayed instructions. Press a key to continue.."
# init_mess_1 = "Before we begin, let us run through a brief introduction. You are free to withdraw from your participation in this study at any time. \
#             During the experiment, please look at the central fixation cross whenever it appears in the centre. \
#             In each sequence, two objects will vertically flash in succession from one corner to another corner of the screen. Such a sequence could go from upper left to lower left corner, or from lower right to upper right corner. Sometimes this presentation may look like there is motion between the dots. \
#             You will also sometimes see a third object between the two objects on some sequences. This object is called target. \
#             A cycle can be one sequence, or it can feature multiple sequences in succession. \
#             All this may sound a bit abstract and confusing, but your task throughout the experiment is actually really simple: fixate on the central fixation cross and respond to the questions at the end of each cycle. You will be asked if you saw motion, and you will also be asked if you saw a target between the two objects. That's it. The whole process will repeat multiple times. \
#             Please press a key to continue."
scanner_message = "Waiting for the scanner..."
final_message = "This is the end of the experiment."

# Boxes 
Flash_period = 0.2                      # seconds for one B-W cycle (ie 1/Hz)
boxes_separation = 6                  # (initial) distance between the two boxes
distance_from_centre = 5              # (initial) distance between the fixation and the boxes (x-axis only)
boxes_size = (1.2, 1.2)                        # (initial) Box size inducers
target_size = (1., 1.)                        # (initial) Box size target
target_pos = -2.5/2
Increment_position = 0.05                 # % of move the boxes with the keyboard arrows
Increment_size = 1.1                    # % increase/decrease of size

# Fixation cross
Color_change_cross = True
Color_change_rate = 6 * 2               # sec

# Timing
AM_inducers_cycles = 6                  # sec.
Block_duration = 14                     # sec.    


################################################################################################################
## Functions


def find_list_of_file(path_in, identifier='nii.gz'):
    all_anat = []
    for root, _, files in os.walk(path_in):
        for i_file in files:
            if i_file.endswith(identifier):
                all_anat.append(root + '/' + i_file)

    all_anat = sorted(list(np.unique(all_anat)))
    return [i for i in all_anat if '/._' not in i]


def load_csv_design(path_in):
    ''' Load the csv file with the design matrix '''
    df = pd.read_csv(path_in)
    return df


def get_last_created_json(files):
    if not files:
        return None

    last_created_file = files[0]
    last_created_time = os.path.getctime(last_created_file)

    for file in files[1:]:
        file_created_time = os.path.getctime(file)
        if file_created_time > last_created_time:
            last_created_file = file
            last_created_time = file_created_time

    return last_created_file


def createOutFolder(path_out):
    if not os.path.exists(path_out):
        try:
            os.makedirs(path_out)
        except Exception as e:
            print('Problem with creating an *out* folder, check permissions: ',e)    
    else:
        n_folder_name = 1
        path_out_new = path_out + "_" + str(n_folder_name)
        while(os.path.exists(path_out_new) is True):
            n_folder_name += 1
            path_out_new = path_out + "_" + str(n_folder_name)
        try:
            os.makedirs(path_out_new)
        except Exception as e:
            print('Problem with creating an *out* folder, check permissions: ',e)      
        path_out = path_out_new
    path_out += '/'
    
    return path_out


class DisplayBoxesSettings():
    ''' Class containing the display settings '''

    show_target = True
    show_boxes = True

    def swap_target(self):
        self.show_target = not self.show_target
    def swap_boxes(self):
        self.show_boxes = not self.show_boxes


def initialBox():    
    dlg = gui.Dlg(title="Experiment")
    dlg.addText('Experiment detail', color='Blue')
    dlg.addField('Operator:', 'MS')
    dlg.addField('Scanner:', False)    
    dlg.addField('Import last parameters:', True)    
    
    dlg.addText('Subject Info', color='Blue')
    dlg.addField('Subject-code:', 'FFE21')
    # dlg.addField('Age:', tip='18 to 00')
    # dlg.addField('Gender:', choices=['male', 'female'])

    all_infos = dlg.show()
    if dlg.OK:
        return all_infos
    else:
        return None


def create_timeline_fixation(duration = 762):
    ''' Create the timeline for the fixation's color '''

    timeline = np.zeros(duration * 1000)                # in ms
    t = 0
    last = 0
    while(1):
        i_block = np.random.uniform(6, 15)   
        i_block = np.round(i_block * 1000).astype(int)  # in ms
        timeline[t : t+i_block] = 1 if last == 0 else 0
        last = 1 if last == 0 else 0
        t = t + i_block
        if t > duration * 1000:
            break
        
    return timeline


def create_timeline_blocks(AM_inducers_cycles,
                            target_timing, target_starting,
                            inducer_showing_time=83, target_showing_time=33, block_duration=1000):     
    ''' 
    Create the timeline for the experiment.
    :param AM_inducers_cycles: number of cycles for the AM inducers
    :param target_timing: timing for the target, could be 'in-time' or 'out-time' (or 'blinking')
    :param target_starting: starting time for the target, could be 'begin' or 'late' (or 'blinking')
    :param inducer_showing_time: time for the inducers to be shown
    :param target_showing_time: time for the target to be shown
    :param block_duration: duration of the block (in ms)
    :return timelines: the timelines for the experiment for each block
    '''

    # Create a ms precision timeline for each of the in-time and out-time conditions
    timeline = np.linspace(0, 1, block_duration+1)
    timeline_up = np.zeros(len(timeline))
    timeline_bottom = np.zeros(len(timeline))
    timeline_target = np.zeros(len(timeline))

    t = 0
    for i_cycle in range(AM_inducers_cycles):

        # Special case: blinking
        if target_timing == 'blinking' or target_starting == 'blinking':
            timeline_up[t : t+inducer_showing_time] = 1
            timeline_bottom[t : t+inducer_showing_time] = 1
            t = t + 166 + 166           # 166ms for the two inducers
            continue

        # 0-83ms: first inducer (inducer_showing_time)
        timeline_up[t : t+inducer_showing_time] = 1
            
        # 100ms: target if 'begin' (first cycle)
        if target_timing == 'in-time' and target_starting == 'begin' and i_cycle == 0:
            timeline_target[t+100: t+100+target_showing_time] = 1
        elif target_timing == 'out-time' and target_starting == 'begin' and i_cycle == 0:
            timeline_target[t+133: t+133+target_showing_time] = 1

        # 100ms: target if 'late' (last cycle)
        if target_timing == 'in-time' and target_starting == 'late' and i_cycle == (AM_inducers_cycles-1):
            timeline_target[t+100: t+100+target_showing_time] = 1
        elif target_timing == 'out-time' and target_starting == 'late' and i_cycle == (AM_inducers_cycles-1):
            timeline_target[t+133: t+133+target_showing_time] = 1

        # 166-249ms: second inducer (inducer_showing_time)
        timeline_bottom[t+166 : t+166+inducer_showing_time] = 1

        # Update t
        t = t + 166 + 166           # 166ms for the two inducers

    return {'timeline_up': timeline_up, 'timeline_bottom': timeline_bottom, 
            'timeline_target': timeline_target}


def main_block_design(win, globalClock, data_loaded, timelines, fixation_timeline):
    ''' Main function to run the experiment '''

    ############## Stimuli preparation ##############

    # Fixation cross
    fixation = visual.ShapeStim(win,vertices=((0,-1),(0,1),(0,0),(-1,0),(1,0)), lineWidth=4, units="pix",
        size=(20,20),closeShape=False,lineColor='white')
    
    # Square Boxes
    square_up = visual.Rect(win, size=boxes_size, pos=(+distance_from_centre, 0 + boxes_separation/2), color='white', units='deg')#units="pix",)
    square_bottom = visual.Rect(win, size=boxes_size, pos=(+distance_from_centre, 0 - boxes_separation/2), color='white', units='deg')#units="pix",)
    square_target = visual.Rect(win, size=target_size, pos=(+distance_from_centre, target_pos), color='white', units='deg')#units="pix",)
    
    # Localiser
    grating_texture = np.tile([[1,-1],[-1,1]], (4,4))
    grating_texture = np.dstack((grating_texture,grating_texture,grating_texture))
    grating_1 = visual.GratingStim(win,tex=grating_texture,color=[1.0, 1.0, 1.0],colorSpace='rgb', units="deg",
        size=target_size,ori=0,autoLog=False,interpolate=False,pos=square_target.pos)
    grating_2 = visual.GratingStim(win,tex=~grating_texture+1,color=[1.0, 1.0, 1.0],colorSpace='rgb', units="deg",
        size=target_size,ori=0,autoLog=False,interpolate=False,pos=square_target.pos)


    # Restore old parameters, if needed/available
    display_options = DisplayBoxesSettings()
    try:
        square_up.pos = data_loaded['square_up.pos']
        square_bottom.pos = data_loaded['square_bottom.pos']
        square_target.pos = data_loaded['square_target.pos']
        grating_1.pos = square_target.pos
        grating_2.pos = square_target.pos
        square_up.size = data_loaded['square_up.size']
        square_bottom.size = data_loaded['square_bottom.size']
        square_target.size = data_loaded['square_target.size']
        display_options.show_boxes = data_loaded['show_boxes']      # not really used
        display_options.show_target = data_loaded['show_target']
        # fixation.pos = data_loaded['fixation.pos']
    except:
        logging.data('Initial default parameters used.')


    ############## Definitions/Functions ##############
    
    ## handle Rkey presses each frame
    def escapeCondition():       
        key_pressed = event.getKeys()
        for key in key_pressed:
            if key in ['escape', 'q']:
                return False, key_pressed
        return True, key_pressed


    def change_color_fixation(t_begin_exp):
        ''' Change the color of the fixation cross '''

        t_fix = (dt.now()-t_begin_exp).total_seconds()
        t_fix_indx = np.round(t_fix * 1000).astype(int)
        if Color_change_cross and fixation_timeline[t_fix_indx] == 1:
            fixation.lineColor = 'red'
        else:
            fixation.lineColor = 'green'


    def displayFixation(win, time=2, break_flag=True, **kwargs):
        ''' Display just -fixation- '''

        t_begin_exp = kwargs['t_zero']

        timer_fixation = core.CountdownTimer(time)    
        while (timer_fixation.getTime() > 0 and break_flag==True):    

            change_color_fixation(t_begin_exp)
            fixation.draw()                                        
            win.flip()
            break_flag, _ = escapeCondition()                  
        return break_flag


    def localiser(win, time=2, break_flag=True, **kwargs):
        ''' 
        Display the -localiser- condition (target box only).
            :param time: total duration of the block (in sec.), 
                which means fixation for 'time' - 'timing' sec.
            :param timing: duration of the localiser (in sec.)
        '''
        
        # Localiser
        Localiser_timing = kwargs['timing']
        t_begin_exp = kwargs['t_zero']

        timer_localiser = core.CountdownTimer(Localiser_timing)            
        while (timer_localiser.getTime() > 0 and break_flag==True):    
            t = globalClock.getTime()

            if t % Flash_period < Flash_period / 2.0:  # more accurate to count frames
                stim = grating_1
            else:
                stim = grating_2
            stim.draw()

            change_color_fixation(t_begin_exp)
            win.flip()                  # Update screen
            break_flag, key_pressed = escapeCondition()

        # Baseline
        timer_fixation = core.CountdownTimer(time - Localiser_timing)    
        while (timer_fixation.getTime() > 0 and break_flag==True):    

            fixation.draw()                                        
            win.flip()
            break_flag, _ = escapeCondition()                  
        return break_flag


    ## Display -apparent_motion- condition
    def apparent_motion(win, time=2, break_flag=True, **kwargs):
        ''' 
            Display the -apparent_motion- condition.
            It could be one between: 'in-time_begin', 'out-time_begin', 'in-time_late', 'out-time_late', 'blinking' 
        '''
        # Retrieve the timings
        timeline_up = kwargs['timeline_up']
        timeline_bottom = kwargs['timeline_bottom']
        timeline_target = kwargs['timeline_target']
        t_begin_exp = kwargs['t_zero']

        timer_boxes = core.CountdownTimer(time)    
        while (timer_boxes.getTime() > 0 and break_flag==True):    
            t = time - timer_boxes.getTime()            # seconds from the beginning of the block
            t_indx = np.round(t * 1000).astype(int)     # index of the timeline        
            
            # Based on the timeline, change the color of the boxes (i.e., display them or not)
            if timeline_up[t_indx] == 1:
                square_up.color = 'white'
            else:
                square_up.color = Background_color
            if timeline_bottom[t_indx] == 1:
                square_bottom.color = 'white'
            else:
                square_bottom.color = Background_color
            if timeline_target[t_indx] == 1:
                square_target.color = 'white'
            else:
                square_target.color = Background_color
               
            # TODO: display the proper side based on kwargs['screen_side']
            
            
            # Display boxes
            square_up.draw()
            square_bottom.draw()  
            square_target.draw()
            change_color_fixation(t_begin_exp)
            win.flip()                  # Update screen
            break_flag, key_pressed = escapeCondition()

        return break_flag        
   
    


    ############## Exp. begin ##############

    # Display first set of instructions and wait
    message1 = visual.TextStim(win, pos=[0,0], text=init_mess_1, height=0.001, units='norm')
    message1.size = .1
    message1.draw()
    win.flip()
    event.waitKeys()    #pause until there's a keypress

    ## Scanner trigger wait
    message3 = visual.TextStim(win, pos=[0,0.25], text=scanner_message)
    message3.size = .1
    message3.draw()
    fixation.autoDraw = True
    win.flip()

    if BUTTON_BOX:
        button_state = button_thread.button_state
        while 1:
            if(button_state['state'][-1]==0):
                break
    else:
        event.waitKeys()    #pause until there's a keypress         

    Conditions = {'blinking': apparent_motion, 'baseline': displayFixation, 'localiser': localiser,
                'out-time_begin': apparent_motion, 'in-time_begin': apparent_motion,
                'out-time_late': apparent_motion, 'in-time_late': apparent_motion}

    ## Start runs
    experiment_begin = dt.now()

    break_flag = True
    # Run over the runs
    for i_runs in range(1, N_runs+1):           # Run experiment a 'run' at the time    
        i_run_design = design[design['run'] == i_runs]
        logging.data('')
        logging.data(f'******* RUN {i_runs}/{N_runs} *******')

        # Run over the blocks
        for index, j_block in i_run_design.iterrows():
            logging.data('')
            logging.data(f'Start time: {(dt.now()-experiment_begin).total_seconds()}')
            logging.data(f'Run: {i_runs}, Block: {index + N_runs*(i_runs-1)}')
            logging.data('Condition: %s' % j_block['condition'])
            j_time = float(j_block['t_end'] - j_block['t_start'])
            logging.data('Duration: %s sec.' % j_time)

            # Call the proper function
            break_flag = Conditions[j_block['condition']](win, 
                                    time=j_time, 
                                    break_flag=True, 
                                    **timelines[j_block['condition']], 
                                    timing=j_block['timing'],
                                    t_zero=experiment_begin)
            if break_flag == False: break

        if break_flag == False: break
            

    # Display final message
    message4 = visual.TextStim(win,pos=[0,0.25],text=final_message)
    message4.size = .1
    message4.draw()
    fixation.autoDraw = False
    win.flip()
    core.wait(4)
    
    logging.data('')
    logging.data('***** End *****\n')
    logging.data('Total time spent: %s' % (dt.now() - experiment_begin))
    logging.data('Every frame duration saved in %s' % (path_out+Frames_durations_name))

    return



if __name__ == "__main__":  

    # Dialog box to setup initial info
    all_infos = initialBox()
    if all_infos == None:
        sys.exit(0)
    else:
        operator, BUTTON_BOX, IMPORT_LAST_PARAMETERS, subject_code = all_infos

    # Prepare out folder
    path_out = Dir_save + dt.today().strftime('%Y-%m-%d_%H-%M-%S') + '_' + subject_code
    path_out = createOutFolder(path_out)

    # Set the log module to report warnings to the standard output window
    globalClock = core.Clock()
    logging.setDefaultClock(globalClock)
    logging.console.setLevel(logging.WARNING)
    lastLog=logging.LogFile(path_out+Log_name,level=logging.DATA,filemode='w',encoding='utf8')
    logging.data("------------- " + strftime("%Y-%m-%d %H:%M:%S", gmtime()) + " -------------")
    logging.data(pyschopy_prefs)
    logging.data("Saving in folder: " + path_out)
    logging.data("Initial setup (operator, BUTTON_BOX, IMPORT_LAST_PARAMETERS, subject_code): " + str(all_infos))
    logging.data('***** Starting *****')

    if BUTTON_BOX:
        from button_box_threading import buttonBoxThread
        button_thread = buttonBoxThread(1, "bottom box check")
        button_thread.start()

    # Retrieve the json with parameters if exists
    if IMPORT_LAST_PARAMETERS:
        all_jsons = find_list_of_file(Dir_save, json_filename)
        try:
            subj_json = sorted([i for i in all_jsons if subject_code in i])[-1]
            with open(subj_json, "r") as file:
                data_loaded = json.load(file)

            logging.data('data_loaded: ' + ', '.join([f'{key}: {value}' for key, value in data_loaded.items()]))
            logging.data('From file: ' + subj_json)
        except:
            data_loaded = {}
            logging.data('No json loaded (does not exist or not loadable)')
    else:
        data_loaded = {}
        logging.data('No json loaded (does not exist or not loadable)')

    # Load the csv file with the design matrix
    design = load_csv_design(Csv_name)
    N_runs = len(design['run'].unique())

    # Create the timeline for the experiment
    timelines = {}
    for i in ['in-time', 'out-time']:
        for j in ['begin', 'late']:
            timelines[f'{i}_{j}'] = create_timeline_blocks(AM_inducers_cycles, i, j, block_duration=Block_duration*1000)

    timelines['blinking'] = create_timeline_blocks(AM_inducers_cycles, 'blinking', 'blinking', block_duration=Block_duration*1000)
    timelines['localiser'] = {}
    timelines['baseline'] = {}
    fixation_timeline = create_timeline_fixation(duration=design['t_end'].max())

    # Start window
    my_monitor = monitors.Monitor(name='my_monitor_name')
    my_monitor.setSizePix(Screen_dimensions)
    my_monitor.setWidth(24)
    my_monitor.setDistance(100)
    my_monitor.saveMon()    
    win = visual.Window(Screen_dimensions, monitor="my_monitor_name", units="norm", 
                        fullscr=Fullscreen, color=Background_color, allowStencil=True, screen=1)
    win.recordFrameIntervals = True
    resX,resY = win.size

    # Main stimulation    
    try:
        main_block_design(win, globalClock, data_loaded, timelines, fixation_timeline)
    except Exception as e:
        logging.log(e,level=logging.ERROR)
        
    logging.data('Overall, %i frames were dropped.' % win.nDroppedFrames)
    np.save(path_out+Frames_durations_name,win.frameIntervals[1:])
    
    # Stop buttonBox thread
    if BUTTON_BOX:
        button_thread.stop()

    win.close()
    core.quit()




    # j_block = design.iloc[12]
    # j_time = float(j_block['t_end'] - j_block['t_start'])
    # blinking(win, time=2, break_flag=True)
    # localiser(win, time=5, break_flag=True, timing=2)
    # blinking(win, time=5, break_flag=True, timing=1)
    # displayFixation(win, time=2, break_flag=True)
    # apparent_motion(win, time=3, break_flag=True, **timelines[j_block['condition']])
    # # apparent_motion(win, time=j_time, break_flag=True, **timelines[j_block['condition']])
    # print(j_block['condition'])




    # def blinking(win, time=2, break_flag=True, **kwargs):
    #     ''' 
    #     Display the -blinking- condition (target box only).
    #         :param time: total duration of the block (in sec.), 
    #             which means fixation for 'time' - 'timing' sec.
    #         :param timing: duration of the blinking (in sec.)
    #     '''
        
    #     # Blinking
    #     Blinking_timing = kwargs['timing']
    #     timer_blinking = core.CountdownTimer(Blinking_timing)            
    #     while (timer_blinking.getTime() > 0 and break_flag==True):    
    #         t = globalClock.getTime()
    #         # TODO: blinking 
    #         # if t % Flash_period < Flash_period / 2.0:  # more accurate to count frames
    #         #     square_up.color = 'white'
    #         #     square_bottom.color = 'white'
    #         # else:
    #         #     square_up.color = 'black'
    #         #     square_bottom.color = 'black'

    #         # Display boxes
    #         square_up.draw()
    #         square_bottom.draw()
    #         win.flip()                  # Update screen
    #         break_flag, key_pressed = escapeCondition()

    #     # Baseline
    #     timer_fixation = core.CountdownTimer(time - Blinking_timing)    
    #     while (timer_fixation.getTime() > 0 and break_flag==True):    

    #         fixation.draw()                                        
    #         win.flip()
    #         break_flag, _ = escapeCondition()                  
    #     return break_flag






        # print(win.size)
        # print([i for i in win.size])


# boxes_separation = 400                  # (initial) distance between the two boxes
# distance_from_centre = 300              # (initial) distance between the fixation and the boxes (x-axis only)
# boxes_size = 100                        # (initial) Box size inducers
# box_target_size = 80                        # (initial) Box size target



        # # Fixation
        # if displayFixation(win, fixation_time=Initial_baseline) == False: break

        # if blinking(win, boxes_time=Boxes_time) == False: break
        # if in-time(win, boxes_time=Boxes_time) == False: break
        # if out-time_late(win, boxes_time=Boxes_time) == False: break
        # if apparent_motion(win, boxes_time=Boxes_time) == False: break
        # if out-time_early(win, boxes_time=Boxes_time) == False: break


        # if localiser(win, boxes_time=Boxes_time) == False: break
        # if localiser(win, boxes_time=Boxes_time) == False: break
        # if localiser(win, boxes_time=Boxes_time) == False: break



    # for i in ['in-time', 'out-time']:
    #     for j in ['begin', 'late']:
    #         timeline_up, timeline_bottom, timeline_target = create_timeline_blocks(AM_inducers_cycles, i, j, block_duration=14*1000)
    #         # plot
    #         import matplotlib.pyplot as plt
    #         plt.plot(timeline_up)
    #         plt.plot(timeline_bottom)
    #         plt.plot(timeline_target)
    #         plt.legend(['up', 'bottom', 'target'])
    #         plt.xlabel('Time (ms)')
    #         plt.ylabel('position')
    #         plt.title(f'Timeline timing:{i}, starting:{j}')
    #         plt.show()
    #         # plt.savefig(path_out + f'timeline_timing={i}_starting={j}.png')
    #         plt.close()


            # timelines = create_timeline_blocks(AM_inducers_cycles, 'blinking', 'blinking', block_duration=14*1000)
            # # plot
            # import matplotlib.pyplot as plt
            # plt.plot(timelines['timeline_up'])
            # plt.plot(timelines['timeline_bottom'], linestyle='--')
            # plt.plot(timelines['timeline_target'])
            # plt.legend(['up', 'bottom', 'target'])
            # plt.xlabel('Time (ms)')
            # plt.ylabel('position')
            # plt.title(f'Timeline timing:blinking, starting:blinking')
            # plt.show()
            # # plt.savefig(path_out + f'timeline_timing={i}_starting={j}.png')
            # plt.close()
