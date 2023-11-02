import '../styles/common.css'
import { Link } from 'react-router-dom'
import { Box } from '@mui/material'
import { useEffect } from 'react'
import { useNavigate, useLocation } from 'react-router-dom'

export default function SleepScorePage() {

    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        if(!isAuthenticated) navigate('/login');
        if(!data) navigate("/");
    },[])

    const location = useLocation();
    const data = location.state;

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
            <h1 className='heading'>Your sleep efficiency score is here!</h1>
            <p className='heading-3'>You seems to have a sleep efficiency of <span className='bold-part'>{ data ? data.sleepScore : null }%</span>, That's great!, A higher sleep efficiency score means a more refreshing and enegizing sleep, which can help you move into your day with asense of lightness and ease.</p>

            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}} >
                <h1 className='heading'>We're here for you, With a great Opportunity!</h1>
                <h2 className='heading-2'>Be a part of Smart Sleep community.</h2>
                <Box sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                    <span className='button-2'> <Link className="link-2" to="/">Go to Home page</Link></span>
                    <span className='button'> <Link className="link" to="https://www.wysa.com/">Visit our Website</Link></span>
                </Box>
            </Box>
        </Box>
    )
}