interface IEmojiList {
  emoji: string;
  backgroundColor: string;
  name: string;
  description: string;
};

const EmojiList: IEmojiList[] = [
  {
    emoji: '✅',
    backgroundColor: '#caf7c1',
    name: 'white_check_mark',
    description: 'テストコードの追加・更新',
  }, {
    emoji: '🔥',
    backgroundColor: '#ff7777',
    name: 'fire',
    description: 'コード・ファイルの削除',
  }, {
    emoji: '📦',
    backgroundColor: '#f7e4c1',
    name: 'package',
    description: 'パッケージの追加・更新',
  }, {
    emoji: '♻️',
    backgroundColor: '#9affa1',
    name: 'recycle',
    description: 'コードのリファクタ',
  },
];

export default EmojiList;
