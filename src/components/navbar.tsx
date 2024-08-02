import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="py-8 flex justify-between items-center fixed w-full p-4 px-32 bg-[#fff8f2] z-50">
      <div className="flex-shrink-0">
        <p className="font-semibold">LOGO</p>
        {/* <Image
          className="transform transition-transform hover:scale-105"
          src="/logo.svg"
          alt="Logo"
          width={180}
          height={0}
        /> */}
      </div>
      <div className="flex space-x-4 font-extrabold">
        <p>ABOUT</p>
        <p>PROJECTS</p>
      </div>
    </nav>
  );
}
