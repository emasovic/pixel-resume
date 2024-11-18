import { useEffect, useRef } from "react";
import { useSpring, animated } from "react-spring";
import brick from "../../../assets/brick.png";
import { Section as SectionModel } from "./section.model";
import "./section.css";

interface SectionProps {
  section: SectionModel;
  isHit: boolean;
  onHit: (sectionId: string) => void;
  onClick: (section: SectionModel) => void;
}

export const Section = ({ section, isHit, onHit, onClick }: SectionProps) => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const animation = useSpring({
    transform: `translateX(${section.translate.x}px) translateY(${section.translate.y}px)`,
    config: { tension: 170, friction: 12 },
  });

  useEffect(() => {
    if (isHit && sectionRef.current) {
      const timeoutStart = setTimeout(() => {
        if (sectionRef.current) {
          sectionRef.current.style.transform = `translateX(${
            section.translate.x
          }px) translateY(${section.translate.y - 20}px)`;
        }
      }, 250);

      const timeoutEnd = setTimeout(() => {
        onHit(section.id);
      }, 350);

      return () => {
        clearTimeout(timeoutStart);
        clearTimeout(timeoutEnd);
      };
    }
  }, [isHit, section.translate.x, section.translate.y, onHit, section.id]);

  const handleSectionClick = () => onClick(section);

  return (
    <animated.div
      ref={sectionRef}
      id={section.id}
      className="section"
      onClick={handleSectionClick}
      style={animation}
    >
      <div className="section-block">
        <img src={brick} width={100} height={100} />

        <div className="section-icon">
          <img src={section.icon} width={100} height={100} />
        </div>
      </div>
    </animated.div>
  );
};
