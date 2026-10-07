import Image from "next/image";
import Link from "next/link";

function Logo() {
  return (
    <Link href="/" className="flex shrink-0 items-center gap-3 sm:gap-4 z-10">
      <Image src="/logo.png" height="60" width="60" className="h-12 w-12 sm:h-15 sm:w-15" quality={100} alt="The Wild Oasis logo" />
      <span className="whitespace-nowrap text-lg sm:text-xl font-semibold">
        The Wild Oasis
      </span>
    </Link>
  );
}

export default Logo;
