import { MDXRemote } from "next-mdx-remote/rsc";
import { memo, Suspense } from "react";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import rehypeSanitize from "rehype-sanitize";
import Image from "next/image";
import { Separator } from "../ui/separator";

const CustomImage = ({
    src,
    alt,
  }: {
    src: string;
    alt: string;
  }): React.ReactNode => {
    return (
      <Image
        src={src}
        alt={alt}
        width={1000}
        height={500}
        className="!h-96 object-cover"
      />
    );
  };
  
  const mdxComponents = {
    hr: () => {
      return <Separator />;
    },
    img: (properties: any) => <CustomImage {...properties} />,
  };

export const MemoizedMarkdown = memo(({ content }: { content: string }) => {
  return (
    <article className="prose">
      <Suspense fallback={<>Loading...</>}>
        <MDXRemote
          source={content}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
              rehypePlugins: [rehypeSlug, rehypeAutolinkHeadings, rehypeSanitize],
            },
          }}
          components={mdxComponents}
        />
      </Suspense>
    </article>
  );
});

MemoizedMarkdown.displayName = "MemoizedMarkdown"; 
