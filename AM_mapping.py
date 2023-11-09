#!/usr/bin/env python
# -*- coding: utf-8 -*-

"""
Created on Wednesday - May 10 2023, 14:33:12

@author: Michele Svanera, University of Glasgow

 
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
Frames_durations_name = 'frames_durations.npy'
json_filename = 'last_parameters.json'

# Messages
init_mess_1 = "Please follow displayed instructions. Press a key to continue.."
scanner_message = "Waiting for the scanner..."
final_message = "This is the end of the experiment."

# Boxes 
Flash_period = 0.2                      # seconds for one B-W cycle (ie 1/Hz)
# (8,-2.5), (8,-6), (8,6)
boxes_separation = 6                  # (initial) distance between the two boxes
distance_from_centre = 5              # (initial) distance between the fixation and the boxes (x-axis only)
boxes_size = (1.2, 1.2)                        # (initial) Box size inducers
target_size = (1., 1.)                        # (initial) Box size target
target_pos = -2.5/2
Flash_period = 0.2                              # seconds for one B-W cycle (ie 1/Hz)
Increment_position = 0.05                 # % of move the boxes with the keyboard arrows
Increment_size = 1.1                    # % increase/decrease of size

# Timing
Boxes_time = 15                         # sec.
Fixation_time = 2                      # sec.
N_blocks = 4                            # #-repetitions of Fixation+Boxes



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
    dlg.addField('Debug mode:', True)
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


def main_block_design(win,globalClock, data_loaded):

    ############## Stimuli preparation ##############

    # Fixation cross
    fixation = visual.ShapeStim(win,vertices=((0,-1),(0,1),(0,0),(-1,0),(1,0)), lineWidth=4, units="pix",
        size=(20,20),closeShape=False,lineColor='white')
    
    # Square Boxes
    square_up = visual.Rect(win, size=boxes_size, pos=(+distance_from_centre, 0 + boxes_separation/2), color='white', units='deg')#units="pix",)
    square_bottom = visual.Rect(win, size=boxes_size, pos=(+distance_from_centre, 0 - boxes_separation/2), color='white', units='deg')#units="pix",)
    square_target = visual.Rect(win, size=target_size, pos=(+distance_from_centre, target_pos), color='white', units='deg')#units="pix",)
    
    # Restore old parameters, if needed/available
    display_options = DisplayBoxesSettings()
    try:
        square_up.pos = data_loaded['square_up.pos']
        square_bottom.pos = data_loaded['square_bottom.pos']
        square_target.pos = data_loaded['square_target.pos']
        square_up.size = data_loaded['square_up.size']
        square_bottom.size = data_loaded['square_bottom.size']
        square_target.size = data_loaded['square_target.size']
        display_options.show_boxes = data_loaded['show_boxes']
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
    

    # DEBUG stimuli
    if DEBUG_MODE:
        fps_text = visual.TextStim(win, units='norm', height=0.05,pos=(-0.93, +0.93), text='starting...', color='yellow')    
        fps_text.autoDraw = True
        
        button_pressed_string = visual.TextStim(win, text = u"Key pressed: ", units='norm', height=0.05,
                                             pos=(0, +0.93), color='yellow')
        button_pressed_string.autoDraw = True        

        options_string = visual.TextStim(win, text = u"Key pressed: ", units='norm', height=0.05,
                                             pos=(-0.85, -0.80), color='yellow')
        options_string.text = 'arrows: box pos\n"u","i": box separation\n"h","j": box size\n"b": boxes on/off\n"t": target on/off'   
        options_string.autoDraw = True     


    ## Display just fixation
    def displayFixation(win,fixation_time=2,break_flag=True):

        timer_fixation = core.CountdownTimer(fixation_time)    
        while (timer_fixation.getTime() > 0 and break_flag==True):    

            fixation.draw()                                        
            win.flip()                  # Update screen
            break_flag, _ = escapeCondition()                  
        return break_flag


    ## Display just boxes
    def displayBoxes(win, boxes_time=2, break_flag=True):
        
        timer_boxes = core.CountdownTimer(boxes_time)    
        last_fps_update = 0
        last_key_pressed = ''
        
        while (timer_boxes.getTime() > 0 and break_flag==True):    
            t = globalClock.getTime()

            if t % Flash_period < Flash_period / 2.0:  # more accurate to count frames
                square_up.color = 'white'
                square_bottom.color = 'white'
                square_target.color = 'white'
            else:
                square_up.color = 'black'
                square_bottom.color = 'black'
                square_target.color = 'black'

            if display_options.show_boxes:
                square_up.draw()
                square_bottom.draw()  
            if display_options.show_target:
                square_target.draw()
            win.flip()                  # Update screen
            break_flag, key_pressed = escapeCondition()

            # Change position of the boxes + fixation with ['up', 'down', 'left', 'right']
            if 'up' in key_pressed:
                square_up.pos       = [square_up.pos[0], square_up.pos[1] + Increment_position]
                square_bottom.pos   = [square_bottom.pos[0], square_bottom.pos[1] + Increment_position]
                square_target.pos   = [square_target.pos[0], square_target.pos[1] + Increment_position]
                # fixation.pos        = [fixation.pos[0], fixation.pos[1] + Increment_position]
            if 'down' in key_pressed:
                square_up.pos       = [square_up.pos[0], square_up.pos[1] - Increment_position]
                square_bottom.pos   = [square_bottom.pos[0], square_bottom.pos[1] - Increment_position]
                square_target.pos   = [square_target.pos[0], square_target.pos[1] - Increment_position]
                # fixation.pos        = [fixation.pos[0], fixation.pos[1] - Increment_position]
            if 'left' in key_pressed:
                square_up.pos       = [square_up.pos[0] - Increment_position, square_up.pos[1]]
                square_bottom.pos   = [square_bottom.pos[0] - Increment_position, square_bottom.pos[1]]
                square_target.pos   = [square_target.pos[0] - Increment_position, square_target.pos[1]]
                # fixation.pos        = [fixation.pos[0] - Increment_position, fixation.pos[1]]
            if 'right' in key_pressed:
                square_up.pos       = [square_up.pos[0] + Increment_position, square_up.pos[1]]
                square_bottom.pos   = [square_bottom.pos[0] + Increment_position, square_bottom.pos[1]]
                square_target.pos   = [square_target.pos[0] + Increment_position, square_target.pos[1]]
                # fixation.pos        = [fixation.pos[0] + Increment_position, fixation.pos[1]]

            # Change the boxes_separation with ['u', 'i']
            if 'u' in key_pressed:
                square_up.pos       = [square_up.pos[0], square_up.pos[1] + Increment_position]
                square_bottom.pos   = [square_bottom.pos[0], square_bottom.pos[1] - Increment_position]
                square_target.pos   = [square_target.pos[0], square_target.pos[1] - Increment_position]
            if 'i' in key_pressed:
                square_up.pos       = [square_up.pos[0], square_up.pos[1] - Increment_position]
                square_bottom.pos   = [square_bottom.pos[0], square_bottom.pos[1] + Increment_position]
                square_target.pos   = [square_target.pos[0], square_target.pos[1] + Increment_position]

            # Change the boxes size with ['h', 'j']
            if 'h' in key_pressed:
                square_up.size      *= Increment_size
                square_bottom.size  *= Increment_size
                square_target.size  *= Increment_size
            if 'j' in key_pressed:
                square_up.size      /= Increment_size
                square_bottom.size  /= Increment_size
                square_target.size  /= Increment_size
            
            # Make the target disappear or re-appear
            if 'b' in key_pressed:
                display_options.swap_boxes()
            if 't' in key_pressed:
                display_options.swap_target()

            if DEBUG_MODE:
                if t - last_fps_update > Fps_update_rate:         # update the fps text every second
                    fps_text.text = "%.2f fps" % win.fps()
                    last_fps_update += 1         

                key_pressed_str = (' - '.join(key_pressed))
                if last_key_pressed != key_pressed_str and key_pressed_str != '':
                    last_key_pressed = key_pressed_str
                    button_pressed_string.text = 'Key pressed: ' + last_key_pressed

        return break_flag
   



    ############## Exp. begin ##############

    # Display first set of instructions and wait
    message1 = visual.TextStim(win, pos=[0,0],text=init_mess_1)
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


    ## Start runs
    experiment_begin = dt.now()
    for i_block in range(N_blocks):           # Run experiment a 'block' at the time    
        
        # Fixation
        if displayFixation(win, fixation_time=Fixation_time) == False: break
        if displayBoxes(win, boxes_time=Boxes_time) == False: break

        # Save a json with all the parameters
        data_to_save = {"square_up.pos": list(square_up.pos), "square_up.size": list(square_up.size), 
                        "square_bottom.pos": list(square_bottom.pos), "square_bottom.size": list(square_bottom.size),
                        "square_target.pos": list(square_target.pos), "square_target.size": list(square_target.size), 
                        "show_boxes": display_options.show_boxes, "show_target": display_options.show_target,
                        "fixation.pos": list(fixation.pos), "win.size": list([str(i) for i in win.size])
                        }
        with open(opj(path_out, json_filename), "w") as file:
            json.dump(data_to_save, file, indent=4)
        logging.data('data_saved: ' + ', '.join([f'{key}: {value}' for key, value in data_to_save.items()]))



    # Display final message
    message4 = visual.TextStim(win,pos=[0,0.25],text=final_message)
    message4.size = .1
    message4.draw()
    fixation.autoDraw = False
    win.flip()
    core.wait(4)
    
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
        operator, DEBUG_MODE, BUTTON_BOX, IMPORT_LAST_PARAMETERS, subject_code = all_infos

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
    logging.data("Initial setup (operator, DEBUG_MODE, BUTTON_BOX, IMPORT_LAST_PARAMETERS, subject_code): " + str(all_infos))
    logging.data('***** Starting *****')

    if BUTTON_BOX:
        from button_box_threading import buttonBoxThread
        button_thread = buttonBoxThread(1, "bottom box check")
        button_thread.start()

    # Retrieve the json with parameters if exists
    if IMPORT_LAST_PARAMETERS:
        all_jsons = find_list_of_file(Dir_save, json_filename)
        subj_json = sorted([i for i in all_jsons if subject_code in i])[-1]
        try:
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
        main_block_design(win,globalClock, data_loaded)
    except Exception as e:
        logging.log(e,level=logging.ERROR)
        
    logging.data('Overall, %i frames were dropped.' % win.nDroppedFrames)
    np.save(path_out+Frames_durations_name,win.frameIntervals[1:])
    
    # Stop buttonBox thread
    if BUTTON_BOX:
        button_thread.stop()

    win.close()
    core.quit()




        # print(win.size)
        # print([i for i in win.size])


# boxes_separation = 400                  # (initial) distance between the two boxes
# distance_from_centre = 300              # (initial) distance between the fixation and the boxes (x-axis only)
# boxes_size = 100                        # (initial) Box size inducers
# box_target_size = 80                        # (initial) Box size target