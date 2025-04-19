"use client";

import { useTranslations } from "next-intl";
import { useState, useEffect } from "react";

type ReadMoreProps = {
  text: string;
  maxLength?: number;
};

const ReadMore = ({ text, maxLength = 700 }: ReadMoreProps) => {
  const translation = useTranslations("readMore");
  const [expanded, setExpanded] = useState(false);
  const [hydrated, setHydrated] = useState(false);

  useEffect(() => {
    setHydrated(true);
  }, []);

  if (!hydrated) {
    return <div className="h-[50px] animate-pulse bg-gray-200"></div>;
  }

  return (
    <div className="">
      <div
        dangerouslySetInnerHTML={{
          __html: expanded
            ? text
            : text.slice(0, maxLength) +
              (text.length > maxLength ? "..." : " "),
        }}
      />
      {text.length > maxLength && (
        <button
          onClick={() => setExpanded(!expanded)}
          className="ml-2 font-bold text-primary-background hover:underline"
        >
          {expanded ? translation("less") : translation("more")}
        </button>
      )}
    </div>
  );
};

export default ReadMore;
