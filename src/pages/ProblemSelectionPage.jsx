import '../styles/common.css'
import { Box } from '@mui/material'
import { useNavigate, useLocation } from 'react-router-dom'
import { useEffect } from 'react';

export default function ProblemSelectionPage() {
    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        if(!isAuthenticated) navigate('/login') 
        if(!data) navigate("/");
    },[])

    const location = useLocation();
    const data = location.state;

    const options = [
        "I whould go to sleep easily",
        "I whould sleep though the night",
        "I'd wake up on time, refreshed"
    ];

    const handleClick = (e) =>{
        data.problem = e.target.innerText
        navigate('/past-selection', { state: data });
    }

    const listItems = options.map((option) => <span key={option} onClick={handleClick} className='list-items'>{option}</span>);

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className='heading'>Let's say in a few weeks, you're sleeping well, What would change?</h1>
            <p className='heading-2'>Click on one changes you would like to see</p>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {listItems}
            </Box>
        </Box>
    )
}
