import React from "react";
import Title from "../components/Title";
import "../style/Home.css";
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState, useEffect } from "react";
import SelectionNumber from "../components/SelectionNumber";
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';


export default function Home() {
  
const [inputList, setInputList] = useState([
    { sign: "+", value: 0, disabled: false },
  ]);

  const [result, setResult] = useState(0);
  const deleteInput = (index) => {
    const updatedInputList = inputList.filter((_, i) => i !== index);
    setInputList(updatedInputList);
  };

  const addNewRow = () => {
    setInputList([...inputList, { sign: "+", value: 0, disabled: false }]);
  };

  const handleInputChanged = (index) => (value) => {
    const updatedInputList = [...inputList];
    updatedInputList[index].value = value;
    setInputList(updatedInputList);
  };

  const handleSetOperation = (index, event) => {
    const updatedInputList = [...inputList];
    updatedInputList[index].sign = event.target.value;
    setInputList(updatedInputList);
  };

  useEffect(() => {
    updateResult();
  }, [inputList]);

  const toggleDisable = (index) => {
    const updatedInputList = [...inputList];
    updatedInputList[index].disabled = !updatedInputList[index].disabled;
    setInputList(updatedInputList);
  };

  const updateResult = () => {
    const total = inputList
      .filter((input) => !input.disabled)
      .reduce((acc, { sign, value }) => {
        return sign === "+" ? acc + Number(value) : acc - Number(value);
      }, 0);
    setResult(total);
  };

    return (
      <div id="containerHome">
            
        <div>
            <Title props={"Welcome to the React Challenge"} />
            <p>Taken the html structure in the example below (index.html), <br/>write a simple React calculator (adder) su that has the following mandatory functionalities:</p>
            <ul>
                <li>rows can be added and removed</li>
                <li>each row have a sign (minus or plus)</li>
                <li>each row can be enabled or disabled by a dedicated control button. Disabled rows must be excluded from theaddition.</li>
                <li>The result must be updated "live" while the user is writing</li>
            </ul>
            <p>Feel free to add libraries if needed.</p>
            <p>Structure and quality of the code, are matter of evaluation</p>
            <p>ES6+ Javascript knowledge is matter of evaluation</p>
            <p>Look and feel of the solution is a plus</p>
    
          </div>      
          <h2>Example below</h2>
          <div class="wrapper">
          <div>
              <Button variant="outlined" color="success" onClick={addNewRow}>Add row</Button>
              </div>
              <ul style={{listStyleType: 'none'}}>
          {inputList.map((input, index) => (
            <li key={index}>
              <div id="containerLabel">
                <div id="containerOperation">
                  <Select
                    id="labelOperation"
                    value={input.sign}
                    fontsize="normal"
                    label="Sign"
                    onChange={(event) => handleSetOperation(index, event)}
                  >
                    <MenuItem value={"+"}>+</MenuItem>
                    <MenuItem value={"-"}>-</MenuItem>
                  </Select>
                </div>
                <div id="containerNumber">

                <SelectionNumber
                  value={input.value}
                  onInputChange={handleInputChanged(index)}
                />
                </div>
                <div>

                <IconButton
                  aria-label="delete"
                  onClick={() => deleteInput(index)}
                >
                  <DeleteIcon />
                </IconButton>
                <FormControlLabel
                  control={<Switch />}
                  onClick={() => toggleDisable(index)}
                  label="Disable"
                />
                </div>
              </div>
            </li>
          ))}
        </ul>
            <div>
              <div ><h4 id="resultStyle">Result: {result}</h4></div>
            </div>
          </div>
        </div>
      );
}
