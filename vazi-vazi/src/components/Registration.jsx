
import { Button, Container, Row, Col} from "react-bootstrap";
import { Fragment, useState } from "react";
import { Link } from "react-router-dom";

const Registration = () => {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }



    const onSubmit = async (e) => {
        e.preventDefault();
        try {

            if (password !== password2) {

                alert('Passwords do not match');

            } else if(password.length <8){
                alert('Password is too short. More than 8 characters, please!')
            }
            else if(!email.match( /^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)) {
                alert('Enter valid email address')
            }
            else {

                return setFormData

            }

        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <Container> 
            <Row className="justify-content-center">
                <Col md={8}>
                <h1 className='large text-dark'>Sign Up</h1>

        <Fragment>
           
            <form className='form' onSubmit={(e) => onSubmit(e)}>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='text'
                        placeholder='Name'
                        name='name'
                        value={name}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='email'
                        placeholder='Email Address'
                        name='email'
                        value={email}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='password'
                        placeholder='Password'
                        name='password'
                        value={password}
                        required
                    />
                </div>
                <div className='form-group'>
                    <input
                        onChange={onChange}
                        type='password'
                        placeholder='Confirm Password'
                        name='password2'
                        value={password2}
                        required
                    />
                </div>
                <Button
                 disabled={!email || !name || !password || !password2}
                    onSubmit={onChange}
                    type='submit'
                    className='btn btn-primary'>
                    Register
                </Button>
            </form>
            <p className='my-1'>
                Already have an account? <Link to='/login'>Sign In</Link>
            </p>
        </Fragment>
        </Col>
        </Row>
        </Container>
    );
};

export default Registration