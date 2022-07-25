import React, { useEffect, useState } from 'react';
import { Table, Button } from 'semantic-ui-react';
import axios from 'axios';
import { Link } from 'react-router-dom';


export default function Read() {
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`https://62dadaefe56f6d82a76b2d7e.mockapi.io/fakeData`)
            .then((response) => {
                setAPIData(response.data);
            })
    }, [])
   const setData = (data) => {
   console.log(data);
}
    return (
        <div>
            <Table.HeaderCell>Update</Table.HeaderCell>
            {APIData.map((data) => {
            return (
                
                <Link to=' /update'>
                    <Table.Cell> 
                        <Button onClick={() => setData(data)}>Update</Button>
                    </Table.Cell>
                </Link>
                        
            )})}
            
            
        </div>
    )
}
