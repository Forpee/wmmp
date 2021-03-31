export default function Team() {
  return (
    <div className="h-screen teamBody flex w-screen">
      <div className="my-auto h-1/2 w-screen flex relative">
        <div className="h-full blueCont w-1/12 "></div>
        <div className="w-5/12 p-10">
          <h1 className='text-3xl'>Lorem Ipsum Dolor</h1>
          <p className="my-16">
            Sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua. Ut enim ad minim
            veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat. Duis aute irure dolor in reprehenderit in
            voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
            officia deserunt mollit anim id est laborum.
          </p>
        </div>
        <div className="w-3/12">
          <img alt='Winnie Mandela' src="/wm.jpg"></img>
        </div>
        <div className="h-full blueCont w-3/12 right-0 absolute"></div>
      </div>
    </div>
  );
}
