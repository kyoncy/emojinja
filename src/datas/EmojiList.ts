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
  }, {
    emoji: '🔧',
    backgroundColor: '#dcdcdc',
    name: 'wrench',
    description: '設定ファイルの変更',
  }, {
    emoji: '✏️',
    backgroundColor: '#fcba03',
    name: 'pencil2',
    description: 'タイポの修正',
  }, {
    emoji: '🐛',
    backgroundColor: '#1dbf35',
    name: 'bug',
    description: 'バグの修正',
  }, {
    emoji: '💚',
    backgroundColor: '#47ff63',
    name: 'green_heart',
    description: 'CIの修正',
  }, {
    emoji: '✨',
    backgroundColor: '#ffce47',
    name: 'sparkles',
    description: '新機能の追加',
  },
];

export default EmojiList;
