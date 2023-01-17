import React from 'react'
// import BodyCompo from './BodyCompo.js'
// import Table from 'react-bootstrap/Table';
import data from './Data.js'
export default function Body(){
    // const arr = data.map(item=>{
    //     return(
    //         <BodyCompo title={item.title} link={item.link}/>
    //     )
    //     })
    const TableHeaderRow = () => {
        return <tr><th>Course Name</th><th>Course link</th></tr>;
        }
        const TableRow = ({data}) => {
            return data.map((data) =>
                <tr>
                <td>{data.title}</td><td> <a href={data.link}> Click here</a></td>
                </tr>
            );
            }
    return(
        <div className='container'>
            <div className='bodySearch child1'>
                <input className='input' type="text" placeholder='Name of the course' />
                <button className='btn'>Search</button>
                <table className='tableBody'>
                <TableHeaderRow />
                <TableRow data={data} />
                </table>
            </div>
            <div className='child2'>

            </div>
            
            
        </div>
    )
}