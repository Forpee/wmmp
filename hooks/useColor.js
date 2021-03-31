import { useEffect, useState, useRef } from "react";

function useColor() {
  const [isBlue, setBlue] = useState(false);
  const element = useRef(null);
  const second = useRef(null);

  const handleScroll = () => {
    function getPosition(element) {
      
      var yPosition = 0;
  
      while(element) {
         
          yPosition += (element.offsetTop - element.scrollTop + element.clientTop);
          element = element.offsetParent;
      }
  
      return   yPosition ;
  }
    

    if (element.current) {
   
      window.scrollY >= getPosition(element.current) &&
      window.scrollY <=getPosition(second.current)
        ? setBlue(true)
        : setBlue(false);
    }
  };
  // This function handles the scroll performance issue
  const debounce = (func, wait = 1, immediate = true) => {
    let timeOut;
    return () => {
      let context = this,
        args = arguments;
      const later = () => {
        timeOut = null;
        if (!immediate) func.apply(context, args);
      };
      const callNow = immediate && !timeOut;
      clearTimeout(timeOut);
      timeOut = setTimeout(later, wait);
      if (callNow) func.apply(context, args);
    };
  };

  useEffect(() => {
    window.addEventListener("scroll", debounce(handleScroll));
    return () => {
      window.removeEventListener("scroll", () => handleScroll);
    };
  }, [debounce, handleScroll]);

  return { isBlue, element, second };
}

export default useColor;
