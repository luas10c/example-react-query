"use client";

import { useQuery } from "@tanstack/react-query";

import { searchPost } from "../../queries/searchPost";

const SearchPost = () => {
  const { data, refetch } = useQuery({
    queryKey: ["SEARCH_POST"],
    queryFn() {
      return searchPost();
    },
    enabled: false,
  });

  return (
    <div>
      <span>.search-post</span>
      <button type="button" onClick={() => refetch()}>
        Fetch
      </button>
      <div>
        <pre>{JSON.stringify(data, null, 2)}</pre>
      </div>
    </div>
  );
};

export default SearchPost;
