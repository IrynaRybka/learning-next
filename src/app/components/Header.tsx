'use client'

import Link from "next/link";
import style from "../styles/Header.module.scss";
import Image from "next/image";
import logo from "../images/svg/logo.svg";
import { ChangeTheme } from "./ChangeTheme";
// import sprite from "../images/svg/sprite.svg";
// import { useTheme } from "../hooks/useTheme";

const TheHeader = () => {

  return (
    <header className={style.header}>
      <Link href="/">
        <Image src={logo} alt="logo" width={230} height={100} />
      </Link>
      <Link href="/about">
        Про мене
        {/* <Image src={`${sprite}#email`} alt="email" width={40} height={40}/> */}
      </Link>
      <Link href="/price">Послуги та ціни</Link>
      <Link href="/guarantees">Гарантії</Link>
      <Link href="/contacts">Контакти</Link>
      <ChangeTheme />
    </header>
  );
};

export { TheHeader };
