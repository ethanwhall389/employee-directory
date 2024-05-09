import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { useNavigate } from 'react-router-dom';

export default function BackArrow() {
    const navigate = useNavigate();
    return (
        <div className='my-4 hover:cursor-pointer' onClick={() => navigate('/')}>
            <ArrowBackIcon fontSize='large'/>
        </div>
    )
}