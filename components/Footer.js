export default function Footer() {
  return (
    <div className="h-32 border-t-2 overflow-hidden footer ">
    
      <div className='flex justify-center h-full overflow-hidden'>
        
          <div className="w-1/2 my-auto ">
            <ul className="flex ">
              <li className="mx-2">CONTACT </li>
              
              <li className="mx-2">ABOUT </li>
            </ul>
          </div>
          <div className="flex justify-end">
            <img alt='instagram icon' className="mx-2" src="/facebook.svg"></img>
            <img alt='facebook icon' className="mx-2" src="/instagram.svg"></img>
          </div>
       
      </div>
    </div>
  );
}
