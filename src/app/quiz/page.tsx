"use client";
import { useEffect, useState } from "react";
import { twMerge } from "tailwind-merge";
import { Card } from "@/components/Card";
import { Input } from "@/components/Atoms/Input";
import { Button } from "@/components/Atoms/Button";
import { useWords } from "@/hooks/tanStackQueries/useWords";
import { getRandomArrayElement } from "@/utils/getRandomArrayElement";
import { Word } from "@/types/words";

enum GuessResult {
  Correct = "Correct",
  Wrong = "Wrong",
  NotSet = "Not Set",
}

const guessAnimationDuration = 500;

export default function Quizz() {
  const [wordToGuess, setWordToGuess] = useState<Word | null>(null);
  const [guess, setGuess] = useState<string>("");
  const [guessResult, setGuessResult] = useState<GuessResult>(
    GuessResult.NotSet
  );

  const { data, isFetching } = useWords();

  const setNewWordToGuess = (data: Word[]) => {
    const randomWord = getRandomArrayElement<Word>(data);
    console.log("randomWord", randomWord);
    setWordToGuess(randomWord);
  };

  useEffect(() => {
    if (data) {
      setNewWordToGuess(data);
    }
  }, [data]);

  const resetGuessResult = () => {
    setGuess("");

    setTimeout(() => {
      setGuessResult(GuessResult.NotSet);
    }, guessAnimationDuration);
  };

  const makeGuess = () => {
    if (guess === wordToGuess?.ru) {
      setGuessResult(GuessResult.Correct);
      resetGuessResult();

      if (data) {
        setNewWordToGuess(data);
      }
    } else {
      setGuessResult(GuessResult.Wrong);
      resetGuessResult();
    }
  };

  return (
    <>
      <h1 className="text-3xl font-bold px-20">Quiz</h1>
      <Card
        styles={twMerge(
          "flex flex-col gap-3 overflow-auto max-h-[55vh] custom-scroll w-full transition duration-500 ease-in-out",
          guessResult === GuessResult.Correct &&
            "ring-2 ring-green-400/30 shadow-inner shadow-2xl shadow-green-400/60",
          guessResult === GuessResult.Wrong &&
            "ring-2 ring-red-400/30 shadow-inner shadow-2xl shadow-red-400/60"
        )}
      >
        {isFetching ? (
          // TODO create loader, train animation
          <p>Loading...</p>
        ) : data ? (
          <div className="flex flex-col gap-4">
            <p className="font-bold mb-2 capitalize text-3xl">
              {wordToGuess?.pl}
            </p>
            <Input label="Your guess" value={guess} setValue={setGuess} />
            <Button onClick={makeGuess} disabled={!guess}>
              Guess
            </Button>
            <Button onClick={() => setNewWordToGuess(data)}>Change word</Button>
          </div>
        ) : (
          <p>Add some word to dictionary first</p>
        )}

        {/* TODO show correct word on error */}
      </Card>
    </>
  );
}
