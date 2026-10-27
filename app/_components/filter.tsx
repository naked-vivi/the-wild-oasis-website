'use client'

import { usePathname, useRouter, useSearchParams } from "next/navigation"
import type { ReactNode } from "react"

type FilterOption = 'all' | 'small' | 'medium' | 'large'

interface FilterButtonProps {
    filter: FilterOption;
    activeFilter: string;
    onClick: (filter: FilterOption) => void;
    children: ReactNode;
}

function Filter() {
    const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
    const activeFilter = searchParams.get("capacity") ?? 'all';

    function handleFilter(filter: FilterOption) {
        const params = new URLSearchParams(searchParams.toString())
        params.set('capacity', filter)
        router.replace(`${pathname}?${params.toString()}`, { scroll: false })
    };

    return (
        <div className="flex border border-primary-700">
            <FilterButton filter="all" activeFilter={activeFilter} onClick={handleFilter}>All cabins</FilterButton>
            <FilterButton filter="small" activeFilter={activeFilter} onClick={handleFilter}>1-3 guests</FilterButton>
            <FilterButton filter="medium" activeFilter={activeFilter} onClick={handleFilter}>4-7 guests</FilterButton>
            <FilterButton filter="large" activeFilter={activeFilter} onClick={handleFilter}>8-12 guests</FilterButton>
        </div>
    )
}

export default Filter

function FilterButton({ filter, activeFilter, onClick, children }: FilterButtonProps) {
    const isActive = filter === activeFilter;

    return (
        <button
            type="button"
            aria-pressed={isActive}
            className={`px-5 py-2 hover:bg-primary-700 ${isActive ? 'bg-primary-700' : ''}`}
            onClick={() => onClick(filter)}
        >
            {children}
        </button>
    );
}
