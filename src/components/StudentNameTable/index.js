import React from 'react'

const TableFunction = (props) => {

  const {tableData} = props

  return (
      <table >
        <thead>
          <tr>
            <th>
            Student's Name
            </th>
          </tr>  
        </thead>
        <tbody>
        {tableData}
        </tbody>
      </table>
  )
}

export default TableFunction