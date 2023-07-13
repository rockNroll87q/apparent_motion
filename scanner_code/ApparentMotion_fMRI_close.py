#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
This experiment was created using PsychoPy3 Experiment Builder (v2022.1.4),
    on June 24, 2022, at 10:54
If you publish work using this script the most relevant publication is:

    Peirce J, Gray JR, Simpson S, MacAskill M, Höchenberger R, Sogo H, Kastman E, Lindeløv JK. (2019)
        PsychoPy2: Experiments in behavior made easy Behav Res 51: 195.
        https://doi.org/10.3758/s13428-018-01193-y

"""

import psychopy
psychopy.useVersion('2022')


from psychopy import locale_setup
from psychopy import prefs
from psychopy import sound, gui, visual, core, data, event, logging, clock, colors, layout
from psychopy.constants import (NOT_STARTED, STARTED, PLAYING, PAUSED,
                                STOPPED, FINISHED, PRESSED, RELEASED, FOREVER)

import numpy as np  # whole numpy lib is available, prepend 'np.'
from numpy import (sin, cos, tan, log, log10, pi, average,
                   sqrt, std, deg2rad, rad2deg, linspace, asarray)
from numpy.random import random, randint, normal, shuffle, choice as randchoice
import os  # handy system and path functions
import sys  # to get file system encoding

from psychopy.hardware import keyboard



# Ensure that relative paths start from the same directory as this script
_thisDir = os.path.dirname(os.path.abspath(__file__))
os.chdir(_thisDir)
# Store info about the experiment session
psychopyVersion = '2022.1.4'
expName = 'ApparentMotion_fMRI'  # from the Builder filename that created this script
expInfo = {
    'participant': 'XXX',
    'session': '001',
}
dlg = gui.DlgFromDict(dictionary=expInfo, sortKeys=False, title=expName)
if dlg.OK == False:
    core.quit()  # user pressed cancel
expInfo['date'] = data.getDateStr()  # add a simple timestamp
expInfo['expName'] = expName
expInfo['psychopyVersion'] = psychopyVersion

# Data file name stem = absolute path + name; later add .psyexp, .csv, .log, etc
filename = _thisDir + os.sep + u'data_close/%s_%s_%s' % (expInfo['participant'], expName, expInfo['date'])

# An ExperimentHandler isn't essential but helps with data saving
thisExp = data.ExperimentHandler(name=expName, version='',
    extraInfo=expInfo, runtimeInfo=None,
    originPath='D:\\Mucklis_lab\\AM_fMRI\\MScApparentMotion_fMRI_2306_lastrun.py',
    savePickle=True, saveWideText=True,
    dataFileName=filename)
# save a log file for detail verbose info
logFile = logging.LogFile(filename+'.log', level=logging.DATA)
logging.console.setLevel(logging.WARNING)  # this outputs to the screen, not a file

endExpNow = False  # flag for 'escape' or other condition => quit the exp
frameTolerance = 0.001  # how close to onset before 'same' frame

# Start Code - component code to be run after the window creation

# Setup the Window
win = visual.Window(
    size=[1920, 1080], fullscr=True, screen=1,
    winType='pyglet', allowGUI=False, allowStencil=False,
    monitor='ICE', color=[0.0050, 0.0050, 0.0050], colorSpace='rgb',
    blendMode='avg', useFBO=True,
    units='height')
# store frame rate of monitor if we can measure it
expInfo['frameRate'] = win.getActualFrameRate()
if expInfo['frameRate'] != None:
    frameDur = 1.0 / round(expInfo['frameRate'])
else:
    frameDur = 1.0 / 60.0  # could not measure, so guess
# Setup ioHub
ioConfig = {}
ioSession = ioServer = eyetracker = None

# create a default keyboard (e.g. to check for escape)
defaultKeyboard = keyboard.Keyboard(backend='ptb')

# Initialize components for Routine "Start_Experiment"
Start_ExperimentClock = core.Clock()
text_start = visual.TextStim(win=win, name='text_start',
    text='Starting run...',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0,
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None,
    languageStyle='LTR',
    depth=0.0);
key_resp_start = keyboard.Keyboard()
import random

ITIs = [6 for i in range(7)] + [7 for i in range(8)] + [8 for i in range(8)] + [9 for i in range(7)]
random.shuffle(ITIs)
current_trial = 0


# Initialize components for Routine "FirstInterval"
FirstIntervalClock = core.Clock()
FirstInterval_Cross = visual.ShapeStim(
    win=win, name='FirstInterval_Cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=0.0, interpolate=True)

# Initialize components for Routine "Cycle"
CycleClock = core.Clock()
O2D = visual.Rect(
    win=win, name='O2D',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-1.0, interpolate=True)
TD = visual.Rect(
    win=win, name='TD',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-2.0, interpolate=True)
O1D = visual.Rect(
    win=win, name='O1D',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-3.0, interpolate=True)
O2C = visual.Rect(
    win=win, name='O2C',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-4.0, interpolate=True)
TC = visual.Rect(
    win=win, name='TC',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-5.0, interpolate=True)
O1C = visual.Rect(
    win=win, name='O1C',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-6.0, interpolate=True)
O2B = visual.Rect(
    win=win, name='O2B',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-7.0, interpolate=True)
TB = visual.Rect(
    win=win, name='TB',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-8.0, interpolate=True)
O1B = visual.Rect(
    win=win, name='O1B',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-9.0, interpolate=True)
O2A = visual.Rect(
    win=win, name='O2A',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-10.0, interpolate=True)
TA = visual.Rect(
    win=win, name='TA',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-11.0, interpolate=True)
O1A = visual.Rect(
    win=win, name='O1A',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-12.0, interpolate=True)
O1E = visual.Rect(
    win=win, name='O1E',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-13.0, interpolate=True)
TE = visual.Rect(
    win=win, name='TE',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-14.0, interpolate=True)
O2E = visual.Rect(
    win=win, name='O2E',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-15.0, interpolate=True)
O1F = visual.Rect(
    win=win, name='O1F',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-16.0, interpolate=True)
TF = visual.Rect(
    win=win, name='TF',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-17.0, interpolate=True)
O2F = visual.Rect(
    win=win, name='O2F',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-18.0, interpolate=True)
O1G = visual.Rect(
    win=win, name='O1G',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-19.0, interpolate=True)
TG = visual.Rect(
    win=win, name='TG',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-20.0, interpolate=True)
O2G = visual.Rect(
    win=win, name='O2G',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-21.0, interpolate=True)
O1H = visual.Rect(
    win=win, name='O1H',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-22.0, interpolate=True)
TH = visual.Rect(
    win=win, name='TH',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[0.0000, 0.0000, 0.0000], fillColor='white',
    opacity=1.0, depth=-23.0, interpolate=True)
O2H = visual.Rect(
    win=win, name='O2H',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-24.0, interpolate=True)
O1A_Blink = visual.Rect(
    win=win, name='O1A_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-25.0, interpolate=True)
O2A_Blink = visual.Rect(
    win=win, name='O2A_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-26.0, interpolate=True)
O1B_Blink = visual.Rect(
    win=win, name='O1B_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-27.0, interpolate=True)
O2B_Blink = visual.Rect(
    win=win, name='O2B_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-28.0, interpolate=True)
O1C_Blink = visual.Rect(
    win=win, name='O1C_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-29.0, interpolate=True)
O2C_Blink = visual.Rect(
    win=win, name='O2C_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-30.0, interpolate=True)
O1D_Blink = visual.Rect(
    win=win, name='O1D_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-31.0, interpolate=True)
O2D_Blink = visual.Rect(
    win=win, name='O2D_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-32.0, interpolate=True)
O1E_Blink = visual.Rect(
    win=win, name='O1E_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-33.0, interpolate=True)
O2E_Blink = visual.Rect(
    win=win, name='O2E_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-34.0, interpolate=True)
O1F_Blink = visual.Rect(
    win=win, name='O1F_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-35.0, interpolate=True)
O2F_Blink = visual.Rect(
    win=win, name='O2F_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-36.0, interpolate=True)
O1G_Blink = visual.Rect(
    win=win, name='O1G_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-37.0, interpolate=True)
O2G_Blink = visual.Rect(
    win=win, name='O2G_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-38.0, interpolate=True)
O1H_Blink = visual.Rect(
    win=win, name='O1H_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-39.0, interpolate=True)
O2H_Blink = visual.Rect(
    win=win, name='O2H_Blink',units='deg',
    width=[1.0, 1.0][0], height=[1.0, 1.0][1],
    ori=0.0, pos=[0,0], anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor='white', fillColor='white',
    opacity=1.0, depth=-40.0, interpolate=True)
Cross = visual.ShapeStim(
    win=win, name='Cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-41.0, interpolate=True)

# Initialize components for Routine "MeasurementMasking"
MeasurementMaskingClock = core.Clock()
target_resp_description = visual.TextStim(win=win, name='target_resp_description',
    text='T',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0,
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None,
    languageStyle='LTR',
    depth=-1.0);

# Initialize components for Routine "PostCycle"
PostCycleClock = core.Clock()
PostCycle_Cross = visual.ShapeStim(
    win=win, name='PostCycle_Cross', vertices='cross',
    size=(0.05, 0.05),
    ori=0.0, pos=(0, 0), anchor='center',
    lineWidth=1.0,     colorSpace='rgb',  lineColor=[-1.0000, -1.0000, -1.0000], fillColor=[-1.0000, -1.0000, -1.0000],
    opacity=None, depth=-1.0, interpolate=True)

# Initialize components for Routine "End"
EndClock = core.Clock()
text_end = visual.TextStim(win=win, name='text_end',
    text='Done!',
    font='Open Sans',
    pos=(0, 0), height=0.05, wrapWidth=None, ori=0.0,
    color=[-1.0000, -1.0000, -1.0000], colorSpace='rgb', opacity=None,
    languageStyle='LTR',
    depth=0.0);

# Create some handy timers
globalClock = core.Clock()  # to track the time since experiment started
routineTimer = core.CountdownTimer()  # to track time remaining of each (non-slip) routine

# ------Prepare to start Routine "Start_Experiment"-------
continueRoutine = True
# update component parameters for each repeat
key_resp_start.keys = []
key_resp_start.rt = []
_key_resp_start_allKeys = []
# keep track of which components have finished
Start_ExperimentComponents = [text_start, key_resp_start]
for thisComponent in Start_ExperimentComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
Start_ExperimentClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "Start_Experiment"-------
while continueRoutine:
    # get current time
    t = Start_ExperimentClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=Start_ExperimentClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame

    # *text_start* updates
    if text_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        text_start.frameNStart = frameN  # exact frame index
        text_start.tStart = t  # local t and not account for scr refresh
        text_start.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_start, 'tStartRefresh')  # time at next scr refresh
        text_start.setAutoDraw(True)

    # *key_resp_start* updates
    waitOnFlip = False
    if key_resp_start.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
        # keep track of start time/frame for later
        key_resp_start.frameNStart = frameN  # exact frame index
        key_resp_start.tStart = t  # local t and not account for scr refresh
        key_resp_start.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(key_resp_start, 'tStartRefresh')  # time at next scr refresh
        key_resp_start.status = STARTED
        # keyboard checking is just starting
        waitOnFlip = True
        win.callOnFlip(key_resp_start.clock.reset)  # t=0 on next screen flip
        win.callOnFlip(key_resp_start.clearEvents, eventType='keyboard')  # clear events on next screen flip
    if key_resp_start.status == STARTED and not waitOnFlip:
        theseKeys = key_resp_start.getKeys(keyList=['space'], waitRelease=False)
        _key_resp_start_allKeys.extend(theseKeys)
        if len(_key_resp_start_allKeys):
            key_resp_start.keys = _key_resp_start_allKeys[-1].name  # just the last key pressed
            key_resp_start.rt = _key_resp_start_allKeys[-1].rt
            # a response ends the routine
            continueRoutine = False

    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()

    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in Start_ExperimentComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished

    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "Start_Experiment"-------
for thisComponent in Start_ExperimentComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_start.started', text_start.tStartRefresh)
thisExp.addData('text_start.stopped', text_start.tStopRefresh)
# check responses
if key_resp_start.keys in ['', [], None]:  # No response was made
    key_resp_start.keys = None
thisExp.addData('key_resp_start.keys',key_resp_start.keys)
if key_resp_start.keys != None:  # we had a response
    thisExp.addData('key_resp_start.rt', key_resp_start.rt)
thisExp.addData('key_resp_start.started', key_resp_start.tStartRefresh)
thisExp.addData('key_resp_start.stopped', key_resp_start.tStopRefresh)
thisExp.nextEntry()
# the Routine "Start_Experiment" was not non-slip safe, so reset the non-slip timer
routineTimer.reset()



visual.TextStim(win,'Waiting for trigger...', height=0.05).draw()
win.flip()

from button_box_threading import buttonBoxThread
button_thread = buttonBoxThread(1, "bottom box check")
button_thread.start()
button_state = button_thread.button_state
button_state = button_state['state']


while 1:
    #if(button_state[-1]==0):
    if(button_state[-1]==0):
        break

eventClock = core.Clock()
respFile = open(filename + '.txt','w')

respFile.write('Event\tOnset\n')
print('Event\tOnset')




FirstIntervalClock.reset()
FirstIntervalClock.add(7.5)
FirstInterval_Cross.draw()
win.flip()
while FirstIntervalClock.getTime() < 0:

    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()




# set up handler to look after randomisation of conditions etc
Cycles = data.TrialHandler(nReps=2.0, method='random',
    extraInfo=expInfo, originPath=-1,
    trialList=data.importConditions('ExpConditions_close.xlsx'),
    seed=None, name='Cycles')
thisExp.addLoop(Cycles)  # add the loop to the experiment
thisCycle = Cycles.trialList[0]  # so we can initialise stimuli with some values
# abbreviate parameter names if possible (e.g. rgb = thisCycle.rgb)
if thisCycle != None:
    for paramName in thisCycle:
        exec('{} = thisCycle[paramName]'.format(paramName))

for thisCycle in Cycles:
    currentLoop = Cycles
    # abbreviate parameter names if possible (e.g. rgb = thisCycle.rgb)
    if thisCycle != None:
        for paramName in thisCycle:
            exec('{} = thisCycle[paramName]'.format(paramName))

    # ------Prepare to start Routine "Cycle"-------
    continueRoutine = True
    # update component parameters for each repeat
    print(str(CycleNumber) + '\t' + str(eventClock.getTime()))
    respFile.write(str(CycleNumber) + '\t' + str(eventClock.getTime()) + '\n')
    O2D.setFillColor(OColor)
    O2D.setOpacity(O4Opacity)
    O2D.setContrast(Contrast)
    O2D.setPos(O2Position)
    O2D.setSize(OSize)
    O2D.setLineColor(OColor)
    O2D.setLineWidth(LineWidth)
    TD.setFillColor(TColour)
    TD.setOpacity(T4Opacity)
    TD.setContrast(Contrast)
    TD.setPos(TPosition)
    TD.setSize(TSize)
    TD.setLineWidth(LineWidth)
    O1D.setFillColor(OColor)
    O1D.setOpacity(O4Opacity)
    O1D.setContrast(Contrast)
    O1D.setPos(O1Position)
    O1D.setSize(OSize)
    O1D.setLineColor(OColor)
    O1D.setLineWidth(LineWidth)
    O2C.setFillColor(OColor)
    O2C.setOpacity(O3Opacity)
    O2C.setContrast(Contrast)
    O2C.setPos(O2Position)
    O2C.setSize(OSize)
    O2C.setLineColor(OColor)
    O2C.setLineWidth(LineWidth)
    TC.setFillColor(TColour)
    TC.setOpacity(T3Opacity)
    TC.setContrast(Contrast)
    TC.setPos(TPosition)
    TC.setSize(TSize)
    TC.setLineWidth(LineWidth)
    O1C.setFillColor(OColor)
    O1C.setOpacity(O3Opacity)
    O1C.setContrast(Contrast)
    O1C.setPos(O1Position)
    O1C.setSize(OSize)
    O1C.setLineColor(OColor)
    O1C.setLineWidth(LineWidth)
    O2B.setFillColor(OColor)
    O2B.setOpacity(O2Opacity)
    O2B.setContrast(Contrast)
    O2B.setPos(O2Position)
    O2B.setSize(OSize)
    O2B.setLineColor(OColor)
    O2B.setLineWidth(LineWidth)
    TB.setFillColor(TColour)
    TB.setOpacity(T2Opacity)
    TB.setContrast(Contrast)
    TB.setPos(TPosition)
    TB.setSize(TSize)
    TB.setLineWidth(LineWidth)
    O1B.setFillColor(OColor)
    O1B.setOpacity(O2Opacity)
    O1B.setContrast(Contrast)
    O1B.setPos(O1Position)
    O1B.setSize(OSize)
    O1B.setLineColor(OColor)
    O1B.setLineWidth(LineWidth)
    O2A.setFillColor(OColor)
    O2A.setOpacity(O1Opacity)
    O2A.setContrast(Contrast)
    O2A.setPos(O2Position)
    O2A.setSize(OSize)
    O2A.setLineColor(OColor)
    O2A.setLineWidth(LineWidth)
    TA.setFillColor(TColour)
    TA.setOpacity(T1Opacity)
    TA.setContrast(Contrast)
    TA.setPos(TPosition)
    TA.setSize(TSize)
    TA.setLineWidth(LineWidth)
    O1A.setFillColor(OColor)
    O1A.setOpacity(O1Opacity)
    O1A.setContrast(Contrast)
    O1A.setPos(O1Position)
    O1A.setSize(OSize)
    O1A.setLineColor(OColor)
    O1A.setLineWidth(LineWidth)
    O1E.setFillColor(OColor)
    O1E.setOpacity(O5Opacity)
    O1E.setContrast(Contrast)
    O1E.setPos(O1Position)
    O1E.setSize(OSize)
    O1E.setLineColor(OColor)
    O1E.setLineWidth(LineWidth)
    TE.setFillColor(TColour)
    TE.setOpacity(T5Opacity)
    TE.setContrast(Contrast)
    TE.setPos(TPosition)
    TE.setSize(TSize)
    TE.setLineWidth(LineWidth)
    O2E.setFillColor(OColor)
    O2E.setOpacity(O5Opacity)
    O2E.setContrast(Contrast)
    O2E.setPos(O2Position)
    O2E.setSize(OSize)
    O2E.setLineColor(OColor)
    O2E.setLineWidth(LineWidth)
    O1F.setFillColor(OColor)
    O1F.setOpacity(O6Opacity)
    O1F.setContrast(Contrast)
    O1F.setPos(O1Position)
    O1F.setSize(OSize)
    O1F.setLineColor(OColor)
    O1F.setLineWidth(LineWidth)
    TF.setFillColor(TColour)
    TF.setOpacity(T6Opacity)
    TF.setContrast(Contrast)
    TF.setPos(TPosition)
    TF.setSize(TSize)
    TF.setLineWidth(LineWidth)
    O2F.setFillColor(OColor)
    O2F.setOpacity(O6Opacity)
    O2F.setContrast(Contrast)
    O2F.setPos(O2Position)
    O2F.setSize(OSize)
    O2F.setLineColor(OColor)
    O2F.setLineWidth(LineWidth)
    O1G.setFillColor(OColor)
    O1G.setOpacity(O7Opacity)
    O1G.setContrast(Contrast)
    O1G.setPos(O1Position)
    O1G.setSize(OSize)
    O1G.setLineColor(OColor)
    O1G.setLineWidth(LineWidth)
    TG.setFillColor(TColour)
    TG.setOpacity(T7Opacity)
    TG.setContrast(Contrast)
    TG.setPos(TPosition)
    TG.setSize(TSize)
    TG.setLineWidth(LineWidth)
    O2G.setFillColor(OColor)
    O2G.setOpacity(O7Opacity)
    O2G.setContrast(Contrast)
    O2G.setPos(O2Position)
    O2G.setSize(OSize)
    O2G.setLineColor(OColor)
    O2G.setLineWidth(LineWidth)
    O1H.setFillColor(OColor)
    O1H.setOpacity(O8Opacity)
    O1H.setContrast(Contrast)
    O1H.setPos(O1Position)
    O1H.setSize(OSize)
    O1H.setLineColor(OColor)
    O1H.setLineWidth(LineWidth)
    TH.setFillColor(TColour)
    TH.setOpacity(T8Opacity)
    TH.setContrast(Contrast)
    TH.setPos(TPosition)
    TH.setSize(TSize)
    TH.setLineWidth(LineWidth)
    O2H.setFillColor(OColor)
    O2H.setOpacity(O8Opacity)
    O2H.setContrast(Contrast)
    O2H.setPos(O2Position)
    O2H.setSize(OSize)
    O2H.setLineColor(OColor)
    O2H.setLineWidth(LineWidth)
    O1A_Blink.setFillColor(OColor)
    O1A_Blink.setOpacity(O1Opacity)
    O1A_Blink.setContrast(Contrast)
    O1A_Blink.setPos(O1BlinkPosition)
    O1A_Blink.setSize(OSize)
    O1A_Blink.setLineColor(OColor)
    O1A_Blink.setLineWidth(LineWidth)
    O2A_Blink.setFillColor(OColor)
    O2A_Blink.setOpacity(O1Opacity)
    O2A_Blink.setContrast(Contrast)
    O2A_Blink.setPos(O2BlinkPosition)
    O2A_Blink.setSize(OSize)
    O2A_Blink.setLineColor(OColor)
    O2A_Blink.setLineWidth(LineWidth)
    O1B_Blink.setFillColor(OColor)
    O1B_Blink.setOpacity(O2Opacity)
    O1B_Blink.setContrast(Contrast)
    O1B_Blink.setPos(O1BlinkPosition)
    O1B_Blink.setSize(OSize)
    O1B_Blink.setLineColor(OColor)
    O1B_Blink.setLineWidth(LineWidth)
    O2B_Blink.setFillColor(OColor)
    O2B_Blink.setOpacity(O2Opacity)
    O2B_Blink.setContrast(Contrast)
    O2B_Blink.setPos(O2BlinkPosition)
    O2B_Blink.setSize(OSize)
    O2B_Blink.setLineColor(OColor)
    O2B_Blink.setLineWidth(LineWidth)
    O1C_Blink.setFillColor(OColor)
    O1C_Blink.setOpacity(O3Opacity)
    O1C_Blink.setContrast(Contrast)
    O1C_Blink.setPos(O1BlinkPosition)
    O1C_Blink.setSize(OSize)
    O1C_Blink.setLineColor(OColor)
    O1C_Blink.setLineWidth(LineWidth)
    O2C_Blink.setFillColor(OColor)
    O2C_Blink.setOpacity(O3Opacity)
    O2C_Blink.setContrast(Contrast)
    O2C_Blink.setPos(O2BlinkPosition)
    O2C_Blink.setSize(OSize)
    O2C_Blink.setLineColor(OColor)
    O2C_Blink.setLineWidth(LineWidth)
    O1D_Blink.setFillColor(OColor)
    O1D_Blink.setOpacity(O4Opacity)
    O1D_Blink.setContrast(Contrast)
    O1D_Blink.setPos(O1BlinkPosition)
    O1D_Blink.setSize(OSize)
    O1D_Blink.setLineColor(OColor)
    O1D_Blink.setLineWidth(LineWidth)
    O2D_Blink.setFillColor(OColor)
    O2D_Blink.setOpacity(O4Opacity)
    O2D_Blink.setContrast(Contrast)
    O2D_Blink.setPos(O2BlinkPosition)
    O2D_Blink.setSize(OSize)
    O2D_Blink.setLineColor(OColor)
    O2D_Blink.setLineWidth(LineWidth)
    O1E_Blink.setFillColor(OColor)
    O1E_Blink.setOpacity(O5Opacity)
    O1E_Blink.setContrast(Contrast)
    O1E_Blink.setPos(O1BlinkPosition)
    O1E_Blink.setSize(OSize)
    O1E_Blink.setLineColor(OColor)
    O1E_Blink.setLineWidth(LineWidth)
    O2E_Blink.setFillColor(OColor)
    O2E_Blink.setOpacity(O5Opacity)
    O2E_Blink.setContrast(Contrast)
    O2E_Blink.setPos(O2BlinkPosition)
    O2E_Blink.setSize(OSize)
    O2E_Blink.setLineColor(OColor)
    O2E_Blink.setLineWidth(LineWidth)
    O1F_Blink.setFillColor(OColor)
    O1F_Blink.setOpacity(O6Opacity)
    O1F_Blink.setContrast(Contrast)
    O1F_Blink.setPos(O1BlinkPosition)
    O1F_Blink.setSize(OSize)
    O1F_Blink.setLineColor(OColor)
    O1F_Blink.setLineWidth(LineWidth)
    O2F_Blink.setFillColor(OColor)
    O2F_Blink.setOpacity(O6Opacity)
    O2F_Blink.setContrast(Contrast)
    O2F_Blink.setPos(O2BlinkPosition)
    O2F_Blink.setSize(OSize)
    O2F_Blink.setLineColor(OColor)
    O2F_Blink.setLineWidth(LineWidth)
    O1G_Blink.setFillColor(OColor)
    O1G_Blink.setOpacity(O7Opacity)
    O1G_Blink.setContrast(Contrast)
    O1G_Blink.setPos(O1BlinkPosition)
    O1G_Blink.setSize(OSize)
    O1G_Blink.setLineColor(OColor)
    O1G_Blink.setLineWidth(LineWidth)
    O2G_Blink.setFillColor(OColor)
    O2G_Blink.setOpacity(O7Opacity)
    O2G_Blink.setContrast(Contrast)
    O2G_Blink.setPos(O2BlinkPosition)
    O2G_Blink.setSize(OSize)
    O2G_Blink.setLineColor(OColor)
    O2G_Blink.setLineWidth(LineWidth)
    O1H_Blink.setFillColor(OColor)
    O1H_Blink.setOpacity(O8Opacity)
    O1H_Blink.setContrast(Contrast)
    O1H_Blink.setPos(O1BlinkPosition)
    O1H_Blink.setSize(OSize)
    O1H_Blink.setLineColor(OColor)
    O1H_Blink.setLineWidth(LineWidth)
    O2H_Blink.setFillColor(OColor)
    O2H_Blink.setOpacity(O8Opacity)
    O2H_Blink.setContrast(Contrast)
    O2H_Blink.setPos(O2BlinkPosition)
    O2H_Blink.setSize(OSize)
    O2H_Blink.setLineColor(OColor)
    O2H_Blink.setLineWidth(LineWidth)
    # keep track of which components have finished
    CycleComponents = [O2D, TD, O1D, O2C, TC, O1C, O2B, TB, O1B, O2A, TA, O1A, O1E, TE, O2E, O1F, TF, O2F, O1G, TG, O2G, O1H, TH, O2H, O1A_Blink, O2A_Blink, O1B_Blink, O2B_Blink, O1C_Blink, O2C_Blink, O1D_Blink, O2D_Blink, O1E_Blink, O2E_Blink, O1F_Blink, O2F_Blink, O1G_Blink, O2G_Blink, O1H_Blink, O2H_Blink, Cross]
    for thisComponent in CycleComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    CycleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1

    # -------Run Routine "Cycle"-------
    while continueRoutine:
        # get current time
        t = CycleClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=CycleClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame

        # *O2D* updates
        if O2D.status == NOT_STARTED and tThisFlip >= O24Onset-frameTolerance:
            # keep track of start time/frame for later
            O2D.frameNStart = frameN  # exact frame index
            O2D.tStart = t  # local t and not account for scr refresh
            O2D.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2D, 'tStartRefresh')  # time at next scr refresh
            O2D.setAutoDraw(True)
        if O2D.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2D.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2D.tStop = t  # not accounting for scr refresh
                O2D.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2D, 'tStopRefresh')  # time at next scr refresh
                O2D.setAutoDraw(False)

        # *TD* updates
        if TD.status == NOT_STARTED and tThisFlip >= T4Onset-frameTolerance:
            # keep track of start time/frame for later
            TD.frameNStart = frameN  # exact frame index
            TD.tStart = t  # local t and not account for scr refresh
            TD.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TD, 'tStartRefresh')  # time at next scr refresh
            TD.setAutoDraw(True)
        if TD.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TD.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TD.tStop = t  # not accounting for scr refresh
                TD.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TD, 'tStopRefresh')  # time at next scr refresh
                TD.setAutoDraw(False)

        # *O1D* updates
        if O1D.status == NOT_STARTED and tThisFlip >= O14Onset-frameTolerance:
            # keep track of start time/frame for later
            O1D.frameNStart = frameN  # exact frame index
            O1D.tStart = t  # local t and not account for scr refresh
            O1D.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1D, 'tStartRefresh')  # time at next scr refresh
            O1D.setAutoDraw(True)
        if O1D.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1D.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1D.tStop = t  # not accounting for scr refresh
                O1D.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1D, 'tStopRefresh')  # time at next scr refresh
                O1D.setAutoDraw(False)

        # *O2C* updates
        if O2C.status == NOT_STARTED and tThisFlip >= O23Onset-frameTolerance:
            # keep track of start time/frame for later
            O2C.frameNStart = frameN  # exact frame index
            O2C.tStart = t  # local t and not account for scr refresh
            O2C.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2C, 'tStartRefresh')  # time at next scr refresh
            O2C.setAutoDraw(True)
        if O2C.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2C.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2C.tStop = t  # not accounting for scr refresh
                O2C.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2C, 'tStopRefresh')  # time at next scr refresh
                O2C.setAutoDraw(False)

        # *TC* updates
        if TC.status == NOT_STARTED and tThisFlip >= T3Onset-frameTolerance:
            # keep track of start time/frame for later
            TC.frameNStart = frameN  # exact frame index
            TC.tStart = t  # local t and not account for scr refresh
            TC.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TC, 'tStartRefresh')  # time at next scr refresh
            TC.setAutoDraw(True)
        if TC.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TC.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TC.tStop = t  # not accounting for scr refresh
                TC.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TC, 'tStopRefresh')  # time at next scr refresh
                TC.setAutoDraw(False)

        # *O1C* updates
        if O1C.status == NOT_STARTED and tThisFlip >= O13Onset-frameTolerance:
            # keep track of start time/frame for later
            O1C.frameNStart = frameN  # exact frame index
            O1C.tStart = t  # local t and not account for scr refresh
            O1C.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1C, 'tStartRefresh')  # time at next scr refresh
            O1C.setAutoDraw(True)
        if O1C.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1C.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1C.tStop = t  # not accounting for scr refresh
                O1C.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1C, 'tStopRefresh')  # time at next scr refresh
                O1C.setAutoDraw(False)

        # *O2B* updates
        if O2B.status == NOT_STARTED and tThisFlip >= O22Onset-frameTolerance:
            # keep track of start time/frame for later
            O2B.frameNStart = frameN  # exact frame index
            O2B.tStart = t  # local t and not account for scr refresh
            O2B.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2B, 'tStartRefresh')  # time at next scr refresh
            O2B.setAutoDraw(True)
        if O2B.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2B.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2B.tStop = t  # not accounting for scr refresh
                O2B.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2B, 'tStopRefresh')  # time at next scr refresh
                O2B.setAutoDraw(False)

        # *TB* updates
        if TB.status == NOT_STARTED and tThisFlip >= T2Onset-frameTolerance:
            # keep track of start time/frame for later
            TB.frameNStart = frameN  # exact frame index
            TB.tStart = t  # local t and not account for scr refresh
            TB.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TB, 'tStartRefresh')  # time at next scr refresh
            TB.setAutoDraw(True)
        if TB.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TB.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TB.tStop = t  # not accounting for scr refresh
                TB.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TB, 'tStopRefresh')  # time at next scr refresh
                TB.setAutoDraw(False)

        # *O1B* updates
        if O1B.status == NOT_STARTED and tThisFlip >= O12Onset-frameTolerance:
            # keep track of start time/frame for later
            O1B.frameNStart = frameN  # exact frame index
            O1B.tStart = t  # local t and not account for scr refresh
            O1B.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1B, 'tStartRefresh')  # time at next scr refresh
            O1B.setAutoDraw(True)
        if O1B.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1B.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1B.tStop = t  # not accounting for scr refresh
                O1B.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1B, 'tStopRefresh')  # time at next scr refresh
                O1B.setAutoDraw(False)

        # *O2A* updates
        if O2A.status == NOT_STARTED and tThisFlip >= O21Onset-frameTolerance:
            # keep track of start time/frame for later
            O2A.frameNStart = frameN  # exact frame index
            O2A.tStart = t  # local t and not account for scr refresh
            O2A.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2A, 'tStartRefresh')  # time at next scr refresh
            O2A.setAutoDraw(True)
        if O2A.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2A.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2A.tStop = t  # not accounting for scr refresh
                O2A.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2A, 'tStopRefresh')  # time at next scr refresh
                O2A.setAutoDraw(False)

        # *TA* updates
        if TA.status == NOT_STARTED and tThisFlip >= T1Onset-frameTolerance:
            # keep track of start time/frame for later
            TA.frameNStart = frameN  # exact frame index
            TA.tStart = t  # local t and not account for scr refresh
            TA.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TA, 'tStartRefresh')  # time at next scr refresh
            TA.setAutoDraw(True)
        if TA.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TA.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TA.tStop = t  # not accounting for scr refresh
                TA.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TA, 'tStopRefresh')  # time at next scr refresh
                TA.setAutoDraw(False)

        # *O1A* updates
        if O1A.status == NOT_STARTED and tThisFlip >= O11Onset-frameTolerance:
            # keep track of start time/frame for later
            O1A.frameNStart = frameN  # exact frame index
            O1A.tStart = t  # local t and not account for scr refresh
            O1A.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1A, 'tStartRefresh')  # time at next scr refresh
            O1A.setAutoDraw(True)
        if O1A.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1A.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1A.tStop = t  # not accounting for scr refresh
                O1A.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1A, 'tStopRefresh')  # time at next scr refresh
                O1A.setAutoDraw(False)

        # *O1E* updates
        if O1E.status == NOT_STARTED and tThisFlip >= O15Onset-frameTolerance:
            # keep track of start time/frame for later
            O1E.frameNStart = frameN  # exact frame index
            O1E.tStart = t  # local t and not account for scr refresh
            O1E.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1E, 'tStartRefresh')  # time at next scr refresh
            O1E.setAutoDraw(True)
        if O1E.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1E.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1E.tStop = t  # not accounting for scr refresh
                O1E.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1E, 'tStopRefresh')  # time at next scr refresh
                O1E.setAutoDraw(False)

        # *TE* updates
        if TE.status == NOT_STARTED and tThisFlip >= T5Onset-frameTolerance:
            # keep track of start time/frame for later
            TE.frameNStart = frameN  # exact frame index
            TE.tStart = t  # local t and not account for scr refresh
            TE.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TE, 'tStartRefresh')  # time at next scr refresh
            TE.setAutoDraw(True)
        if TE.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TE.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TE.tStop = t  # not accounting for scr refresh
                TE.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TE, 'tStopRefresh')  # time at next scr refresh
                TE.setAutoDraw(False)

        # *O2E* updates
        if O2E.status == NOT_STARTED and tThisFlip >= O25Onset-frameTolerance:
            # keep track of start time/frame for later
            O2E.frameNStart = frameN  # exact frame index
            O2E.tStart = t  # local t and not account for scr refresh
            O2E.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2E, 'tStartRefresh')  # time at next scr refresh
            O2E.setAutoDraw(True)
        if O2E.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2E.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2E.tStop = t  # not accounting for scr refresh
                O2E.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2E, 'tStopRefresh')  # time at next scr refresh
                O2E.setAutoDraw(False)

        # *O1F* updates
        if O1F.status == NOT_STARTED and tThisFlip >= O16Onset-frameTolerance:
            # keep track of start time/frame for later
            O1F.frameNStart = frameN  # exact frame index
            O1F.tStart = t  # local t and not account for scr refresh
            O1F.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1F, 'tStartRefresh')  # time at next scr refresh
            O1F.setAutoDraw(True)
        if O1F.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1F.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1F.tStop = t  # not accounting for scr refresh
                O1F.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1F, 'tStopRefresh')  # time at next scr refresh
                O1F.setAutoDraw(False)

        # *TF* updates
        if TF.status == NOT_STARTED and tThisFlip >= T6Onset-frameTolerance:
            # keep track of start time/frame for later
            TF.frameNStart = frameN  # exact frame index
            TF.tStart = t  # local t and not account for scr refresh
            TF.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TF, 'tStartRefresh')  # time at next scr refresh
            TF.setAutoDraw(True)
        if TF.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TF.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TF.tStop = t  # not accounting for scr refresh
                TF.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TF, 'tStopRefresh')  # time at next scr refresh
                TF.setAutoDraw(False)

        # *O2F* updates
        if O2F.status == NOT_STARTED and tThisFlip >= O26Onset-frameTolerance:
            # keep track of start time/frame for later
            O2F.frameNStart = frameN  # exact frame index
            O2F.tStart = t  # local t and not account for scr refresh
            O2F.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2F, 'tStartRefresh')  # time at next scr refresh
            O2F.setAutoDraw(True)
        if O2F.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2F.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2F.tStop = t  # not accounting for scr refresh
                O2F.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2F, 'tStopRefresh')  # time at next scr refresh
                O2F.setAutoDraw(False)

        # *O1G* updates
        if O1G.status == NOT_STARTED and tThisFlip >= O17Onset-frameTolerance:
            # keep track of start time/frame for later
            O1G.frameNStart = frameN  # exact frame index
            O1G.tStart = t  # local t and not account for scr refresh
            O1G.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1G, 'tStartRefresh')  # time at next scr refresh
            O1G.setAutoDraw(True)
        if O1G.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1G.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1G.tStop = t  # not accounting for scr refresh
                O1G.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1G, 'tStopRefresh')  # time at next scr refresh
                O1G.setAutoDraw(False)

        # *TG* updates
        if TG.status == NOT_STARTED and tThisFlip >= T7Onset-frameTolerance:
            # keep track of start time/frame for later
            TG.frameNStart = frameN  # exact frame index
            TG.tStart = t  # local t and not account for scr refresh
            TG.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TG, 'tStartRefresh')  # time at next scr refresh
            TG.setAutoDraw(True)
        if TG.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TG.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TG.tStop = t  # not accounting for scr refresh
                TG.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TG, 'tStopRefresh')  # time at next scr refresh
                TG.setAutoDraw(False)

        # *O2G* updates
        if O2G.status == NOT_STARTED and tThisFlip >= O27Onset-frameTolerance:
            # keep track of start time/frame for later
            O2G.frameNStart = frameN  # exact frame index
            O2G.tStart = t  # local t and not account for scr refresh
            O2G.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2G, 'tStartRefresh')  # time at next scr refresh
            O2G.setAutoDraw(True)
        if O2G.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2G.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2G.tStop = t  # not accounting for scr refresh
                O2G.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2G, 'tStopRefresh')  # time at next scr refresh
                O2G.setAutoDraw(False)

        # *O1H* updates
        if O1H.status == NOT_STARTED and tThisFlip >= O18Onset-frameTolerance:
            # keep track of start time/frame for later
            O1H.frameNStart = frameN  # exact frame index
            O1H.tStart = t  # local t and not account for scr refresh
            O1H.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1H, 'tStartRefresh')  # time at next scr refresh
            O1H.setAutoDraw(True)
        if O1H.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1H.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1H.tStop = t  # not accounting for scr refresh
                O1H.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1H, 'tStopRefresh')  # time at next scr refresh
                O1H.setAutoDraw(False)

        # *TH* updates
        if TH.status == NOT_STARTED and tThisFlip >= T8Onset-frameTolerance:
            # keep track of start time/frame for later
            TH.frameNStart = frameN  # exact frame index
            TH.tStart = t  # local t and not account for scr refresh
            TH.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(TH, 'tStartRefresh')  # time at next scr refresh
            TH.setAutoDraw(True)
        if TH.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > TH.tStartRefresh + TDuration-frameTolerance:
                # keep track of stop time/frame for later
                TH.tStop = t  # not accounting for scr refresh
                TH.frameNStop = frameN  # exact frame index
                win.timeOnFlip(TH, 'tStopRefresh')  # time at next scr refresh
                TH.setAutoDraw(False)

        # *O2H* updates
        if O2H.status == NOT_STARTED and tThisFlip >= O28Onset-frameTolerance:
            # keep track of start time/frame for later
            O2H.frameNStart = frameN  # exact frame index
            O2H.tStart = t  # local t and not account for scr refresh
            O2H.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2H, 'tStartRefresh')  # time at next scr refresh
            O2H.setAutoDraw(True)
        if O2H.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2H.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2H.tStop = t  # not accounting for scr refresh
                O2H.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2H, 'tStopRefresh')  # time at next scr refresh
                O2H.setAutoDraw(False)

        # *O1A_Blink* updates
        if O1A_Blink.status == NOT_STARTED and tThisFlip >= O11BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1A_Blink.frameNStart = frameN  # exact frame index
            O1A_Blink.tStart = t  # local t and not account for scr refresh
            O1A_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1A_Blink, 'tStartRefresh')  # time at next scr refresh
            O1A_Blink.setAutoDraw(True)
        if O1A_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1A_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1A_Blink.tStop = t  # not accounting for scr refresh
                O1A_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1A_Blink, 'tStopRefresh')  # time at next scr refresh
                O1A_Blink.setAutoDraw(False)

        # *O2A_Blink* updates
        if O2A_Blink.status == NOT_STARTED and tThisFlip >= O21BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2A_Blink.frameNStart = frameN  # exact frame index
            O2A_Blink.tStart = t  # local t and not account for scr refresh
            O2A_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2A_Blink, 'tStartRefresh')  # time at next scr refresh
            O2A_Blink.setAutoDraw(True)
        if O2A_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2A_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2A_Blink.tStop = t  # not accounting for scr refresh
                O2A_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2A_Blink, 'tStopRefresh')  # time at next scr refresh
                O2A_Blink.setAutoDraw(False)

        # *O1B_Blink* updates
        if O1B_Blink.status == NOT_STARTED and tThisFlip >= O12BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1B_Blink.frameNStart = frameN  # exact frame index
            O1B_Blink.tStart = t  # local t and not account for scr refresh
            O1B_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1B_Blink, 'tStartRefresh')  # time at next scr refresh
            O1B_Blink.setAutoDraw(True)
        if O1B_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1B_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1B_Blink.tStop = t  # not accounting for scr refresh
                O1B_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1B_Blink, 'tStopRefresh')  # time at next scr refresh
                O1B_Blink.setAutoDraw(False)

        # *O2B_Blink* updates
        if O2B_Blink.status == NOT_STARTED and tThisFlip >= O22BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2B_Blink.frameNStart = frameN  # exact frame index
            O2B_Blink.tStart = t  # local t and not account for scr refresh
            O2B_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2B_Blink, 'tStartRefresh')  # time at next scr refresh
            O2B_Blink.setAutoDraw(True)
        if O2B_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2B_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2B_Blink.tStop = t  # not accounting for scr refresh
                O2B_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2B_Blink, 'tStopRefresh')  # time at next scr refresh
                O2B_Blink.setAutoDraw(False)

        # *O1C_Blink* updates
        if O1C_Blink.status == NOT_STARTED and tThisFlip >= O13BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1C_Blink.frameNStart = frameN  # exact frame index
            O1C_Blink.tStart = t  # local t and not account for scr refresh
            O1C_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1C_Blink, 'tStartRefresh')  # time at next scr refresh
            O1C_Blink.setAutoDraw(True)
        if O1C_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1C_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1C_Blink.tStop = t  # not accounting for scr refresh
                O1C_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1C_Blink, 'tStopRefresh')  # time at next scr refresh
                O1C_Blink.setAutoDraw(False)

        # *O2C_Blink* updates
        if O2C_Blink.status == NOT_STARTED and tThisFlip >= O23BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2C_Blink.frameNStart = frameN  # exact frame index
            O2C_Blink.tStart = t  # local t and not account for scr refresh
            O2C_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2C_Blink, 'tStartRefresh')  # time at next scr refresh
            O2C_Blink.setAutoDraw(True)
        if O2C_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2C_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2C_Blink.tStop = t  # not accounting for scr refresh
                O2C_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2C_Blink, 'tStopRefresh')  # time at next scr refresh
                O2C_Blink.setAutoDraw(False)

        # *O1D_Blink* updates
        if O1D_Blink.status == NOT_STARTED and tThisFlip >= O14BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1D_Blink.frameNStart = frameN  # exact frame index
            O1D_Blink.tStart = t  # local t and not account for scr refresh
            O1D_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1D_Blink, 'tStartRefresh')  # time at next scr refresh
            O1D_Blink.setAutoDraw(True)
        if O1D_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1D_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1D_Blink.tStop = t  # not accounting for scr refresh
                O1D_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1D_Blink, 'tStopRefresh')  # time at next scr refresh
                O1D_Blink.setAutoDraw(False)

        # *O2D_Blink* updates
        if O2D_Blink.status == NOT_STARTED and tThisFlip >= O24BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2D_Blink.frameNStart = frameN  # exact frame index
            O2D_Blink.tStart = t  # local t and not account for scr refresh
            O2D_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2D_Blink, 'tStartRefresh')  # time at next scr refresh
            O2D_Blink.setAutoDraw(True)
        if O2D_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2D_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2D_Blink.tStop = t  # not accounting for scr refresh
                O2D_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2D_Blink, 'tStopRefresh')  # time at next scr refresh
                O2D_Blink.setAutoDraw(False)

        # *O1E_Blink* updates
        if O1E_Blink.status == NOT_STARTED and tThisFlip >= O15BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1E_Blink.frameNStart = frameN  # exact frame index
            O1E_Blink.tStart = t  # local t and not account for scr refresh
            O1E_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1E_Blink, 'tStartRefresh')  # time at next scr refresh
            O1E_Blink.setAutoDraw(True)
        if O1E_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1E_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1E_Blink.tStop = t  # not accounting for scr refresh
                O1E_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1E_Blink, 'tStopRefresh')  # time at next scr refresh
                O1E_Blink.setAutoDraw(False)

        # *O2E_Blink* updates
        if O2E_Blink.status == NOT_STARTED and tThisFlip >= O25BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2E_Blink.frameNStart = frameN  # exact frame index
            O2E_Blink.tStart = t  # local t and not account for scr refresh
            O2E_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2E_Blink, 'tStartRefresh')  # time at next scr refresh
            O2E_Blink.setAutoDraw(True)
        if O2E_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2E_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2E_Blink.tStop = t  # not accounting for scr refresh
                O2E_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2E_Blink, 'tStopRefresh')  # time at next scr refresh
                O2E_Blink.setAutoDraw(False)

        # *O1F_Blink* updates
        if O1F_Blink.status == NOT_STARTED and tThisFlip >= O16BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1F_Blink.frameNStart = frameN  # exact frame index
            O1F_Blink.tStart = t  # local t and not account for scr refresh
            O1F_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1F_Blink, 'tStartRefresh')  # time at next scr refresh
            O1F_Blink.setAutoDraw(True)
        if O1F_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1F_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1F_Blink.tStop = t  # not accounting for scr refresh
                O1F_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1F_Blink, 'tStopRefresh')  # time at next scr refresh
                O1F_Blink.setAutoDraw(False)

        # *O2F_Blink* updates
        if O2F_Blink.status == NOT_STARTED and tThisFlip >= O26BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2F_Blink.frameNStart = frameN  # exact frame index
            O2F_Blink.tStart = t  # local t and not account for scr refresh
            O2F_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2F_Blink, 'tStartRefresh')  # time at next scr refresh
            O2F_Blink.setAutoDraw(True)
        if O2F_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2F_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2F_Blink.tStop = t  # not accounting for scr refresh
                O2F_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2F_Blink, 'tStopRefresh')  # time at next scr refresh
                O2F_Blink.setAutoDraw(False)

        # *O1G_Blink* updates
        if O1G_Blink.status == NOT_STARTED and tThisFlip >= O17BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1G_Blink.frameNStart = frameN  # exact frame index
            O1G_Blink.tStart = t  # local t and not account for scr refresh
            O1G_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1G_Blink, 'tStartRefresh')  # time at next scr refresh
            O1G_Blink.setAutoDraw(True)
        if O1G_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1G_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1G_Blink.tStop = t  # not accounting for scr refresh
                O1G_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1G_Blink, 'tStopRefresh')  # time at next scr refresh
                O1G_Blink.setAutoDraw(False)

        # *O2G_Blink* updates
        if O2G_Blink.status == NOT_STARTED and tThisFlip >= O27BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2G_Blink.frameNStart = frameN  # exact frame index
            O2G_Blink.tStart = t  # local t and not account for scr refresh
            O2G_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2G_Blink, 'tStartRefresh')  # time at next scr refresh
            O2G_Blink.setAutoDraw(True)
        if O2G_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2G_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2G_Blink.tStop = t  # not accounting for scr refresh
                O2G_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2G_Blink, 'tStopRefresh')  # time at next scr refresh
                O2G_Blink.setAutoDraw(False)

        # *O1H_Blink* updates
        if O1H_Blink.status == NOT_STARTED and tThisFlip >= O18BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O1H_Blink.frameNStart = frameN  # exact frame index
            O1H_Blink.tStart = t  # local t and not account for scr refresh
            O1H_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O1H_Blink, 'tStartRefresh')  # time at next scr refresh
            O1H_Blink.setAutoDraw(True)
        if O1H_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O1H_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O1H_Blink.tStop = t  # not accounting for scr refresh
                O1H_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O1H_Blink, 'tStopRefresh')  # time at next scr refresh
                O1H_Blink.setAutoDraw(False)

        # *O2H_Blink* updates
        if O2H_Blink.status == NOT_STARTED and tThisFlip >= O28BlinkOnset-frameTolerance:
            # keep track of start time/frame for later
            O2H_Blink.frameNStart = frameN  # exact frame index
            O2H_Blink.tStart = t  # local t and not account for scr refresh
            O2H_Blink.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(O2H_Blink, 'tStartRefresh')  # time at next scr refresh
            O2H_Blink.setAutoDraw(True)
        if O2H_Blink.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > O2H_Blink.tStartRefresh + ODuration-frameTolerance:
                # keep track of stop time/frame for later
                O2H_Blink.tStop = t  # not accounting for scr refresh
                O2H_Blink.frameNStop = frameN  # exact frame index
                win.timeOnFlip(O2H_Blink, 'tStopRefresh')  # time at next scr refresh
                O2H_Blink.setAutoDraw(False)

        # *Cross* updates
        if Cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            Cross.frameNStart = frameN  # exact frame index
            Cross.tStart = t  # local t and not account for scr refresh
            Cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(Cross, 'tStartRefresh')  # time at next scr refresh
            Cross.setAutoDraw(True)
        if Cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > Cross.tStartRefresh + CrossDuration-frameTolerance:
                # keep track of stop time/frame for later
                Cross.tStop = t  # not accounting for scr refresh
                Cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(Cross, 'tStopRefresh')  # time at next scr refresh
                Cross.setAutoDraw(False)

        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()

        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in CycleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished

        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()

    # -------Ending Routine "Cycle"-------
    for thisComponent in CycleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Cycles.addData('O2D.started', O2D.tStartRefresh)
    Cycles.addData('O2D.stopped', O2D.tStopRefresh)
    Cycles.addData('TD.started', TD.tStartRefresh)
    Cycles.addData('TD.stopped', TD.tStopRefresh)
    Cycles.addData('O1D.started', O1D.tStartRefresh)
    Cycles.addData('O1D.stopped', O1D.tStopRefresh)
    Cycles.addData('O2C.started', O2C.tStartRefresh)
    Cycles.addData('O2C.stopped', O2C.tStopRefresh)
    Cycles.addData('TC.started', TC.tStartRefresh)
    Cycles.addData('TC.stopped', TC.tStopRefresh)
    Cycles.addData('O1C.started', O1C.tStartRefresh)
    Cycles.addData('O1C.stopped', O1C.tStopRefresh)
    Cycles.addData('O2B.started', O2B.tStartRefresh)
    Cycles.addData('O2B.stopped', O2B.tStopRefresh)
    Cycles.addData('TB.started', TB.tStartRefresh)
    Cycles.addData('TB.stopped', TB.tStopRefresh)
    Cycles.addData('O1B.started', O1B.tStartRefresh)
    Cycles.addData('O1B.stopped', O1B.tStopRefresh)
    Cycles.addData('O2A.started', O2A.tStartRefresh)
    Cycles.addData('O2A.stopped', O2A.tStopRefresh)
    Cycles.addData('TA.started', TA.tStartRefresh)
    Cycles.addData('TA.stopped', TA.tStopRefresh)
    Cycles.addData('O1A.started', O1A.tStartRefresh)
    Cycles.addData('O1A.stopped', O1A.tStopRefresh)
    Cycles.addData('O1E.started', O1E.tStartRefresh)
    Cycles.addData('O1E.stopped', O1E.tStopRefresh)
    Cycles.addData('TE.started', TE.tStartRefresh)
    Cycles.addData('TE.stopped', TE.tStopRefresh)
    Cycles.addData('O2E.started', O2E.tStartRefresh)
    Cycles.addData('O2E.stopped', O2E.tStopRefresh)
    Cycles.addData('O1F.started', O1F.tStartRefresh)
    Cycles.addData('O1F.stopped', O1F.tStopRefresh)
    Cycles.addData('TF.started', TF.tStartRefresh)
    Cycles.addData('TF.stopped', TF.tStopRefresh)
    Cycles.addData('O2F.started', O2F.tStartRefresh)
    Cycles.addData('O2F.stopped', O2F.tStopRefresh)
    Cycles.addData('O1G.started', O1G.tStartRefresh)
    Cycles.addData('O1G.stopped', O1G.tStopRefresh)
    Cycles.addData('TG.started', TG.tStartRefresh)
    Cycles.addData('TG.stopped', TG.tStopRefresh)
    Cycles.addData('O2G.started', O2G.tStartRefresh)
    Cycles.addData('O2G.stopped', O2G.tStopRefresh)
    Cycles.addData('O1H.started', O1H.tStartRefresh)
    Cycles.addData('O1H.stopped', O1H.tStopRefresh)
    Cycles.addData('TH.started', TH.tStartRefresh)
    Cycles.addData('TH.stopped', TH.tStopRefresh)
    Cycles.addData('O2H.started', O2H.tStartRefresh)
    Cycles.addData('O2H.stopped', O2H.tStopRefresh)
    Cycles.addData('O1A_Blink.started', O1A_Blink.tStartRefresh)
    Cycles.addData('O1A_Blink.stopped', O1A_Blink.tStopRefresh)
    Cycles.addData('O2A_Blink.started', O2A_Blink.tStartRefresh)
    Cycles.addData('O2A_Blink.stopped', O2A_Blink.tStopRefresh)
    Cycles.addData('O1B_Blink.started', O1B_Blink.tStartRefresh)
    Cycles.addData('O1B_Blink.stopped', O1B_Blink.tStopRefresh)
    Cycles.addData('O2B_Blink.started', O2B_Blink.tStartRefresh)
    Cycles.addData('O2B_Blink.stopped', O2B_Blink.tStopRefresh)
    Cycles.addData('O1C_Blink.started', O1C_Blink.tStartRefresh)
    Cycles.addData('O1C_Blink.stopped', O1C_Blink.tStopRefresh)
    Cycles.addData('O2C_Blink.started', O2C_Blink.tStartRefresh)
    Cycles.addData('O2C_Blink.stopped', O2C_Blink.tStopRefresh)
    Cycles.addData('O1D_Blink.started', O1D_Blink.tStartRefresh)
    Cycles.addData('O1D_Blink.stopped', O1D_Blink.tStopRefresh)
    Cycles.addData('O2D_Blink.started', O2D_Blink.tStartRefresh)
    Cycles.addData('O2D_Blink.stopped', O2D_Blink.tStopRefresh)
    Cycles.addData('O1E_Blink.started', O1E_Blink.tStartRefresh)
    Cycles.addData('O1E_Blink.stopped', O1E_Blink.tStopRefresh)
    Cycles.addData('O2E_Blink.started', O2E_Blink.tStartRefresh)
    Cycles.addData('O2E_Blink.stopped', O2E_Blink.tStopRefresh)
    Cycles.addData('O1F_Blink.started', O1F_Blink.tStartRefresh)
    Cycles.addData('O1F_Blink.stopped', O1F_Blink.tStopRefresh)
    Cycles.addData('O2F_Blink.started', O2F_Blink.tStartRefresh)
    Cycles.addData('O2F_Blink.stopped', O2F_Blink.tStopRefresh)
    Cycles.addData('O1G_Blink.started', O1G_Blink.tStartRefresh)
    Cycles.addData('O1G_Blink.stopped', O1G_Blink.tStopRefresh)
    Cycles.addData('O2G_Blink.started', O2G_Blink.tStartRefresh)
    Cycles.addData('O2G_Blink.stopped', O2G_Blink.tStopRefresh)
    Cycles.addData('O1H_Blink.started', O1H_Blink.tStartRefresh)
    Cycles.addData('O1H_Blink.stopped', O1H_Blink.tStopRefresh)
    Cycles.addData('O2H_Blink.started', O2H_Blink.tStartRefresh)
    Cycles.addData('O2H_Blink.stopped', O2H_Blink.tStopRefresh)
    Cycles.addData('Cross.started', Cross.tStartRefresh)
    Cycles.addData('Cross.stopped', Cross.tStopRefresh)
    # the Routine "Cycle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()








    target_resp_description.draw()
    win.flip()
    responded = False
    MeasurementMaskingClock.reset()
    MeasurementMaskingClock.add(3)

    while MeasurementMaskingClock.getTime() < 0:


        if responded == False:
            resp_yes = button_state[1]==1
            resp_no = button_state[2]==1

        if resp_yes:
            responded = True
            resp_yes = False
            print('resp_yes\t' + str(eventClock.getTime()))
            respFile.write('resp_yes\t' + str(eventClock.getTime()) + '\n')

        if resp_no:
            responded = True
            resp_no = False
            print('resp_no\t' + str(eventClock.getTime()))
            respFile.write('resp_no\t' + str(eventClock.getTime()) + '\n')

        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()





    # ------Prepare to start Routine "PostCycle"-------
    continueRoutine = True
    # update component parameters for each repeat
    ITI = ITIs[current_trial]
    current_trial +=1
    # keep track of which components have finished
    PostCycleComponents = [PostCycle_Cross]
    for thisComponent in PostCycleComponents:
        thisComponent.tStart = None
        thisComponent.tStop = None
        thisComponent.tStartRefresh = None
        thisComponent.tStopRefresh = None
        if hasattr(thisComponent, 'status'):
            thisComponent.status = NOT_STARTED
    # reset timers
    t = 0
    _timeToFirstFrame = win.getFutureFlipTime(clock="now")
    PostCycleClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
    frameN = -1

    # -------Run Routine "PostCycle"-------
    while continueRoutine:
        # get current time
        t = PostCycleClock.getTime()
        tThisFlip = win.getFutureFlipTime(clock=PostCycleClock)
        tThisFlipGlobal = win.getFutureFlipTime(clock=None)
        frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
        # update/draw components on each frame

        # *PostCycle_Cross* updates
        if PostCycle_Cross.status == NOT_STARTED and tThisFlip >= 0.0-frameTolerance:
            # keep track of start time/frame for later
            PostCycle_Cross.frameNStart = frameN  # exact frame index
            PostCycle_Cross.tStart = t  # local t and not account for scr refresh
            PostCycle_Cross.tStartRefresh = tThisFlipGlobal  # on global time
            win.timeOnFlip(PostCycle_Cross, 'tStartRefresh')  # time at next scr refresh
            PostCycle_Cross.setAutoDraw(True)
        if PostCycle_Cross.status == STARTED:
            # is it time to stop? (based on global clock, using actual start)
            if tThisFlipGlobal > PostCycle_Cross.tStartRefresh + ITI-frameTolerance:
                # keep track of stop time/frame for later
                PostCycle_Cross.tStop = t  # not accounting for scr refresh
                PostCycle_Cross.frameNStop = frameN  # exact frame index
                win.timeOnFlip(PostCycle_Cross, 'tStopRefresh')  # time at next scr refresh
                PostCycle_Cross.setAutoDraw(False)

        # check for quit (typically the Esc key)
        if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
            core.quit()

        # check if all components have finished
        if not continueRoutine:  # a component has requested a forced-end of Routine
            break
        continueRoutine = False  # will revert to True if at least one component still running
        for thisComponent in PostCycleComponents:
            if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
                continueRoutine = True
                break  # at least one component has not yet finished

        # refresh the screen
        if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
            win.flip()

    # -------Ending Routine "PostCycle"-------
    for thisComponent in PostCycleComponents:
        if hasattr(thisComponent, "setAutoDraw"):
            thisComponent.setAutoDraw(False)
    Cycles.addData('PostCycle_Cross.started', PostCycle_Cross.tStartRefresh)
    Cycles.addData('PostCycle_Cross.stopped', PostCycle_Cross.tStopRefresh)
    # the Routine "PostCycle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset()
    thisExp.nextEntry()

# completed 2.0 repeats of 'Cycles'

# get names of stimulus parameters
if Cycles.trialList in ([], [None], None):
    params = []
else:
    params = Cycles.trialList[0].keys()
# save data for this loop
Cycles.saveAsText(filename + 'Cycles.csv', delim=',',
    stimOut=params,
    dataOut=['n','all_mean','all_std', 'all_raw'])

# ------Prepare to start Routine "End"-------
continueRoutine = True
routineTimer.add(5.000000)
# update component parameters for each repeat
print(str(eventClock.getTime()))

button_thread.stop()
respFile.close()
# keep track of which components have finished
EndComponents = [text_end]
for thisComponent in EndComponents:
    thisComponent.tStart = None
    thisComponent.tStop = None
    thisComponent.tStartRefresh = None
    thisComponent.tStopRefresh = None
    if hasattr(thisComponent, 'status'):
        thisComponent.status = NOT_STARTED
# reset timers
t = 0
_timeToFirstFrame = win.getFutureFlipTime(clock="now")
EndClock.reset(-_timeToFirstFrame)  # t0 is time of first possible flip
frameN = -1

# -------Run Routine "End"-------
while continueRoutine and routineTimer.getTime() > 0:
    # get current time
    t = EndClock.getTime()
    tThisFlip = win.getFutureFlipTime(clock=EndClock)
    tThisFlipGlobal = win.getFutureFlipTime(clock=None)
    frameN = frameN + 1  # number of completed frames (so 0 is the first frame)
    # update/draw components on each frame

    # *text_end* updates
    if text_end.status == NOT_STARTED and tThisFlip >= 0-frameTolerance:
        # keep track of start time/frame for later
        text_end.frameNStart = frameN  # exact frame index
        text_end.tStart = t  # local t and not account for scr refresh
        text_end.tStartRefresh = tThisFlipGlobal  # on global time
        win.timeOnFlip(text_end, 'tStartRefresh')  # time at next scr refresh
        text_end.setAutoDraw(True)
    if text_end.status == STARTED:
        # is it time to stop? (based on global clock, using actual start)
        if tThisFlipGlobal > text_end.tStartRefresh + 5-frameTolerance:
            # keep track of stop time/frame for later
            text_end.tStop = t  # not accounting for scr refresh
            text_end.frameNStop = frameN  # exact frame index
            win.timeOnFlip(text_end, 'tStopRefresh')  # time at next scr refresh
            text_end.setAutoDraw(False)

    # check for quit (typically the Esc key)
    if endExpNow or defaultKeyboard.getKeys(keyList=["escape"]):
        core.quit()

    # check if all components have finished
    if not continueRoutine:  # a component has requested a forced-end of Routine
        break
    continueRoutine = False  # will revert to True if at least one component still running
    for thisComponent in EndComponents:
        if hasattr(thisComponent, "status") and thisComponent.status != FINISHED:
            continueRoutine = True
            break  # at least one component has not yet finished

    # refresh the screen
    if continueRoutine:  # don't flip if this routine is over or we'll get a blank screen
        win.flip()

# -------Ending Routine "End"-------
for thisComponent in EndComponents:
    if hasattr(thisComponent, "setAutoDraw"):
        thisComponent.setAutoDraw(False)
thisExp.addData('text_end.started', text_end.tStartRefresh)
thisExp.addData('text_end.stopped', text_end.tStopRefresh)

# Flip one final time so any remaining win.callOnFlip()
# and win.timeOnFlip() tasks get executed before quitting
win.flip()

# these shouldn't be strictly necessary (should auto-save)
thisExp.saveAsWideText(filename+'.csv', delim='auto')
thisExp.saveAsPickle(filename)
logging.flush()
# make sure everything is closed down
if eyetracker:
    eyetracker.setConnectionState(False)
thisExp.abort()  # or data files will save again on exit
win.close()
core.quit()
