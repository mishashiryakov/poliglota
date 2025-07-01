import { useMutation, useQueryClient } from "@tanstack/react-query";
import { NewWord } from "@/types/words";
import { supabase } from "../../utils/supabase/supabase";

export const useAddWord = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ pl, ru, category }: NewWord) => {
      const { data, error } = await supabase
        .from("words")
        .insert([{ pl, ru, category }])
        .select();

      if (error) throw new Error(error.message);
      return data;
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["words"] });
    },
  });
};
