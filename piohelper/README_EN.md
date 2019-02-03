PioHelper helps you review your hand history using PioSOLVER.
You can run analysis on multiple hands sequentially.

Currently, only PokerStars 6max Zoom is supported.

Tested on Windows 10, but may work on Windows 7 or older.

# Install

Extract the downloaded zip to an appropriate directory.

# Update

Expand the downloaded zip and overwrite PioHelper.exe.

# How to use

## Prepare range files

- Place a range file (.txt file saved with PioSOLVER) for each position and each opponent's position in the "Ranges" directory.
- File naming conventions will be described in detail later.

## After launching PioHelper.exe

### Set the path to PioSOLVER
- Click the Open button next to "PioSolver Path" and specify the PioSolver exe file (PioSOLVER-pro.exe or PioSOLVER-edge.exe).

### Set PioSOLVER parameters
- Enter bet size, raise size and accuracy.
  - bet size and raise size support the % notation. It does not support the notation like "x2.5".
  - Comma separated numbers can be entered in bet size and raise size. Ex. "30, 60".

### Load hands
There are two ways to load hands.
1. Load hand history file exported by PokerTracker or HoldemManager.
1. Place the hand history files in the HandHistory directory and enter Hand # of the hands you want to read.

#### Load from PokerTracker, Holdem Manager's export
- Export Hand History
  - PokerTracker
    - Select the target hands you want to load on the screens like "results" or "statistics", right click and click "Export Hand Histories".
  - Holdem Manager
    - Select the hand you want to import, right click and click "Save to hard drive .."
- A text file of the hand history will be saved.
- Click "Open hand history file" on PioHelper.
- Select the hand history file saved earlier.

#### Load hand histories and specify Hand #s.
- Place hand history files (the file with the name like "HH20190112 Aludra #2-$0.05-$0.10-USD No Limit Hold'em.txt") containing hands to analyze in the "HandHistory" directory (multiple files can be placed).
- Enter Hand # of the hands you want to load into "Hand #" in a comma sparated manner.
- Click "Load Hands".

### Range assignment
- Select "OOP range" and "IP range" for each hands.
- The range file will be assigned automatically if a file with the following naming rules is in the "Ranges" directory.
  - The range of the opened player is "{pos}.txt"
    - pos is the position of the opened player
  - The range of the player who made the call or re-raised is "{pos1}vs{pos2}.txt"
    - pos1 is the position of the player who made the call or re-raise, pos2 is the position of the opened player
  - Example
    - When players who participated on the flop were UTG and BU,
      - "UTG.txt" will be assigned to UTG.
      - "BBvsUTG.txt" will be assigned to BB. 
  - If 3+ bets are occurred, "{pos1}vs{pos2}-{3,4,5...}bet.txt" and "{pos2}vs{pos1}-{3,4,5...}bet.txt" will be assigned.
    - Example
      - UTG opens, CO 3 bets, UTG calls
        - "UTGvsCO-3bet.txt" will be assigned to UTG.
        - "COvsUTG-3bet.txt" will be assigned to CO.

### Run analysis
- Click the "GO" button.
  - If "include river" is checked, the .cfr file will include the river calculation.
  - Be warned that including the river increases the file size drastically.
- Wait for a while until "Analyzed all hands successfully." appears in the log at the bottom of the screen
- The .cfr file of each hand is created in the Save directory at the same level as the PioHelper.exe.
