import React, { Component } from "react";
import { EmployeeConsumer } from "../EmployeeContext";
import { Table, Button } from "react-bootstrap";

export default class Home extends Component {
    render() {
        return (
            <div className="container">
                <h3>Employee Information</h3>
                <EmployeeConsumer>
                    {(value) => {
                        return (
                            <Table variant="dark" striped bordered hover>
                                <tbody>
                                    <tr>
                                        <th>Name</th>
                                        <th>Age</th>
                                        <th>Occupation</th>
                                        <th>Actions</th>
                                    </tr>
                                    <tr>
                                        <td>
                                            <input type="text" value={value.name} onChange={(e) => { value.onUpdate(e, "name") }} />
                                        </td>
                                        <td>
                                            <input type="text" value={value.age} onChange={(e) => { value.onUpdate(e, "age") }} />
                                        </td>
                                        <td>
                                            <input type="text" value={value.occupation} onChange={(e) => { value.onUpdate(e, "occupation") }} />
                                        </td>
                                        <td>
                                            <Button onClick={() => { value.onSave() }}>Add</Button>
                                        </td>
                                    </tr>
                                    {value.allData.map((employee, index) => {
                                        return (
                                            <tr key={index}>
                                                <td>{employee.name}</td>
                                                <td>{employee.age}</td>
                                                <td>{employee.occupation}</td>
                                                <td>
                                                    <Button variant="danger" onClick={() => { value.onDelete(employee.id) }}>Delete</Button>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        )
                    }}
                </EmployeeConsumer>
            </div>
        )
    }
}