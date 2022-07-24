import Paper from '@mui/material/Paper';
import InputBase from '@mui/material/InputBase';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import SearchIcon from '@mui/icons-material/Search';
import Box from '@mui/material/Box'

export default function SearchBar() {

    const testSubmit = (e) => {
        e.preventDefault()
        console.log('test')
    }

    return (
        <Box pt={5} sx={{ display: 'flex', justifyContent: 'center' }}>
            <Paper
                component="form"
                sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}
            >
                <InputBase
                    sx={{ ml: 1, flex: 1 }}
                    placeholder="Search Kittens or Pups"
                />
                <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
                <IconButton onClick={(e) => testSubmit(e)} type="submit" sx={{ p: '10px' }}>
                    <SearchIcon />
                </IconButton>
            </Paper>
        </Box>

    );
}
