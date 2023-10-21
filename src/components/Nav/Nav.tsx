"use client";
import data from "@/data/data.json";
import Link from "next/link";
import css from "./Nav.module.css";
import Logo from "../Logo";

import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons/faBars";
import { faPlay } from "@fortawesome/free-solid-svg-icons/faPlay";
import { faClose } from "@fortawesome/free-solid-svg-icons/faClose";

export default function Nav() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const classState = openMenu ? "flex" : "hidden";

  const handleClick = () => {
    setOpenMenu(!openMenu);
  };

  return (
    <>
      <nav className="hidden md:block">
        <ul className={`flex text-1xl font-bold`}>
          {data.links.map((link) => (
            <li key={link.page} className={`px-3 py-3 ${css.link} `}>
              <Link href={link.link} className={`hover:text-secondary`}>
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
      </nav>

      <FontAwesomeIcon
        icon={faBars}
        className="block md:hidden text-3xl"
        onClick={handleClick}
      />

      <div
        className={`w-screen h-screen absolute top-0 left-0 bg-white ${classState} flex-col items-center justify-center`}
      >
        <FontAwesomeIcon
          icon={faClose}
          onClick={handleClick}
          className="text-3xl ml-auto absolute top-5 right-5"
        />
        <ul className={`flex flex-col text-1xl font-bold`}>
          {data.links.map((link) => (
            <li key={link.page} className={`px-3 py-3  text-center`}>
              <Link
                href={link.link}
                className={`hover:text-secondary text-2xl `}
              >
                {link.page}
              </Link>
            </li>
          ))}
        </ul>
        <Logo />

        <Link
          className={`text-2xl text-secondary uppercase mt-4 text-center`}
          href="https://play.google.com/store/apps/details?id=com.taxity.minisercewalbrzych&pli=1"
        >
          Sprawdź również naszą aplikacje
          <FontAwesomeIcon icon={faPlay} className="ml-4" />
        </Link>
      </div>
    </>
  );
}
