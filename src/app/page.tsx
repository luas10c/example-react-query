"use client";

import { useQuery } from "@tanstack/react-query";

import { fetchProfile } from "../queries/fetchProfile";

const Home = () => {
  const { data, error, isLoading } = useQuery({
    queryKey: ["FETCH_PROFILE"],
    queryFn() {
      return fetchProfile("luas10c");
    },
  });

  if (isLoading) {
    return <div>Loading...</div>;
  }

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <span>.home</span>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

export default Home;
