import Image from "next/image";

interface Cat {
  name: string;
  image: string;
}

function ImageCard({ name, image }: Cat) {
  return (
    <div>
      <Image src={image} alt={name} width={200} height={200} className="w-48 h-48 rounded-xl object-cover" />
      <h2 className="text-center">{name}</h2>
    </div>
  );
}

export default ImageCard;
