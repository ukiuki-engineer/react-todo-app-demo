# 勉強用: 仕様変更して遊ぶ

## 概要

Reactをほとんど触ったことがないので、既存ソースを色々いじってReactを勉強するのが目的。  
シンプルだしちゃんとコンポーネント分割もしてそうだったからこのソースを採用。

## TODO

やることリスト。  
完了た項目もメモ書きとして残しておく。

- [ ] 環境系
    - [ ] eslintが動かなくなったから入れ直す
- [x] Reactとはあんま関係ないちょっとした変更
    - [x] タスク入力欄を広げる
    - [x] クリックして何か起きるところは全部カーソルをポインターにする
    - [x] Todo1→1  
    ただの番号に変更する
- [x] チェック
    - [x] チェックボックスのみ反応するように
    - [x] チェック入れるとグレーアウト
- [x] 編集機能追加
    - [x] 編集アイコン追加
    - [x] クリックするとテキストボックス表示
    - [x] 空でもTodo追加できるように
- [x] 件数修正
    - 修正前: 残りTodo件数
    - 修正後: 未完了件数/合計件数
- [x] EnterでTodo追加
- [ ] ドラッグ＆ドロップで並び換え  
→候補は以下
    - `dod-kit`
    - `react-draggable`
- [ ] サブタスク機能  
    - [ ] 適当なボタンを用意
    - [ ] ボタンクリックするとインデントを深くする  
    →これでサブタスクっぽく見えるかな
- [ ] 削除ボタンclick時にconfirmするように
- [ ] 詳細入力欄を追加

---

以下、オリジナルのreadme

---

## Todo App for React

React（TypeScript）を使った、簡単な Todo アプリ開発

[React(TypeScript)の復習として簡単なTodoアプリを作ってみた話](https://zenn.dev/grazie/articles/cfb43e4b81a152)

### Start

```shell
# node バージョン確認
node -v

# package install
npm install

# server start
npm run start:legacy
```

### React プロジェクト開始方法

```shell
# JS
npx create-react-app { projectName }
# TS
npx create-react-app { projectName } --template typescript

# サーバー起動
cd { projectName }
npm start
```

### その他

```shell
# コンポーネント雛形作成コマンド(拡張機能)
refce
```
