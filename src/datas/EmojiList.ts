interface IEmojiList {
  [name: string]: {
    emoji: string;
    backgroundColor: string;
  }
};

const EmojiList: IEmojiList = {
  white_check_mark: {
    emoji: '✅',
    backgroundColor: '#caf7c1',
  },
  fire: {
    emoji: '🔥',
    backgroundColor: '#ff7777',
  },
  package: {
    emoji: '📦',
    backgroundColor: '#f7e4c1',
  },
  recycle: {
    emoji: '♻️',
    backgroundColor: '#9affa1',
  },
  wrench: {
    emoji: '🔧',
    backgroundColor: '#dcdcdc',
  },
  pencil2: {
    emoji: '✏️',
    backgroundColor: '#fcba03',
  },
  bug: {
    emoji: '🐛',
    backgroundColor: '#1dbf35',
  },
  green_heart: {
    emoji: '💚',
    backgroundColor: '#47ff63',
  },
  sparkles: {
    emoji: '✨',
    backgroundColor: '#ffce47',
  },
};

export default EmojiList;
