"use client";

import Link from "next/link";
import {
  TypographyH1,
  TypographyInlineCode,
  TypographyP,
} from "../../personal-components";
import { Typewriter } from "react-simple-typewriter";

interface Props {
  words: string[];
  description: string;
  madeBy: string;
}

export const Title = ({ words, description, madeBy }: Props) => {
  return (
    <div className="grid items-center justify-items-center">
      <div className="cursor-pointer p-6">
        <Link
          href="https://github.com/LucasFranciulli"
          target="_blank"
          rel="noopener noreferrer"
        >
          <TypographyInlineCode>{madeBy}</TypographyInlineCode>
        </Link>
      </div>
      <TypographyH1>
        <Typewriter words={words} cursor cursorBlinking />
      </TypographyH1>
      <TypographyP>{description}</TypographyP>
    </div>
  );
};
