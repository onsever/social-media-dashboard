type WhoToFollowItem = {
  id: number;
  name: string;
  username: string;
  avatar: string;
};

const whoToFollow: WhoToFollowItem[] = [
  {
    id: 1,
    name: "Elon Musk",
    username: "elonmusk",
    avatar:
      "https://pbs.twimg.com/profile_images/1383184766959120385/MMb6hmm8_400x400.jpg",
  },
  {
    id: 2,
    name: "Sundar Pichai",
    username: "sundarpichai",
    avatar:
      "https://pbs.twimg.com/profile_images/864282616597405701/M-FEJMZ0_400x400.jpg",
  },
  {
    id: 3,
    name: "Yogesh Kumar",
    username: "yogesh",
    avatar:
      "https://pbs.twimg.com/profile_images/1383184766959120385/MMb6hmm8_400x400.jpg",
  },
];

export default whoToFollow;
