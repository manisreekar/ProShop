import { useParams } from "react-router-dom"
import {Link} from 'react-router-dom'
import {Row,Col,Image, ListGroup, Card, Button, ListGroupItem} from 'react-bootstrap'
import products from "../products"
import Rating from "../components/Rating"
const ProductScreen = () => {
    const{id:productId}=useParams();
    const product =products.find((p)=>p._id===productId)
    console.log(product);
  return (
    <>
        <Link className="btn btn-light my-3" to='/'>
            Go Back
        </Link>
        <Row>
            <Col md={5}>
            <Image src={product.image} alt={product.name} fluid />
            </Col>
            <Col md={4}>
            <ListGroup variant="flush">
            <ListGroup.Item>
                  <h3>{product.name}</h3>
            </ListGroup.Item>
            <ListGroup.Item>
                  <Rating
                    value={product.rating}
                    text={`${product.numReviews} reviews`}
                  />
            </ListGroup.Item>
            <ListGroup.Item>Price: ${product.price}</ListGroup.Item>
            <ListGroupItem>
                Decscription: {product.description}
            </ListGroupItem>
            </ListGroup>
            </Col>
            <Col md={3}>
                <Card>
                    <ListGroup variant="fluh">
                        <ListGroupItem>
                            <Col>Price:</Col>
                            <Col>
                            <strong>${product.price}</strong>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Col>Status:</Col>
                            <Col>
                            <strong>{product.countInStock > 0 ? 'In Stock' : 'Out Of Stock'}</strong>
                            </Col>
                        </ListGroupItem>
                        <ListGroupItem>
                            <Button className="btn-block" type="button" disabled={product.countInStock===0}>
                                Add To Cart
                            </Button>
                        </ListGroupItem>
                    </ListGroup>
                </Card>

            </Col>
        </Row>
    </>
  )
}

export default ProductScreen