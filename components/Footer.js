export default function Footer() {
  return (
    <div className="h-32  overflow-hidden footer ">
      <hr className="w-screen "></hr>
      <div className='flex mx-96 h-full overflow-hidden'>
        <div className="container my-auto">
          <div className="w-1/2 ">
            <ul className="flex ">
              <li className="mx-2">CONTACT </li>
              <li className="mx-2">THEMES </li>
              <li className="mx-2">ABOUT </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <img alt='instagram icon' className="mx-2" src="/facebook.svg"></img>
            <img alt='facebook icon' className="mx-2" src="/instagram.svg"></img>
          </div>
        </div>
      </div>
    </div>
  );
}
