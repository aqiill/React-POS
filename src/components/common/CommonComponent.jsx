import { useEffect } from "react";

const CommonComponent = ({ pageTitle, backgroundStyle }) => {
  useEffect(() => {
    document.title = `POS | ${pageTitle}`;
    document.body.classList.add(
      "hold-transition",
      "light-mode",
      "sidebar-mini",
      "layout-fixed",
      "layout-navbar-fixed",
      "layout-footer-fixed",
      "sidebar-mini-xs"
    );
    document.body.style.background = backgroundStyle;

    return () => {
      document.body.classList.remove(
        "hold-transition",
        "light-mode",
        "sidebar-mini",
        "layout-fixed",
        "layout-navbar-fixed",
        "layout-footer-fixed",
        "sidebar-mini-xs"
      );
      document.body.style.background = null;
    };
  }, [pageTitle, backgroundStyle]);

  return null;
};

export default CommonComponent;
