import { Box } from '@mui/material'
import { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

export default function PastSelectionPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        if(!isAuthenticated) navigate('/login')
        if(!data) navigate("/");
    },[])

    const location = useLocation();
    const data = location.state;

    const options = [
        "Less than 2 weeks",
        "Between 2 to 8 weeks",
        "More than 8 weeks"
    ];

    const handleClick = (e) => {
        data.past = e.target.innerText
        console.log(data);
        navigate("/time-selection", { state: data });
    }

    const listItems = options.map((option) => <span key={option} onClick={handleClick} className='list-items'>{option}</span>);

    return(
        <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className='heading'>That's a great goal, How long have you been struggling with your sleep?</h1>
            <p className='heading-2'>Click on one option you can realate</p>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
                {listItems}
            </Box>
        </Box>
    )
}