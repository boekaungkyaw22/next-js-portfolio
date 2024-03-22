'use client'
import "@/components/css/module.css";
import { useEffect, useState } from "react";

const MyInfo = () => {

  return (
    <div className="flex flex-col">
      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20 mb-2 text-lg">
        Hi, my name is{" "}
        <span className="bg-gradient-to-r from-purple-800 to-pink-500 text-transparent bg-clip-text">
          Boe Kaung Kyaw
        </span>
      </p>

      <p className="bg-clip-text text-transparent drop-shadow-2xl bg-gradient-to-b from-white/80 to-white/20">
        Frontend X Backend{" "}
        
      </p>
      <span className="textAnimation" >Developer</span>
    </div>
  );
};

export default MyInfo;

