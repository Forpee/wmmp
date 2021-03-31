import { useRef, useEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Second() {
  const imageRef = useRef(null);

  useEffect(() => {
    gsap.to(imageRef.current, {
      yPercent: 100,
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
    <div className=" h-screen w-screen overflow-x-hidden flex  overflow-hidden ">
    <div ref={imageRef} className="h-1/2 my-auto mx-auto">
    <img
        
        alt="wm vase"
        className="mx-auto vaseImage h-full "
        src="/Vase.png"
      ></img>
    </div>
    </div>
  );
}
