import React from 'react';
import { Card } from 'react-bootstrap';

const DisplayCustomerService = ({service}) => {

    const{orderName,projectDetails}=service
  
    return (

        <Card style={{ width: '18rem' }} className='mt-3'>
            <Card.Body>
                <Card.Title>{orderName}</Card.Title>
                <Card.Text>
                    {projectDetails}
                </Card.Text>
            </Card.Body>
        </Card>

    );
};

export default DisplayCustomerService;