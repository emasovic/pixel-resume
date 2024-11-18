import { useState } from "react";
import { skillCategories } from "./skills.default";
import { Info } from "../info/Info";
import "./skills.css";
import { Title } from "../info/Title";
import { List } from "../info/Items";

export const Skills = () => {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);

  const handleNextCategory = () => {
    if (currentCategoryIndex < skillCategories.length - 1) {
      setCurrentCategoryIndex(currentCategoryIndex + 1);
    }
  };

  const handlePreviousCategory = () => {
    if (currentCategoryIndex > 0) {
      setCurrentCategoryIndex(currentCategoryIndex - 1);
    }
  };

  const currentCategory = skillCategories[currentCategoryIndex];

  return (
    <Info>
      <div className="navigation">
        <button
          onClick={handlePreviousCategory}
          disabled={currentCategoryIndex === 0}
        >
          &lt; Prev
        </button>
        <button
          onClick={handleNextCategory}
          disabled={currentCategoryIndex === skillCategories.length - 1}
        >
          Next &gt;
        </button>
      </div>

      <div className="skills-category">
        <h3>{currentCategory.title}</h3>
        <div className="skills-subcategories">
          {currentCategory.subcategories.map(
            (subcategory, subcategoryIndex) => (
              <div className="skills-subcategory" key={subcategoryIndex}>
                <Title subtitle={subcategory.title} title="" />
                <List items={subcategory.skills} />
              </div>
            )
          )}
        </div>
      </div>
    </Info>
  );
};
