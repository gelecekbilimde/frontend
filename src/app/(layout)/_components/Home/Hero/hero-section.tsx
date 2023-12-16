import Image from "next/image";

import { type IHero } from "./hero.constant";

interface Properties {
  item: IHero;
}

export default function HeroSection({ item }: Properties): JSX.Element {
  return (
    <>
      {item.image !== undefined && item.image !== "" ? (
        <figure>
          <Image
            src={`${item.image}`}
            alt="hero_images"
            width={704}
            height={300}></Image>
        </figure>
      ) : (
        <div>Resim eksik</div>
      )}

      <section className="px-6 py-5">
        <h1 itemProp="name" className="mb-2 break-words text-2xl font-bold">
          {item.title}
        </h1>

        <p itemProp="articleBody">{item.description}</p>
      </section>
    </>
  );
}
