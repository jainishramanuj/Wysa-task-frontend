import axios from "axios";
import { useState } from "react";
import { Box, Input } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../styles/common.css'

export default function SignUp() {

    const navigate = useNavigate();

    const [err, setErr] = useState("");

    const [data, setData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) =>{
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = process.env.REACT_APP_SIGNUP_URL
            const { data: res } = await axios.post(url, data);
            navigate("/login");

        } catch(error) {
            if(
                error.response &&
                error.response.status >= 400 &&
                error.response.status <= 500
            ) {
                setErr(error.response.data.message)
            }
        }
    }

    return(
        <>
            <form onSubmit={handleSubmit}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                    <h1 className="login-heading">Create Account</h1>
                    <Input 
                        type="text" 
                        placeholder="First Name" 
                        name="firstName" 
                        onChange={handleChange}
                        value={data.firstName} 
                        required
                        className="input-area"
                    />
                    <Input 
                        type="text" 
                        placeholder="Last Name" 
                        name="lastName" 
                        onChange={handleChange}
                        value={data.lastName} 
                        required
                        className="input-area"
                    />
                    <Input 
                        type="email" 
                        placeholder="Email" 
                        name="email" 
                        onChange={handleChange}
                        value={data.email} 
                        required
                        className="input-area"
                    />
                    <Input 
                        type="password" 
                        placeholder="Password" 
                        name="password" 
                        onChange={handleChange}
                        value={data.password} 
                        required
                        className="input-area"
                    />
                    { err && <div className="error">Error: {err}</div> }
                    <button type="submit" className="button">Sign Up</button>
                </Box>
            </form>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <span className="heading-2">Already have Account? <Link to="/login"> Log in </Link> </span>
            </Box>
        </>
    )
}