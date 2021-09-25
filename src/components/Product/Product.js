import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { Button, Card } from 'react-bootstrap';
import "./Product.css";
const Product = (props) => {
    const{name,price,address,img,phone,stay,description}=props.product;
    return (
        < div className="product">
            <div className="product-body">
                <Card.Img className="product-img" variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>Name: {name}</Card.Title>
                        <Card.Text> <strong>description : </strong>
                    {description.slice(0,45)} <br />
                        <strong>Address : </strong>
                    {address}<br />
                        <strong>Stay : </strong>
                    {stay} <br />
                        <strong>phone : </strong>
                    {phone} <br />
                    <strong>price : </strong>{price}
                        </Card.Text>
                        <Button onClick={()=>props.handleAddtToCart(props.product)} variant="primary"><FontAwesomeIcon icon={faShoppingCart }/> Book now</Button>
                    </Card.Body>
            </div>
        </div>
    );
};

export default Product;