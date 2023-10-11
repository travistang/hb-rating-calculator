import React from "react";
import classNames from "classnames";
import { IconType } from "react-icons";
import { FaPen } from "react-icons/fa";

type Props = {
  className?: string;
  selected?: boolean;
  value: number;
  label: string;
  icon?: IconType;
  integer?: boolean;
  onClick?: () => void;
};

export default function NumberDisplay({
  className,
  value,
  label,
  icon: Icon,
  selected,
  onClick,
  integer,
}: Props) {
  const displayValue = integer ? value.toFixed(0) : value;
  return (
    <div
      onClick={onClick}
      className={classNames(
        "relative rounded-lg flex flex-col items-stretch gap-2 p-2 overflow-hidden",
        selected ? "text-white bg-primary" : "bg-neutral",
        className
      )}
    >
      <div className="flex items-center gap-2">
        {Icon && <Icon />}
        {label}
      </div>
      <h3 className="text-4xl font-bold text-ellipsis">{displayValue}</h3>
      <FaPen
        className={classNames(
          "absolute right-2 bottom-3 w-4 h-4",
          selected && "hidden"
        )}
      />
    </div>
  );
}
