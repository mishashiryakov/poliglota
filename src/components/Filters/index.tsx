"use client";

import { Dispatch, SetStateAction } from "react";
import { Card } from "../Card";

export interface FiltersObject {
  [key: string]: {
    value: string;
    active: boolean;
  };
}

interface Props {
  availableFilters: FiltersObject;
  activeFilters: string[];
  setActiveFilters: Dispatch<SetStateAction<string[]>>;
}

export const Filters = ({
  availableFilters,
  activeFilters,
  setActiveFilters,
}: Props) => {
  const toggleFilter = (filterKey: string) => {
    setActiveFilters((prev) => {
      const index = prev.indexOf(filterKey);

      if (index >= 0) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      } else {
        return [filterKey];
      }
    });
  };

  return (
    <Card styles="flex flex-row flex-wrap gap-2 w-[100%] items-center py-4">
      {Object.entries(availableFilters).map(([key, el], index) => (
        <div
          key={index}
          className={`rounded-md border-1 p-2 shadow-sm cursor-pointer ${
            activeFilters.includes(key) ? "" : "text-gray-500 border-gray-400"
          }`}
          onClick={() => toggleFilter(key)}
        >
          <p className="text-[14px] select-none">{el.value}</p>
        </div>
      ))}
    </Card>
  );
};
