import Image from "next/image";
import Link from "next/link";
import bg from "@/public/bg.png";

export default function Page() {
  return (
    <section className="mt-12 sm:mt-20 lg:mt-24" aria-labelledby="welcome-heading">
      <div className="absolute inset-0 -z-10">
        <Image
          src={bg}
          fill
          sizes="100vw"
          preload
          className="object-cover object-top"
          placeholder="blur"
          alt="Mountains and forests with two cabins"
        />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      <div className="relative z-10 text-center">
        <h1
          id="welcome-heading"
          className="mx-auto mb-8 max-w-5xl text-5xl leading-tight text-primary-50 tracking-tight font-normal text-balance sm:mb-10 sm:text-7xl lg:text-8xl"
        >
          Welcome to paradise.
        </h1>
        <Link
          href="/cabins"
          className="inline-flex min-h-12 items-center justify-center bg-accent-500 px-6 py-4 text-primary-800 text-base font-semibold hover:bg-accent-600 transition-colors focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 sm:px-8 sm:py-6 sm:text-lg"
        >
          Explore luxury cabins
        </Link>
      </div>
    </section>
  );
}
