import { useSpring, animated } from "react-spring";
import coin from "../../assets/coin.png";
import brickBrown from "../../assets/brick-brown.svg";
import "./dialog.css";
import { useEffect } from "react";

interface DialogProps {
  title: string;
  component: JSX.Element;
  closeButtonLabel?: string;
  onClose?: () => void;
}

export const Dialog = ({
  title,
  component,
  closeButtonLabel = "Close",
  onClose,
}: DialogProps) => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    delay: 500,
    transform: "scale(1)",
    from: { opacity: 0, transform: "scale(0.8)" },
  });

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      console.log("event", event.key);
      switch (event.key) {
        case "Escape": {
          if (onClose) {
            onClose();
          }

          break;
        }

        default: {
          break;
        }
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return (
    <animated.div
      className="dialog-overlay"
      style={fadeInAnimation}
      onClick={onClose && onClose}
    >
      <div className="dialog" onClick={(e) => e.stopPropagation()}>
        <h2>{title}</h2>
        {component}
        <div className="mario-icons">
          <img src={coin} alt="Mario Coin" className="mario-icon" />
          <img src={brickBrown} alt="Mario Brick" className="mario-icon" />
        </div>
        {onClose && <button onClick={onClose}>{closeButtonLabel}</button>}
      </div>
    </animated.div>
  );
};
