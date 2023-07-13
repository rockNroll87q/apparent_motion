/********************************* 
 * Experimentapparentmotion Test *
 *********************************/


// store info about the experiment session:
let expName = 'ExperimentApparentMotion';  // from the Builder filename that created this script
let expInfo = {'participant': '', 'session': '001'};

// Start code blocks for 'Before Experiment'
// init psychoJS:
const psychoJS = new PsychoJS({
  debug: true
});

// open window:
psychoJS.openWindow({
  fullscr: true,
  color: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
  units: 'deg',
  waitBlanking: true
});
// schedule the experiment:
psychoJS.schedule(psychoJS.gui.DlgFromDict({
  dictionary: expInfo,
  title: expName
}));

const flowScheduler = new Scheduler(psychoJS);
const dialogCancelScheduler = new Scheduler(psychoJS);
psychoJS.scheduleCondition(function() { return (psychoJS.gui.dialogComponent.button === 'OK'); }, flowScheduler, dialogCancelScheduler);

// flowScheduler gets run if the participants presses OK
flowScheduler.add(updateInfo); // add timeStamp
flowScheduler.add(experimentInit);
flowScheduler.add(IntroRoutineBegin());
flowScheduler.add(IntroRoutineEachFrame());
flowScheduler.add(IntroRoutineEnd());
flowScheduler.add(Study_DescriptionRoutineBegin());
flowScheduler.add(Study_DescriptionRoutineEachFrame());
flowScheduler.add(Study_DescriptionRoutineEnd());
flowScheduler.add(Study_Description_2RoutineBegin());
flowScheduler.add(Study_Description_2RoutineEachFrame());
flowScheduler.add(Study_Description_2RoutineEnd());
flowScheduler.add(Test_Description_1RoutineBegin());
flowScheduler.add(Test_Description_1RoutineEachFrame());
flowScheduler.add(Test_Description_1RoutineEnd());
flowScheduler.add(Test_Description_2RoutineBegin());
flowScheduler.add(Test_Description_2RoutineEachFrame());
flowScheduler.add(Test_Description_2RoutineEnd());
flowScheduler.add(Test_Description_3RoutineBegin());
flowScheduler.add(Test_Description_3RoutineEachFrame());
flowScheduler.add(Test_Description_3RoutineEnd());
flowScheduler.add(Test_Description_4RoutineBegin());
flowScheduler.add(Test_Description_4RoutineEachFrame());
flowScheduler.add(Test_Description_4RoutineEnd());
flowScheduler.add(Test_MeasurementMaskingRoutineBegin());
flowScheduler.add(Test_MeasurementMaskingRoutineEachFrame());
flowScheduler.add(Test_MeasurementMaskingRoutineEnd());
flowScheduler.add(Test_Description_5RoutineBegin());
flowScheduler.add(Test_Description_5RoutineEachFrame());
flowScheduler.add(Test_Description_5RoutineEnd());
flowScheduler.add(Start_ExperimentRoutineBegin());
flowScheduler.add(Start_ExperimentRoutineEachFrame());
flowScheduler.add(Start_ExperimentRoutineEnd());
const trialsLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(trialsLoopBegin(trialsLoopScheduler));
flowScheduler.add(trialsLoopScheduler);
flowScheduler.add(trialsLoopEnd);
flowScheduler.add(IntercycleBreak1RoutineBegin());
flowScheduler.add(IntercycleBreak1RoutineEachFrame());
flowScheduler.add(IntercycleBreak1RoutineEnd());
const LoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(LoopLoopBegin(LoopLoopScheduler));
flowScheduler.add(LoopLoopScheduler);
flowScheduler.add(LoopLoopEnd);
flowScheduler.add(IntercycleBreak2RoutineBegin());
flowScheduler.add(IntercycleBreak2RoutineEachFrame());
flowScheduler.add(IntercycleBreak2RoutineEnd());
const FirstLoopLoopScheduler = new Scheduler(psychoJS);
flowScheduler.add(FirstLoopLoopBegin(FirstLoopLoopScheduler));
flowScheduler.add(FirstLoopLoopScheduler);
flowScheduler.add(FirstLoopLoopEnd);
flowScheduler.add(EndRoutineBegin());
flowScheduler.add(EndRoutineEachFrame());
flowScheduler.add(EndRoutineEnd());
flowScheduler.add(quitPsychoJS, '', true);

// quit if user presses Cancel in dialog box:
dialogCancelScheduler.add(quitPsychoJS, '', false);

psychoJS.start({
  expName: expName,
  expInfo: expInfo,
  resources: [
    {'name': 'NaturalScene2.jpg', 'path': 'NaturalScene2.jpg'},
    {'name': 'ExpExplanation.jpg', 'path': 'ExpExplanation.jpg'},
    {'name': 'NaturalScene1.jpg', 'path': 'NaturalScene1.jpg'},
    {'name': 'NaturalScene4.jpg', 'path': 'NaturalScene4.jpg'},
    {'name': 'NaturalScene3.jpg', 'path': 'NaturalScene3.jpg'},
    {'name': 'ExpConditions.xlsx', 'path': 'ExpConditions.xlsx'}
  ]
});

psychoJS.experimentLogger.setLevel(core.Logger.ServerLevel.EXP);


var frameDur;
async function updateInfo() {
  expInfo['date'] = util.MonotonicClock.getDateStr();  // add a simple timestamp
  expInfo['expName'] = expName;
  expInfo['psychopyVersion'] = '2022.1.4';
  expInfo['OS'] = window.navigator.platform;

  psychoJS.experiment.dataFileName = (("." + "/") + `data/${expInfo["participant"]}_${expName}_${expInfo["date"]}`);

  // store frame rate of monitor if we can measure it successfully
  expInfo['frameRate'] = psychoJS.window.getActualFrameRate();
  if (typeof expInfo['frameRate'] !== 'undefined')
    frameDur = 1.0 / Math.round(expInfo['frameRate']);
  else
    frameDur = 1.0 / 60.0; // couldn't get a reliable measure so guess

  // add info from the URL:
  util.addInfoFromUrl(expInfo);
  psychoJS.setRedirectUrls('https://forms.office.com/r/xq6aPyCyRc', '');

  return Scheduler.Event.NEXT;
}


