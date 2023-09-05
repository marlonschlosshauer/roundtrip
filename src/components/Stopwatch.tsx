"use client";

import { tailwind } from "@/css/theme";
import { Reload } from "@/icons/Reload";
import React, { useEffect, useMemo, useState } from "react";
import { Button } from "./Button";

export interface StopwatchProps {
  startTime: number;
}

export const Stopwatch: React.FC<StopwatchProps> = ({ startTime = 0 }) => {
  const { theme } = tailwind;
  const [endTime, setEndTime] = useState<number | null>(null);

  const diff = endTime ? endTime - startTime : null;

  useEffect(() => {
    setEndTime(Date.now());
  }, []);

  if (!diff) {
    return null;
  }

  const onClick = () => {
    window.location.reload();
  };

  return (
    <div
      id="stopwatch"
      className="flex w-full items-center justify-between gap-4"
    >
      <Button onClick={onClick}>
        <Reload
          color={theme.colors.gray["100"]}
          className="shrink-0 h-[14px] w-[14px]"
        />
        <span>Retry</span>
      </Button>
      <h3 className="text-2xl">
        Delivered in{" "}
        <strong className="text-green-700">
          {diff && diff > 0 ? diff : 0}
        </strong>
        <span className="">ms</span>.
      </h3>
    </div>
  );
};
