import React from 'react'
import './style.css'

const Table = ({ data }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Registered Course</th>
                </tr>
            </thead>
            <tbody>
                {data
                    ? <RenderTableData data={data} />
                    : <tr>
                        <td>no student data available</td>
                        <td>no student data available</td>
                    </tr>}
            </tbody>

        </table>
    )
}

const RenderTableData = ({ data }) => {
    return (
        <>
            {data.map(student => (
                <tr>
                    <td>{student.name}</td>
                    <td>{student.course}</td>
                </tr>
            ))}
        </>
    )
}


export default Table