var IntroClock;
var text_5;
var key_resp_2;
var Study_DescriptionClock;
var IntroText1_2;
var key_resp_6;
var Study_Description_2Clock;
var image_4;
var key_resp_14;
var Test_Description_1Clock;
var Test_7;
var key_resp_9;
var Test_Description_2Clock;
var Test;
var key_resp_10;
var O2_Test_2;
var O1_Test_2;
var text_7;
var Cross_Test2_2;
var Test_Description_3Clock;
var O2_Test2_2;
var Target_Test_2;
var O1_Test2_2;
var Cross_Test_2;
var Test_10;
var key_resp_8;
var Test_Description_4Clock;
var O1_Test3_2;
var O2_Test3_2;
var O1_Test4_2;
var Target_Test2_2;
var O2_Test4_2;
var motion_resp_description_test_2;
var motion_resp_test_2;
var Cross_Test3_2;
var Test_MeasurementMaskingClock;
var target_resp_description_test;
var target_resp_test;
var Test_Description_5Clock;
var text_6;
var key_resp_3;
var Start_ExperimentClock;
var Test_8;
var key_resp_11;
var PreCycleClock;
var PreCycle_Cross;
var CycleClock;
var O2D;
var TD;
var O1D;
var O2C;
var TC;
var O1C;
var O2B;
var TB;
var O1B;
var O2A;
var TA;
var O1A;
var O1E;
var TE;
var O2E;
var O1F;
var TF;
var O2F;
var O1G;
var TG;
var O2G;
var O1H;
var TH;
var O2H;
var O1A_Blink;
var O2A_Blink;
var O1B_Blink;
var O2B_Blink;
var O1C_Blink;
var O2C_Blink;
var O1D_Blink;
var O2D_Blink;
var O1E_Blink;
var O2E_Blink;
var O1F_Blink;
var O2F_Blink;
var O1G_Blink;
var O2G_Blink;
var O1H_Blink;
var O2H_Blink;
var Cross;
var MeasurementMotionClock;
var motion_resp_description;
var motion_resp;
var MeasurementMaskingClock;
var target_resp_description;
var target_resp;
var IntercycleBreak1Clock;
var BreakAnnouncement_2;
var image_2;
var image_3;
var text_2;
var key_resp_7;
var IntercycleBreak2Clock;
var BreakAnnouncement;
var image;
var image_5;
var text_4;
var key_resp_13;
var EndClock;
var text_9;
var key_resp;
var globalClock;
var routineTimer;
async function experimentInit() {
  // Initialize components for Routine "Intro"
  IntroClock = new util.Clock();
  text_5 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_5',
    text: 'Welcome to this study. \n\nPlease press the spacebar to start the experiment.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Study_Description"
  Study_DescriptionClock = new util.Clock();
  IntroText1_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'IntroText1_2',
    text: "Before we begin, let us run through a brief introduction. You are free to withdraw from your participation in this study at any time.\n\nDuring the experiment, please look at the central fixation cross whenever it appears in the centre.\n\nIn each sequence, two objects will vertically flash in succession from one corner to another corner of the screen. Such a sequence could go from upper left to lower left corner, or from lower right to upper right corner. Sometimes this presentation may look like there is motion between the dots.\n\nYou will also sometimes see a third object between the two objects on some sequences. This object is called target.\n\nA cycle can be one sequence, or it can feature multiple sequences in succession.\n\nAll this may sound a bit abstract and confusing, but your task throughout the experiment is actually really simple: fixate on the central fixation cross and respond to the questions at the end of each cycle. You will be asked if you saw motion, and you will also be asked if you saw a target between the two objects. That's it. The whole process will repeat multiple times.\n\nPlease press the spacebar to continue.",
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 18.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: 0.0 
  });
  
  key_resp_6 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Study_Description_2"
  Study_Description_2Clock = new util.Clock();
  image_4 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_4', units : 'pix', 
    image : 'ExpExplanation.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [1000, 1000],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : 0.0 
  });
  key_resp_14 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Test_Description_1"
  Test_Description_1Clock = new util.Clock();
  Test_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test_7',
    text: 'Let us run through a quick example of the two objects flashing in succession without any target. Note that for illustrative purposes, this sequence is slowed down.\n\nPlease press the spacebar to continue.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_9 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Test_Description_2"
  Test_Description_2Clock = new util.Clock();
  Test = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test',
    text: 'Now you will see a sequence with a target between the two corner objects. Yet again, this sequence is slowed down.\n\nPlease press the spacebar to continue.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_10 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  O2_Test_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O2_Test_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, 270],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  O1_Test_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O1_Test_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, (- 270)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  text_7 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_7',
    text: 'Start fixating on the central fixation cross.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 80], height: 20.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: 1.0,
    depth: -4.0 
  });
  
  Cross_Test2_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Cross_Test2_2', units : 'pix', 
    vertices: 'cross', size:[30, 30],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -5, interpolate: true,
  });
  
  // Initialize components for Routine "Test_Description_3"
  Test_Description_3Clock = new util.Clock();
  O2_Test2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O2_Test2_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [(- 600), (- 270)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  Target_Test_2 = new visual.Rect ({
    win: psychoJS.window, name: 'Target_Test_2', units : 'pix', 
    width: [45, 45][0], height: [45, 45][1],
    ori: 0.0, pos: [(- 600), (- 90)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  O1_Test2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O1_Test2_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [(- 600), 270],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  Cross_Test_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Cross_Test_2', units : 'pix', 
    vertices: 'cross', size:[30, 30],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -3, interpolate: true,
  });
  
  Test_10 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test_10',
    text: 'Great! Let us now try an entire cycle in real-time.\n\nSimply look at the fixation cross. After the sequences, you will be asked about whether you saw a target and perceived a kind of motion between the two squares. When it comes to motion perception, please keep in mind that there is no "correct" response, just trust your intuition and indicate what you think is right.\n\nPlease press the spacebar to continue.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -4.0 
  });
  
  key_resp_8 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Test_Description_4"
  Test_Description_4Clock = new util.Clock();
  O1_Test3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O1_Test3_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, (- 270)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  O2_Test3_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O2_Test3_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, 270],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  O1_Test4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O1_Test4_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, (- 270)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  Target_Test2_2 = new visual.Rect ({
    win: psychoJS.window, name: 'Target_Test2_2', units : 'pix', 
    width: [45, 45][0], height: [45, 45][1],
    ori: 0.0, pos: [600, (- 90)],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  O2_Test4_2 = new visual.Rect ({
    win: psychoJS.window, name: 'O2_Test4_2', units : 'pix', 
    width: [60, 60][0], height: [60, 60][1],
    ori: 0.0, pos: [600, 270],
    lineWidth: 2.0, lineColor: new util.Color([0.0, 0.0, 0.0]),
    fillColor: new util.Color([1.0, 1.0, 1.0]),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  motion_resp_description_test_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'motion_resp_description_test_2',
    text: 'Did you perceive a motion between the objects?\n\n1 = Yes\n2 = No',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -5.0 
  });
  
  motion_resp_test_2 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  Cross_Test3_2 = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Cross_Test3_2', units : 'pix', 
    vertices: 'cross', size:[30, 30],
    ori: 0.0, pos: [0, 0],
    lineWidth: 2.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -7, interpolate: true,
  });
  
  // Initialize components for Routine "Test_MeasurementMasking"
  Test_MeasurementMaskingClock = new util.Clock();
  target_resp_description_test = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_resp_description_test',
    text: 'Did you see a third object between the two objects?\n\n1 = Yes\n2 = No',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  target_resp_test = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Test_Description_5"
  Test_Description_5Clock = new util.Clock();
  text_6 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_6',
    text: 'Great. This is basically how the entire experiment is going to be like. There will be three blocks and two breaks.\n\nEverything understood?\n\nPlease press the spacebar to continue.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_3 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "Start_Experiment"
  Start_ExperimentClock = new util.Clock();
  Test_8 = new visual.TextStim({
    win: psychoJS.window,
    name: 'Test_8',
    text: 'The experiment will now begin. Please fix the fixation cross in the center.\n\nPlease press the spacebar to start the experiment.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp_11 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "PreCycle"
  PreCycleClock = new util.Clock();
  PreCycle_Cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'PreCycle_Cross', units : 'pix', 
    vertices: 'cross', size:[30, 30],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: 0, interpolate: true,
  });
  
  // Initialize components for Routine "Cycle"
  CycleClock = new util.Clock();
  O2D = new visual.Rect ({
    win: psychoJS.window, name: 'O2D', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: 0, interpolate: true,
  });
  
  TD = new visual.Rect ({
    win: psychoJS.window, name: 'TD', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -1, interpolate: true,
  });
  
  O1D = new visual.Rect ({
    win: psychoJS.window, name: 'O1D', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -2, interpolate: true,
  });
  
  O2C = new visual.Rect ({
    win: psychoJS.window, name: 'O2C', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -3, interpolate: true,
  });
  
  TC = new visual.Rect ({
    win: psychoJS.window, name: 'TC', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -4, interpolate: true,
  });
  
  O1C = new visual.Rect ({
    win: psychoJS.window, name: 'O1C', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -5, interpolate: true,
  });
  
  O2B = new visual.Rect ({
    win: psychoJS.window, name: 'O2B', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -6, interpolate: true,
  });
  
  TB = new visual.Rect ({
    win: psychoJS.window, name: 'TB', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -7, interpolate: true,
  });
  
  O1B = new visual.Rect ({
    win: psychoJS.window, name: 'O1B', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -8, interpolate: true,
  });
  
  O2A = new visual.Rect ({
    win: psychoJS.window, name: 'O2A', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -9, interpolate: true,
  });
  
  TA = new visual.Rect ({
    win: psychoJS.window, name: 'TA', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -10, interpolate: true,
  });
  
  O1A = new visual.Rect ({
    win: psychoJS.window, name: 'O1A', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -11, interpolate: true,
  });
  
  O1E = new visual.Rect ({
    win: psychoJS.window, name: 'O1E', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -12, interpolate: true,
  });
  
  TE = new visual.Rect ({
    win: psychoJS.window, name: 'TE', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -13, interpolate: true,
  });
  
  O2E = new visual.Rect ({
    win: psychoJS.window, name: 'O2E', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -14, interpolate: true,
  });
  
  O1F = new visual.Rect ({
    win: psychoJS.window, name: 'O1F', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -15, interpolate: true,
  });
  
  TF = new visual.Rect ({
    win: psychoJS.window, name: 'TF', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -16, interpolate: true,
  });
  
  O2F = new visual.Rect ({
    win: psychoJS.window, name: 'O2F', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -17, interpolate: true,
  });
  
  O1G = new visual.Rect ({
    win: psychoJS.window, name: 'O1G', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -18, interpolate: true,
  });
  
  TG = new visual.Rect ({
    win: psychoJS.window, name: 'TG', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -19, interpolate: true,
  });
  
  O2G = new visual.Rect ({
    win: psychoJS.window, name: 'O2G', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -20, interpolate: true,
  });
  
  O1H = new visual.Rect ({
    win: psychoJS.window, name: 'O1H', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -21, interpolate: true,
  });
  
  TH = new visual.Rect ({
    win: psychoJS.window, name: 'TH', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -22, interpolate: true,
  });
  
  O2H = new visual.Rect ({
    win: psychoJS.window, name: 'O2H', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -23, interpolate: true,
  });
  
  O1A_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1A_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -24, interpolate: true,
  });
  
  O2A_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2A_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -25, interpolate: true,
  });
  
  O1B_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1B_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -26, interpolate: true,
  });
  
  O2B_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2B_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -27, interpolate: true,
  });
  
  O1C_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1C_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -28, interpolate: true,
  });
  
  O2C_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2C_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -29, interpolate: true,
  });
  
  O1D_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1D_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -30, interpolate: true,
  });
  
  O2D_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2D_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -31, interpolate: true,
  });
  
  O1E_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1E_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -32, interpolate: true,
  });
  
  O2E_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2E_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -33, interpolate: true,
  });
  
  O1F_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1F_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -34, interpolate: true,
  });
  
  O2F_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2F_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -35, interpolate: true,
  });
  
  O1G_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1G_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -36, interpolate: true,
  });
  
  O2G_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2G_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -37, interpolate: true,
  });
  
  O1H_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O1H_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -38, interpolate: true,
  });
  
  O2H_Blink = new visual.Rect ({
    win: psychoJS.window, name: 'O2H_Blink', units : 'pix', 
    width: [1.0, 1.0][0], height: [1.0, 1.0][1],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 0.055), (- 0.055), (- 0.055)]),
    fillColor: new util.Color('white'),
    opacity: 1.0, depth: -39, interpolate: true,
  });
  
  Cross = new visual.ShapeStim ({
    win: psychoJS.window, name: 'Cross', units : 'pix', 
    vertices: 'cross', size:[30, 30],
    ori: 0.0, pos: [0, 0],
    lineWidth: 1.0, lineColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    fillColor: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),
    opacity: undefined, depth: -40, interpolate: true,
  });
  
  // Initialize components for Routine "MeasurementMotion"
  MeasurementMotionClock = new util.Clock();
  motion_resp_description = new visual.TextStim({
    win: psychoJS.window,
    name: 'motion_resp_description',
    text: 'Did you perceive motion between the two objects?\n\n1 = Yes, I did\n2 = No, I did not',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  motion_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "MeasurementMasking"
  MeasurementMaskingClock = new util.Clock();
  target_resp_description = new visual.TextStim({
    win: psychoJS.window,
    name: 'target_resp_description',
    text: 'Did you see a target?\n\n1 = Yes, I did\n2 = No, I did not',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  target_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IntercycleBreak1"
  IntercycleBreak1Clock = new util.Clock();
  BreakAnnouncement_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'BreakAnnouncement_2',
    text: 'Great work, thank you!\n\nLet us take a break. \n\nJust sit, relax, and look at the following two images of natural scenes.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image_2 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_2', units : 'pix', 
    image : 'NaturalScene1.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_3 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_3', units : 'pix', 
    image : 'NaturalScene2.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_2 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_2',
    text: 'Press the spacebar to start the second block whenever you are ready.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_7 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "IntercycleBreak2"
  IntercycleBreak2Clock = new util.Clock();
  BreakAnnouncement = new visual.TextStim({
    win: psychoJS.window,
    name: 'BreakAnnouncement',
    text: 'Great work, thank you!\n\nLet us take another break. \n\nJust sit, relax, and look at the following two images of natural scenes.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  image = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image', units : 'pix', 
    image : 'NaturalScene3.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -1.0 
  });
  image_5 = new visual.ImageStim({
    win : psychoJS.window,
    name : 'image_5', units : 'pix', 
    image : 'NaturalScene4.jpg', mask : undefined,
    ori : 0.0, pos : [0, 0], size : [500, 500],
    color : new util.Color([1,1,1]), opacity : undefined,
    flipHoriz : false, flipVert : false,
    texRes : 128.0, interpolate : true, depth : -2.0 
  });
  text_4 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_4',
    text: 'Press the spacebar to start the last block whenever you are ready.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: -3.0 
  });
  
  key_resp_13 = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Initialize components for Routine "End"
  EndClock = new util.Clock();
  text_9 = new visual.TextStim({
    win: psychoJS.window,
    name: 'text_9',
    text: 'Thank you. This is the end of the study.\n\nNext, a form will open to provide you a quick debrief. Press the spacebar to access this form.',
    font: 'Open Sans',
    units: 'pix', 
    pos: [0, 0], height: 30.0,  wrapWidth: undefined, ori: 0.0,
    color: new util.Color([(- 1.0), (- 1.0), (- 1.0)]),  opacity: undefined,
    depth: 0.0 
  });
  
  key_resp = new core.Keyboard({psychoJS: psychoJS, clock: new util.Clock(), waitForStart: true});
  
  // Create some handy timers
  globalClock = new util.Clock();  // to track the time since experiment started
  routineTimer = new util.CountdownTimer();  // to track time remaining of each (non-slip) routine
  
  return Scheduler.Event.NEXT;
}


var t;
var frameN;
var continueRoutine;
var _key_resp_2_allKeys;
var IntroComponents;
function IntroRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Intro'-------
    t = 0;
    IntroClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_2.keys = undefined;
    key_resp_2.rt = undefined;
    _key_resp_2_allKeys = [];
    // keep track of which components have finished
    IntroComponents = [];
    IntroComponents.push(text_5);
    IntroComponents.push(key_resp_2);
    
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntroRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Intro'-------
    // get current time
    t = IntroClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_5* updates
    if (t >= 0.0 && text_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_5.tStart = t;  // (not accounting for frame time here)
      text_5.frameNStart = frameN;  // exact frame index
      
      text_5.setAutoDraw(true);
    }

    
    // *key_resp_2* updates
    if (t >= 0.0 && key_resp_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_2.tStart = t;  // (not accounting for frame time here)
      key_resp_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_2.clearEvents(); });
    }

    if (key_resp_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_2.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_2_allKeys = _key_resp_2_allKeys.concat(theseKeys);
      if (_key_resp_2_allKeys.length > 0) {
        key_resp_2.keys = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].name;  // just the last key pressed
        key_resp_2.rt = _key_resp_2_allKeys[_key_resp_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntroComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntroRoutineEnd() {
  return async function () {
    //------Ending Routine 'Intro'-------
    IntroComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_2.corr, level);
    }
    psychoJS.experiment.addData('key_resp_2.keys', key_resp_2.keys);
    if (typeof key_resp_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_2.rt', key_resp_2.rt);
        routineTimer.reset();
        }
    
    key_resp_2.stop();
    // the Routine "Intro" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_6_allKeys;
var Study_DescriptionComponents;
function Study_DescriptionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Study_Description'-------
    t = 0;
    Study_DescriptionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_6.keys = undefined;
    key_resp_6.rt = undefined;
    _key_resp_6_allKeys = [];
    // keep track of which components have finished
    Study_DescriptionComponents = [];
    Study_DescriptionComponents.push(IntroText1_2);
    Study_DescriptionComponents.push(key_resp_6);
    
    Study_DescriptionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Study_DescriptionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Study_Description'-------
    // get current time
    t = Study_DescriptionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *IntroText1_2* updates
    if (t >= 0.0 && IntroText1_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      IntroText1_2.tStart = t;  // (not accounting for frame time here)
      IntroText1_2.frameNStart = frameN;  // exact frame index
      
      IntroText1_2.setAutoDraw(true);
    }

    
    // *key_resp_6* updates
    if (t >= 0.0 && key_resp_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_6.tStart = t;  // (not accounting for frame time here)
      key_resp_6.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_6.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_6.clearEvents(); });
    }

    if (key_resp_6.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_6.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_6_allKeys = _key_resp_6_allKeys.concat(theseKeys);
      if (_key_resp_6_allKeys.length > 0) {
        key_resp_6.keys = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].name;  // just the last key pressed
        key_resp_6.rt = _key_resp_6_allKeys[_key_resp_6_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Study_DescriptionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Study_DescriptionRoutineEnd() {
  return async function () {
    //------Ending Routine 'Study_Description'-------
    Study_DescriptionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_6.corr, level);
    }
    psychoJS.experiment.addData('key_resp_6.keys', key_resp_6.keys);
    if (typeof key_resp_6.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_6.rt', key_resp_6.rt);
        routineTimer.reset();
        }
    
    key_resp_6.stop();
    // the Routine "Study_Description" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_14_allKeys;
var Study_Description_2Components;
function Study_Description_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Study_Description_2'-------
    t = 0;
    Study_Description_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_14.keys = undefined;
    key_resp_14.rt = undefined;
    _key_resp_14_allKeys = [];
    // keep track of which components have finished
    Study_Description_2Components = [];
    Study_Description_2Components.push(image_4);
    Study_Description_2Components.push(key_resp_14);
    
    Study_Description_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Study_Description_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Study_Description_2'-------
    // get current time
    t = Study_Description_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *image_4* updates
    if (t >= 0.0 && image_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_4.tStart = t;  // (not accounting for frame time here)
      image_4.frameNStart = frameN;  // exact frame index
      
      image_4.setAutoDraw(true);
    }

    
    // *key_resp_14* updates
    if (t >= 0.0 && key_resp_14.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_14.tStart = t;  // (not accounting for frame time here)
      key_resp_14.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_14.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_14.clearEvents(); });
    }

    if (key_resp_14.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_14.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_14_allKeys = _key_resp_14_allKeys.concat(theseKeys);
      if (_key_resp_14_allKeys.length > 0) {
        key_resp_14.keys = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].name;  // just the last key pressed
        key_resp_14.rt = _key_resp_14_allKeys[_key_resp_14_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Study_Description_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Study_Description_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Study_Description_2'-------
    Study_Description_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_14.corr, level);
    }
    psychoJS.experiment.addData('key_resp_14.keys', key_resp_14.keys);
    if (typeof key_resp_14.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_14.rt', key_resp_14.rt);
        routineTimer.reset();
        }
    
    key_resp_14.stop();
    // the Routine "Study_Description_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_9_allKeys;
