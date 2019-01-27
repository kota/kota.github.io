# PioHelperとは

このプログラムはPokerStarsのハンド履歴に対してPioSOLVERを自動で走らせる機能を提供します。

[Download PioHelper.zip](./release/PioHelper_0_1_2.zip)

# 使い方

## 準備

- Rangesディレクトリに各ポジションと相手毎にレンジファイル(PioSOLVERで保存した.txtファイル)を置く。ファイルの命名規則は後述。

## 実行手順

### PioSOLVERのパスを設定
- "PioSolver Path"の横のOpenボタンをクリックしてPioSolverのexeファイル(PioSOLVER-pro.exeかPioSOLVER-edge.exe)を指定する。

### PioSOLVERのパラメタを設定
- bet size, raise size, accuracyを入力する。
  - bet size, raise sizeは%記法のみ。PioSolverが提供している"x2.5"のような記法には未対応。

### ハンドの読み込み

ハンドを読み込むには以下の二つの方法があります。
1. PokerTrackerかHoldemManagerでexportしたハンド履歴を読み込む。
1. ハンド履歴をHandHistoryディレクトリに置いて、読み込みたいハンドのHand#を入力する。

#### PokerTracker、Holdem Managerのexportから読み込む

- ハンド履歴をエクスポート
  - PokerTracker
    - ResultsやStatisticsの画面で読み込みたい対象のハンドを選択し、右クリックして"Export Hand Histories"をクリック。
  - Holdem Manager 
    - 読み込みたい対象のハンドを選択し、右クリックして"Save to hard drive.."をクリック。
- ハンド履歴のテキストファイルが保存される。
- PioHelperの"Open hand history file"をクリック。
- ダイアログが開かれるので先ほど保存したハンド履歴ファイルを選択する。

#### Hand#を指定して読み込む。
- "HandHistory"ディレクトリに解析したいハンドが含まれているハンド履歴ファイル(HH20190112 Aludra #2 - $0.05-$0.10 - USD No Limit Hold'em.txtのようなファイル)を置く(複数ファイル配置可)。
- "Hand #"に解析したいハンドのHand#をカンマ区切りで入力。
- "Load Hands"をクリック。

### レンジの割り当て
 
- 各ハンドの"OOP range"と"IP range"を適宜選択する。
- 以下の規則に従ったファイル名のファイルが"Ranges"ディレクトリにある場合はそのレンジが自動で選択される。
  - オープンしたプレイヤーのレンジは"{pos}.txt"
    - posはオープンしたプレイヤーのポジション
  - コールやリレイズをしたプレイヤーのレンジは"{pos1}vs{pos2}.txt"
    - pos1はコールやリレイズをしたプレイヤーのポジション、pos2はオープンしたプレイヤーのポジション
  - 例
    - フロップに参加したプレイヤーがUTGとBUだった場合
      - UTGのレンジは"UTG.txt"
      - BBのレンジは"BBvsUTG.txt"
  - 3bet以上が入った場合は場合はそれぞれ"{pos1}vs{pos2}-{3,4,5...}bet.txt"と"{pos2}vs{pos1}-{3,4,5...}bet.txt"
    - 例
      - UTGがオープン、COが3bet、UTGがコールの場合
        - UTGのレンジは"UTGvsCO-3bet.txt"
        - COのレンジは"COvsUTG-3bet.txt"

### 解析
- "GO"ボタンをクリックする。
- しばらく待つと画面下部のログに"Analyzed all hands successfully."と表示され、各ハンドの.cfrファイルがこのプログラムのexeファイルと同階層のSaveディレクトリ内に生成される。
