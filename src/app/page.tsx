import ImageCard from "@/components/card-image";

export default function Home() {
  return (
    <div className="container min-h-screen py-5 bg-lime-100">
      <h1 className="pb-5 text-center text-lg font-extrabold text-slate-700">Day 3 - Props NextJS</h1>

      <div className="flex gap-8 items-center justify-center flex-wrap">
        <ImageCard name="Abyssinian" image="https://cdn2.thecatapi.com/images/0XYvRd7oD.jpg" />
        <ImageCard name="Bombay" image="https://cdn2.thecatapi.com/images/5iYq9NmT1.jpg" />
        <ImageCard name="Cheetoh" image="https://cdn2.thecatapi.com/images/IFXsxmXLm.jpg" />
        <ImageCard name="Donskoy" image="https://cdn2.thecatapi.com/images/3KG57GfMW.jpg" />
        <ImageCard name="Aegean" image="https://cdn2.thecatapi.com/images/ozEvzdVM-.jpg" />
        <ImageCard name="American Curl" image="https://cdn2.thecatapi.com/images/xnsqonbjW.jpg" />
        <ImageCard name="American Shorthair" image="https://cdn2.thecatapi.com/images/JFPROfGtQ.jpg" />
      </div>
    </div>
  );
}
