import React, { useEffect, useState } from 'react';
import { Button, Col, Form, Row } from 'react-bootstrap';
import { Link } from "react-router-dom";
import MainScreen from '../../components/MainScreen';
import "./LoginScreen.css"
import Loading from '../../components/Loading';
import ErrorMessage from '../../components/ErrorMessage';
import { useDispatch, useSelector }from "react-redux"
import { login } from '../../actions/userActions';



const LoginScreen = ({history}) => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    // const [error, setError] = useState(false)
    // const [loading, setLoading] = useState(false)

    const dispatch = useDispatch();

    const userLogin = useSelector((state)=> state.userLogin);

    const {loading,error,userInfo} = userLogin;

    useEffect(() => {
        if (userInfo) {
            history.push("/mynotes");
        };
    }, [history,userInfo]);
    

    const submitHandler = async (e) => {
        e.preventDefault()


        dispatch(login(email,password))
        // try {
        //     const config = {
        //         Headers: {
        //             "Content-type": "application/json"
        //         }
        //     }

        //     setLoading(true)

        //     const { data } = await axios.post("/api/users/login",
        //         {
        //             email,
        //             password,
        //         },
        //         config
        //     );

        //     console.log(data);
        //     localStorage.setItem("userInfo", JSON.stringify(data));
        //     setLoading(false)
        // } catch (error) {
        //     // console.log(error);
        //     setError(error.response.data.message);
        //     setLoading(false)
        // }
    }



    return (
        <MainScreen title="LOGIN">
            <div className='loginContainer'>
                {error && <ErrorMessage variant='danger'>{error}</ErrorMessage>}
                {loading && <Loading />}
                <Form onSubmit={submitHandler}>
                    <Form.Group controlId='formBasicEmail'>
                        <Form.Label>Email address</Form.Label>
                        <Form.Control
                            type='email'
                            value={email}
                            placeholder='Enter Email'
                            onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>
                    <Form.Group controlId='formBasicPassword'>
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type='password'
                            value={password}
                            placeholder='Password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </Form.Group>
                    <Button variant='primary' type='submit'>
                        submit
                    </Button>
                </Form>
                <Row className='py-3'>
                    <Col>
                        New User ? <Link to="/register">Register Here</Link>
                    </Col>
                </Row>
            </div>
        </MainScreen>
    );
};

export default LoginScreen;