import axios from "axios";
import { useState } from "react";
import { Box, Input } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import '../styles/common.css'

export default function LogIn() {

    const [err, setErr] = useState("");

    const navigate = useNavigate();

    const [data, setData] = useState({
        email: "",
        password: ""
    });

    const handleChange = ({ currentTarget: input }) =>{
        setData({ ...data, [input.name]: input.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const url = process.env.REACT_APP_LOGIN_URL
            const { data: res } = await axios.post(url, data);
            localStorage.setItem("token", res.data);
            navigate("/");
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
                    <h1 className="login-heading">Log in to your Account</h1>
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
                    <button type="submit" className="button">Log In</button>
                </Box>
            </form>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                <span className="heading-2">New Here? <Link to="/signup"> Sign Up </Link> </span>
            </Box>
        </>
    )
}