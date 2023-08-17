import Link from "next/link"

const TheHeader = () => {
    return (
        <header>
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
        </header>
    )
}

export {TheHeader};