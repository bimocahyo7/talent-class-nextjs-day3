import Image from "next/image";

interface Cat {
  name: string;
  image: string;
}

function ImageCard({ name, image }: Cat) {
  return (
    <div className="p-3 rounded-xl bg-indigo-100 border-4 border-indigo-300 transition duration-300 ease-in-out hover:scale-110">
      <Image src={image} alt={name} width={200} height={200} className="w-40 h-40 rounded-md object-cover" />
      <h2 className="text-center font-sans font-semibold text-pink-800">{name}</h2>
    </div>
  );
}

export default ImageCard;
