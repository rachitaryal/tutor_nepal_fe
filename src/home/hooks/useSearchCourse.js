import React, { useState } from "react";

function useSearchCourse() {
  const [search, setSearch] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const handleSearch = (e) => {
    setSearch(e.target.value);
    setIsSearching(true);
    if (e.target.value.length === 0) {
      setIsSearching(false);
    }
  };

  return [search, isSearching, handleSearch];
}

export default useSearchCourse;
