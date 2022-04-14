// import { projectScope } from 'npm'
import React, { Component, Fragment } from 'react'
import { Table, Card } from 'react-bootstrap'
import { data } from '../data'


export class Index extends Component {
    render() {
        return (
            <div>
                <ProductTable />
            </div>
        )
    }
}

export default Index

class ProductTable extends Component {
    render() {
        return (
            <div>
                <Card>
                    <Table bordered striped>

                        <Date />
                    </Table>
                </Card>
            </div>
        )
    }
}

class Date extends Component {
    render() {
        let date = [];
        let prevDate = [Date];
        const sort = data.forEach((elem, index) => {
            if (elem.date !== prevDate) {
                
                date =  [...date, prevDate]
            }
            prevDate = elem.date
            
        })
        
        return (
            <>
                <TableBody date={date} />
            </>
        )
    }
}

class TableBody extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }

    render() {
        return (
            <>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>description</th>
                        <th>complete</th>
                        <th>canceled</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        this.props.date.map((elem, index) => (
                            <Fragment key={index}>
                                <tr>{elem}</tr>
                                {
                                    data.map((item, index) => (
                                        <Fragment key={index}>
                                            {
                                                elem === item.date &&
                                                <tr>
                                                    <td>{item.id}</td>
                                                    <td>{item.title}</td>
                                                    <td>{item.description}</td>
                                                    <td>{item.complete ? 'true' : 'false'}</td>
                                                    <td>{item.canceled ? 'true' : 'false'}</td>
                                                </tr>
                                            }
                                        </Fragment>
                                    ))
                                }

                            </Fragment>
                        ))
                    }
                </tbody>
            </>
        )
    }
}









