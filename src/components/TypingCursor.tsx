"use client";

import { useEffect, useState } from "react";

type TypingCursorProps = {
  words: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export function TypingCursor({
  words,
  typingSpeed = 80,
  deletingSpeed = 45,
  pauseDuration = 2000,
}: TypingCursorProps) {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIndex % words.length];

    const timeout = setTimeout(
      () => {
        if (!isDeleting) {
          const next = currentWord.slice(0, text.length + 1);
          setText(next);
          if (next === currentWord) {
            setTimeout(() => setIsDeleting(true), pauseDuration);
          }
        } else {
          const next = currentWord.slice(0, text.length - 1);
          setText(next);
          if (next === "") {
            setIsDeleting(false);
            setWordIndex((i) => (i + 1) % words.length);
          }
        }
      },
      isDeleting ? deletingSpeed : typingSpeed
    );

    return () => clearTimeout(timeout);
  }, [
    text,
    isDeleting,
    wordIndex,
    words,
    typingSpeed,
    deletingSpeed,
    pauseDuration,
  ]);

  return (
    <span className="font-mono text-accent dark:text-accent-light">
      {text}
      <span className="ml-0.5 inline-block h-[1.1em] w-[2px] animate-pulse bg-accent align-middle dark:bg-accent-light" />
    </span>
  );
}
