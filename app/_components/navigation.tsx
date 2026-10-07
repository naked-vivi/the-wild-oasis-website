import Link from 'next/link'

function Navigation() {
    return (
        <nav aria-label="Main navigation" className="z-10 text-base sm:text-lg lg:text-xl">
            <ul className="flex flex-wrap justify-center gap-x-6 gap-y-1 lg:gap-x-16 items-center">
                <li>
                    <Link href="/cabins" className="inline-flex min-h-11 items-center hover:text-accent-400 transition-colors">
                        Cabins
                    </Link>
                </li>
                <li>
                    <Link href="/about" className="inline-flex min-h-11 items-center hover:text-accent-400 transition-colors">
                        About
                    </Link>
                </li>
                <li>
                    <Link
                        href="/account"
                        className="inline-flex min-h-11 items-center whitespace-nowrap hover:text-accent-400 transition-colors"
                    >
                        Guest area
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navigation
