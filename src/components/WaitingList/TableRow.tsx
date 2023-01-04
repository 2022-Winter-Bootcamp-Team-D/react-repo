import React, { useState, useEffect } from "react";

const TableRow = ({ key, data}: any) => {
    const [RowData, setRowData] = useState(data);

    return (
        <>
        <tr key={key}>
            <td>{RowData.instance}</td>
            <td>{RowData.application}</td>
            <td> {(RowData.status)? "green":"red"} </td>
            <td>{(RowData.blocked)? "green":"red"}</td>
            <td>{(RowData.stop)? "green":"red"}</td>
        </tr>
        </>
    )
};


export default TableRow;