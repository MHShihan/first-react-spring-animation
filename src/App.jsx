import { animated, useSpring } from "@react-spring/web";
import { useState } from "react";

function App() {
  const [currentPosition, setCurrentPosition] = useState(0);

  const [springs, api] = useSpring(() => ({
    from: { x: currentPosition },
    onChange: (valueOfX) => {
      setCurrentPosition(valueOfX.value.x);
    },
    config: { duration: 2000 },
  }));

  const handleClick = () => {
    if (currentPosition === 0) {
      api.start({
        from: { x: currentPosition },
        to: { x: 500 },
      });
    } else {
      api.start({
        from: { x: 500 },
        to: { x: 0 },
      });
    }
  };

  const handleMouseEnter = () => {
    api.start({
      from: { x: currentPosition },
      to: { x: 500 },
    });
  };

  const handleMouseLeave = () => {
    api.start({
      from: { x: currentPosition },
      to: { x: 0 },
    });
  };

  return (
    <>
      <h1
        style={{
          textAlign: "center",
        }}
      >
        My First React Spring Animation
      </h1>
      <animated.div
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          ...springs,
          width: "100px",
          height: "100px",
          borderRadius: "50%",
          background: "red",
        }}
      />
    </>
  );
}

export default App;
