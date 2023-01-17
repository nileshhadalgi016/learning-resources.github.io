import React from 'react'
import Table from 'react-bootstrap/Table';
// import 'react-bootstrap'

export default function BodyCompo(props){
    return(
        <div>
            <Table striped hover bordered size="sm">
                <tbody>
                <tr >
                <td>{props.title}</td>
                <td> <a href={props.link}> Click here </a></td>
                </tr>
                </tbody>
                
            </Table>
        </div>
    )
}