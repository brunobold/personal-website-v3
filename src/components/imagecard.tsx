import Link from "next/link";

type Props = {
  imageUrl: string;
  link?: string;
  header: string;
  paragraph: string;
};

export default function ImageCard({
  imageUrl,
  link,
  header,
  paragraph,
}: Props) {
  const CardContent = (
    <figure className="w-[160px] md:w-[350px] overflow-hidden rounded-md border-2 border-black bg-[#bc95d4] shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none">
      <img className="w-full" src={imageUrl} alt="image" />
      <figcaption className="border-t-2 border-black p-4">
        <h1 className="font-bold text-2xl">{header}</h1>
        <p className="font-normal text-md">{paragraph}</p>
      </figcaption>
    </figure>
  );

  return link ? <Link href={link}>{CardContent}</Link> : CardContent;
}
