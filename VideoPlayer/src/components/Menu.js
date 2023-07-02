import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';


export const Menu = ({videoName, handleRadioChange}) => {
    
return (<FormControl>
    <FormLabel id="demo-radio-buttons-group-label" sx={{fontWeight:"bolder", fontSize:"20px"}}>Video Player</FormLabel>
    <RadioGroup
      aria-labelledby="demo-radio-buttons-group-label"
      defaultValue="deer"
      name="radio-buttons-group"
      onChange={handleRadioChange}
    >
        {videoName.map((name, i) => 
      <FormControlLabel key={i} value={name} control={<Radio color='success' orientation="horizontal"/>} label={name} />
      )}
      

    </RadioGroup>
  </FormControl>);

}
export default Menu;