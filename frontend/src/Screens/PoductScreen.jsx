import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { Row, Col, Image, ListGroup, Card, Button, Form } from 'react-bootstrap';

import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import { addToCart } from '../slices/cartSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

function PoductScreen() {
  const { id: productId } = useParams();

  const [qty, setQty] = useState(1);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

  const addToCartHandler = () => {
    dispatch(addToCart({ ...product, qty }));
    navigate('/cart');
  };

  return (
    <>
      {/* back button */}
      <Link to="/" className="btn btn-light my-3">
        Go Back
      </Link>
      {/* single row */}
      {isLoading ? (
        <Loader />
      ) : error ? (
        <Message variant="danger">{error?.data?.message || error?.message}</Message>
      ) : (
        <Row>
          {/* 1st column image */}
          <Col md={5}>
            {/* fluid for responsive image */}
            <Image src={product.image} alt={product.name} fluid />
          </Col>
          {/* 2nd column product details */}
          <Col md={4}>
            {/* grouping the details ,removes the borders and rounded corners from the list of group items*/}
            <ListGroup variant="flush">
              {/* product name */}
              <ListGroup.Item>
                <h3>{product.name}</h3>
              </ListGroup.Item>
              {/* product rating */}
              <ListGroup.Item>
                <Rating value={product.rating} text={`${product.numReviews} reviews`} />
              </ListGroup.Item>
              {/* product price */}
              <ListGroup.Item>Price: ₹ {product.price}</ListGroup.Item>
              <ListGroup.Item>Desciption:{product.description}</ListGroup.Item>
            </ListGroup>
          </Col>
          <Col md={3}>
            {/* add to cart section */}
            <Card>
              <ListGroup variant="flush">
                <ListGroup.Item>
                  <Row>
                    <Col>Price: </Col>
                    <Col>
                      <strong>₹{product.price}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                <ListGroup.Item>
                  <Row>
                    <Col>Status: </Col>
                    <Col>
                      <strong>{product.countInStock > 0 ? 'In Stock' : 'Out of Stock'}</strong>
                    </Col>
                  </Row>
                </ListGroup.Item>
                {/* quantity */}
                {product.countInStock > 0 && (
                  <ListGroup.Item>
                    <Row>
                      <Col>Qty</Col>
                      <Col>
                        <Form.Control as="select" value={qty} onChange={(e) => setQty(Number(e.target.value))}>
                          {[...Array(product.countInStock).keys()].map((x) => (
                            <option key={x + 1} value={x + 1}>
                              {x + 1}
                            </option>
                          ))}
                        </Form.Control>
                      </Col>
                    </Row>
                  </ListGroup.Item>
                )}
                {/* add to cart */}
                <ListGroup.Item>
                  <Button
                    variant={product.countInStock !== 0 ? 'success' : 'secondary'}
                    type="button"
                    disabled={product.countInStock === 0}
                    onClick={addToCartHandler}
                  >
                    Add to Cart
                  </Button>
                </ListGroup.Item>
              </ListGroup>
            </Card>
          </Col>
        </Row>
      )}
    </>
  );
}

export default PoductScreen;
