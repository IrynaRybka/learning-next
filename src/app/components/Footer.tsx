// import type { ImageProps } from "@chakra-ui/next-js"
import Link from "next/link"
import Image from "next/image"
import logo from "../images/svg/logo.svg"


const TheFooter = () => {
    return (
        <div>
            <Image src={logo} alt="logo" width={230} height={100}/>
     
            <p>Ремонт телевізорів у місті Дніпро та області до 60 км від межі міста. Гарантія на всі роботи.</p>
            <h2>Контакти</h2>
            <a href="tel:0637967425">(063) 796-74-25</a>
            <a href="tel:0669708107">(066) 970-81-07</a>
            <a href="tel:0673362127">(067) 336-21-27</a>
            <a href="#">Telegram</a>
            <a href="#">WatsApp</a>
            <a href="#">Viber</a>
        <Link href="/about">Про нас</Link>
        <Link href="/price">Послуги та ціни</Link>
        <Link href="/guarantees">Гарантії</Link>
        <Link href="/contacts">Контакти</Link>
        <h2>Написати на пошту</h2>
            <a href="mail:vova_TV@gmail.com">vova_TV@gmail.com</a>
        </div>
    )
}

export {TheFooter};