import dayjs from 'dayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { Box, Grid } from '@mui/material'
import { StaticTimePicker } from '@mui/x-date-pickers/StaticTimePicker';
import { useState, useEffect} from 'react';
import { useNavigate, useLocation } from 'react-router-dom'

export default function TimeSelectionPage() {

    const navigate = useNavigate();

    useEffect(() => {
        const isAuthenticated = localStorage.getItem("token");
        if(!isAuthenticated) navigate('/login')
        if(!data) navigate("/"); 
    },[])

    const location = useLocation();
    const data = location.state;

    const [sleepTime, setSleepTime] = useState();
    const [wakeupTime, setWakeupTime] = useState();

    const handleSubmitButton = () => {
        const dif = Math.abs(dayjs(sleepTime).diff(dayjs(wakeupTime), 'hour', true));
        console.log(dif);
        let efficiency = (dif * 100 / 9);
        efficiency >= 100 ? efficiency = 98.99 : efficiency = efficiency;
        data.sleepScore = efficiency.toFixed(2);
        console.log(data);
        navigate("/sleep-score", { state: data });
    }

    return(
        <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
            <h1 className='heading'>Select your daily time routine for sleep.</h1>       
            <Box>
                <Grid container>
                    <Grid item xs={6}>
                        <p className='heading-2'>What time do you go to bed for sleep?</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticTimePicker value={sleepTime} onChange={setSleepTime} defaultValue={dayjs('2022-04-17T06:00')} />
                        </LocalizationProvider>
                    </Grid>
                    <Grid item xs={6}>
                        <p className='heading-2'>What time do you wakeup from sleep?</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <StaticTimePicker value={wakeupTime} onChange={setWakeupTime} defaultValue={dayjs('2022-04-17T18:00')} />
                        </LocalizationProvider>
                    </Grid>
                </Grid>
            </Box>
            <button className='button' onClick={handleSubmitButton}>Submit</button>
        </Box>
    )
}