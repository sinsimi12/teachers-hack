import React from "react";

import "./ResourcesTable.styles.scss";

const ResourcesTable = ({ dataToDisplay }) => {
    return (
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
                {dataToDisplay.map((log, index) => {
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
    );
};

export default ResourcesTable;
