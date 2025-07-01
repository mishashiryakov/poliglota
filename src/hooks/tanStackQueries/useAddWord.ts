import { useMutation } from "@tanstack/react-query";
import { supabase } from "../../utils/supabase/supabase";

interface Props {
  pl: string;
  ru: string;
  category: string;
}

export const useAddWord = () => {
  return useMutation({
    mutationFn: async ({ pl, ru, category }: Props) => {
      const { data, error } = await supabase
        .from("words")
        .insert([{ pl, ru, category }])
        .select();

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
