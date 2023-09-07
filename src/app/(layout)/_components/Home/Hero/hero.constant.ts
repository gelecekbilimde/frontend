export interface IHero {
  title: string | null;
  content: string | null;
  image: string | null;
  avatar: string;
  authorname: string | null;
  author: string | null;
  date: string | null;
  category: string | null;
  postID: string | number | null;
  readingTime: string | null;
}

const HeroData: IHero[] = [
  {
    title: ' Lorem Ipsum Nedir?',
    content: `Lorem Ipsum, dizgi ve baskı endüstrisinde kullanılan mıgır metinlerdir. Lorem Ipsum, adı bilinmeyen bir matbaacının bir hurufat numune kitabı oluşturmak üzere bir yazı galerisini alarak karıştırdığı 15'lerden beri endüstri standardı sahte metinler olarak kullanılmıştır. Beşyüz yıl boyunca varlığını sürdürmekle kalmamış, aynı zamanda pek değişmeden elektronik dizgiye de sıçramıştır. 1960'larda Lorem Ipsum pasajları da içeren Letraset yapraklarının yayınlanması ile ve yakın zamanda Aldus PageMaker gibi Lorem Ipsum sürümleri içeren masaüstü yayıncılık yazılımları ile popüler olmuştur...`,
    image: '/images/hero_ımage.jpg',
    avatar: '',
    author: 'Yusuf Güneş',
    authorname: 'yusufgunes',
    date: '01.09.2023 - 12:00',
    readingTime: '5',
    category: 'Uzay Bilimleri',
    postID: '1',
  },
];

export default HeroData;
