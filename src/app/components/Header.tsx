import Link from "next/link"

const TheHeader = () => {
    return (
        <header>
        <Link href="/">Home</Link>
        <Link href="/about">Про нас</Link>
        <Link href="/price">Послуги та ціни</Link>
        <Link href="/guarantees">Гарантії</Link>
        <Link href="/contacts">Контакти</Link>
        </header>
    )
}

export {TheHeader};