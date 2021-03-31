import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import Image from 'next/Image'
export default function Header({ blue }) {
  return (
    <Navbar fixed='top' className={blue ? "w-screen  flex justify-between text-white " : "w-screen  flex justify-between header "  }expand="lg">

    <div className='w-full flex justify-evenly'>
      <div className='mt-1 text-xl'>

  
        <Image
        src="/Logo.png"
        alt="Logo"
        width={75}
        height={75}
      />

      </div>
      <div className='flex'>

        <Nav.Link href='/'>CONTACT</Nav.Link>
        <Nav.Link href='/'>ABOUT</Nav.Link>

      </div>
    </div>
    
    </Navbar>
  );
}
