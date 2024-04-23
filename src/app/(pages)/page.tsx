import Image from "next/image";

export default function Page() {
  return (
    <div className="relative w-full">
      <div className="flex items-center justify-center mt-4 h-fit">
        <h1 className="absolute z-50 bottom-0 left-0 right-0 top-0 grid place-items-center text-[6rem] text-white ">
          VER-O-PESO
        </h1>
        <Image src="/01_veropeso.jpg" alt="Logo" width={1500} height={400} />
      </div>

      <div>

      </div>
    </div>
  );
}
