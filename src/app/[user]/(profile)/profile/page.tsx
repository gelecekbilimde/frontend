import Card from '../_components/card';

interface Properties {
  params: {
    user: string;
  };
}

const posts = [
  {
    title: 'Post Title',
    content: ` Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer ipsum arcu, iaculis et ultricies et, dictum non dui. Fusce rutrum tortor mi. Fusce at dictum tortor. Sed luctus est quis lacus consectetur, sed hendrerit ligula tristique. Aliquam ut nulla mollis mauris pretium semper. Donec vel dignissim dui, vitae iaculis neque. Mauris sit amet efficitur libero. Donec ornare tristique tristique.

    Suspendisse sed urna lorem. Sed dignissim justo sit amet nulla pulvinar consectetur. Pellentesque at varius lorem. Donec rhoncus eros sit amet lobortis sollicitudin. Nulla facilisi. Vestibulum congue ex id suscipit luctus. Donec sapien leo, luctus nec neque eget, posuere accumsan sapien. Pellentesque quis justo lectus. Praesent sapien eros, finibus ac est sed, rhoncus aliquet enim. Sed ac felis eget dui sagittis commodo id id nulla. Suspendisse potenti. `,
  },
];

export default function UserPage({ params }: Properties) {
  return (
    <>
      <h1 className="py-2 ps-4 text-2xl font-bold">Yazılar</h1>
      {posts.map((post) => (
        <Card key={post.title} col>
          <h2 className="py-2 ps-4 text-xl font-bold">{post.title}</h2>
          <p>{post.content}</p>
        </Card>
      ))}
    </>
  );
}
