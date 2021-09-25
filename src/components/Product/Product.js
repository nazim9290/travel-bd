import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Product = (props) => {
    const{name,price,address,img,phone,stay,rating,description}=props.product;
    return (
        < div className="product">
            <div className="product-body">
            <Card style={{ width: '18rem' }}>
             <Card.Img style={{height:'200px'}} variant="top" src={img} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                   {description.slice(0,150)}
                    </Card.Text>
                    <Button variant="primary">Book now</Button>
                </Card.Body>
                </Card>
            </div>
        </div>
    );
};

export default Product;