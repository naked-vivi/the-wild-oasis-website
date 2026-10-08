import { Cabin } from "@/app/_lib/types";
import CabinCard from "../cabin-card";
import { getCabins } from "@/app/_lib/data-service";

async function CabinList() {
    const cabins: Cabin[] = await getCabins();

    if (!cabins.length) return null;

    return (
        <div className="grid grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-12">
            {cabins.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinList