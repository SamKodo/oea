import React from "react";
import { Fragment } from "react";
import "./Clock.css";

export const Clock = ({ timerDays, timerHours, timerMins, timerSecs }) => {
  return (
    <Fragment>
      <section className="timer-container">
        <section className="timer">
          <div className="clock">
            <section>
              <p className="timercol">{timerDays}</p>
              <small>Days</small>
            </section>
            <span>:</span>
            <section>
              <p className="timercol"> {timerHours}</p>
              <small>Hours</small>
            </section>
            <span>:</span>
            <section>
              <p className="timercol"> {timerMins}</p>
              <small>Mins</small>
            </section>
            <span>:</span>
            <section>
              <p className="timercol">{timerSecs}</p>
              <small>Secs</small>
            </section>
          </div>
        </section>
      </section>
    </Fragment>
  );
};

Clock.defaultProps = {
  timerDays: 10,
  timerHours: 10,
  timerMins: 10,
  timerSecs: 10,
};
