import { twMerge } from "tailwind-merge";

interface Props {
  styles?: string;
  children: React.ReactNode;
}

export const Card = ({ styles, children }: Props) => {
  return (
    <div
      className={twMerge(
        "backdrop-blur-md bg-white/30 border border-white/30 rounded-xl shadow-lg px-20 py-10",
        styles
      )}
    >
      {children}
    </div>
  );
};
