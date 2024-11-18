import { useSpring, animated } from "react-spring";
import finishFlag from "../../assets/finish-flag.png";
import "./finishFlag.css";

export const FinishFlag = () => {
  const fadeInAnimation = useSpring({
    opacity: 1,
    delay: 200,
    from: { opacity: 0 },
  });

  return (
    <animated.div className="finish-flag" style={fadeInAnimation}>
      <img src={finishFlag} alt="Finish flag" width={220} height={230} />
    </animated.div>
  );
};
