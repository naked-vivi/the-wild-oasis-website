import { Cabin } from "@/app/_lib/types";
import CabinCard from "../cabin-card";
import { getCabins } from "@/app/_lib/data-service";

interface CabinListProps {
    filter: string;
}

async function CabinList({ filter }: CabinListProps) {
    const cabins: Cabin[] = await getCabins();

    if (!cabins.length) return null;

    let displayedCabins;
    if (filter === "all")
        displayedCabins = cabins;
    if (filter === "small")
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity <= 3)
    if (filter === "medium")
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 4 && cabin.maxCapacity <= 7)
    if (filter === "large")
        displayedCabins = cabins.filter((cabin) => cabin.maxCapacity >= 8)

    return (
        <div className="grid grid-cols-1 gap-6 sm:gap-8 xl:grid-cols-2 xl:gap-12">
            {displayedCabins?.map((cabin) => (
                <CabinCard cabin={cabin} key={cabin.id} />
            ))}
        </div>
    )
}

export default CabinList