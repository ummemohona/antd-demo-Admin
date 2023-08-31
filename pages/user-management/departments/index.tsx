import React from 'react'
import Protected from "@components/layout/protected";
import Departments from "@containers/user-management/deprtments";
const DepartmentsPage = () => {

    return (
        <Protected>
            <Departments/>
        </Protected>
    )
}

export default DepartmentsPage ;