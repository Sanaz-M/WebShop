import './register.css'
import { Container, Row, Col } from "react-bootstrap";
import { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import RegisterPhoto from '../../assets/register-photo3.png';


const Registration = () => {

    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        password: "",
        password2: "",
    });

    const { name, email, password, password2 } = formData;

    const onChange = (e) => { setFormData({ ...formData, [e.target.name]: e.target.value }); }


    const fetchAndSubmit = async (e) => {
        e.preventDefault();
        try {
            let response = await fetch('http://localhost:3000/users', {
                method: 'POST',
                body: JSON.stringify(formData),
                headers: {
                    'Content-Type': 'application/json',
                },
            })

            if (password !== password2) {

                alert('Passwords do not match');

            } if (password.length < 8) {
                alert('Password is too short. More than 8 characters, please!')
            }
            if (response.ok) {
                let data = await response.json()
                return data
            }
            // if (!email.includes(/^(?=.*[0-9])(?=.*[a-zA-Z])([a-zA-Z0-9]+)$/)) {
            //     alert('Enter valid email address')
            // }
            else {
                return setFormData

            }

        }
        catch (err) {
            console.error(err);
        }
    }

    return (
        <Container id="register-container">
            <Row className="justify-content-center w-100">
                <Col md={6} xs={12} className="p-0 w-50">
                    <img className="register-image1" src={RegisterPhoto} alt="fashion" />
                </Col>
                <Col md={6} xs={12} className="w-50 form-section">
                    <h1 className="mb-4">Sign Up</h1>
                    <Fragment>
                        <form className='form' onSubmit={(e) => fetchAndSubmit(e)}>
                            <div className='form-group'>
                                <input className='form-control1'
                                    onChange={onChange}
                                    type='text'
                                    placeholder='Name'
                                    name='name'
                                    value={name}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control1'
                                    onChange={onChange}
                                    type='email'
                                    placeholder='Email Address'
                                    name='email'
                                    value={email}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control1'
                                    onChange={onChange}
                                    type='password'
                                    placeholder='Password'
                                    name='password'
                                    value={password}
                                    required
                                />
                            </div>
                            <div className='form-group'>
                                <input className='form-control1'
                                    onChange={onChange}
                                    type='password'
                                    placeholder='Confirm Password'
                                    name='password2'
                                    value={password2}
                                    required
                                />
                            </div>
                            <button
                                disabled={!email || !name || !password || !password2}
                                onSubmit={onChange}
                                type='submit'
                                className='btn-registeration'
                                onClick={() => {
                                    alert(
                                        `Thank you ${name}`
                                    )
                                }

                                }
                            >
                                Register
                            </button>

                        </form>
                        <p className='my-3'>
                            <span id="login-question">Already have an account? </span><Link to='/login' className="link-login ml-2"><span className="white-text">Sign In</span></Link>
                        </p>
                    </Fragment>
                </Col>
            </Row>
        </Container>
    );
};

export default Registration


