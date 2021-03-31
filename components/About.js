import Image from "next/Image";
export default function About( {el} ) {
  return (
    <div ref={el} className="aboutBody w-screen h-screen flex text-white text-center">
      <div className="m-auto flex flex-col">
        <div className="py-4">
          <Image
            className=""
            src="/Logo.png"
            alt="Logo"
            width={75}
            height={75}
          />
          <p>WINNIE MADIKIZELA MANDELA PRODUCTIONS</p>
        </div>
        <div className="h-32 vl mx-auto"></div>
        <div className="py-4">
          <p className="w-96">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
        </div>
      </div>
    </div>
  );
}
