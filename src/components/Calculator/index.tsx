import classNames from "classnames";
import { FaArrowLeft, FaTimes } from "react-icons/fa";

const DIGITS = [1, 2, 3, 4, 5, 6, 7, 8, 9];

type Props = {
  onDigit: (d: number) => void;
  onRemoveDigit: () => void;
  onClear: () => void;
  className?: string;
};
const buttonStyle = "btn btn-lg self-center";

export default function Calculator({
  onDigit,
  onRemoveDigit,
  onClear,
  className,
}: Props) {
  return (
    <div className={classNames("grid grid-cols-3 gap-2", className)}>
      {DIGITS.map((digit) => (
        <button
          type="button"
          onClick={() => onDigit(digit)}
          className={classNames(buttonStyle, "btn-neutral")}
          key={digit}
        >
          {digit}
        </button>
      ))}
      <button
        type="button"
        onClick={onClear}
        className={classNames(buttonStyle, "col-start-1 btn-error")}
      >
        <FaTimes />
      </button>
      <button
        type="button"
        onClick={() => onDigit(0)}
        className={classNames(buttonStyle, "btn-neutral")}
      >
        0
      </button>
      <button
        type="button"
        onClick={onRemoveDigit}
        className={classNames(buttonStyle, "btn-warning col-start-3")}
      >
        <FaArrowLeft />
      </button>
    </div>
  );
}
