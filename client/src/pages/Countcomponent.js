import React from "react";
import { useState, useEffect } from "react";
import { Clock } from "./Clock";

export const Countcomponent = () => {
  /*const [timerDays, setTimerDays] = useState();
  const [timerHours, setTimerHours] = useState();
  const [timerMins, setTimerMins] = useState();
  const [timerSecs, setTimerSecs] = useState();
  let interval;
  const startTimer = () => {
    const countDownDate = new Date("Dec 20,2022 ").getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();

      const distance = countDownDate - now;

      const days = Math.floor(distance / (24 * 60 * 60 * 1000));
      const hours = Math.floor(
        (distance % (24 * 60 * 60 * 1000)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (60 * 60 * 1000)) / (1000 * 60));
      const seconds = Math.floor((distance % (60 * 1000)) / 1000);

      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        //update Timer
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMins(minutes);
        setTimerSecs(seconds);
      }
    });
  };

  useEffect(() => {
    startTimer();
  });*/

  return (
    <div>
      <Clock
      /*timerDays={timerDays}
        timerHours={timerHours}
        timerMins={timerMins}
        timerSecs={timerSecs}*/
      />
    </div>
  );
};
