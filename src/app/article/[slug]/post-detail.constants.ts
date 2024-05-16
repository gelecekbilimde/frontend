export interface PostDetail {
  postId: string;
  header: string;
  description: string;
  slug: string;
  content: string;
  lastProcess: string;
  label: any;
  category: string;
  bredcrump: string;
  likeCount: number;
  liked: boolean;
  likeDate: string;
  active: boolean;
  editorList: boolean;
  createdAt: string;
  editor: string;
  creator: string;
  readTime: string;
  view: number;
  imageUrl: string;
}

export const postDetailData: PostDetail = {
  postId: "cb441e43-3262-4d48-8635-611d2e288872",
  header: "İlk Post22",
  description: "Özet",
  slug: "ilk-post22",
  content:
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex natus iusto dolor sequi, enim accusamus quidem quo. Ipsum libero accusantium, quisquam ab doloremque officia minima illum saepe earum perspiciatis asperiores. Assumenda porro, maiores temporibus deleniti repellat animi voluptas ab laborum totam corporis et iste soluta! Eius sequi animi saepe aspernatur nisi quae vel, ex magni libero eligendi corrupti beatae incidunt. Fugiat, numquam sit mollitia nemo, velit beatae, eos ipsa minus dolores commodi pariatur dolor! Nisi ipsa mollitia provident ea maxime! Accusantium unde esse voluptatibus quidem error enim voluptatum accusamus. Vitae. Quae excepturi aspernatur a molestias facere totam esse quo dolore possimus, numquam in maiores vitae quas sapiente ipsam. Quae ea saepe repudiandae numquam consequatur officia fugit recusandae eveniet, amet temporibus? Similique nostrum nam culpa doloremque quisquam perspiciatis dignissimos voluptas quis, atque explicabo iusto officia pariatur quia deleniti cumque ut repudiandae nulla accusantium aperiam quod? Explicabo totam aliquid nulla fugiat. Ipsam!",
  lastProcess: "CREATE",
  label: {},
  category: "Teknoloji",
  bredcrump: "Bilim > Güncel > Teknoloji",
  likeCount: 0,
  liked: true,
  likeDate: "2024-01-01 15:30:22",
  active: false,
  editorList: true,
  createdAt: "1 gün önce",
  editor: "Mert Çıkla",
  creator: "Halil Ulu",
  readTime: "6 dakika",
  view: 304,
  imageUrl: "/images/post-img.png",
};
