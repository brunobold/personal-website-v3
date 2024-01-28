import Image from "next/image";

export default function Navbar() {
  return (
    <nav className="navbar fixed w-full flex items-center justify-between p-6 pl-16 pr-16">
      <div>
        <p>Placeholder</p>
        {/* <button
          role="button"
          aria-label="Click to perform an action"
          className="cursor-pointer items-center rounded-md border-2 border-black bg-[#ef8b26] px-6 py-2 font-bold shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] transition-all hover:translate-x-[3px] hover:translate-y-[3px] hover:shadow-none"
        >
          Menu
        </button> */}
      </div>
      <Image
        className="transform transition-transform hover:scale-105"
        src="/logo.svg"
        alt="Logo"
        width={200}
        height={0}
      />
      <div>
        <Image src="/mail.svg" alt="Mail" width={35} height={1} />
      </div>
    </nav>
  );
}
