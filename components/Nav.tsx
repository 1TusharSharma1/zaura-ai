"use client";

import { useLayoutEffect, useState } from "react";
// import { Button } from "./ui/button";
import { Moon, Sun } from "lucide-react";
import pkg from "@/package.json";
import { color } from "framer-motion";

export const Nav = () => {
  // const [isDarkMode, setIsDarkMode] = useState(false);

  // useLayoutEffect(() => {
  //   const el = document.documentElement;

  //   if (el.classList.contains("dark")) {
  //     setIsDarkMode(true);
  //   } else {
  //     setIsDarkMode(false);
  //   }
  // }, []);

  // const toggleDark = () => {
  //   const el = document.documentElement;
  //   el.classList.toggle("dark");
  //   setIsDarkMode((prev) => !prev);
  // };

  return (
    <div
      className={
        "px-4 py-2 flex items-center h-14 z-50 bg-card border-b border-border"
      }
    >
      <div style={{ width: "60px", height: "30px" }}>
        <a href="/">
          <img
            src="https://t4.ftcdn.net/jpg/05/62/11/61/360_F_562116144_lxZOlafYtRtv8BzmKTKGcNby0D37ZVTZ.jpg"
            alt="Example"
          />
        </a>
      </div>
      {/* <Button
        onClick={toggleDark}
        variant={"ghost"}
        className={"ml-auto flex items-center gap-1.5"}
      > */}
        {/* <span>
          {isDarkMode ? (
            <Sun className={"size-4"} />
          ) : (
            <Moon className={"size-4"} />
          )}
        </span>
        <span>{isDarkMode ? "Light" : "Dark"} Mode</span> */}
      {/* </Button> */}
    </div>
  );
};
