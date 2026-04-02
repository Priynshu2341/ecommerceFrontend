import { useLocation } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { searchProductThunk } from "../../store/searchProductThunks";
import { HomePageHeader } from "../homepage/HomePageHeader";
import { SearchContent } from "./SearchContent";

export function SearchPage() {
  const location = useLocation();
  const dispatch = useDispatch();

  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const query = params.get("query");

    if (query) {
      dispatch(searchProductThunk(query));
    }
  }, [location.search, dispatch]);

  return (
    <div>
      <HomePageHeader />
      <SearchContent />
    </div>
  );
}