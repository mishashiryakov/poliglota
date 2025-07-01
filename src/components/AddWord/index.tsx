import { useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "../Card";
import { Input } from "../Input";
import { useAddWord } from "@/hooks/tanStackQueries/useAddWord";

export const AddWord = () => {
  const [polish, setPolish] = useState<string>("");
  const [russian, setRussian] = useState<string>("");
  const [category, setCategory] = useState<string>("");

  const { mutate } = useAddWord();

  const disableAddButton = !polish || !russian || !category;

  return (
    <Card styles="flex flex-col gap-5">
      <p className="text-xl font-bold">Add Word</p>
      <Input label="Polish" value={polish} setValue={setPolish} />
      <Input label="Russian" value={russian} setValue={setRussian} />
      <Input label="Category" value={category} setValue={setCategory} />
      <button
        className={twMerge(
          "bg-blue-500 text-white rounded-md w-[75px] cursor-pointer py-2",
          disableAddButton && "bg-gray-400 "
        )}
        disabled={disableAddButton}
        onClick={() => {
          mutate(
            { pl: polish, ru: russian, category },
            {
              onSuccess: () => {
                setPolish("");
                setRussian("");
                setCategory("");
              },
            }
          );
        }}
      >
        Add
      </button>
    </Card>
  );
};
