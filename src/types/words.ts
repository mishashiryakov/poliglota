export type Word = {
  id: string;
  pl: string;
  ru: string;
  category: string;
};

export type NewWord = Omit<Word, "id">;
