"use client";
import { useEffect, useState } from "react";
import { Card } from "@/components/Card";
import { AddWord } from "@/components/AddWord";
import { Filters, FiltersObject } from "@/components/Filters";
import { useWords } from "@/hooks/tanStackQueries/useWords";

// Porshe19961! - supabase mishashiryakov org password

export default function Dictionary() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);
  const [availableFilters, setAvailableFilters] =
    useState<FiltersObject | null>(null);

  const { data } = useWords();

  useEffect(() => {
    const availableFilters: FiltersObject | null =
      data?.reduce((acc, curValue) => {
        const category = curValue.category;
        if (!acc[category]) {
          acc[category] = { value: category, active: false };
        }
        return acc;
      }, {} as FiltersObject) || null;

    setAvailableFilters(availableFilters);
  }, [data]);

  return (
    <>
      {availableFilters && (
        <Filters
          availableFilters={availableFilters}
          activeFilters={activeFilters}
          setActiveFilters={setActiveFilters}
        />
      )}
      <div className="w-[100%] flex flex-col gap-3">
        {data && (
          <>
            <h1 className="text-3xl font-bold px-25">My Words</h1>
            <Card styles="flex flex-col gap-3 overflow-auto max-h-[55vh] custom-scroll w-[100%]">
              {data
                .filter((word) => {
                  if (activeFilters.length === 0) {
                    return true;
                  } else {
                    return activeFilters.includes(word.category);
                  }
                })
                .map((word, index) => (
                  <div key={index} className="flex items-center capitalize">
                    <p className="min-w-[150px]">{word.pl}</p>
                    <span className="mx-2">-</span>
                    <p className="ml-[40px]">{word.ru}</p>
                  </div>
                ))}
            </Card>
          </>
        )}
        <AddWord />
      </div>
    </>
  );
}
