import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {

    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62dadaefe56f6d82a76b2d7e.mockapi.io/fakeData`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, [])

    const setData = (data) => {
        let { id, firstName, lastName, checkbox } = data;
        localStorage.setItem('ID', id);
        localStorage.setItem('First Name', firstName);
        localStorage.setItem('Last Name', lastName);
        localStorage.setItem('Checkbox Value', checkbox)
    }

    const getData = () => {
        axios.get(`https://62dadaefe56f6d82a76b2d7e.mockapi.io/fakeData`)
            .then((getData) => {
                 setAPIData(getData.data);
             })
    }


    const onDelete = (id) => {
        axios.delete(`https://62dadaefe56f6d82a76b2d7e.mockapi.io/fakeData/${id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>First Name</Table.HeaderCell>
                        <Table.HeaderCell>Last Name</Table.HeaderCell>
                        <Table.HeaderCell>Checked</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data) => {
                        return (
                        <Table.Row>
                            <Table.Cell>{data.firstName}</Table.Cell>
                            <Table.Cell>{data.lastName}</Table.Cell>
                            <Table.Cell>{data.checkbox ? 'Checked' : 'Unchecked'}</Table.Cell>
                            <Link to='/update'>
                                <Table.Cell> 
                                    <Button onClick={() => setData(data)}>Update</Button>
                                </Table.Cell>
                            </Link>
                            <Table.Cell> 
                                <Button onClick={() => onDelete(data.id)}>Delete</Button>
                            </Table.Cell>
                        </Table.Row>

                    )})}
                </Table.Body>
            </Table>
        </div>
    )
}
