import { FaMapPin } from "react-icons/fa";

type Props = {
  currentRating: number;
  nextRating: number;
  onSetNewRating: () => void;
};
export default function NextRatingDisplay({
  currentRating,
  nextRating,
  onSetNewRating,
}: Props) {
  return (
    <div className="flex flex-col gap-2 items-stretch justify-center">
      <div className="rounded-lg p-4 flex flex-col items-stretch justify-center bg-base-200">
        <label>Your next rating:</label>
        <span className="font-bold text-center flex items-end justify-center overflow-hidden text-ellipsis">
          <h1 className="text-7xl font-bold text-center">
            {nextRating.toFixed(0)}
          </h1>
          <h4 className="text-lg text-success translate-x-4">
            +{(nextRating - currentRating).toFixed(0)}
          </h4>
        </span>
        <div className="flex items-center pt-2">
          <button
            type="button"
            onClick={onSetNewRating}
            className="btn btn-neutral btn-xs px-2"
          >
            <FaMapPin />
            Set as current rating
          </button>
        </div>
      </div>
    </div>
  );
}
