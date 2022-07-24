import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import Animal from "./components/Animal"
import Box from "@mui/material/Box"

function App() {

    const options = ['Cat', 'Dog', 'Other', 'Shelters']

    return (
    <div className="App">
        <Navbar/>
        <Hero/>
        <Box sx={{ textAlign: 'center' }}>
            {options.map(option => {
                return (
                    <Animal key={option} type={option}/>
                )
            })}
        </Box>
    </div>

    );
}

export default App;
