import React, { useState, useEffect } from "react";

const TableRow = ({ key, data}: any) => {
    const [RowData, setRowData] = useState(data);

    return (
        <>
        <tr key={key}>
            <td>{RowData.number}</td>
            <td>{RowData.name}</td>
            <td> {RowData.people} </td>
            <td>{RowData.phoneNumber}</td>
            <td>{RowData.phoneNumber}</td>
        </tr>
        </>
    )
};


export default TableRow;