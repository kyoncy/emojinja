interface IEmojiList {
  emoji: string;
  backgroundColor: string;
  name: string;
};

const EmojiList: IEmojiList[] = [
  {
    emoji: '✅',
    backgroundColor: '#caf7c1',
    name: 'white_check_mark',
  }, {
    emoji: '🔥',
    backgroundColor: '#ff7777',
    name: 'fire',
  }, {
    emoji: '📦',
    backgroundColor: '#f7e4c1',
    name: 'package',
  }, {
    emoji: '♻️',
    backgroundColor: '#9affa1',
    name: 'recycle',
  }, {
    emoji: '🔧',
    backgroundColor: '#dcdcdc',
    name: 'wrench',
  }, {
    emoji: '✏️',
    backgroundColor: '#fcba03',
    name: 'pencil2',
  }, {
    emoji: '🐛',
    backgroundColor: '#1dbf35',
    name: 'bug',
  }, {
    emoji: '💚',
    backgroundColor: '#47ff63',
    name: 'green_heart',
  }, {
    emoji: '✨',
    backgroundColor: '#ffce47',
    name: 'sparkles',
  },
];

export default EmojiList;