var Test_Description_1Components;
function Test_Description_1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Description_1'-------
    t = 0;
    Test_Description_1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_9.keys = undefined;
    key_resp_9.rt = undefined;
    _key_resp_9_allKeys = [];
    // keep track of which components have finished
    Test_Description_1Components = [];
    Test_Description_1Components.push(Test_7);
    Test_Description_1Components.push(key_resp_9);
    
    Test_Description_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Test_Description_1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Description_1'-------
    // get current time
    t = Test_Description_1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test_7* updates
    if (t >= 0 && Test_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test_7.tStart = t;  // (not accounting for frame time here)
      Test_7.frameNStart = frameN;  // exact frame index
      
      Test_7.setAutoDraw(true);
    }

    
    // *key_resp_9* updates
    if (t >= 0 && key_resp_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_9.tStart = t;  // (not accounting for frame time here)
      key_resp_9.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_9.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_9.clearEvents(); });
    }

    if (key_resp_9.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_9.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_9_allKeys = _key_resp_9_allKeys.concat(theseKeys);
      if (_key_resp_9_allKeys.length > 0) {
        key_resp_9.keys = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].name;  // just the last key pressed
        key_resp_9.rt = _key_resp_9_allKeys[_key_resp_9_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_Description_1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_Description_1RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Description_1'-------
    Test_Description_1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_9.corr, level);
    }
    psychoJS.experiment.addData('key_resp_9.keys', key_resp_9.keys);
    if (typeof key_resp_9.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_9.rt', key_resp_9.rt);
        routineTimer.reset();
        }
    
    key_resp_9.stop();
    // the Routine "Test_Description_1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_10_allKeys;
var Test_Description_2Components;
function Test_Description_2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Description_2'-------
    t = 0;
    Test_Description_2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_10.keys = undefined;
    key_resp_10.rt = undefined;
    _key_resp_10_allKeys = [];
    // keep track of which components have finished
    Test_Description_2Components = [];
    Test_Description_2Components.push(Test);
    Test_Description_2Components.push(key_resp_10);
    Test_Description_2Components.push(O2_Test_2);
    Test_Description_2Components.push(O1_Test_2);
    Test_Description_2Components.push(text_7);
    Test_Description_2Components.push(Cross_Test2_2);
    
    Test_Description_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


var frameRemains;
function Test_Description_2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Description_2'-------
    // get current time
    t = Test_Description_2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test* updates
    if (t >= 4.5 && Test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test.tStart = t;  // (not accounting for frame time here)
      Test.frameNStart = frameN;  // exact frame index
      
      Test.setAutoDraw(true);
    }

    
    // *key_resp_10* updates
    if (t >= 4.5 && key_resp_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_10.tStart = t;  // (not accounting for frame time here)
      key_resp_10.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_10.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_10.clearEvents(); });
    }

    if (key_resp_10.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_10.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_10_allKeys = _key_resp_10_allKeys.concat(theseKeys);
      if (_key_resp_10_allKeys.length > 0) {
        key_resp_10.keys = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].name;  // just the last key pressed
        key_resp_10.rt = _key_resp_10_allKeys[_key_resp_10_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *O2_Test_2* updates
    if (t >= 4 && O2_Test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2_Test_2.tStart = t;  // (not accounting for frame time here)
      O2_Test_2.frameNStart = frameN;  // exact frame index
      
      O2_Test_2.setAutoDraw(true);
    }

    frameRemains = 4 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2_Test_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2_Test_2.setAutoDraw(false);
    }
    
    // *O1_Test_2* updates
    if (t >= 3.5 && O1_Test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1_Test_2.tStart = t;  // (not accounting for frame time here)
      O1_Test_2.frameNStart = frameN;  // exact frame index
      
      O1_Test_2.setAutoDraw(true);
    }

    frameRemains = 3.5 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1_Test_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1_Test_2.setAutoDraw(false);
    }
    
    // *text_7* updates
    if (t >= 0 && text_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_7.tStart = t;  // (not accounting for frame time here)
      text_7.frameNStart = frameN;  // exact frame index
      
      text_7.setAutoDraw(true);
    }

    frameRemains = 0 + 3 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (text_7.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      text_7.setAutoDraw(false);
    }
    
    // *Cross_Test2_2* updates
    if (t >= 0 && Cross_Test2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cross_Test2_2.tStart = t;  // (not accounting for frame time here)
      Cross_Test2_2.frameNStart = frameN;  // exact frame index
      
      Cross_Test2_2.setAutoDraw(true);
    }

    frameRemains = 0 + 4.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cross_Test2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cross_Test2_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_Description_2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_Description_2RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Description_2'-------
    Test_Description_2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_10.corr, level);
    }
    psychoJS.experiment.addData('key_resp_10.keys', key_resp_10.keys);
    if (typeof key_resp_10.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_10.rt', key_resp_10.rt);
        routineTimer.reset();
        }
    
    key_resp_10.stop();
    // the Routine "Test_Description_2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_8_allKeys;
var Test_Description_3Components;
function Test_Description_3RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Description_3'-------
    t = 0;
    Test_Description_3Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_8.keys = undefined;
    key_resp_8.rt = undefined;
    _key_resp_8_allKeys = [];
    // keep track of which components have finished
    Test_Description_3Components = [];
    Test_Description_3Components.push(O2_Test2_2);
    Test_Description_3Components.push(Target_Test_2);
    Test_Description_3Components.push(O1_Test2_2);
    Test_Description_3Components.push(Cross_Test_2);
    Test_Description_3Components.push(Test_10);
    Test_Description_3Components.push(key_resp_8);
    
    Test_Description_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Test_Description_3RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Description_3'-------
    // get current time
    t = Test_Description_3Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *O2_Test2_2* updates
    if (t >= 1 && O2_Test2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2_Test2_2.tStart = t;  // (not accounting for frame time here)
      O2_Test2_2.frameNStart = frameN;  // exact frame index
      
      O2_Test2_2.setAutoDraw(true);
    }

    frameRemains = 1 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2_Test2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2_Test2_2.setAutoDraw(false);
    }
    
    // *Target_Test_2* updates
    if (t >= 0.8 && Target_Test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Target_Test_2.tStart = t;  // (not accounting for frame time here)
      Target_Test_2.frameNStart = frameN;  // exact frame index
      
      Target_Test_2.setAutoDraw(true);
    }

    frameRemains = 0.8 + 0.05 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Target_Test_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Target_Test_2.setAutoDraw(false);
    }
    
    // *O1_Test2_2* updates
    if (t >= 0.5 && O1_Test2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1_Test2_2.tStart = t;  // (not accounting for frame time here)
      O1_Test2_2.frameNStart = frameN;  // exact frame index
      
      O1_Test2_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.25 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1_Test2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1_Test2_2.setAutoDraw(false);
    }
    
    // *Cross_Test_2* updates
    if (t >= 0 && Cross_Test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cross_Test_2.tStart = t;  // (not accounting for frame time here)
      Cross_Test_2.frameNStart = frameN;  // exact frame index
      
      Cross_Test_2.setAutoDraw(true);
    }

    frameRemains = 0 + 1.5 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cross_Test_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cross_Test_2.setAutoDraw(false);
    }
    
    // *Test_10* updates
    if (t >= 1.5 && Test_10.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test_10.tStart = t;  // (not accounting for frame time here)
      Test_10.frameNStart = frameN;  // exact frame index
      
      Test_10.setAutoDraw(true);
    }

    
    // *key_resp_8* updates
    if (t >= 1.5 && key_resp_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_8.tStart = t;  // (not accounting for frame time here)
      key_resp_8.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_8.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_8.clearEvents(); });
    }

    if (key_resp_8.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_8.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_8_allKeys = _key_resp_8_allKeys.concat(theseKeys);
      if (_key_resp_8_allKeys.length > 0) {
        key_resp_8.keys = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].name;  // just the last key pressed
        key_resp_8.rt = _key_resp_8_allKeys[_key_resp_8_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_Description_3Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_Description_3RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Description_3'-------
    Test_Description_3Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_8.corr, level);
    }
    psychoJS.experiment.addData('key_resp_8.keys', key_resp_8.keys);
    if (typeof key_resp_8.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_8.rt', key_resp_8.rt);
        routineTimer.reset();
        }
    
    key_resp_8.stop();
    // the Routine "Test_Description_3" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _motion_resp_test_2_allKeys;
