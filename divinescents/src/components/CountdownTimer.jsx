import { useEffect, useState } from "react";

const CountdownTimer = ({ endTime }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(endTime) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        hrs: Math.floor((difference / (1000 * 60 * 60)) % 24),
        mins: Math.floor((difference / 1000 / 60) % 60),
        secs: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearTimeout(timer);
  });

  return (
    <div className="text-sm text-rose-600 font-medium mt-2">
      Offer ends in:{" "}
      <span className="font-semibold">
        {`${timeLeft.hrs || "00"}h ${timeLeft.mins || "00"}m ${
          timeLeft.secs || "00"
        }s`}
      </span>
    </div>
  );
};

export default CountdownTimer;
