import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Page ko top pe le aata hai
  }, [pathname]);

  return null;
};

export default ScrollToTop;
