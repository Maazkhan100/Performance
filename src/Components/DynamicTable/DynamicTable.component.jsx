import React from "react";

import TransactionHistory from "../Performance-Metric/PerformanceMetricData";
import './DynamicTable.styles.css';

const DynamicTable = () => {
    // get table column
    var column;
    var actualValue =  {};
    var tableData = [];
    // Get table headers in array
    column = Object.keys(TransactionHistory[0]);
    Object.assign(actualValue, TransactionHistory);
    tableData = Object.values(actualValue);
    console.log("Table data", tableData);
    // get table heading data
    const ThData =()=>{
        return column.map((data)=>{
            return <th key={data}>{data}</th>
        })
    }
    
    // get table row data
    const tdData = () => {
        return tableData.map((data)=>{
            return(
                <tr>
                    {
                        column.map((v) => {
                            return <td>{data[v]}</td>
                        })
                    }
                </tr>
            )
        })
    }

    return (
        <div className="card-Dynamic">
            <h4> Performance metric table </h4>
            <table className="table-content">
                <thead>
                    <tr>{ThData()}</tr>
                </thead>
                <tbody>
                    {tdData()}
                </tbody>
            </table>
       </div>
    )
}

export default DynamicTable;
