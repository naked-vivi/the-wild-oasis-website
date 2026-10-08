import { Suspense } from "react";
import CabinList from "../_components/ui/cabin-list";
import Spinner from "../_components/spinner";

export const metadata = {
    title: "Cabins"
}
export default function Page() {
    return (
        <div className="mx-auto w-full max-w-7xl">
            <h1 className="mb-4 text-3xl leading-tight text-accent-400 font-medium sm:mb-5 sm:text-4xl">
                Our Luxury Cabins
            </h1>
            <p className="mb-8 max-w-5xl text-base leading-relaxed text-primary-200 sm:mb-10 sm:text-lg">
                Cozy yet luxurious cabins, located right in the heart of the Italian
                Dolomites. Imagine waking up to beautiful mountain views, spending your
                days exploring the dark forests around, or just relaxing in your private
                hot tub under the stars. Enjoy nature&apos;s beauty in your own little home
                away from home. The perfect spot for a peaceful, calm vacation. Welcome
                to paradise.
            </p>

            <Suspense fallback={<Spinner />}>
                <CabinList />
            </Suspense>

        </div>
    );
}
