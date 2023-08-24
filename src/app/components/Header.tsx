import Link from "next/link"
import style from "../styles/Header.module.scss"
import Image from "next/image";
import logo from "../images/svg/logo.svg"

const TheHeader = () => {
    return (
        <header className={style.header}>
        <Link href="/"><Image src={logo} alt="logo" width={230} height={100}/></Link>
        <Link href="/about">Про нас</Link>
        <Link href="/price">Послуги та ціни</Link>
        <Link href="/guarantees">Гарантії</Link>
        <Link href="/contacts">Контакти</Link>
        </header>
    )
}

export {TheHeader};