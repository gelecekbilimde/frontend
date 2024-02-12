import Layout from "../components/layout/main-layout";

export default function NotFound(): JSX.Element {
  return (
    <Layout>
      <div className="flex w-full flex-col items-center justify-center gap-8 py-40">
        <h1 className="w-full text-center text-6xl font-bold">{"404 :("}</h1>
        <h2 className="w-full text-center text-3xl">
          Hay aksi! Aradığınız sayfayı bulamadık.
        </h2>
      </div>
    </Layout>
  );
}
