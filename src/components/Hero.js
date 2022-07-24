import Box from '@mui/material/Box'
import SearchBar from './SearchBar'
import './hero.css'

export default function Hero () {
    return (
        <>
            <Box className="hero-section" sx={{ height: '50vh', width: '100%' }}>
                <SearchBar/>
            </Box>
        </>

        )
}