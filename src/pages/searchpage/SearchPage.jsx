import { useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

import { searchProductThunk } from "../../store/searchProductThunks";
import { HomePageHeader } from "../homepage/HomePageHeader";
import { SearchContent } from "./SearchContent";

export function SearchPage() {
  const [searchParams] = useSearchParams();
  const dispatch = useDispatch();

  const query = searchParams.get("query");

  useEffect(() => {
    if (query) {
      dispatch(searchProductThunk(query));
    }
  }, [query, dispatch]);

  return (
    <div>
      <HomePageHeader />
      <SearchContent />
    </div>
  );
}