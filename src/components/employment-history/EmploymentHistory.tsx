import { useState } from "react";
import { Range } from "../info/Dates";
import { List } from "../info/Items";
import { Title } from "../info/Title";
import { employmentHistory } from "./employmentHistory.default";
import { Info } from "../info/Info";

export const EmploymentHistory = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    if (currentIndex < employmentHistory.length - 1) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const currentJob = employmentHistory[currentIndex];
  return (
    <Info>
      <div className="navigation">
        <button onClick={handlePrevious} disabled={currentIndex === 0}>
          &lt; Prev
        </button>
        <button
          onClick={handleNext}
          disabled={currentIndex === employmentHistory.length - 1}
        >
          Next &gt;
        </button>
      </div>
      <div>
        <Title title={currentJob.title} subtitle={currentJob.company} />
        <Range start={currentJob.startDate} end={currentJob.endDate} />
        <List items={currentJob.responsibilities} />
      </div>
    </Info>
  );
};
