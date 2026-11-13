import { useState } from "react";

export function useNavigation(pages) {
  const [currentPage, setCurrentPage] = useState(pages[0]);

  function navigate(page) {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  return { currentPage, navigate };
}
