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
    // Maybe leave only 1 enabled and disable all others
    setActiveFilters((prev) => {
      const index = prev.indexOf(filterKey);

      if (index >= 0) {
        return [...prev.slice(0, index), ...prev.slice(index + 1)];
      } else {
        return [...prev, filterKey];
      }
    });
  };

  return (
    <Card styles="flex flex-row flex-wrap gap-2 max-w-[75%] items-center py-4">
      {Object.entries(availableFilters).map(([key, el], index) => (
        <div
          key={index}
          className={`rounded-md border-1 border-gray-400 p-2 shadow-sm cursor-pointer ${
            activeFilters.includes(key) ? "bg-white" : ""
          }`}
          onClick={() => toggleFilter(key)}
        >
          <p className="text-[14px] select-none">{el.value}</p>
        </div>
      ))}
      <p
        className="cursor-pointer text-blue-500"
        onClick={() => setActiveFilters([])}
      >
        clear all
      </p>
    </Card>
  );
};
