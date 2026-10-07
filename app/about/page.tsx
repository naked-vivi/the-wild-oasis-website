import Image from "next/image";
import about1 from "@/public/about-1.jpg"
import about2 from "@/public/about-2.jpg"

export const metadata = {
    title: "About"
}

export default function Page() {
    return (
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-y-10 text-base leading-relaxed sm:gap-y-16 sm:text-lg lg:grid-cols-5 lg:gap-x-12 lg:gap-y-24 xl:gap-x-24">
            <div className="min-w-0 lg:col-span-3">
                <h1 className="mb-6 text-3xl leading-tight text-accent-400 font-medium sm:mb-8 sm:text-4xl lg:mb-10">
                    Welcome to The Wild Oasis
                </h1>

                <div className="space-y-5 sm:space-y-8">
                    <p>
                        Where nature&apos;s beauty and comfortable living blend seamlessly.
                        Hidden away in the heart of the Italian Dolomites, this is your
                        paradise away from home. But it&apos;s not just about the luxury cabins.
                        It&apos;s about the experience of reconnecting with nature and enjoying
                        simple pleasures with family.
                    </p>
                    <p>
                        Our 8 luxury cabins provide a cozy base, but the real freedom and
                        peace you&apos;ll find in the surrounding mountains. Wander through lush
                        forests, breathe in the fresh air, and watch the stars twinkle above
                        from the warmth of a campfire or your hot tub.
                    </p>
                    <p>
                        This is where memorable moments are made, surrounded by nature&apos;s
                        splendor. It&apos;s a place to slow down, relax, and feel the joy of
                        being together in a beautiful setting.
                    </p>
                </div>
            </div>

            <div className="mx-auto w-full max-w-xl lg:col-span-2 lg:max-w-none">
                <Image
                    src={about1}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, (min-width: 640px) 576px, calc(100vw - 32px)"
                    alt="Family sitting around a fire pit in front of cabin"
                />
            </div>

            <div className="order-4 mx-auto w-full max-w-xl lg:order-3 lg:col-span-2 lg:max-w-none">
                <Image
                    src={about2}
                    className="h-auto w-full"
                    sizes="(min-width: 1280px) 460px, (min-width: 1024px) 40vw, (min-width: 640px) 576px, calc(100vw - 32px)"
                    alt="Family that manages The Wild Oasis"
                />
            </div>

            <div className="order-3 min-w-0 lg:order-4 lg:col-span-3">
                <h2 className="mb-6 text-3xl leading-tight text-accent-400 font-medium sm:mb-8 sm:text-4xl lg:mb-10">
                    Managed by our family since 1962
                </h2>

                <div className="space-y-5 sm:space-y-8">
                    <p>
                        Since 1962, The Wild Oasis has been a cherished family-run retreat.
                        Started by our grandparents, this haven has been nurtured with love
                        and care, passing down through our family as a testament to our
                        dedication to creating a warm, welcoming environment.
                    </p>
                    <p>
                        Over the years, we&apos;ve maintained the essence of The Wild Oasis,
                        blending the timeless beauty of the mountains with the personal
                        touch only a family business can offer. Here, you&apos;re not just a
                        guest; you&apos;re part of our extended family. So join us at The Wild
                        Oasis soon, where tradition meets tranquility, and every visit is
                        like coming home.
                    </p>

                    <div>
                        <a
                            href="/cabins"
                            className="mt-4 inline-flex min-h-12 w-full items-center justify-center bg-accent-500 px-5 py-4 text-center text-base font-semibold text-primary-800 transition-colors hover:bg-accent-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent-300 sm:w-auto sm:px-8 sm:py-5 sm:text-lg"
                        >
                            Explore our luxury cabins
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
