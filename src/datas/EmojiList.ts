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
    emoji: '🔨',
    backgroundColor: '#dcdcdc',
    name: 'hammer',
  }, {
    emoji: '🔥',
    backgroundColor: '#ff7777',
    name: 'fire',
  }, {
    emoji: '📦',
    backgroundColor: '#f7e4c1',
    name: 'package',
  },
];

export default EmojiList;
