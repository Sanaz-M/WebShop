import { Link } from 'react-router-dom';

const Product = ({ name, image, price, currency }) => {

    const evaluateTotal = () => currency === '€' ? price : parseInt(price) + 0.13*price

    return (
        <div>
            <Link to="/details">
            <div className="ms-2 me-auto">
                <div>
                    <img src={image} alt='shoe' width='300' height='300' />
                </div>
            </div>
            <div className="product-card">{name}</div>
            <div className="product-card">{currency}{evaluateTotal()}</div>
            </Link>
        </div>
    )
}

export default Product;