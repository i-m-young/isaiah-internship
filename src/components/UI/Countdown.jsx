import React, { useEffect, useState } from "react";

const Countdown = ({ expiryDate }) => {
  const [timeLeft, setTimeLeft] = useState(
    expiryDate ? expiryDate - Date.now() : 0
  );

  useEffect(() => {
    if (!expiryDate) {
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft(expiryDate - Date.now());
    }, 1000);

    return () => clearInterval(timer);
  }, [expiryDate]);

  if (!expiryDate) {
    return null;
  }

  const totalSeconds = Math.max(0, Math.floor(timeLeft / 1000));

  const hours = Math.floor(totalSeconds / 3600);
  const minutes = Math.floor((totalSeconds % 3600) / 60);
  const seconds = totalSeconds % 60;

  return (
    <div className="de_countdown">
      {hours}h {minutes}m {seconds}s
    </div>
  );
};

export default Countdown;