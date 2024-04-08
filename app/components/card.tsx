"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/movingCard";

export function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
    "FitGenius changed my life! I've struggled with weight loss for years, but with FitGenius's personalized workout plans and nutrition guidance, I finally achieved my goals. I feel healthier, happier, and more confident than ever before.",
    name: "Sarah J., Lost 30 pounds",
    title: " Rating ⭐️⭐️⭐️",
  },
  {
    quote:
      "To be, or not to be, that is the question: Whether 'tis nobler in the mind to suffer The slings and arrows of outrageous fortune, Or to take Arms against a Sea of troubles, And by opposing end them: to die, to sleep.",
    name: "Mike D., Improved strength and endurance",
    title: "Rating ⭐️⭐️⭐️⭐️",
  },
  {
    quote: "All that we see or seem is but a dream within a dream.",
    name: "Emily S., Balanced lifestyle achieved",
    title: "Rating ⭐️⭐️⭐️⭐️⭐️",
  },
  {
    quote:
      "It is a truth universally acknowledged, that a single man in possession of a good fortune, must be in want of a wife.",
    name: "Alex M., Increased muscle tone and energy",
    title: "Rating ⭐️⭐️⭐️⭐️⭐️",
  },
  {
    quote:
      "Call me Ishmael. Some years ago—never mind how long precisely—having little or no money in my purse, and nothing particular to interest me on shore, I thought I would sail about a little and see the watery part of the world.",
    name: "Jessica L., Enhanced overall wellness ",
    title: "Rating ⭐️⭐️⭐️⭐️",
  },
];
