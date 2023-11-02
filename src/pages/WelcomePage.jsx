import '../styles/WelcomePage.css'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import img1 from '../img/img1.png'
import { useEffect } from 'react';

export default function WelcomePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        if(!isAuthenticated) navigate('/login') 
    },[])

    const data = {
        problem: "",
        past: "",
        sleepScore: 0,
    }

    const handleTestButton = () =>{
        navigate("/problem-selection", { state: data });
    }

    return(
        <>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <img src={img1} alt="img" className="img1"/>
                <h1 className='heading'>Welcome to Wysa's Sleep secrets</h1>
                <p className='heading-2'>Take a Sleep efficiency test with us, because dream comes from good sleep only.</p>
                <button className='button' onClick={handleTestButton}>Take a Test</button>
            </Box>
        </>
    )
}