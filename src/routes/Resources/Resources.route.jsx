import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

import { AiOutlineFieldTime, AiTwotoneCalendar } from "react-icons/ai";

import { useDate } from "../../hooks/useDate.hook";

import { useAuthContext } from "../../store/AuthContext";

import "./Resources.styles.scss";

const DUMMY_LOGS = [
    {
        id: uuidv4(),
        date: "September 23",
        day: "Friday",
        duration: "123",
        status: "late",
        hours: 7,
        minutes: 42,
        displayTime: "11:42 PM",
        timeIn: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
        timeOut: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
    },
    {
        id: uuidv4(),
        date: "September 22",
        day: "Friday",
        duration: "123",
        status: "good",
        hours: 7,
        minutes: 42,
        displayTime: "11:42 PM",
        timeIn: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
        timeOut: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
    },
    {
        id: uuidv4(),
        date: "September 21",
        day: "Friday",
        duration: "123",
        status: "bad",
        hours: 7,
        minutes: 42,
        displayTime: "11:42 PM",
        timeIn: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
        timeOut: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
    },
    {
        id: uuidv4(),
        date: "September 20",
        day: "Friday",
        duration: "123",
        status: "bad",
        hours: 7,
        minutes: 42,
        displayTime: "11:42 PM",
        timeIn: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
        timeOut: { hours: 23, minutes: 44, displayTime: "11:44 PM" },
    },
];

const Resources = () => {
    const { user } = useAuthContext();
    const { date, time: displayTime, wish } = useDate();

    const [logs, setLogs] = useState(DUMMY_LOGS);

    const [message, setMessage] = useState({});
    const showMessage = Object.keys(message).length > 0;

    const [timeIn, setTimeIn] = useState({});
    const [timeOut, setTimeOut] = useState({});

    const hasTimeIn = Object.keys(timeIn).length > 0;
    const hasTimeOut = Object.keys(timeOut).length > 0;

    let duration = "N/A";
    let logStatus = "today";

    const timeInHandler = () => {
        const currentDate = new Date();
        const currentMinutes = currentDate.getMinutes();
        const currentHour = currentDate.getHours();

        const timeIn = { hours: currentHour, minutes: currentMinutes };

        setTimeIn(timeIn);
        setMessage({ status: "success", content: "Time in successfully." });

        if (timeIn.hours > 8 || (timeIn.hours === 8 && timeIn.minutes > 5)) {
            logStatus = "late";
        }

        setLogs(prevState => {
            const copy = [...prevState];
            copy[0].timeIn = { ...timeIn, displayTime };
            return copy;
        });
    };

    const timeOutHandler = () => {
        const currentDate = new Date();
        const currentHour = currentDate.getHours();
        const currentMinutes = currentDate.getMinutes();

        const timeOut = { hours: currentHour, minutes: currentMinutes };

        setTimeOut(timeOut);
        setMessage({ status: "success", content: "Time out successful." });

        // ! currentMinutes here is also know as outMinutes

        const { hours: inHour, minutes: inMinutes } = timeIn;

        // const totalMinutes = inMinutes + currentMinutes;
        // const excessHours = Math.floor(totalMinutes / 60);

        // const minutesDiff = Math.abs(inMinutes - currentMinutes);
        // const remainingMinutes = totalMinutes > 60 ? totalMinutes % 60 : minutesDiff;

        const hoursDiff = Math.abs(inHour - currentHour);
        const minutesDiff = Math.abs(inMinutes - currentMinutes);

        duration = `${hoursDiff} ${minutesDiff > 9 ? minutesDiff : "0" + minutesDiff}`;

        if (hoursDiff <= 9) {
            logStatus = "Good";
        } else {
            logStatus = "Bad";
        }

        setLogs(prevState => {
            const copy = [...prevState];
            copy[0].timeOut = { ...timeOut, displayTime };
            copy[0].duration = duration;
            return copy;
        });
    };

    useEffect(() => {
        // set today's date basic info for the log
        const today = new Date();
        const dayWeek = today.toLocaleDateString("en", { weekday: "long" });
        const dateNum = today.getDate();
        const month = today.toLocaleDateString("en", {
            month: "long",
        });

        const todaysLog = {
            date: `${month} ${dateNum}`,
            day: dayWeek,
            timeIn: "",
            timeOut: "",
            status: logStatus,
            duration,
        };

        // setLogs(prevState => [...prevState, todaysLog]);
        setLogs(prevState => {
            const copy = [...prevState];
            copy.unshift(todaysLog);
            return copy;
        });
    }, []);

    useEffect(() => {
        const timer = setTimeout(() => setMessage({}), 3000);
        return () => clearTimeout(timer);
    }, [timeIn, timeOut]);

    return (
        <section className="resources">
            <div className="upper">
                <div className="heading">
                    <p className="wish">
                        {wish} <span className="highlight">{user.name || "N/A"}.</span>
                    </p>
                    <div className="date">
                        <p>
                            <AiOutlineFieldTime /> {displayTime}
                        </p>
                        <p>
                            <AiTwotoneCalendar /> {date}
                        </p>
                    </div>
                </div>
                <div className="actions">
                    <button className="filled" disabled={hasTimeIn} onClick={timeInHandler}>
                        In
                    </button>

                    <button disabled={hasTimeOut} onClick={timeOutHandler}>
                        Out
                    </button>
                </div>
            </div>

            <div className="message-contai">
                <p className={`message ${message.status} ${showMessage ? "show" : ""}`}>
                    {message.content}
                </p>
            </div>

            <table className="data-logs">
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>Date</th>
                        <th>Day</th>
                        <th>Time In</th>
                        <th>Time Out</th>
                        <th>Status</th>
                        <th>Duration</th>
                    </tr>
                </thead>
                <tbody>
                    {logs.map((log, index) => {
                        const { date, day, timeIn, timeOut, status, duration } = log;

                        return (
                            <tr key={date}>
                                <td>{index + 1}</td>
                                <td>{date}</td>
                                <td>{day}</td>
                                <td>{timeIn.displayTime}</td>
                                <td>{timeOut.displayTime}</td>
                                <td className={`status ${status}`}>{status}</td>
                                <td>{duration}</td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </section>
    );
};

export default Resources;
