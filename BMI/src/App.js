import './App.css';
import SliderComp from './components/SliderComp';
import Box from "@mui/material/Box";

function App() {
  return (
    <Box sx={{
      display: 'flex',
      p:"267px",
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: 'primary.dark',
      
    }}>
    <SliderComp></SliderComp>
    </Box>
  );
}

export default App;
