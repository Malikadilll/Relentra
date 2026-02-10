import { useEffect } from "react";
import { useLocation } from "react-router-dom";

export default function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    // This tells the browser to snap to the top-left corner
    window.scrollTo(0, 0);
  }, [pathname]); // This runs every time the path changes

  return null; // It renders nothing on the screen
}