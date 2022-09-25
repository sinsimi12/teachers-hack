import React from "react";

import DataTable from "../../../components/DataTable/DataTable.component";

import UsersTable from "../UsersTable/UsersTable.component";

import { useAuthContext } from "../../../store/AuthContext";

const Teachers = () => {
    const { users } = useAuthContext();

    return (
        <div>
            <DataTable logs={users} Table={UsersTable} userRole="teacher" />
        </div>
    );
};

export default Teachers;
