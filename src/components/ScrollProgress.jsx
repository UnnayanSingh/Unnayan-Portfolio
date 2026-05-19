import { useEffect, useState } from "react";

function ScrollProgress() {

  const [scroll, setScroll] = useState(0);

  useEffect(() => {

    const handleScroll = () => {

      const totalHeight =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;

      const scrollPosition = window.scrollY;

      const scrollPercent =
        (scrollPosition / totalHeight) * 100;

      setScroll(scrollPercent);
    };

    window.addEventListener("scroll", handleScroll);

    return () =>
      window.removeEventListener("scroll", handleScroll);

  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-1 bg-yellow-400 z-[100]"
      style={{ width: `${scroll}%` }}
    ></div>
  );
}

export default ScrollProgress;