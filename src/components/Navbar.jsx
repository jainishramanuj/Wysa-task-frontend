import '../styles/Navbar.css';
import { Box } from "@mui/material";
import { useNavigate } from 'react-router-dom';

export default function Navbar() {

    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem("token");
        navigate('/login')
    }

    return(
        <>
            <Box 
                sx={{ 
                    display: "flex",
                    justifyContent: "space-between",
                    padding: "2vh 4vw 2.5vh 8vw",
                    backgroundColor: "#04364A"
                }}
            >
                <Box sx={{display: "flex"}} >
                    <h2 className="nav-brandname">Wysa</h2>
                </Box>
                <Box sx={{display: "flex", marginRight: "8vw"}}>
                    <button onClick={handleLogout} className="logout-button">Logout</button>
                </Box>
            </Box>
        </>
    )
}