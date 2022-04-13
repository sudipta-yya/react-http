import React, { Component } from 'react'
import axios from 'axios'

class BalanceSheet extends Component {
    constructor(props) {
        super(props)
        this.state = {
            projectCode: '',
            reportType: '',
            reportDate: '31-03-2021',
            plbsCode: 'BS',
            bypassSpd: ''
        }
    }

    changeHandler = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    submitHandler = e => {
        e.preventDefault()
        console.log(this.state);
        axios.post(
            // 'http://localhost:8080/accounts/admin/plbs/detail/pdf',
            'http://localhost:8080/accounts/admin/plbs/summary',
            this.state)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    render() {
        const { projectCode, reportType, reportDate, plbsCode, bypassSpd } = this.state
        return (
            <div>
                <form onSubmit={this.submitHandler}>

                    <div><input type="text" name="projectCode" value={projectCode} onChange={this.changeHandler} /></div>
                    <div><input type="text" name="reportType" value={reportType} onChange={this.changeHandler} /></div>
                    <div><input type="date" name="reportDate" value={reportDate} onChange={this.changeHandler} /></div>
                    <div><input type="text" name="plbsCode" value={plbsCode} onChange={this.changeHandler} /></div>
                    <div><input type="text" name="bypassSpd" value={bypassSpd} onChange={this.changeHandler} /></div>

                    <button type='submit'>Submit</button>
                </form>
            </div>
        )
    }

}

export default BalanceSheet