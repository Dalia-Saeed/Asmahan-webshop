import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname, search } = useLocation();

  useEffect(() => {
    // This tells the browser to jump to the very top (0,0)
    window.scrollTo(0, 0);
  }, [pathname, search]); // Trigger this every time the URL or the Category (?cat=) changes

  return null;
};

export default ScrollToTop;
