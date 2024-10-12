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
  cover: string;
  imageUrl: string;
  references: Reference[];
}

export interface Reference{
  title: string;
  link: string;
}

export const defaultPostsConstants: PostDetail[] = [
  {
    postId: "1",
    header: "Teknolojinin Geleceği",
    description: "Teknolojinin geleceği hakkında bir özet",
    slug: "teknolojinin-gelecegi",
    content: `
# Teknolojinin Geleceği

Teknoloji, hızla gelişen ve hayatımızın her alanını etkileyen bir güç haline gelmiştir. Gelecekte, bu gelişim ivmesi daha da artacak ve şu alanlarda büyük değişimlere yol açacaktır:

## 1. Yapay Zeka (AI) ve Makine Öğrenimi
Yapay zeka, insanların karmaşık problemleri çözme yeteneğini artırarak daha verimli çözümler üretmeye devam edecektir. Özellikle **sağlık**, **eğitim** ve **finans** gibi sektörlerde devrim niteliğinde yenilikler beklenmektedir.

## 2. Nesnelerin İnterneti (IoT)
IoT, fiziksel cihazların internet üzerinden birbirleriyle iletişim kurmasını sağlar. Gelecekte **akıllı evler**, **şehirler** ve **endüstriler** yaygınlaşacak, günlük yaşamın her alanında otomasyon daha da artacaktır.

## 3. Kuantum Bilgisayarlar
Kuantum bilgisayarlar, klasik bilgisayarlara kıyasla çok daha karmaşık işlemleri gerçekleştirebilme yeteneğine sahiptir. Bu teknoloji, özellikle **kriptografi**, **simülasyon** ve **bilimsel araştırmalar** alanında büyük ilerlemeler sağlayacaktır.

## 4. Sürdürülebilir Teknolojiler
Gelecekte, **yenilenebilir enerji** kaynaklarına dayalı teknolojiler daha fazla önem kazanacaktır. **Güneş enerjisi**, **rüzgar enerjisi** ve **elektrikli araçlar** gibi çözümler, çevre dostu ve sürdürülebilir bir yaşam sunacaktır.

Teknolojinin geleceği, insanların yaşam kalitesini artırmaya yönelik yeniliklerle dolu olacak. Bu gelişmeler, yeni fırsatların yanı sıra, etik ve sosyal sorumluluk gibi konularda da tartışmaları beraberinde getirecektir.
`,
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Teknoloji",
    bredcrump: "Bilim > Teknoloji",
    likeCount: 10,
    liked: true,
    likeDate: "2024-01-01 15:30:22",
    active: true,
    editorList: true,
    createdAt: "2 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "5 dakika",
    view: 150,
    imageUrl: "/images/tech-future-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "2",
    header: "Yapay Zeka ve Etkileri",
    description: "Yapay zeka ve etkileri hakkında bir özet",
    slug: "yapay-zeka-ve-etkileri",
    content:
      "Yapay zeka ve etkileri hakkında detaylı içerik. Yapay zeka, günümüzde birçok sektörde devrim yaratıyor. Sağlık hizmetlerinden finansal hizmetlere, eğitimden eğlenceye kadar birçok alanda yapay zeka uygulamaları kullanılmaktadır. Bu makalede, yapay zekanın bu alanlardaki etkilerini ve gelecekte neler bekleyebileceğimizi tartışacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Bilim",
    bredcrump: "Bilim > Yapay Zeka",
    likeCount: 20,
    liked: false,
    likeDate: "2024-01-02 12:20:10",
    active: true,
    editorList: true,
    createdAt: "3 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "7 dakika",
    view: 200,
    imageUrl: "/images/ai-effects-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "3",
    header: "Sağlıklı Yaşam İpuçları",
    description: "Sağlıklı yaşam hakkında bir özet",
    slug: "saglikli-yasam-ipuclari",
    content:
      "Sağlıklı yaşam hakkında detaylı içerik. Sağlıklı bir yaşam sürdürmek, hem fiziksel hem de zihinsel sağlığımız için önemlidir. Bu makalede, sağlıklı beslenme, düzenli egzersiz, yeterli uyku ve stres yönetimi gibi konularda ipuçları ve öneriler bulacaksınız. Ayrıca, sağlıklı yaşam tarzını benimsemenin uzun vadeli faydalarını da ele alacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Sağlık",
    bredcrump: "Sağlık > Yaşam",
    likeCount: 15,
    liked: true,
    likeDate: "2024-01-03 10:15:30",
    active: true,
    editorList: true,
    createdAt: "4 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "6 dakika",
    view: 180,
    imageUrl: "/images/healthy-living-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "4",
    header: "Seyahat Rehberi: Paris",
    description: "Paris seyahat rehberi hakkında bir özet",
    slug: "seyahat-rehberi-paris",
    content:
      "Paris seyahat rehberi hakkında detaylı içerik. Paris, dünyanın en popüler turistik destinasyonlarından biridir. Bu makalede, Paris'te gezilecek yerler, yapılacak aktiviteler, yeme içme önerileri ve konaklama seçenekleri hakkında bilgi bulacaksınız. Ayrıca, Paris'te geçireceğiniz zamanı en iyi şekilde değerlendirmeniz için ipuçları da sunacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Seyahat",
    bredcrump: "Seyahat > Avrupa",
    likeCount: 25,
    liked: false,
    likeDate: "2024-01-04 09:10:05",
    active: true,
    editorList: true,
    createdAt: "5 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "8 dakika",
    view: 220,
    imageUrl: "/images/paris-guide-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "5",
    header: "Girişimcilik ve Başarı Hikayeleri",
    description: "Girişimcilik ve başarı hikayeleri hakkında bir özet",
    slug: "girisimcilik-ve-basari-hikayeleri",
    content:
      "Girişimcilik ve başarı hikayeleri hakkında detaylı içerik. Girişimcilik, birçok insan için büyük bir hayaldir. Bu makalede, başarılı girişimcilerin hikayelerini ve bu başarıya nasıl ulaştıklarını inceleyeceğiz. Ayrıca, girişimcilik yolculuğunda karşılaşılan zorluklar ve bu zorlukların nasıl aşılabileceği konusunda da bilgiler bulacaksınız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "İş Dünyası",
    bredcrump: "İş Dünyası > Girişimcilik",
    likeCount: 30,
    liked: true,
    likeDate: "2024-01-05 08:05:00",
    active: true,
    editorList: true,
    createdAt: "6 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "9 dakika",
    view: 250,
    imageUrl: "/images/entrepreneurship-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "6",
    header: "Dijital Pazarlama Stratejileri",
    description: "Dijital pazarlama stratejileri hakkında bir özet",
    slug: "dijital-pazarlama-stratejileri",
    content:
      "Dijital pazarlama stratejileri hakkında detaylı içerik. Dijital pazarlama, günümüzde işletmeler için vazgeçilmez bir araç haline gelmiştir. Bu makalede, dijital pazarlama stratejileri, sosyal medya yönetimi, SEO, içerik pazarlaması ve diğer dijital pazarlama teknikleri hakkında bilgi bulacaksınız. Ayrıca, başarılı bir dijital pazarlama kampanyası oluşturmanın ipuçlarını da paylaşacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Pazarlama",
    bredcrump: "Pazarlama > Dijital",
    likeCount: 35,
    liked: false,
    likeDate: "2024-01-06 07:00:45",
    active: true,
    editorList: true,
    createdAt: "7 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "10 dakika",
    view: 300,
    imageUrl: "/images/digital-marketing-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "7",
    header: "Yemek Tarifleri: Vegan Yemekler",
    description: "Vegan yemek tarifleri hakkında bir özet",
    slug: "yemek-tarifleri-vegan-yemekler",
    content:
      "Vegan yemek tarifleri hakkında detaylı içerik. Vegan beslenme, sağlıklı ve sürdürülebilir bir yaşam tarzı için harika bir seçenektir. Bu makalede, lezzetli ve besleyici vegan yemek tarifleri bulacaksınız. Ayrıca, vegan beslenmenin sağlık faydaları ve vegan yemeklerin nasıl hazırlanacağı konusunda da bilgiler sunacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Yemek",
    bredcrump: "Yemek > Vegan",
    likeCount: 40,
    liked: true,
    likeDate: "2024-01-07 06:55:30",
    active: true,
    editorList: true,
    createdAt: "8 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "11 dakika",
    view: 350,
    imageUrl: "/images/vegan-recipes-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "8",
    header: "Moda Trendleri 2024",
    description: "2024 moda trendleri hakkında bir özet",
    slug: "moda-trendleri-2024",
    content:
      "2024 moda trendleri hakkında detaylı içerik. Moda dünyası sürekli değişiyor ve her yıl yeni trendler ortaya çıkıyor. Bu makalede, 2024 yılının moda trendlerini ve bu trendlerin nasıl uygulanabileceğini inceleyeceğiz. Ayrıca, gardırobunuzu bu trendlere göre nasıl güncelleyebileceğiniz konusunda da ipuçları bulacaksınız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Moda",
    bredcrump: "Moda > Trendler",
    likeCount: 45,
    liked: false,
    likeDate: "2024-01-08 05:50:15",
    active: true,
    editorList: true,
    createdAt: "9 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "12 dakika",
    view: 400,
    imageUrl: "/images/fashion-trends-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "9",
    header: "Kişisel Gelişim ve Motivasyon",
    description: "Kişisel gelişim ve motivasyon hakkında bir özet",
    slug: "kisisel-gelisim-ve-motivasyon",
    content:
      "Kişisel gelişim ve motivasyon hakkında detaylı içerik. Kişisel gelişim, bireyin potansiyelini en üst düzeye çıkarmak için sürekli olarak kendini geliştirmesidir. Bu makalede, kişisel gelişim teknikleri, motivasyon stratejileri ve başarıya ulaşmanın yolları hakkında bilgi bulacaksınız. Ayrıca, kişisel gelişim yolculuğunuzda size rehberlik edecek ipuçları da sunacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Kişisel Gelişim",
    bredcrump: "Kişisel Gelişim > Motivasyon",
    likeCount: 50,
    liked: true,
    likeDate: "2024-01-09 04:45:00",
    active: true,
    editorList: true,
    createdAt: "10 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "13 dakika",
    view: 450,
    imageUrl: "/images/personal-development-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
  {
    postId: "10",
    header: "Finansal Özgürlük İçin İpuçları",
    description: "Finansal özgürlük için ipuçları hakkında bir özet",
    slug: "finansal-ozgurluk-icin-ipuclari",
    content:
      "Finansal özgürlük için ipuçları hakkında detaylı içerik. Finansal özgürlük, birçok insanın hayalidir. Bu makalede, finansal özgürlüğe ulaşmanın yolları, bütçe yönetimi, yatırım stratejileri ve borçtan kurtulma yöntemleri hakkında bilgi bulacaksınız. Ayrıca, finansal hedeflerinize ulaşmanız için pratik ipuçları da paylaşacağız.",
    lastProcess: "CREATE",
    cover: "/images/post-image.png",
    label: {},
    category: "Finans",
    bredcrump: "Finans > Özgürlük",
    likeCount: 55,
    liked: false,
    likeDate: "2024-01-10 03:40:45",
    active: true,
    editorList: true,
    createdAt: "11 gün önce",
    editor: "Ali Osman Delişmen",
    creator: "Ali Osman Delişmen",
    readTime: "14 dakika",
    view: 500,
    imageUrl: "/images/financial-freedom-img.png",
    references: [
      {
        title: "[1] Chu, B., Marwaha, K., Sanvictores, T., & Ayers, D. (2022). Physiology, Stress Reaction. National Library of Medicine.",
        link:"https://www.ncbi.nlm.nih.gov/books/NBK541120/%20"
      },
      {
        title: "[2] Krokstad, S., Langhammer, A., Hveem, K., Holmen, T. L., Midthjell, K., Stene, T. R., Bratberg, G., Heggland, J., & Holmen, J. (2012). Cohort Profile: The HUNT Study, Norway. International Journal of Epidemiology, 42(4), 968–977.",
        link:"https://doi.org/10.1093/ije/dys095%20"
      },
      {
        title: "[3] Henriksen, R.E., Nilsen, R.M., & Strandberg, R.B. (2022). Loneliness increases the risk of type 2 diabetes: a 20 year follow-up – results from the HUNT study. Diabetologia, 66, 82-92.",
        link:"https://doi.org/10.1007/s00125-022-05791-6%20"
      },
      {
        title: "[4] Hemoglobin A1C (HbA1c) Test. (n.d.). Medline Plus.",
        link:"https://www.webmd.com/diabetes/guide/glycated-hemoglobin-test-hba1c%20"
      },
    ]
  },
];
