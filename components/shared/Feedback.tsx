"use clinet";
import { useTranslations } from "next-intl";
import { useState, MouseEvent } from "react";
import toast from "react-hot-toast";

const Feedback = () => {
  const translation = useTranslations("feedback");
  const [feedback, setFeedback] = useState("");

  const onFeedback = (e: MouseEvent<HTMLButtonElement>) => {
    setFeedback(e.currentTarget.name);

    toast.success(translation("thanks for feedback"));
  };

  return (
    <div className="flex-center mx-auto w-full max-w-[57.875rem] flex-col gap-5 rounded-[0.625rem] border border-[#1BADA2] px-4 py-6">
      <p className="text-base font-medium leading-4">
        {translation("was this page helpful?")}
      </p>

      <div className="flex-center [&>button]:flex-center flex-col gap-3 xs:flex-row sm:[&>button:hover]:-translate-y-1 [&>button]:w-full [&>button]:max-w-[8rem] [&>button]:rounded-[0.4375rem] [&>button]:border [&>button]:border-[#1BADA2] [&>button]:px-6 [&>button]:py-1 [&>button]:text-[#1BADA2] [&>button]:transition-all [&>button]:duration-300">
        <button
          type="button"
          name="yes"
          onClick={onFeedback}
          style={{
            color: feedback === "yes" ? "white" : "",
            backgroundColor: feedback === "yes" ? "#1BADA2" : "",
          }}
        >
          {translation("yes")}
        </button>
        <button
          type="button"
          name="partially"
          onClick={onFeedback}
          style={{
            color: feedback === "partially" ? "white" : "",
            backgroundColor: feedback === "partially" ? "#1BADA2" : "",
          }}
        >
          {translation("partially")}
        </button>
        <button
          type="button"
          name="no"
          onClick={onFeedback}
          style={{
            color: feedback === "no" ? "white" : "",
            backgroundColor: feedback === "no" ? "#1BADA2" : "",
          }}
        >
          {translation("no")}
        </button>
      </div>
    </div>
  );
};

export default Feedback;
