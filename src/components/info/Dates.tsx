import "./info.css";

interface DatesProps {
  start: string;
  end: string;
  separator?: string;
}

export const Range = ({
  start: start,
  end: end,
  separator = "-",
}: DatesProps) => {
  return (
    <div className="range">
      <p>
        {start} {separator} {end}
      </p>
    </div>
  );
};
