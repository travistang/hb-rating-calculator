export type HBRatingCalculationParams = {
  kFactorSlope: number;
  kFactorIntersect: number;
  currentRating: number;
  nextHikeRating: number;
};

export const DEFAULT_HB_RATING_CALCULATION_PARAMS: HBRatingCalculationParams = {
  kFactorSlope: 0.264,
  kFactorIntersect: 55,
  currentRating: 700,
  nextHikeRating: 0,
};

export const computeRatingAfterHike = (
  params: HBRatingCalculationParams
): number => {
  const {
    kFactorSlope: kM,
    kFactorIntersect: k0,
    currentRating: r0,
    nextHikeRating: rH,
  } = params;
  const d = Math.abs(rH - r0);
  const k = kM * d + k0;
  const r = r0 + k * (1 - 1 / (1 + Math.pow(10, (rH - r0) / 400)));
  return r;
};
