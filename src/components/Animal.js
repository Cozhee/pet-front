import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { FaCat, FaDog, FaHome, FaPaw } from 'react-icons/fa'


export default function Animal({type}) {

    let icon;
    if (type === 'Cat') {
        icon = <FaCat size={100} style={{ color: '#6505B5' }}/>
    } else if (type === 'Dog') {
        icon = <FaDog size={100} style={{ color: '#6505B5' }}/>
    } else if (type === 'Shelters') {
        icon = <FaHome size={100} style={{ color: '#6505B5' }}/>
    } else {
        icon = <FaPaw size={100} style={{ color: '#6505B5' }}/>
    }

    return (
        <Card sx={{ display: 'inline-block', justifyContent: 'center', textAlign: 'center', margin: 3, padding: 3 }}>
            <CardContent>
                {icon}
                <Typography mt={1} variant="subtitle1">
                    {type}
                </Typography>
            </CardContent>
        </Card>
    );
}
