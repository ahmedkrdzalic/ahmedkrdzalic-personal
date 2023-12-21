import Image from "next/image";
import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";

function Header() {
  return (
    <header className="h-screen w-full max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="py-20 flex h-full items-center flex-col-reverse md:flex-row justify-center justify-items-center">
        <div className="flex flex-col justify-center mb-5 lg:mb-20">
          <div className="mb-5 lg:mb-10">
            <div className="flex items-center">
              <h1 className="text-6xl text-accent">Ahmed Krdzalic</h1>

              <hr
                className={`${styles.animate_blink} h-16 w-px border-transparent bg-slate-100 lg:ml-1`}
              />
            </div>
            <h2 className="">SOFTWARE ENGINEER</h2>
          </div>
          <div className="max-w-sm text-secondary">
            <span className=" opacity-40">
              “There are three responses to a piece of design - yes, no, and
              WOW!
            </span>
            <span className="text-accent_lighter"> Wow</span>
            <span className="opacity-40"> is the one to aim for.”</span>
            <h3 className="text-secondary opacity-75 ">- Milton Glaser</h3>
          </div>
        </div>
        <div className="">
          <span className="">
            <Image
              className="drop-shadow-[25px_25px_50px_rgba(250,146,59,0.85)]"
              src="/Me_as_a_cat_original.png"
              alt="Me as a cat!"
              width={500}
              height={500}
            ></Image>
          </span>
          {
            //<div className="absolute top-0 left-0 w-full h-full rounded-lg shadow-md ring-4 ring-blue-500 z-10"></div>
          }
        </div>
      </div>
    </header>
  );
}

export default Header;
