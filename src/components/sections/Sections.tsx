import { Section } from "./section/Section";
import { Section as SectionModel } from "./section/section.model";
import "./sections.css";

export const Sections = ({
  onSectionClick,
  onSectionHit,
  sections,
  selectedSection,
}: {
  onSectionClick: (section: SectionModel) => void;
  onSectionHit: (sectionId: string) => void;
  selectedSection: SectionModel | null;
  sections: SectionModel[]
}) => (
  <div className="sections">
    {sections
      .map((section) => (
        <Section
          isHit={selectedSection?.id === section.id}
          key={section.id}
          section={section}
          onHit={onSectionHit}
          onClick={onSectionClick}
        />
      ))}
  </div>
);
