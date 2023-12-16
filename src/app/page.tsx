import Hero from "@/app/(layout)/_components/Home/Hero/index";
import MainLayout from "@/app/(layout)/_components/MainLayout/index";

export default function Home(): JSX.Element {
  return (
    <MainLayout>
      <Hero />
    </MainLayout>
  );
}
