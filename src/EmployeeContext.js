import React, { Component } from 'react';
import { rowData } from './appData';

const EmployeeContext = React.createContext();

class EmployeeProvider extends Component {

    state = {
        allData: rowData,
        id: '',
        name: '',
        age: '',
        occupation: '',
        count: 10
    }
    getRecord = (id) => {
        return this.state.allData.find(emp => emp.id === id);
    }

    onUpdate = (data, field) => {
        if (field === "name") {
            this.setState({
                name: data.target.value
            })
        }

        if (field === "age") {
            this.setState({
                age: data.target.value
            })
        }

        if (field === "occupation") {
            this.setState({
                occupation: data.target.value
            })
        }
        data.target.value = ""
    }

    onSave = () => {
        const emp = []
        emp["id"] = this.state.count;
        emp["name"] = this.state.name;
        emp["age"] = this.state.age;
        emp["occupation"] = this.state.occupation;
        console.log("saved emp " + emp);
        this.setState({
            allData: [...this.state.allData, emp],
            count: this.state.count + 1,
            name: "",
            age: "",
            occupation: ""
        })

        console.log("saved record current count " + this.state.count)
    }

    onDelete = (id) => {
        this.setState({
            allData: this.state.allData.filter(emp => emp.id !== id)
        })
    }

    render() {
        console.log(this.state.allData)
        return (
            <div>
                <EmployeeContext.Provider
                    value={{ ...this.state, onSave: this.onSave, onDelete: this.onDelete, onUpdate: this.onUpdate }}>
                    {this.props.children}
                </EmployeeContext.Provider>
            </div>
        )
    }
}

const EmployeeConsumer = EmployeeContext.Consumer;

export { EmployeeProvider, EmployeeConsumer }