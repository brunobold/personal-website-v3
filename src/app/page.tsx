import Image from "next/image";

import ImageCard from "@/components/imagecard";
import ScaleInView from "@/components/framer";

import Marquee from "@/components/marquee";

export default function Home() {
  return (
    <main>
      <div className="h-screen">
        <div className="p-32 px-48">
          <Image
            className="-mt-24 absolute right-16 z-10 -rotate-6 transform"
            src="/hover3.svg"
            alt="Hover"
            width={400}
            height={0}
          />
          <div className="md:grid grid-cols-3 grid-rows-5 gap-4 h-[550px]">
            <div className="relative group overflow-hidden flex items-center justify-center row-span-3 rounded-lg outline outline-2">
              <Image
                className="w-full h-full object-cover transition-all duration-400 ease-in-out transform group-hover:blur-[10px]"
                src="/placeholder/800x800.svg"
                alt="Logo"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white">Your Text Here</p>
              </div>
            </div>
            <div className="relative group overflow-hidden flex items-center justify-center row-span-4 rounded-lg outline outline-2">
              <Image
                className="w-full h-full object-cover transition-all duration-400 ease-in-out transform group-hover:blur-[10px]"
                src="/placeholder/800x800.svg"
                alt="Logo"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white">Your Text Here</p>
              </div>
            </div>
            <div className="relative group overflow-hidden flex items-center justify-center row-span-2 rounded-lg outline outline-2">
              <Image
                className="w-full h-full object-cover transition-all duration-400 ease-in-out transform group-hover:blur-[10px]"
                src="/placeholder/800x800.svg"
                alt="Logo"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white">Your Text Here</p>
              </div>
            </div>
            <div className="relative group overflow-hidden flex items-center justify-center row-span-3 rounded-lg outline outline-2">
              <Image
                className="w-full h-full object-cover transition-all duration-400 ease-in-out transform group-hover:blur-[10px]"
                src="/placeholder/800x800.svg"
                alt="Logo"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white">Your Text Here</p>
              </div>
            </div>
            <div className="relative group overflow-hidden flex items-center justify-center row-span-2 rounded-lg outline outline-2">
              <Image
                className="w-full h-full object-cover transition-all duration-400 ease-in-out transform group-hover:blur-[10px]"
                src="/placeholder/800x800.svg"
                alt="Logo"
                width={800}
                height={800}
              />
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
                <p className="text-white">Your Text Here</p>
              </div>
            </div>
            <div className="flex items-center justify-center row-span-1">
              <button
                role="button"
                aria-label="Click to perform an action"
                className="mb-2 w-full h-full flex items-center justify-center rounded-md border-2 border-black bg-[#fff] text-xl font-bold shadow-[0px_6px_0px_0px_rgba(90,81,248,1)] transition-all hover:translate-y-[3px] hover:shadow-none"
              >
                See More
                <Image
                  className="ml-2"
                  src="/arrow-right-solid.svg"
                  alt="Arrow"
                  width={16}
                  height={0}
                />
              </button>
            </div>
          </div>
          <Image
            className="-mt-8 absolute left-32 z-10 rotate-12 transform"
            src="/wow.svg"
            alt="Hover"
            width={200}
            height={0}
          />
        </div>

        <div className="p-32 text-center">
          <div>
            <h1 className="font-black text-8xl">ABOUT ME</h1>
          </div>
        </div>
      </div>
      {/* <div className="snap-y snap-mandatory h-screen w-screen overflow-x-hidden">
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
      </div> */}
    </main>
  );
}