var Test_Description_4Components;
function Test_Description_4RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Description_4'-------
    t = 0;
    Test_Description_4Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    motion_resp_test_2.keys = undefined;
    motion_resp_test_2.rt = undefined;
    _motion_resp_test_2_allKeys = [];
    // keep track of which components have finished
    Test_Description_4Components = [];
    Test_Description_4Components.push(O1_Test3_2);
    Test_Description_4Components.push(O2_Test3_2);
    Test_Description_4Components.push(O1_Test4_2);
    Test_Description_4Components.push(Target_Test2_2);
    Test_Description_4Components.push(O2_Test4_2);
    Test_Description_4Components.push(motion_resp_description_test_2);
    Test_Description_4Components.push(motion_resp_test_2);
    Test_Description_4Components.push(Cross_Test3_2);
    
    Test_Description_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Test_Description_4RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Description_4'-------
    // get current time
    t = Test_Description_4Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *O1_Test3_2* updates
    if (t >= 0.5 && O1_Test3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1_Test3_2.tStart = t;  // (not accounting for frame time here)
      O1_Test3_2.frameNStart = frameN;  // exact frame index
      
      O1_Test3_2.setAutoDraw(true);
    }

    frameRemains = 0.5 + 0.08333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1_Test3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1_Test3_2.setAutoDraw(false);
    }
    
    // *O2_Test3_2* updates
    if (t >= 0.6666666667 && O2_Test3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2_Test3_2.tStart = t;  // (not accounting for frame time here)
      O2_Test3_2.frameNStart = frameN;  // exact frame index
      
      O2_Test3_2.setAutoDraw(true);
    }

    frameRemains = 0.6666666667 + 0.08333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2_Test3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2_Test3_2.setAutoDraw(false);
    }
    
    // *O1_Test4_2* updates
    if (t >= 0.8333333333 && O1_Test4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1_Test4_2.tStart = t;  // (not accounting for frame time here)
      O1_Test4_2.frameNStart = frameN;  // exact frame index
      
      O1_Test4_2.setAutoDraw(true);
    }

    frameRemains = 0.8333333333 + 0.08333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1_Test4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1_Test4_2.setAutoDraw(false);
    }
    
    // *Target_Test2_2* updates
    if (t >= 0.9333333333 && Target_Test2_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Target_Test2_2.tStart = t;  // (not accounting for frame time here)
      Target_Test2_2.frameNStart = frameN;  // exact frame index
      
      Target_Test2_2.setAutoDraw(true);
    }

    frameRemains = 0.9333333333 + 0.0333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Target_Test2_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Target_Test2_2.setAutoDraw(false);
    }
    
    // *O2_Test4_2* updates
    if (t >= 1 && O2_Test4_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2_Test4_2.tStart = t;  // (not accounting for frame time here)
      O2_Test4_2.frameNStart = frameN;  // exact frame index
      
      O2_Test4_2.setAutoDraw(true);
    }

    frameRemains = 1 + 0.08333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2_Test4_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2_Test4_2.setAutoDraw(false);
    }
    
    // *motion_resp_description_test_2* updates
    if (t >= 1.2 && motion_resp_description_test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      motion_resp_description_test_2.tStart = t;  // (not accounting for frame time here)
      motion_resp_description_test_2.frameNStart = frameN;  // exact frame index
      
      motion_resp_description_test_2.setAutoDraw(true);
    }

    
    // *motion_resp_test_2* updates
    if (t >= 1.2 && motion_resp_test_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      motion_resp_test_2.tStart = t;  // (not accounting for frame time here)
      motion_resp_test_2.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { motion_resp_test_2.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { motion_resp_test_2.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { motion_resp_test_2.clearEvents(); });
    }

    if (motion_resp_test_2.status === PsychoJS.Status.STARTED) {
      let theseKeys = motion_resp_test_2.getKeys({keyList: ['1', '2'], waitRelease: false});
      _motion_resp_test_2_allKeys = _motion_resp_test_2_allKeys.concat(theseKeys);
      if (_motion_resp_test_2_allKeys.length > 0) {
        motion_resp_test_2.keys = _motion_resp_test_2_allKeys[_motion_resp_test_2_allKeys.length - 1].name;  // just the last key pressed
        motion_resp_test_2.rt = _motion_resp_test_2_allKeys[_motion_resp_test_2_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    
    // *Cross_Test3_2* updates
    if (t >= 0 && Cross_Test3_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cross_Test3_2.tStart = t;  // (not accounting for frame time here)
      Cross_Test3_2.frameNStart = frameN;  // exact frame index
      
      Cross_Test3_2.setAutoDraw(true);
    }

    frameRemains = 0 + 1.2 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cross_Test3_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cross_Test3_2.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_Description_4Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_Description_4RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Description_4'-------
    Test_Description_4Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(motion_resp_test_2.corr, level);
    }
    psychoJS.experiment.addData('motion_resp_test_2.keys', motion_resp_test_2.keys);
    if (typeof motion_resp_test_2.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('motion_resp_test_2.rt', motion_resp_test_2.rt);
        routineTimer.reset();
        }
    
    motion_resp_test_2.stop();
    // the Routine "Test_Description_4" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _target_resp_test_allKeys;
var Test_MeasurementMaskingComponents;
function Test_MeasurementMaskingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_MeasurementMasking'-------
    t = 0;
    Test_MeasurementMaskingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    target_resp_test.keys = undefined;
    target_resp_test.rt = undefined;
    _target_resp_test_allKeys = [];
    // keep track of which components have finished
    Test_MeasurementMaskingComponents = [];
    Test_MeasurementMaskingComponents.push(target_resp_description_test);
    Test_MeasurementMaskingComponents.push(target_resp_test);
    
    Test_MeasurementMaskingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Test_MeasurementMaskingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_MeasurementMasking'-------
    // get current time
    t = Test_MeasurementMaskingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target_resp_description_test* updates
    if (t >= 0 && target_resp_description_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_resp_description_test.tStart = t;  // (not accounting for frame time here)
      target_resp_description_test.frameNStart = frameN;  // exact frame index
      
      target_resp_description_test.setAutoDraw(true);
    }

    
    // *target_resp_test* updates
    if (t >= 0.0 && target_resp_test.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_resp_test.tStart = t;  // (not accounting for frame time here)
      target_resp_test.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { target_resp_test.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { target_resp_test.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { target_resp_test.clearEvents(); });
    }

    if (target_resp_test.status === PsychoJS.Status.STARTED) {
      let theseKeys = target_resp_test.getKeys({keyList: ['1', '2'], waitRelease: false});
      _target_resp_test_allKeys = _target_resp_test_allKeys.concat(theseKeys);
      if (_target_resp_test_allKeys.length > 0) {
        target_resp_test.keys = _target_resp_test_allKeys[_target_resp_test_allKeys.length - 1].name;  // just the last key pressed
        target_resp_test.rt = _target_resp_test_allKeys[_target_resp_test_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_MeasurementMaskingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_MeasurementMaskingRoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_MeasurementMasking'-------
    Test_MeasurementMaskingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(target_resp_test.corr, level);
    }
    psychoJS.experiment.addData('target_resp_test.keys', target_resp_test.keys);
    if (typeof target_resp_test.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('target_resp_test.rt', target_resp_test.rt);
        routineTimer.reset();
        }
    
    target_resp_test.stop();
    // the Routine "Test_MeasurementMasking" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_3_allKeys;
var Test_Description_5Components;
function Test_Description_5RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Test_Description_5'-------
    t = 0;
    Test_Description_5Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_3.keys = undefined;
    key_resp_3.rt = undefined;
    _key_resp_3_allKeys = [];
    // keep track of which components have finished
    Test_Description_5Components = [];
    Test_Description_5Components.push(text_6);
    Test_Description_5Components.push(key_resp_3);
    
    Test_Description_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Test_Description_5RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Test_Description_5'-------
    // get current time
    t = Test_Description_5Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_6* updates
    if (t >= 0.0 && text_6.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_6.tStart = t;  // (not accounting for frame time here)
      text_6.frameNStart = frameN;  // exact frame index
      
      text_6.setAutoDraw(true);
    }

    
    // *key_resp_3* updates
    if (t >= 0.0 && key_resp_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_3.tStart = t;  // (not accounting for frame time here)
      key_resp_3.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_3.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_3.clearEvents(); });
    }

    if (key_resp_3.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_3.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_3_allKeys = _key_resp_3_allKeys.concat(theseKeys);
      if (_key_resp_3_allKeys.length > 0) {
        key_resp_3.keys = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].name;  // just the last key pressed
        key_resp_3.rt = _key_resp_3_allKeys[_key_resp_3_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Test_Description_5Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Test_Description_5RoutineEnd() {
  return async function () {
    //------Ending Routine 'Test_Description_5'-------
    Test_Description_5Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_3.corr, level);
    }
    psychoJS.experiment.addData('key_resp_3.keys', key_resp_3.keys);
    if (typeof key_resp_3.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_3.rt', key_resp_3.rt);
        routineTimer.reset();
        }
    
    key_resp_3.stop();
    // the Routine "Test_Description_5" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_11_allKeys;
var Start_ExperimentComponents;
function Start_ExperimentRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Start_Experiment'-------
    t = 0;
    Start_ExperimentClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_11.keys = undefined;
    key_resp_11.rt = undefined;
    _key_resp_11_allKeys = [];
    // keep track of which components have finished
    Start_ExperimentComponents = [];
    Start_ExperimentComponents.push(Test_8);
    Start_ExperimentComponents.push(key_resp_11);
    
    Start_ExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function Start_ExperimentRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Start_Experiment'-------
    // get current time
    t = Start_ExperimentClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *Test_8* updates
    if (t >= 0.0 && Test_8.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Test_8.tStart = t;  // (not accounting for frame time here)
      Test_8.frameNStart = frameN;  // exact frame index
      
      Test_8.setAutoDraw(true);
    }

    
    // *key_resp_11* updates
    if (t >= 0.0 && key_resp_11.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_11.tStart = t;  // (not accounting for frame time here)
      key_resp_11.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_11.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_11.clearEvents(); });
    }

    if (key_resp_11.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_11.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_11_allKeys = _key_resp_11_allKeys.concat(theseKeys);
      if (_key_resp_11_allKeys.length > 0) {
        key_resp_11.keys = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].name;  // just the last key pressed
        key_resp_11.rt = _key_resp_11_allKeys[_key_resp_11_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    Start_ExperimentComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function Start_ExperimentRoutineEnd() {
  return async function () {
    //------Ending Routine 'Start_Experiment'-------
    Start_ExperimentComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_11.corr, level);
    }
    psychoJS.experiment.addData('key_resp_11.keys', key_resp_11.keys);
    if (typeof key_resp_11.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_11.rt', key_resp_11.rt);
        routineTimer.reset();
        }
    
    key_resp_11.stop();
    // the Routine "Start_Experiment" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var trials;
var currentLoop;
function trialsLoopBegin(trialsLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    trials = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ExpConditions.xlsx',
      seed: undefined, name: 'trials'
    });
    psychoJS.experiment.addLoop(trials); // add the loop to the experiment
    currentLoop = trials;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    trials.forEach(function() {
      const snapshot = trials.getSnapshot();
    
      trialsLoopScheduler.add(importConditions(snapshot));
      trialsLoopScheduler.add(PreCycleRoutineBegin(snapshot));
      trialsLoopScheduler.add(PreCycleRoutineEachFrame());
      trialsLoopScheduler.add(PreCycleRoutineEnd());
      trialsLoopScheduler.add(CycleRoutineBegin(snapshot));
      trialsLoopScheduler.add(CycleRoutineEachFrame());
      trialsLoopScheduler.add(CycleRoutineEnd());
      trialsLoopScheduler.add(MeasurementMotionRoutineBegin(snapshot));
      trialsLoopScheduler.add(MeasurementMotionRoutineEachFrame());
      trialsLoopScheduler.add(MeasurementMotionRoutineEnd());
      trialsLoopScheduler.add(MeasurementMaskingRoutineBegin(snapshot));
      trialsLoopScheduler.add(MeasurementMaskingRoutineEachFrame());
      trialsLoopScheduler.add(MeasurementMaskingRoutineEnd());
      trialsLoopScheduler.add(endLoopIteration(trialsLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function trialsLoopEnd() {
  psychoJS.experiment.removeLoop(trials);

  return Scheduler.Event.NEXT;
}


var Loop;
function LoopLoopBegin(LoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    Loop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ExpConditions.xlsx',
      seed: undefined, name: 'Loop'
    });
    psychoJS.experiment.addLoop(Loop); // add the loop to the experiment
    currentLoop = Loop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    Loop.forEach(function() {
      const snapshot = Loop.getSnapshot();
    
      LoopLoopScheduler.add(importConditions(snapshot));
      LoopLoopScheduler.add(PreCycleRoutineBegin(snapshot));
      LoopLoopScheduler.add(PreCycleRoutineEachFrame());
      LoopLoopScheduler.add(PreCycleRoutineEnd());
      LoopLoopScheduler.add(CycleRoutineBegin(snapshot));
      LoopLoopScheduler.add(CycleRoutineEachFrame());
      LoopLoopScheduler.add(CycleRoutineEnd());
      LoopLoopScheduler.add(MeasurementMotionRoutineBegin(snapshot));
      LoopLoopScheduler.add(MeasurementMotionRoutineEachFrame());
      LoopLoopScheduler.add(MeasurementMotionRoutineEnd());
      LoopLoopScheduler.add(MeasurementMaskingRoutineBegin(snapshot));
      LoopLoopScheduler.add(MeasurementMaskingRoutineEachFrame());
      LoopLoopScheduler.add(MeasurementMaskingRoutineEnd());
      LoopLoopScheduler.add(endLoopIteration(LoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function LoopLoopEnd() {
  psychoJS.experiment.removeLoop(Loop);

  return Scheduler.Event.NEXT;
}


var FirstLoop;
function FirstLoopLoopBegin(FirstLoopLoopScheduler, snapshot) {
  return async function() {
    TrialHandler.fromSnapshot(snapshot); // update internal variables (.thisN etc) of the loop
    
    // set up handler to look after randomisation of conditions etc
    FirstLoop = new TrialHandler({
      psychoJS: psychoJS,
      nReps: 1, method: TrialHandler.Method.RANDOM,
      extraInfo: expInfo, originPath: undefined,
      trialList: 'ExpConditions.xlsx',
      seed: undefined, name: 'FirstLoop'
    });
    psychoJS.experiment.addLoop(FirstLoop); // add the loop to the experiment
    currentLoop = FirstLoop;  // we're now the current loop
    
    // Schedule all the trials in the trialList:
    FirstLoop.forEach(function() {
      const snapshot = FirstLoop.getSnapshot();
    
      FirstLoopLoopScheduler.add(importConditions(snapshot));
      FirstLoopLoopScheduler.add(PreCycleRoutineBegin(snapshot));
      FirstLoopLoopScheduler.add(PreCycleRoutineEachFrame());
      FirstLoopLoopScheduler.add(PreCycleRoutineEnd());
      FirstLoopLoopScheduler.add(CycleRoutineBegin(snapshot));
      FirstLoopLoopScheduler.add(CycleRoutineEachFrame());
      FirstLoopLoopScheduler.add(CycleRoutineEnd());
      FirstLoopLoopScheduler.add(MeasurementMotionRoutineBegin(snapshot));
      FirstLoopLoopScheduler.add(MeasurementMotionRoutineEachFrame());
      FirstLoopLoopScheduler.add(MeasurementMotionRoutineEnd());
      FirstLoopLoopScheduler.add(MeasurementMaskingRoutineBegin(snapshot));
      FirstLoopLoopScheduler.add(MeasurementMaskingRoutineEachFrame());
      FirstLoopLoopScheduler.add(MeasurementMaskingRoutineEnd());
      FirstLoopLoopScheduler.add(endLoopIteration(FirstLoopLoopScheduler, snapshot));
    });
    
    return Scheduler.Event.NEXT;
  }
}


async function FirstLoopLoopEnd() {
  psychoJS.experiment.removeLoop(FirstLoop);

  return Scheduler.Event.NEXT;
}


var PreCycleComponents;
function PreCycleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'PreCycle'-------
    t = 0;
    PreCycleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    routineTimer.add(1.000000);
    // update component parameters for each repeat
    // keep track of which components have finished
    PreCycleComponents = [];
    PreCycleComponents.push(PreCycle_Cross);
    
    PreCycleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function PreCycleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'PreCycle'-------
    // get current time
    t = PreCycleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *PreCycle_Cross* updates
    if (t >= 0.0 && PreCycle_Cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      PreCycle_Cross.tStart = t;  // (not accounting for frame time here)
      PreCycle_Cross.frameNStart = frameN;  // exact frame index
      
      PreCycle_Cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + 1 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (PreCycle_Cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      PreCycle_Cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    PreCycleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine && routineTimer.getTime() > 0) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function PreCycleRoutineEnd() {
  return async function () {
    //------Ending Routine 'PreCycle'-------
    PreCycleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    return Scheduler.Event.NEXT;
  };
}


var CycleComponents;
function CycleRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'Cycle'-------
    t = 0;
    CycleClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    O2D.setFillColor(new util.Color(OColor));
    O2D.setOpacity(O4Opacity);
    O2D.setContrast(Contrast);
    O2D.setPos([SX, O2Y]);
    O2D.setSize([OSize, OSize]);
    O2D.setLineWidth(LineWidth);
    TD.setFillColor(new util.Color(TColour));
    TD.setOpacity(T4Opacity);
    TD.setContrast(Contrast);
    TD.setPos([SX, TY]);
    TD.setSize([TSize, TSize]);
    TD.setLineWidth(LineWidth);
    O1D.setFillColor(new util.Color(OColor));
    O1D.setOpacity(O4Opacity);
    O1D.setContrast(Contrast);
    O1D.setPos([SX, O1Y]);
    O1D.setSize([OSize, OSize]);
    O1D.setLineWidth(LineWidth);
    O2C.setFillColor(new util.Color(OColor));
    O2C.setOpacity(O3Opacity);
    O2C.setContrast(Contrast);
    O2C.setPos([SX, O2Y]);
    O2C.setSize([OSize, OSize]);
    O2C.setLineWidth(LineWidth);
    TC.setFillColor(new util.Color(TColour));
    TC.setOpacity(T3Opacity);
    TC.setContrast(Contrast);
    TC.setPos([SX, TY]);
    TC.setSize([TSize, TSize]);
    TC.setLineWidth(LineWidth);
    O1C.setFillColor(new util.Color(OColor));
    O1C.setOpacity(O3Opacity);
    O1C.setContrast(Contrast);
    O1C.setPos([SX, O1Y]);
    O1C.setSize([OSize, OSize]);
    O1C.setLineWidth(LineWidth);
    O2B.setFillColor(new util.Color(OColor));
    O2B.setOpacity(O2Opacity);
    O2B.setContrast(Contrast);
    O2B.setPos([SX, O2Y]);
    O2B.setSize([OSize, OSize]);
    O2B.setLineWidth(LineWidth);
    TB.setFillColor(new util.Color(TColour));
    TB.setOpacity(T2Opacity);
    TB.setContrast(Contrast);
    TB.setPos([SX, TY]);
    TB.setSize([TSize, TSize]);
    TB.setLineWidth(LineWidth);
    O1B.setFillColor(new util.Color(OColor));
    O1B.setOpacity(O2Opacity);
    O1B.setContrast(Contrast);
    O1B.setPos([SX, O1Y]);
    O1B.setSize([OSize, OSize]);
    O1B.setLineWidth(LineWidth);
    O2A.setFillColor(new util.Color(OColor));
    O2A.setOpacity(O1Opacity);
    O2A.setContrast(Contrast);
    O2A.setPos([SX, O2Y]);
    O2A.setSize([OSize, OSize]);
    O2A.setLineWidth(LineWidth);
    TA.setFillColor(new util.Color(TColour));
    TA.setOpacity(T1Opacity);
    TA.setContrast(Contrast);
    TA.setPos([SX, TY]);
    TA.setSize([TSize, TSize]);
    TA.setLineWidth(LineWidth);
    O1A.setFillColor(new util.Color(OColor));
    O1A.setOpacity(O1Opacity);
    O1A.setContrast(Contrast);
    O1A.setPos([SX, O1Y]);
    O1A.setSize([OSize, OSize]);
    O1A.setLineWidth(LineWidth);
    O1E.setFillColor(new util.Color(OColor));
    O1E.setOpacity(O5Opacity);
    O1E.setContrast(Contrast);
    O1E.setPos([SX, O1Y]);
    O1E.setSize([OSize, OSize]);
    O1E.setLineWidth(LineWidth);
    TE.setFillColor(new util.Color(TColour));
    TE.setOpacity(T5Opacity);
    TE.setContrast(Contrast);
    TE.setPos([SX, TY]);
    TE.setSize([TSize, TSize]);
    TE.setLineWidth(LineWidth);
    O2E.setFillColor(new util.Color(OColor));
    O2E.setOpacity(O5Opacity);
    O2E.setContrast(Contrast);
    O2E.setPos([SX, O2Y]);
    O2E.setSize([OSize, OSize]);
    O2E.setLineWidth(LineWidth);
    O1F.setFillColor(new util.Color(OColor));
    O1F.setOpacity(O6Opacity);
    O1F.setContrast(Contrast);
    O1F.setPos([SX, O1Y]);
    O1F.setSize([OSize, OSize]);
    O1F.setLineWidth(LineWidth);
    TF.setFillColor(new util.Color(TColour));
    TF.setOpacity(T6Opacity);
    TF.setContrast(Contrast);
    TF.setPos([SX, TY]);
    TF.setSize([TSize, TSize]);
    TF.setLineWidth(LineWidth);
    O2F.setFillColor(new util.Color(OColor));
    O2F.setOpacity(O6Opacity);
    O2F.setContrast(Contrast);
    O2F.setPos([SX, O2Y]);
    O2F.setSize([OSize, OSize]);
    O2F.setLineWidth(LineWidth);
    O1G.setFillColor(new util.Color(OColor));
    O1G.setOpacity(O7Opacity);
    O1G.setContrast(Contrast);
    O1G.setPos([SX, O1Y]);
    O1G.setSize([OSize, OSize]);
    O1G.setLineWidth(LineWidth);
    TG.setFillColor(new util.Color(TColour));
    TG.setOpacity(T7Opacity);
    TG.setContrast(Contrast);
    TG.setPos([SX, TY]);
    TG.setSize([TSize, TSize]);
    TG.setLineWidth(LineWidth);
    O2G.setFillColor(new util.Color(OColor));
    O2G.setOpacity(O7Opacity);
    O2G.setContrast(Contrast);
    O2G.setPos([SX, O2Y]);
    O2G.setSize([OSize, OSize]);
    O2G.setLineWidth(LineWidth);
    O1H.setFillColor(new util.Color(OColor));
    O1H.setOpacity(O8Opacity);
    O1H.setContrast(Contrast);
    O1H.setPos([SX, O1Y]);
    O1H.setSize([OSize, OSize]);
    O1H.setLineWidth(LineWidth);
    TH.setFillColor(new util.Color(TColour));
    TH.setOpacity(T8Opacity);
    TH.setContrast(Contrast);
    TH.setPos([SX, TY]);
    TH.setSize([TSize, TSize]);
    TH.setLineWidth(LineWidth);
    O2H.setFillColor(new util.Color(OColor));
    O2H.setOpacity(O8Opacity);
    O2H.setContrast(Contrast);
    O2H.setPos([SX, O2Y]);
    O2H.setSize([OSize, OSize]);
    O2H.setLineWidth(LineWidth);
    O1A_Blink.setFillColor(new util.Color(OColor));
    O1A_Blink.setOpacity(O1BlinkOpacity);
    O1A_Blink.setContrast(Contrast);
    O1A_Blink.setPos([SX, O2Y]);
    O1A_Blink.setSize([OSize, OSize]);
    O1A_Blink.setLineWidth(LineWidth);
    O2A_Blink.setFillColor(new util.Color(OColor));
    O2A_Blink.setOpacity(O1BlinkOpacity);
    O2A_Blink.setContrast(Contrast);
    O2A_Blink.setPos([SX, O1Y]);
    O2A_Blink.setSize([OSize, OSize]);
    O2A_Blink.setLineWidth(LineWidth);
    O1B_Blink.setFillColor(new util.Color(OColor));
    O1B_Blink.setOpacity(O2BlinkOpacity);
    O1B_Blink.setContrast(Contrast);
    O1B_Blink.setPos([SX, O2Y]);
    O1B_Blink.setSize([OSize, OSize]);
    O1B_Blink.setLineWidth(LineWidth);
    O2B_Blink.setFillColor(new util.Color(OColor));
    O2B_Blink.setOpacity(O2BlinkOpacity);
    O2B_Blink.setContrast(Contrast);
    O2B_Blink.setPos([SX, O1Y]);
    O2B_Blink.setSize([OSize, OSize]);
    O2B_Blink.setLineWidth(LineWidth);
    O1C_Blink.setFillColor(new util.Color(OColor));
    O1C_Blink.setOpacity(O3BlinkOpacity);
    O1C_Blink.setContrast(Contrast);
    O1C_Blink.setPos([SX, O2Y]);
    O1C_Blink.setSize([OSize, OSize]);
    O1C_Blink.setLineWidth(LineWidth);
    O2C_Blink.setFillColor(new util.Color(OColor));
    O2C_Blink.setOpacity(O3BlinkOpacity);
    O2C_Blink.setContrast(Contrast);
    O2C_Blink.setPos([SX, O1Y]);
    O2C_Blink.setSize([OSize, OSize]);
    O2C_Blink.setLineWidth(LineWidth);
    O1D_Blink.setFillColor(new util.Color(OColor));
    O1D_Blink.setOpacity(O4BlinkOpacity);
    O1D_Blink.setContrast(Contrast);
    O1D_Blink.setPos([SX, O2Y]);
    O1D_Blink.setSize([OSize, OSize]);
    O1D_Blink.setLineWidth(LineWidth);
    O2D_Blink.setFillColor(new util.Color(OColor));
    O2D_Blink.setOpacity(O4BlinkOpacity);
    O2D_Blink.setContrast(Contrast);
    O2D_Blink.setPos([SX, O1Y]);
    O2D_Blink.setSize([OSize, OSize]);
    O2D_Blink.setLineWidth(LineWidth);
    O1E_Blink.setFillColor(new util.Color(OColor));
    O1E_Blink.setOpacity(O5BlinkOpacity);
    O1E_Blink.setContrast(Contrast);
    O1E_Blink.setPos([SX, O2Y]);
    O1E_Blink.setSize([OSize, OSize]);
    O1E_Blink.setLineWidth(LineWidth);
    O2E_Blink.setFillColor(new util.Color(OColor));
    O2E_Blink.setOpacity(O5BlinkOpacity);
    O2E_Blink.setContrast(Contrast);
    O2E_Blink.setPos([SX, O1Y]);
    O2E_Blink.setSize([OSize, OSize]);
    O2E_Blink.setLineWidth(LineWidth);
    O1F_Blink.setFillColor(new util.Color(OColor));
    O1F_Blink.setOpacity(O6BlinkOpacity);
    O1F_Blink.setContrast(Contrast);
    O1F_Blink.setPos([SX, O2Y]);
    O1F_Blink.setSize([OSize, OSize]);
    O1F_Blink.setLineWidth(LineWidth);
    O2F_Blink.setFillColor(new util.Color(OColor));
    O2F_Blink.setOpacity(O6BlinkOpacity);
    O2F_Blink.setContrast(Contrast);
    O2F_Blink.setPos([SX, O1Y]);
    O2F_Blink.setSize([OSize, OSize]);
    O2F_Blink.setLineWidth(LineWidth);
    O1G_Blink.setFillColor(new util.Color(OColor));
    O1G_Blink.setOpacity(O7BlinkOpacity);
    O1G_Blink.setContrast(Contrast);
    O1G_Blink.setPos([SX, O2Y]);
    O1G_Blink.setSize([OSize, OSize]);
    O1G_Blink.setLineWidth(LineWidth);
    O2G_Blink.setFillColor(new util.Color(OColor));
    O2G_Blink.setOpacity(O7BlinkOpacity);
    O2G_Blink.setContrast(Contrast);
    O2G_Blink.setPos([SX, O1Y]);
    O2G_Blink.setSize([OSize, OSize]);
    O2G_Blink.setLineWidth(LineWidth);
    O1H_Blink.setFillColor(new util.Color(OColor));
    O1H_Blink.setOpacity(O8BlinkOpacity);
    O1H_Blink.setContrast(Contrast);
    O1H_Blink.setPos([SX, O2Y]);
    O1H_Blink.setSize([OSize, OSize]);
    O1H_Blink.setLineWidth(LineWidth);
    O2H_Blink.setFillColor(new util.Color(OColor));
    O2H_Blink.setOpacity(O8BlinkOpacity);
    O2H_Blink.setContrast(Contrast);
    O2H_Blink.setPos([SX, O1Y]);
    O2H_Blink.setSize([OSize, OSize]);
    O2H_Blink.setLineWidth(LineWidth);
    // keep track of which components have finished
    CycleComponents = [];
    CycleComponents.push(O2D);
    CycleComponents.push(TD);
    CycleComponents.push(O1D);
    CycleComponents.push(O2C);
    CycleComponents.push(TC);
    CycleComponents.push(O1C);
    CycleComponents.push(O2B);
    CycleComponents.push(TB);
    CycleComponents.push(O1B);
    CycleComponents.push(O2A);
    CycleComponents.push(TA);
    CycleComponents.push(O1A);
    CycleComponents.push(O1E);
    CycleComponents.push(TE);
    CycleComponents.push(O2E);
    CycleComponents.push(O1F);
    CycleComponents.push(TF);
    CycleComponents.push(O2F);
    CycleComponents.push(O1G);
    CycleComponents.push(TG);
    CycleComponents.push(O2G);
    CycleComponents.push(O1H);
    CycleComponents.push(TH);
    CycleComponents.push(O2H);
    CycleComponents.push(O1A_Blink);
    CycleComponents.push(O2A_Blink);
    CycleComponents.push(O1B_Blink);
    CycleComponents.push(O2B_Blink);
    CycleComponents.push(O1C_Blink);
    CycleComponents.push(O2C_Blink);
    CycleComponents.push(O1D_Blink);
    CycleComponents.push(O2D_Blink);
    CycleComponents.push(O1E_Blink);
    CycleComponents.push(O2E_Blink);
    CycleComponents.push(O1F_Blink);
    CycleComponents.push(O2F_Blink);
    CycleComponents.push(O1G_Blink);
    CycleComponents.push(O2G_Blink);
    CycleComponents.push(O1H_Blink);
    CycleComponents.push(O2H_Blink);
    CycleComponents.push(Cross);
    
    CycleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function CycleRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'Cycle'-------
    // get current time
    t = CycleClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *O2D* updates
    if (t >= O24Onset && O2D.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2D.tStart = t;  // (not accounting for frame time here)
      O2D.frameNStart = frameN;  // exact frame index
      
      O2D.setAutoDraw(true);
    }

    frameRemains = O24Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2D.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2D.setAutoDraw(false);
    }
    
    // *TD* updates
    if (t >= T4Onset && TD.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TD.tStart = t;  // (not accounting for frame time here)
      TD.frameNStart = frameN;  // exact frame index
      
      TD.setAutoDraw(true);
    }

    frameRemains = T4Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TD.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TD.setAutoDraw(false);
    }
    
    // *O1D* updates
    if (t >= O14Onset && O1D.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1D.tStart = t;  // (not accounting for frame time here)
      O1D.frameNStart = frameN;  // exact frame index
      
      O1D.setAutoDraw(true);
    }

    frameRemains = O14Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1D.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1D.setAutoDraw(false);
    }
    
    // *O2C* updates
    if (t >= O23Onset && O2C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2C.tStart = t;  // (not accounting for frame time here)
      O2C.frameNStart = frameN;  // exact frame index
      
      O2C.setAutoDraw(true);
    }

    frameRemains = O23Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2C.setAutoDraw(false);
    }
    
    // *TC* updates
    if (t >= T3Onset && TC.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TC.tStart = t;  // (not accounting for frame time here)
      TC.frameNStart = frameN;  // exact frame index
      
      TC.setAutoDraw(true);
    }

    frameRemains = T3Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TC.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TC.setAutoDraw(false);
    }
    
    // *O1C* updates
    if (t >= O13Onset && O1C.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1C.tStart = t;  // (not accounting for frame time here)
      O1C.frameNStart = frameN;  // exact frame index
      
      O1C.setAutoDraw(true);
    }

    frameRemains = O13Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1C.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1C.setAutoDraw(false);
    }
    
    // *O2B* updates
    if (t >= O22Onset && O2B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2B.tStart = t;  // (not accounting for frame time here)
      O2B.frameNStart = frameN;  // exact frame index
      
      O2B.setAutoDraw(true);
    }

    frameRemains = O22Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2B.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2B.setAutoDraw(false);
    }
    
    // *TB* updates
    if (t >= T2Onset && TB.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TB.tStart = t;  // (not accounting for frame time here)
      TB.frameNStart = frameN;  // exact frame index
      
      TB.setAutoDraw(true);
    }

    frameRemains = T2Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TB.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TB.setAutoDraw(false);
    }
    
    // *O1B* updates
    if (t >= O12Onset && O1B.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1B.tStart = t;  // (not accounting for frame time here)
      O1B.frameNStart = frameN;  // exact frame index
      
      O1B.setAutoDraw(true);
    }

    frameRemains = O12Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1B.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1B.setAutoDraw(false);
    }
    
    // *O2A* updates
    if (t >= O21Onset && O2A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2A.tStart = t;  // (not accounting for frame time here)
      O2A.frameNStart = frameN;  // exact frame index
      
      O2A.setAutoDraw(true);
    }

    frameRemains = O21Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2A.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2A.setAutoDraw(false);
    }
    
    // *TA* updates
    if (t >= T1Onset && TA.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TA.tStart = t;  // (not accounting for frame time here)
      TA.frameNStart = frameN;  // exact frame index
      
      TA.setAutoDraw(true);
    }

    frameRemains = T1Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TA.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TA.setAutoDraw(false);
    }
    
    // *O1A* updates
    if (t >= O11Onset && O1A.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1A.tStart = t;  // (not accounting for frame time here)
      O1A.frameNStart = frameN;  // exact frame index
      
      O1A.setAutoDraw(true);
    }

    frameRemains = O11Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1A.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1A.setAutoDraw(false);
    }
    
    // *O1E* updates
    if (t >= O15Onset && O1E.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1E.tStart = t;  // (not accounting for frame time here)
      O1E.frameNStart = frameN;  // exact frame index
      
      O1E.setAutoDraw(true);
    }

    frameRemains = O15Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1E.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1E.setAutoDraw(false);
    }
    
    // *TE* updates
    if (t >= T5Onset && TE.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TE.tStart = t;  // (not accounting for frame time here)
      TE.frameNStart = frameN;  // exact frame index
      
      TE.setAutoDraw(true);
    }

    frameRemains = T5Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TE.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TE.setAutoDraw(false);
    }
    
    // *O2E* updates
    if (t >= O25Onset && O2E.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2E.tStart = t;  // (not accounting for frame time here)
      O2E.frameNStart = frameN;  // exact frame index
      
      O2E.setAutoDraw(true);
    }

    frameRemains = O25Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2E.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2E.setAutoDraw(false);
    }
    
    // *O1F* updates
    if (t >= O16Onset && O1F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1F.tStart = t;  // (not accounting for frame time here)
      O1F.frameNStart = frameN;  // exact frame index
      
      O1F.setAutoDraw(true);
    }

    frameRemains = O16Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1F.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1F.setAutoDraw(false);
    }
    
    // *TF* updates
    if (t >= T6Onset && TF.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TF.tStart = t;  // (not accounting for frame time here)
      TF.frameNStart = frameN;  // exact frame index
      
      TF.setAutoDraw(true);
    }

    frameRemains = T6Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TF.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TF.setAutoDraw(false);
    }
    
    // *O2F* updates
    if (t >= O26Onset && O2F.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2F.tStart = t;  // (not accounting for frame time here)
      O2F.frameNStart = frameN;  // exact frame index
      
      O2F.setAutoDraw(true);
    }

    frameRemains = O26Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2F.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2F.setAutoDraw(false);
    }
    
    // *O1G* updates
    if (t >= O17Onset && O1G.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1G.tStart = t;  // (not accounting for frame time here)
      O1G.frameNStart = frameN;  // exact frame index
      
      O1G.setAutoDraw(true);
    }

    frameRemains = O17Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1G.setAutoDraw(false);
    }
    
    // *TG* updates
    if (t >= T7Onset && TG.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TG.tStart = t;  // (not accounting for frame time here)
      TG.frameNStart = frameN;  // exact frame index
      
      TG.setAutoDraw(true);
    }

    frameRemains = T7Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TG.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TG.setAutoDraw(false);
    }
    
    // *O2G* updates
    if (t >= O27Onset && O2G.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2G.tStart = t;  // (not accounting for frame time here)
      O2G.frameNStart = frameN;  // exact frame index
      
      O2G.setAutoDraw(true);
    }

    frameRemains = O27Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2G.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2G.setAutoDraw(false);
    }
    
    // *O1H* updates
    if (t >= O18Onset && O1H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1H.tStart = t;  // (not accounting for frame time here)
      O1H.frameNStart = frameN;  // exact frame index
      
      O1H.setAutoDraw(true);
    }

    frameRemains = O18Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1H.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1H.setAutoDraw(false);
    }
    
    // *TH* updates
    if (t >= T8Onset && TH.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      TH.tStart = t;  // (not accounting for frame time here)
      TH.frameNStart = frameN;  // exact frame index
      
      TH.setAutoDraw(true);
    }

    frameRemains = T8Onset + 0.0333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (TH.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      TH.setAutoDraw(false);
    }
    
    // *O2H* updates
    if (t >= O28Onset && O2H.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2H.tStart = t;  // (not accounting for frame time here)
      O2H.frameNStart = frameN;  // exact frame index
      
      O2H.setAutoDraw(true);
    }

    frameRemains = O28Onset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2H.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2H.setAutoDraw(false);
    }
    
    // *O1A_Blink* updates
    if (t >= O11BlinkOnset && O1A_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1A_Blink.tStart = t;  // (not accounting for frame time here)
      O1A_Blink.frameNStart = frameN;  // exact frame index
      
      O1A_Blink.setAutoDraw(true);
    }

    frameRemains = O11BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1A_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1A_Blink.setAutoDraw(false);
    }
    
    // *O2A_Blink* updates
    if (t >= O21BlinkOnset && O2A_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2A_Blink.tStart = t;  // (not accounting for frame time here)
      O2A_Blink.frameNStart = frameN;  // exact frame index
      
      O2A_Blink.setAutoDraw(true);
    }

    frameRemains = O21BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2A_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2A_Blink.setAutoDraw(false);
    }
    
    // *O1B_Blink* updates
    if (t >= O12BlinkOnset && O1B_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1B_Blink.tStart = t;  // (not accounting for frame time here)
      O1B_Blink.frameNStart = frameN;  // exact frame index
      
      O1B_Blink.setAutoDraw(true);
    }

    frameRemains = O12BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1B_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1B_Blink.setAutoDraw(false);
    }
    
    // *O2B_Blink* updates
    if (t >= O22BlinkOnset && O2B_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2B_Blink.tStart = t;  // (not accounting for frame time here)
      O2B_Blink.frameNStart = frameN;  // exact frame index
      
      O2B_Blink.setAutoDraw(true);
    }

    frameRemains = O22BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2B_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2B_Blink.setAutoDraw(false);
    }
    
    // *O1C_Blink* updates
    if (t >= O13BlinkOnset && O1C_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1C_Blink.tStart = t;  // (not accounting for frame time here)
      O1C_Blink.frameNStart = frameN;  // exact frame index
      
      O1C_Blink.setAutoDraw(true);
    }

    frameRemains = O13BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1C_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1C_Blink.setAutoDraw(false);
    }
    
    // *O2C_Blink* updates
    if (t >= O23BlinkOnset && O2C_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2C_Blink.tStart = t;  // (not accounting for frame time here)
      O2C_Blink.frameNStart = frameN;  // exact frame index
      
      O2C_Blink.setAutoDraw(true);
    }

    frameRemains = O23BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2C_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2C_Blink.setAutoDraw(false);
    }
    
    // *O1D_Blink* updates
    if (t >= O14BlinkOnset && O1D_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1D_Blink.tStart = t;  // (not accounting for frame time here)
      O1D_Blink.frameNStart = frameN;  // exact frame index
      
      O1D_Blink.setAutoDraw(true);
    }

    frameRemains = O14BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1D_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1D_Blink.setAutoDraw(false);
    }
    
    // *O2D_Blink* updates
    if (t >= O24BlinkOnset && O2D_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2D_Blink.tStart = t;  // (not accounting for frame time here)
      O2D_Blink.frameNStart = frameN;  // exact frame index
      
      O2D_Blink.setAutoDraw(true);
    }

    frameRemains = O24BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2D_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2D_Blink.setAutoDraw(false);
    }
    
    // *O1E_Blink* updates
    if (t >= O15BlinkOnset && O1E_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1E_Blink.tStart = t;  // (not accounting for frame time here)
      O1E_Blink.frameNStart = frameN;  // exact frame index
      
      O1E_Blink.setAutoDraw(true);
    }

    frameRemains = O15BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1E_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1E_Blink.setAutoDraw(false);
    }
    
    // *O2E_Blink* updates
    if (t >= O25BlinkOnset && O2E_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2E_Blink.tStart = t;  // (not accounting for frame time here)
      O2E_Blink.frameNStart = frameN;  // exact frame index
      
      O2E_Blink.setAutoDraw(true);
    }

    frameRemains = O25BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2E_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2E_Blink.setAutoDraw(false);
    }
    
    // *O1F_Blink* updates
    if (t >= O16BlinkOnset && O1F_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1F_Blink.tStart = t;  // (not accounting for frame time here)
      O1F_Blink.frameNStart = frameN;  // exact frame index
      
      O1F_Blink.setAutoDraw(true);
    }

    frameRemains = O16BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1F_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1F_Blink.setAutoDraw(false);
    }
    
    // *O2F_Blink* updates
    if (t >= O26BlinkOnset && O2F_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2F_Blink.tStart = t;  // (not accounting for frame time here)
      O2F_Blink.frameNStart = frameN;  // exact frame index
      
      O2F_Blink.setAutoDraw(true);
    }

    frameRemains = O26BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2F_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2F_Blink.setAutoDraw(false);
    }
    
    // *O1G_Blink* updates
    if (t >= O17BlinkOnset && O1G_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1G_Blink.tStart = t;  // (not accounting for frame time here)
      O1G_Blink.frameNStart = frameN;  // exact frame index
      
      O1G_Blink.setAutoDraw(true);
    }

    frameRemains = O17BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1G_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1G_Blink.setAutoDraw(false);
    }
    
    // *O2G_Blink* updates
    if (t >= O27BlinkOnset && O2G_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2G_Blink.tStart = t;  // (not accounting for frame time here)
      O2G_Blink.frameNStart = frameN;  // exact frame index
      
      O2G_Blink.setAutoDraw(true);
    }

    frameRemains = O27BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2G_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2G_Blink.setAutoDraw(false);
    }
    
    // *O1H_Blink* updates
    if (t >= O18BlinkOnset && O1H_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O1H_Blink.tStart = t;  // (not accounting for frame time here)
      O1H_Blink.frameNStart = frameN;  // exact frame index
      
      O1H_Blink.setAutoDraw(true);
    }

    frameRemains = O18BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O1H_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O1H_Blink.setAutoDraw(false);
    }
    
    // *O2H_Blink* updates
    if (t >= O28BlinkOnset && O2H_Blink.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      O2H_Blink.tStart = t;  // (not accounting for frame time here)
      O2H_Blink.frameNStart = frameN;  // exact frame index
      
      O2H_Blink.setAutoDraw(true);
    }

    frameRemains = O28BlinkOnset + 0.08333333333 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (O2H_Blink.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      O2H_Blink.setAutoDraw(false);
    }
    
    // *Cross* updates
    if (t >= 0.0 && Cross.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      Cross.tStart = t;  // (not accounting for frame time here)
      Cross.frameNStart = frameN;  // exact frame index
      
      Cross.setAutoDraw(true);
    }

    frameRemains = 0.0 + CrossDuration - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (Cross.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      Cross.setAutoDraw(false);
    }
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    CycleComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function CycleRoutineEnd() {
  return async function () {
    //------Ending Routine 'Cycle'-------
    CycleComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // the Routine "Cycle" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _motion_resp_allKeys;
var MeasurementMotionComponents;
function MeasurementMotionRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'MeasurementMotion'-------
    t = 0;
    MeasurementMotionClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    motion_resp.keys = undefined;
    motion_resp.rt = undefined;
    _motion_resp_allKeys = [];
    // keep track of which components have finished
    MeasurementMotionComponents = [];
    MeasurementMotionComponents.push(motion_resp_description);
    MeasurementMotionComponents.push(motion_resp);
    
    MeasurementMotionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MeasurementMotionRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'MeasurementMotion'-------
    // get current time
    t = MeasurementMotionClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *motion_resp_description* updates
    if (t >= 0 && motion_resp_description.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      motion_resp_description.tStart = t;  // (not accounting for frame time here)
      motion_resp_description.frameNStart = frameN;  // exact frame index
      
      motion_resp_description.setAutoDraw(true);
    }

    
    // *motion_resp* updates
    if (t >= 0 && motion_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      motion_resp.tStart = t;  // (not accounting for frame time here)
      motion_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { motion_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { motion_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { motion_resp.clearEvents(); });
    }

    if (motion_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = motion_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _motion_resp_allKeys = _motion_resp_allKeys.concat(theseKeys);
      if (_motion_resp_allKeys.length > 0) {
        motion_resp.keys = _motion_resp_allKeys[_motion_resp_allKeys.length - 1].name;  // just the last key pressed
        motion_resp.rt = _motion_resp_allKeys[_motion_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    MeasurementMotionComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MeasurementMotionRoutineEnd() {
  return async function () {
    //------Ending Routine 'MeasurementMotion'-------
    MeasurementMotionComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(motion_resp.corr, level);
    }
    psychoJS.experiment.addData('motion_resp.keys', motion_resp.keys);
    if (typeof motion_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('motion_resp.rt', motion_resp.rt);
        routineTimer.reset();
        }
    
    motion_resp.stop();
    // the Routine "MeasurementMotion" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _target_resp_allKeys;
var MeasurementMaskingComponents;
function MeasurementMaskingRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'MeasurementMasking'-------
    t = 0;
    MeasurementMaskingClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    target_resp.keys = undefined;
    target_resp.rt = undefined;
    _target_resp_allKeys = [];
    // keep track of which components have finished
    MeasurementMaskingComponents = [];
    MeasurementMaskingComponents.push(target_resp_description);
    MeasurementMaskingComponents.push(target_resp);
    
    MeasurementMaskingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function MeasurementMaskingRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'MeasurementMasking'-------
    // get current time
    t = MeasurementMaskingClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *target_resp_description* updates
    if (t >= 0 && target_resp_description.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_resp_description.tStart = t;  // (not accounting for frame time here)
      target_resp_description.frameNStart = frameN;  // exact frame index
      
      target_resp_description.setAutoDraw(true);
    }

    
    // *target_resp* updates
    if (t >= 0.0 && target_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      target_resp.tStart = t;  // (not accounting for frame time here)
      target_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { target_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { target_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { target_resp.clearEvents(); });
    }

    if (target_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = target_resp.getKeys({keyList: ['1', '2'], waitRelease: false});
      _target_resp_allKeys = _target_resp_allKeys.concat(theseKeys);
      if (_target_resp_allKeys.length > 0) {
        target_resp.keys = _target_resp_allKeys[_target_resp_allKeys.length - 1].name;  // just the last key pressed
        target_resp.rt = _target_resp_allKeys[_target_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    MeasurementMaskingComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function MeasurementMaskingRoutineEnd() {
  return async function () {
    //------Ending Routine 'MeasurementMasking'-------
    MeasurementMaskingComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(target_resp.corr, level);
    }
    psychoJS.experiment.addData('target_resp.keys', target_resp.keys);
    if (typeof target_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('target_resp.rt', target_resp.rt);
        routineTimer.reset();
        }
    
    target_resp.stop();
    // the Routine "MeasurementMasking" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_7_allKeys;
var IntercycleBreak1Components;
function IntercycleBreak1RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IntercycleBreak1'-------
    t = 0;
    IntercycleBreak1Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_7.keys = undefined;
    key_resp_7.rt = undefined;
    _key_resp_7_allKeys = [];
    // keep track of which components have finished
    IntercycleBreak1Components = [];
    IntercycleBreak1Components.push(BreakAnnouncement_2);
    IntercycleBreak1Components.push(image_2);
    IntercycleBreak1Components.push(image_3);
    IntercycleBreak1Components.push(text_2);
    IntercycleBreak1Components.push(key_resp_7);
    
    IntercycleBreak1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntercycleBreak1RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IntercycleBreak1'-------
    // get current time
    t = IntercycleBreak1Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BreakAnnouncement_2* updates
    if (t >= 0.0 && BreakAnnouncement_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BreakAnnouncement_2.tStart = t;  // (not accounting for frame time here)
      BreakAnnouncement_2.frameNStart = frameN;  // exact frame index
      
      BreakAnnouncement_2.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (BreakAnnouncement_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BreakAnnouncement_2.setAutoDraw(false);
    }
    
    // *image_2* updates
    if (t >= 5.0 && image_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_2.tStart = t;  // (not accounting for frame time here)
      image_2.frameNStart = frameN;  // exact frame index
      
      image_2.setAutoDraw(true);
    }

    frameRemains = 5.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_2.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_2.setAutoDraw(false);
    }
    
    // *image_3* updates
    if (t >= 15 && image_3.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_3.tStart = t;  // (not accounting for frame time here)
      image_3.frameNStart = frameN;  // exact frame index
      
      image_3.setAutoDraw(true);
    }

    frameRemains = 15 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_3.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_3.setAutoDraw(false);
    }
    
    // *text_2* updates
    if (t >= 25 && text_2.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_2.tStart = t;  // (not accounting for frame time here)
      text_2.frameNStart = frameN;  // exact frame index
      
      text_2.setAutoDraw(true);
    }

    
    // *key_resp_7* updates
    if (t >= 25 && key_resp_7.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_7.tStart = t;  // (not accounting for frame time here)
      key_resp_7.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_7.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_7.clearEvents(); });
    }

    if (key_resp_7.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_7.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_7_allKeys = _key_resp_7_allKeys.concat(theseKeys);
      if (_key_resp_7_allKeys.length > 0) {
        key_resp_7.keys = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].name;  // just the last key pressed
        key_resp_7.rt = _key_resp_7_allKeys[_key_resp_7_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntercycleBreak1Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntercycleBreak1RoutineEnd() {
  return async function () {
    //------Ending Routine 'IntercycleBreak1'-------
    IntercycleBreak1Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_7.corr, level);
    }
    psychoJS.experiment.addData('key_resp_7.keys', key_resp_7.keys);
    if (typeof key_resp_7.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_7.rt', key_resp_7.rt);
        routineTimer.reset();
        }
    
    key_resp_7.stop();
    // the Routine "IntercycleBreak1" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_13_allKeys;
var IntercycleBreak2Components;
function IntercycleBreak2RoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'IntercycleBreak2'-------
    t = 0;
    IntercycleBreak2Clock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp_13.keys = undefined;
    key_resp_13.rt = undefined;
    _key_resp_13_allKeys = [];
    // keep track of which components have finished
    IntercycleBreak2Components = [];
    IntercycleBreak2Components.push(BreakAnnouncement);
    IntercycleBreak2Components.push(image);
    IntercycleBreak2Components.push(image_5);
    IntercycleBreak2Components.push(text_4);
    IntercycleBreak2Components.push(key_resp_13);
    
    IntercycleBreak2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function IntercycleBreak2RoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'IntercycleBreak2'-------
    // get current time
    t = IntercycleBreak2Clock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *BreakAnnouncement* updates
    if (t >= 0.0 && BreakAnnouncement.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      BreakAnnouncement.tStart = t;  // (not accounting for frame time here)
      BreakAnnouncement.frameNStart = frameN;  // exact frame index
      
      BreakAnnouncement.setAutoDraw(true);
    }

    frameRemains = 0.0 + 5.0 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (BreakAnnouncement.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      BreakAnnouncement.setAutoDraw(false);
    }
    
    // *image* updates
    if (t >= 5.0 && image.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image.tStart = t;  // (not accounting for frame time here)
      image.frameNStart = frameN;  // exact frame index
      
      image.setAutoDraw(true);
    }

    frameRemains = 5.0 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image.setAutoDraw(false);
    }
    
    // *image_5* updates
    if (t >= 15 && image_5.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      image_5.tStart = t;  // (not accounting for frame time here)
      image_5.frameNStart = frameN;  // exact frame index
      
      image_5.setAutoDraw(true);
    }

    frameRemains = 15 + 10 - psychoJS.window.monitorFramePeriod * 0.75;  // most of one frame period left
    if (image_5.status === PsychoJS.Status.STARTED && t >= frameRemains) {
      image_5.setAutoDraw(false);
    }
    
    // *text_4* updates
    if (t >= 25 && text_4.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_4.tStart = t;  // (not accounting for frame time here)
      text_4.frameNStart = frameN;  // exact frame index
      
      text_4.setAutoDraw(true);
    }

    
    // *key_resp_13* updates
    if (t >= 25 && key_resp_13.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp_13.tStart = t;  // (not accounting for frame time here)
      key_resp_13.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp_13.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp_13.clearEvents(); });
    }

    if (key_resp_13.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp_13.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_13_allKeys = _key_resp_13_allKeys.concat(theseKeys);
      if (_key_resp_13_allKeys.length > 0) {
        key_resp_13.keys = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].name;  // just the last key pressed
        key_resp_13.rt = _key_resp_13_allKeys[_key_resp_13_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    IntercycleBreak2Components.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function IntercycleBreak2RoutineEnd() {
  return async function () {
    //------Ending Routine 'IntercycleBreak2'-------
    IntercycleBreak2Components.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp_13.corr, level);
    }
    psychoJS.experiment.addData('key_resp_13.keys', key_resp_13.keys);
    if (typeof key_resp_13.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp_13.rt', key_resp_13.rt);
        routineTimer.reset();
        }
    
    key_resp_13.stop();
    // the Routine "IntercycleBreak2" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


var _key_resp_allKeys;
var EndComponents;
function EndRoutineBegin(snapshot) {
  return async function () {
    TrialHandler.fromSnapshot(snapshot); // ensure that .thisN vals are up to date
    
    //------Prepare to start Routine 'End'-------
    t = 0;
    EndClock.reset(); // clock
    frameN = -1;
    continueRoutine = true; // until we're told otherwise
    // update component parameters for each repeat
    key_resp.keys = undefined;
    key_resp.rt = undefined;
    _key_resp_allKeys = [];
    // keep track of which components have finished
    EndComponents = [];
    EndComponents.push(text_9);
    EndComponents.push(key_resp);
    
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent)
        thisComponent.status = PsychoJS.Status.NOT_STARTED;
       });
    return Scheduler.Event.NEXT;
  }
}


function EndRoutineEachFrame() {
  return async function () {
    //------Loop for each frame of Routine 'End'-------
    // get current time
    t = EndClock.getTime();
    frameN = frameN + 1;// number of completed frames (so 0 is the first frame)
    // update/draw components on each frame
    
    // *text_9* updates
    if (t >= 0.0 && text_9.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      text_9.tStart = t;  // (not accounting for frame time here)
      text_9.frameNStart = frameN;  // exact frame index
      
      text_9.setAutoDraw(true);
    }

    
    // *key_resp* updates
    if (t >= 0.0 && key_resp.status === PsychoJS.Status.NOT_STARTED) {
      // keep track of start time/frame for later
      key_resp.tStart = t;  // (not accounting for frame time here)
      key_resp.frameNStart = frameN;  // exact frame index
      
      // keyboard checking is just starting
      psychoJS.window.callOnFlip(function() { key_resp.clock.reset(); });  // t=0 on next screen flip
      psychoJS.window.callOnFlip(function() { key_resp.start(); }); // start on screen flip
      psychoJS.window.callOnFlip(function() { key_resp.clearEvents(); });
    }

    if (key_resp.status === PsychoJS.Status.STARTED) {
      let theseKeys = key_resp.getKeys({keyList: ['space'], waitRelease: false});
      _key_resp_allKeys = _key_resp_allKeys.concat(theseKeys);
      if (_key_resp_allKeys.length > 0) {
        key_resp.keys = _key_resp_allKeys[_key_resp_allKeys.length - 1].name;  // just the last key pressed
        key_resp.rt = _key_resp_allKeys[_key_resp_allKeys.length - 1].rt;
        // a response ends the routine
        continueRoutine = false;
      }
    }
    
    // check for quit (typically the Esc key)
    if (psychoJS.experiment.experimentEnded || psychoJS.eventManager.getKeys({keyList:['escape']}).length > 0) {
      return quitPsychoJS('The [Escape] key was pressed. Goodbye!', false);
    }
    
    // check if the Routine should terminate
    if (!continueRoutine) {  // a component has requested a forced-end of Routine
      return Scheduler.Event.NEXT;
    }
    
    continueRoutine = false;  // reverts to True if at least one component still running
    EndComponents.forEach( function(thisComponent) {
      if ('status' in thisComponent && thisComponent.status !== PsychoJS.Status.FINISHED) {
        continueRoutine = true;
      }
    });
    
    // refresh the screen if continuing
    if (continueRoutine) {
      return Scheduler.Event.FLIP_REPEAT;
    } else {
      return Scheduler.Event.NEXT;
    }
  };
}


function EndRoutineEnd() {
  return async function () {
    //------Ending Routine 'End'-------
    EndComponents.forEach( function(thisComponent) {
      if (typeof thisComponent.setAutoDraw === 'function') {
        thisComponent.setAutoDraw(false);
      }
    });
    // update the trial handler
    if (psychoJS.experiment.currentLoop instanceof MultiStairHandler) {
      psychoJS.experiment.currentLoop.addResponse(key_resp.corr, level);
    }
    psychoJS.experiment.addData('key_resp.keys', key_resp.keys);
    if (typeof key_resp.keys !== 'undefined') {  // we had a response
        psychoJS.experiment.addData('key_resp.rt', key_resp.rt);
        routineTimer.reset();
        }
    
    key_resp.stop();
    // the Routine "End" was not non-slip safe, so reset the non-slip timer
    routineTimer.reset();
    
    return Scheduler.Event.NEXT;
  };
}


function endLoopIteration(scheduler, snapshot) {
  // ------Prepare for next entry------
  return async function () {
    if (typeof snapshot !== 'undefined') {
      // ------Check if user ended loop early------
      if (snapshot.finished) {
        // Check for and save orphaned data
        if (psychoJS.experiment.isEntryEmpty()) {
          psychoJS.experiment.nextEntry(snapshot);
        }
        scheduler.stop();
      } else {
        const thisTrial = snapshot.getCurrentTrial();
        if (typeof thisTrial === 'undefined' || !('isTrials' in thisTrial) || thisTrial.isTrials) {
          psychoJS.experiment.nextEntry(snapshot);
        }
      }
    return Scheduler.Event.NEXT;
    }
  };
}


function importConditions(currentLoop) {
  return async function () {
    psychoJS.importAttributes(currentLoop.getCurrentTrial());
    return Scheduler.Event.NEXT;
    };
}


async function quitPsychoJS(message, isCompleted) {
  // Check for and save orphaned data
  if (psychoJS.experiment.isEntryEmpty()) {
    psychoJS.experiment.nextEntry();
  }
  psychoJS.window.close();
  psychoJS.quit({message: message, isCompleted: isCompleted});
  
  return Scheduler.Event.QUIT;
}
