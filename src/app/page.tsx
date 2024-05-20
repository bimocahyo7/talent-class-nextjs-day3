import ImageCard from "@/components/card-image";

export default function Home() {
  return (
    <div className="container py-5">
      <h1 className="pb-5 text-center font-extrabold">Day 3 - Props NextJS</h1>

      <div className="flex gap-6 items-center justify-center">
        <ImageCard name="Abyssinian" image="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
        <ImageCard name="Bombay" image="https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg" />
        <ImageCard name="Cheetoh" image="https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg" />
        <ImageCard name="Donskoy" image="https://cdn2.thecatapi.com/images/3KG57GfMW.jpg" />
      </div>
    </div>
  );
}
