import { useState } from "react";
import { Card } from "../Card";
import { Input } from "../Atoms/Input";
import { Button } from "../Atoms/Button";
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
      <Button
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
        disabled={disableAddButton}
      >
        Add
      </Button>
    </Card>
  );
};
