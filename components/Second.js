import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Second() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 190,
      ease: "none",
      scrollTrigger: {
        trigger: imageRef.current,
        start: "top center",
        end: "bottom top",
        scrub: true,
       
        
      },
    });
  }, []);
  return (
    <div className=" h-screen overflow-x-hidden  overflow-hidden relative">
      <img ref={imageRef}  alt = 'wm vase' className="mx-auto h-96 absolute vaseImage top-0 " src="/Vase.png"></img>
    </div>
  );
}
