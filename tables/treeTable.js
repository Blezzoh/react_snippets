import React from 'react'
import ReactTable from 'react-table'
import 'react-table/react-table.css'

/**
 * data to be displayed in the table, in regular html this is the table data rows
 * each index corresponds to a row
 */
const data = [
    {
        team: 'Chelsea fc',
        city: 'London',
        founded: '1905',
        stadium: 'Stamford Bridge'
    },
    {
        team: 'Liverpool fc',
        city: 'Liverpool',
        founded: '1892',
        stadium:'Anfield'
    },
    {
        team: 'Manchester United fc',
        city: 'Manchester',
        founded: '1878',
        stadium: 'Old Trafford'
    },
    {
        team: 'Arsenal fc',
        city: 'London',
        //founded skipped on purpose
        stadium: 'Emirates Stadium'
    }
    //Other teams shouldn't matter really
]

/**
 * in the normal html, this will the table headers
 * each index corresponds to a colum header
 */
const columns = [
    {
        Header: 'Team',
        accessor: 'team'
    },
    {
        Header: 'City',
        accessor: 'city'
    },
    {
        Header: 'Foundation Year',
        accessor: 'founded'
    },
    {
        Header: 'Stadium',
        accessor: 'stadium'
    }
]

export default () =>{
    return (
        <ReactTable 
            data = {data}
            columns={columns}
            // turn this to true to see the effect
            showPagination ={false}
            defaultPageSize = {data.length }
            className="-striped -highlight"
            SubComponent={row => {
                console.log('row',row)
                return(
                    <ReactTable 
                        data = {[data[row.index]]}
                        columns={columns}
                        // turn this to true to see the effect
                        showPagination ={false}
                        defaultPageSize = {[data[row.index]].length }
                        />
                )
            }}
        />
    )
}
