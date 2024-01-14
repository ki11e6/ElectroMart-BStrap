import { useParams, Link } from 'react-router-dom';
import { Row, Col, Image, ListGroup, Card, Button } from 'react-bootstrap';
import Rating from '../components/Rating';
import { useGetProductDetailsQuery } from '../slices/productsApiSlice';
import Loader from '../components/Loader';
import Message from '../components/Message';

function PoductScreen() {
    const { id: productId } = useParams();
    const { data: product, isLoading, error } = useGetProductDetailsQuery(productId);

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
                                <ListGroup.Item>
                                    <Button
                                        className={product.countInStock !== 0 ? 'bg-black' : 'bg-secondary'}
                                        type="button"
                                        disabled={product.countInStock === 0}
                                    >
                                        Add To Cart
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
