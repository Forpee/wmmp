import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";

export default function Header() {
  return (
    <Navbar fixed='top' className="w-screen header flex justify-between " expand="lg">

    <div className='w-full flex justify-evenly'>
      <div className='mt-1 text-xl'>

        <h1>WMPH</h1>

      </div>
      <div className='flex'>

        <Nav.Link href='/'>CONTACT</Nav.Link>
        <Nav.Link href='/'>ABOUT</Nav.Link>

      </div>
    </div>
    
    </Navbar>
  );
}
