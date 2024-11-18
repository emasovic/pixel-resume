import { useEffect, useState } from "react";
import { useSpring, animated } from "react-spring";
import characterImg from "../../assets/character.png";
import { Section } from "../sections/section/section.model";
import "./character.css";

interface CharacterProps {
  sections: Section[];
  areSectionsCleared: boolean;
  onFinish: () => void;
  onHitSection: (section: Section) => void;
}

export const Character = ({
  sections,
  onHitSection,
  onFinish,
  areSectionsCleared,
}: CharacterProps) => {
  const [isJumping, setIsJumping] = useState(false);
  const [moveRight, setMoveRight] = useState(0);

  const animation = useSpring({
    transform: `translateX(${moveRight}px) translateY(${
      isJumping ? "-100px" : "0px"
    })`,
    config: { tension: 170, friction: 12 },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      switch (event.key) {
        case "ArrowUp":
        case "w": {
          setIsJumping(true);
          setTimeout(() => {
            setIsJumping(false);
          }, 300);

          break;
        }

        case "ArrowRight":
        case "d": {
          setMoveRight((prev) => prev + 20);
          break;
        }

        case "ArrowLeft":
        case "a": {
          setMoveRight((prev) => prev - 20);
          break;
        }

        default: {
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    sections.forEach((section) => {
      const translateX = section.translate.x;
      const isSectionHit =
        moveRight >= translateX - 35 &&
        moveRight < translateX + 35 &&
        isJumping;

      if (isSectionHit) {
        onHitSection(section);
      }
    });
  }, [moveRight, sections, isJumping, onHitSection]);

  useEffect(() => {
    const isPastFinishFlag = moveRight >= 470 && areSectionsCleared;

    if (isPastFinishFlag) {
      onFinish();
    }
  }, [areSectionsCleared, moveRight, onFinish]);

  return (
    <animated.div className="character" style={animation}>
      <img src={characterImg} alt="Character" />
    </animated.div>
  );
};
