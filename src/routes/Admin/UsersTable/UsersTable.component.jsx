import React from "react";

import "./UsersTable.styles.scss";

const UsersTable = ({ dataToDisplay, userRole }) => {
    console.log(userRole);

    return (
        <table className="users-table data-logs">
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Location</th>
                    <th>Phone</th>
                </tr>
            </thead>
            <tbody>
                {dataToDisplay.map((user, index) => {
                    const { id, name, email, address, phone, role } = user;

                    if (userRole === role) {
                        return (
                            <tr key={name}>
                                <td>{`${id.slice(0, 10)}...`}</td>
                                <td>
                                    <strong>{name}</strong>{" "}
                                </td>
                                <td>{email}</td>
                                <td>{address}</td>
                                <td>{phone}</td>
                            </tr>
                        );
                    }

                    return null;
                })}
            </tbody>
        </table>
    );
};

export default UsersTable;
