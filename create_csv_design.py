#!/usr/bin/env python3
# -*- coding: utf-8 -*-
'''
Created on Thursday - March 07 2024, 16:01:00

@author: Michele Svanera, University of Glasgow

This code generates the csv file for the design matrix.
We have conditions:
* blinking
* in-time and out-time with:
    - at the begin target
    - or late target

'''



## Imports


import os, sys
import argparse
from os.path import join as opj

import numpy as np
import pandas as pd
import datetime


## Paths and Constants

Path_out = './'
Repetitions = 10
Conditions = ['blinking', 'in-time_begin', 'in-time_late',
            'out-time_begin', 'out-time_late']
all_conditions = []
for i in Conditions:
    all_conditions += [i] * Repetitions

Columns = ['run', 'condition', 't_start', 't_end', 
        'screen_side', 'timing'
        ]
N_RUNS = 1
N_localisers = 3
Localiser_timing = 6                   # sec.

## Functions


## Main


def main(all_conditions):

    # Create the csv
    df = pd.DataFrame(columns=Columns)

    # Extract order of conditions (make it reproducible)
    all_conditions = np.random.RandomState(seed=42).permutation(all_conditions)

    t = 0
    for i_run in range(1, N_RUNS+1):
        print(i_run)
        
        # Add baseline
        begin_baseline = {'run': i_run, 'condition': 'baseline', 't_start': t, 't_end': t+20, 
            'screen_side': '', 'timing': 0,
            }
        t += 20
        df = pd.concat([df, pd.DataFrame([begin_baseline])], ignore_index=True)
        
        # Add conditions
        for j_cond in all_conditions:
            j_time = 14
            cond = {'run': i_run, 'condition': j_cond, 't_start': t, 't_end': t+j_time, 
                'screen_side': '', 'timing': 0,
                }
            t += j_time
            df = pd.concat([df, pd.DataFrame([cond])], ignore_index=True)

        # Final localiser
        for l_loc in range(N_localisers):
            l_time = 14
            l_localiser = {'run': i_run, 'condition': 'localiser', 't_start': t, 't_end': t+l_time,
                'screen_side': '', 'timing': Localiser_timing, 
                }
            t += l_time
            df = pd.concat([df, pd.DataFrame([l_localiser])], ignore_index=True)

    # Check results are ok in terms of timing
    total_time = df['t_end'].max()
    print(f'Total time: {total_time} seconds = {str(datetime.timedelta(seconds = total_time/N_RUNS))} (hh:mm::ss) per run')
    assert total_time == N_RUNS * (20 + 5*Repetitions*14 + 3*14), 'Total time is not correct'

    # In conditions within Conditions, select randomly between +1/-1 for the screen side
    sides = np.repeat([1], len(all_conditions) * N_RUNS)
    sides[:len(all_conditions) * N_RUNS//2] = -1
    sides = np.random.RandomState(seed=43).permutation(sides)

    i_side = 0
    for i_cond in df.index:
        if df.loc[i_cond, 'condition'] in Conditions:
            df.loc[i_cond, 'screen_side'] = sides[i_side]
            i_side += 1

    
    # Save csv
    df.to_csv(opj(Path_out, 'design.csv'), index=False)


    return


if __name__ == '__main__':


    main(all_conditions)
