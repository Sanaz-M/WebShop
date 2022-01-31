import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col, Form, Button } from 'react-bootstrap'

const SingleProduct = () => {
    const [product, setProduct] = useState({
        category: '',
        design: '',
        name: '',
        price: '',
        origin: '',
        composition: '',
        image: ''
    });

    const params = useParams();


    useEffect(() => {
        productInfo();
    }, [])

    const productInfo = async () => {
        let response = await fetch(`http://localhost:3000/products/${params.id}`, {
            headers: {
                'Content-Type': 'application/json',
            },
        })
        const data = await response.json()
        console.log(data)
        setProduct(data)
    }

    const updateProduct = async (e) => {
        e.preventDefault()
        let response = await fetch(`http://localhost:3000/products/${product.id}`, {
            method: 'PUT',
            body: JSON.stringify({
                category: product.category,
                design: product.design,
                name: product.name,
                price: product.price,
                origin: product.origin,
                composition: product.composition,
                image: product.image
            }),
            headers: {
                'Content-Type': 'application/json',
            },
        })
        if (response.ok) {
            alert('success')
        } else {
            alert('error')
        }
    }


    return (
        <div>
            <Form onSubmit={(e) => updateProduct(e)}>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.category}
                        onChange={e => setProduct({ ...product, category: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Suitable for</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.design}
                        onChange={e => setProduct({ ...product, design: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Product Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.name}
                        onChange={e => setProduct({ ...product, name: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.price}
                        onChange={e => setProduct({ ...product, price: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Origin Country</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.origin}
                        onChange={e => setProduct({ ...product, origin: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Composition</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.composition}
                        onChange={e => setProduct({ ...product, composition: e.target.value })}
                    />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="name"
                        value={product.image}
                        onChange={e => setProduct({ ...product, image: e.target.value })}
                    />
                </Form.Group>
                <Button
                    onClick={updateProduct}
                    variant="primary"
                    type="submit"
                >
                    Save
                </Button>
            </Form>
        </div>
    )
}

export default SingleProduct;