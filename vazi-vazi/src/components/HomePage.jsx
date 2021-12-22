import Pic1 from '../assets/register-photo1.jpg'
import { Jumbotron, Button, Container } from 'react-bootstrap'
import MyNavBar from './MyNavBar';
import { useEffect } from 'react'

const HomePage = () => {


    useEffect(() => {
        saveProduct()
    }, [])

    const saveProduct = async () => {
        try {
          let response = await fetch('http://localhost:3000/products', {
            headers: {
              'Content-Type': 'application/json',
            },
          })
          if (response.ok) {
              let data = await response.json()
            console.log(data)
          } else {
            console.log('error')
          }
        } catch (error) {
          console.log(error)
        }
      }

    return (
        <Container fluid className="homepage-main">
            <MyNavBar />
            <Jumbotron id="Jumbotron1">
                <h1>Hello, world!</h1>
                <p>
                    This is a simple hero unit, a simple jumbotron-style component for calling
                    extra attention to featured content or information.
                </p>
                <p>
                    <Button variant="primary">Learn more</Button>
                </p>
            </Jumbotron>
            <div>
                <img src={Pic1} height="300px" />
                <img src={Pic1} height="300px" className="mx-2" />
                <img src={Pic1} height="300px" />
            </div>
            <div>
                <img src={Pic1} height="300px" />
                <img src={Pic1} height="300px" className="mx-2" />
                <img src={Pic1} height="300px" />
            </div>


        </Container>
    )
}

export default HomePage;