import type { NextPage } from "next";
import React from "react";
import FadeIn from "react-fade-in";
const Home: NextPage = () => {
  return (
    <FadeIn className="flex justify-center items-center h-screen">
      <h1 className="text-blue-200 font-bold text-4xl">Next.js Template</h1>
    </FadeIn>
  );
};

export default Home;
