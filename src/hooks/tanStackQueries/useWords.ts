import { useQuery } from "@tanstack/react-query";
import { Word } from "@/types/words";
import { supabase } from "../../utils/supabase/supabase";

export const useWords = () => {
  return useQuery<Word[]>({
    queryKey: ["words"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("words")
        .select("id, pl, ru, category");

      if (error) throw new Error(error.message);
      return data;
    },
    staleTime: 3000,
  });
};
