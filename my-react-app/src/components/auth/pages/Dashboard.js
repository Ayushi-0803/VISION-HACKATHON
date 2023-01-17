import{Button,CssBaseline,Grid,Typography}from '@mui/material'
import {useNavigate} from 'react-router-dom';


const Dashboard=()=>{
    const navigate=useNavigate()
    const handleLogout=()=>{
        console.log("Logout Clicked");
        navigate('/login')
    }
    return<>
    <CssBaseline/>
    <Grid>
        <Grid item sm={2} sx={{backgroundColor:'purple',p:2,color:'white' ,width:'100vw'}}>
            <h1>Dashboard</h1>
            
<Typography variant='h6'>Name:Ayushi</Typography>
<Typography variant='h5'>Scholar No:211117831</Typography>
<Typography variant='h5'>Branch:CSE</Typography>
<Button variant='contained' color='warning' size='large' onClick={handleLogout} sx={{mt:8}}>Logout</Button>
        </Grid>
        <Grid item sm={8}>

        </Grid>
    </Grid>
    </>
};
export default Dashboard;