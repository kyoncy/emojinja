/* eslint-disable @typescript-eslint/camelcase */

interface EmojiList {
  [name: string]: {
    emoji: string;
    backgroundColor: string;
  };
}

const EmojiList: EmojiList = {
  white_check_mark: {
    emoji: "✅",
    backgroundColor: "#caf7c1",
  },
  fire: {
    emoji: "🔥",
    backgroundColor: "#ff7777",
  },
  package: {
    emoji: "📦",
    backgroundColor: "#f7e4c1",
  },
  recycle: {
    emoji: "♻️",
    backgroundColor: "#9affa1",
  },
  wrench: {
    emoji: "🔧",
    backgroundColor: "#dcdcdc",
  },
  pencil2: {
    emoji: "✏️",
    backgroundColor: "#fcba03",
  },
  bug: {
    emoji: "🐛",
    backgroundColor: "#1dbf35",
  },
  green_heart: {
    emoji: "💚",
    backgroundColor: "#47ff63",
  },
  sparkles: {
    emoji: "✨",
    backgroundColor: "#ffce47",
  },
  lipstick: {
    emoji: "💄",
    backgroundColor: "#f5427e",
  },
  whale: {
    emoji: "🐳",
    backgroundColor: "#94fffa",
  },
  wheelchair: {
    emoji: "♿️",
    backgroundColor: "#56cef0",
  },
  see_no_evil: {
    emoji: "🙈",
    backgroundColor: "#de893a",
  },
  ambulance: {
    emoji: "🚑",
    backgroundColor: "#ffe3e8",
  },
  zap: {
    emoji: "⚡️",
    backgroundColor: "#ffe342",
  },
  globe_with_meridians: {
    emoji: "🌐",
    backgroundColor: "#e7f4ff",
  },
  construction: {
    emoji: "🚧",
    backgroundColor: "#ffe342",
  },
  label: {
    emoji: "🏷",
    backgroundColor: "#fff8ed",
  },
};

export default EmojiList;
