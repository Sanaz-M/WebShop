import { useState, useEffect } from 'react';

const CountDownClock = () => {

    const [timer, setTimer] = useState({
        timerDays: 0,
        timerHours: 0,
        timerMinutes: 0,
        timerSeconds: 0
    });

    let interval;

    useEffect(() => {
        startTimer();
    });

    const startTimer = () => {
        const countDownDate = new Date("Mar 5,2022").getTime();

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
                setTimer({
                    timerDays: days,
                    timerHours: hours,
                    timerMinutes: minutes,
                    timerSeconds: seconds
                })
            }
        });
    };

    return (
        <div id="timer-container">
            <div className="clock-times">
                <p className="clock-numbers">{timer.timerDays}</p>
                <small className="clock-small">Days</small>
            </div>
            <div className="clock-times">
                <p className="clock-numbers">{timer.timerHours}</p>
                <small className="clock-small">Hours</small>
            </div>{" "}
            <div className="clock-times">
                <p className="clock-numbers">{timer.timerMinutes}</p>
                <small className="clock-small">Minutes</small>
            </div>{" "}
            <div className="clock-times">
                <p className="clock-numbers">{timer.timerSeconds}</p>
                <small className="clock-small">Seconds</small>
            </div>
        </div>
    );
};

export default CountDownClock;