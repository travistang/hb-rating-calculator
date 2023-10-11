import React from "react";
import { FaStar, FaTrophy } from "react-icons/fa";
import "./App.css";
import { computeRatingAfterHike } from "./domain/hb-rating";
import Header from "./components/Header";
import NextRatingDisplay from "./components/NextRatingDisplay";
import Calculator from "./components/Calculator";
import NumberDisplay from "./components/NumberDisplay";
import { useRatingForm } from "./domain/rating-form";

function App() {
  const {
    ratingParams,
    selectedKey,
    onSelectKey,
    removeDigit,
    addDigit,
    clear,
    setRating,
  } = useRatingForm();

  const newRating = computeRatingAfterHike(ratingParams);

  return (
    <div className="flex flex-col items-stretch gap-2 fixed inset-0 p-4">
      <Header />
      <div className="grid grid-cols-[repeat(auto-fit,minmax(164px,1fr))] gap-2">
        <NumberDisplay
          integer
          onClick={() => onSelectKey("currentRating")}
          selected={selectedKey === "currentRating"}
          label="Current rating"
          value={ratingParams.currentRating}
          icon={FaTrophy}
        />
        <NumberDisplay
          integer
          onClick={() => onSelectKey("nextHikeRating")}
          selected={selectedKey === "nextHikeRating"}
          label="Route rating"
          value={ratingParams.nextHikeRating}
          icon={FaStar}
        />
      </div>
      <NextRatingDisplay
        onSetNewRating={() => setRating(newRating)}
        currentRating={ratingParams.currentRating}
        nextRating={newRating}
      />
      <div className="flex-1 flex flex-col justify-end items-stretch">
        <Calculator
          onClear={clear}
          onRemoveDigit={removeDigit}
          onDigit={addDigit}
        />
      </div>
    </div>
  );
}

export default App;
