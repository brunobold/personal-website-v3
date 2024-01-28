import Image from "next/image";

import ImageCard from "@/components/imagecard";
import ScaleInView from "@/components/framer";

export default function Home() {
  return (
    <main>
      <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
        <div className="snap-start h-screen w-screen flex items-center justify-center">
          <ScaleInView>
            <div className="grid grid-cols-1 md:grid-cols-2 w-screen items-center justify-items-center">
              <div>
                <p>content</p>
              </div>
              <div className="w-1/2 overflow-hidden rounded-md border-2 border-black font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)]">
                <Image
                  src="/placeholder/600x800.svg"
                  alt="Logo"
                  width={600}
                  height={800}
                />
              </div>
            </div>
          </ScaleInView>
        </div>
        <div className="snap-start h-screen w-screen flex items-center justify-center">
          <ScaleInView>
            <div className="px-48 grid grid-cols-1 md:grid-cols-3 w-screen items-center justify-items-center">
              <div>
                <ImageCard
                  header="PokeBox"
                  paragraph="Placeholder text goes here"
                  link="https://google.com/"
                  imageUrl="/placeholder/1200x800.svg"
                />
              </div>
              <div>
                <ImageCard
                  header="Personl Website"
                  paragraph="Placeholder text goes here"
                  link="https://google.com/"
                  imageUrl="/placeholder/1200x800.svg"
                />
              </div>
              <div>
                <ImageCard
                  header="Hello"
                  paragraph="Placeholder text goes here"
                  link="https://google.com/"
                  imageUrl="/placeholder/1200x800.svg"
                />{" "}
              </div>
            </div>
          </ScaleInView>
        </div>
        <div className="snap-start bg-yellow-400 h-screen w-screen flex items-center justify-center text-5xl">
          <ScaleInView>
            <p>Slide 3</p>
          </ScaleInView>
        </div>
        <div className="snap-start h-screen w-screen flex items-center justify-center text-5xl">
          <ScaleInView>
            <p>Slide 4</p>
          </ScaleInView>
        </div>
      </div>
    </main>
  );
}
