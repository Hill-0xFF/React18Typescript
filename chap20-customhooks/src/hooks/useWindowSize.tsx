import { useState, useEffect } from "react";

type T_WindowSize = {
  width: number,
  height: number
}

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState<T_WindowSize>({
    width: 0,
    height: 0,
  })

  useEffect(() => {
    const handleWindowSize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: innerHeight
      })
    }
    (handleWindowSize)();

    window.addEventListener('resize', handleWindowSize)
    
    

    return () => window.removeEventListener('resize', handleWindowSize);
  }, [])

  return windowSize;
}

export default useWindowSize;