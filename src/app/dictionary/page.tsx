"use client";
import { useState } from "react";
import { Card } from "@/components/Card";
import { AddWord } from "@/components/AddWord";
import { Filters, FiltersObject } from "@/components/Filters";
import { useWords } from "@/hooks/tanStackQueries/useWords";

// Porshe19961! - supabase mishashiryakov org password

const words = {
  sylwetka: {
    ru: "фигура",
    category: "Внешность",
  },
  zgrabna: {
    ru: "стройная",
    category: "Внешность",
  },
  nadwaga: {
    ru: "избыточный вес",
    category: "Внешность",
  },
  jedynak: {
    ru: "единственный ребёнок",
    category: "Семья",
  },
  wąsy: {
    ru: "усы",
    category: "Внешность",
  },
  grzywka: {
    ru: "чёлка",
    category: "Внешность",
  },
  piegi: {
    ru: "веснушки",
    category: "Внешность",
  },
  zakola: {
    ru: "залысина",
    category: "Внешность",
  },
  zarost: {
    ru: "волосы на лице",
    category: "Внешность",
  },
  kriminały: {
    ru: "детективы",
    category: "Хобби",
  },
  arogancki: {
    ru: "высокомерный",
    category: "Черта характера",
  },
  loki: {
    ru: "кудри",
    category: "Внешность",
  },
  odprężyć: {
    ru: "расслабиться",
    category: "Глагол",
  },
  rodzeństwo: {
    ru: "братья и сестры",
    category: "Семья",
  },
  płec: {
    ru: "пол",
    category: "Внешность",
  },
  rzeźba: {
    ru: "скульптура",
    category: "Культура",
  },
  "nie przepadam": {
    ru: "Мне это не нравится",
    category: "Глагол",
  },
  zaleta: {
    ru: "преимущество",
    category: "Черта характера",
  },
  wada: {
    ru: "недостаток",
    category: "Черта характера",
  },
  przykazanie: {
    ru: "заповедь",
    category: "Культура",
  },
  staw: {
    ru: "сустав",
    category: "Здоровье",
  },
  biurko: {
    ru: "рабочий стол",
    category: "Мебель",
  },
  uwielbić: {
    ru: "обожать",
    category: "Глагол",
  },
  gadatliwy: {
    ru: "разговорчивый",
    category: "Черта характера",
  },
  marynarka: {
    ru: "куртка",
    category: "Одежда",
  },
  marynarka2: {
    ru: "пиджак",
    category: "Одежда",
  },
  "w tle": {
    ru: "на заднем плане",
    category: "Пейзаж",
  },
  kratka: {
    ru: "клетка",
    category: "Фигуры",
  },
};

const availableFilters: FiltersObject = Object.values(words).reduce(
  (acc, curValue) => {
    const category = curValue.category;
    if (!acc[category]) {
      acc[category] = { value: category, active: false };
    }
    return acc;
  },
  {} as FiltersObject
);

export default function Dictionary() {
  const [activeFilters, setActiveFilters] = useState<string[]>([]);

  const { data, isLoading, isFetching, error } = useWords();
  console.log("isFetching", isFetching);
  console.log("isLoading", isLoading);
  console.log("data", data);

  return (
    <>
      <Filters
        availableFilters={availableFilters}
        activeFilters={activeFilters}
        setActiveFilters={setActiveFilters}
      />
      <div className="w-[100%] flex flex-col gap-3">
        <h1 className="text-3xl font-bold px-25">My Words</h1>
        <Card styles="flex flex-col gap-3 overflow-auto max-h-[60vh] custom-scroll w-[100%]">
          {Object.entries(words)
            .filter(([_, value]) => {
              if (activeFilters.length === 0) {
                return true;
              } else {
                return activeFilters.includes(value.category);
              }
            })
            .map(([key, value], index) => (
              <div key={index} className="flex items-center capitalize">
                <p className="min-w-[150px]">{key}</p>
                <span className="mx-2">-</span>
                <p className="ml-[40px]">{value.ru}</p>
              </div>
            ))}
        </Card>
        <AddWord />
      </div>
    </>
  );
}
