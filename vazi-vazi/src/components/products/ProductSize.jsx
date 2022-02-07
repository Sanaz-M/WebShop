import { Button }  from 'react-bootstrap';

const ProductSize = ({number}) =>{
    const sizes = [38, 38.5, 39, 40.5, 41, 42, 44]

    return (
        <div>
            {sizes.map((size, index) => (
                    <Button className="mb-1 mr-1" id="size-btn" variant="outline-dark" key={index} value={number}>{size}</Button>
            ))}
            
        </div>
    )
}

export default ProductSize;