import Link from "next/link"

const TheFooter = () => {
    return (
        <header>
        <Link href="/address">Address</Link>
        <Link href="/about">About</Link>
        <Link href="/shop">Shop</Link>
        </header>
    )
}

export {TheFooter};