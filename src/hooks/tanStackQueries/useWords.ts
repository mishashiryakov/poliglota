import { useQuery } from "@tanstack/react-query";
import { supabase } from "../../utils/supabase/supabase";

export const useWords = () => {
  return useQuery({
    queryKey: ["words"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("words")
        .select("pl, ru, category");

      if (error) throw new Error(error.message);
      return data;
    },
  });
};
