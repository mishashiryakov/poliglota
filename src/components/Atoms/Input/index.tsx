import { Dispatch, SetStateAction, useId } from "react";

interface Props {
  label?: string;
  value: string;
  setValue: Dispatch<SetStateAction<string>>;
}

export const Input = ({ value, setValue, label }: Props) => {
  const id = useId();

  return (
    <div>
      {label && (
        <label
          htmlFor={id}
          className="block mb-1 font-semibold text-gray-700 text-sm"
        >
          {label}
        </label>
      )}

      <input
        id={id}
        type="text"
        className="border border-gray-700 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </div>
  );
};
