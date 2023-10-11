import { useState } from "react";
import {
  DEFAULT_HB_RATING_CALCULATION_PARAMS,
  HBRatingCalculationParams,
} from "../hb-rating";

export const useRatingForm = () => {
  const [ratingParams, setRatingParams] = useState<HBRatingCalculationParams>(
    DEFAULT_HB_RATING_CALCULATION_PARAMS
  );
  const [selectedKey, setSelectedKey] =
    useState<keyof HBRatingCalculationParams>("currentRating");

  const setRating = (newRating: number) => {
    setRatingParams({ ...ratingParams, currentRating: newRating });
  };
  const removeDigit = () => {
    const currentValue = ratingParams[selectedKey];
    if (currentValue === undefined || Number.isNaN(currentValue))
      return ratingParams;
    const newValue = Math.floor(currentValue / 10);
    setRatingParams({
      ...ratingParams,
      [selectedKey]: newValue,
    });
  };

  const addDigit = (digit: number) => {
    const currentValue = ratingParams[selectedKey] ?? 0;
    const nextValue = Math.floor(currentValue * 10) + digit;
    setRatingParams({
      ...ratingParams,
      [selectedKey]: nextValue,
    });
  };

  const clear = () => {
    setRatingParams({
      ...ratingParams,
      [selectedKey]: 0,
    });
  };
  return {
    ratingParams,
    selectedKey,
    onSelectKey: setSelectedKey,
    removeDigit,
    addDigit,
    setRating,
    clear,
  };
};
