import './App.css';
import {useState} from "react";

function App() {
    const [color, setColor] = useState('')

    const handleColor = e => {
        e.preventDefault();
        setColor(e.target.value);
    }
    return (
        <>
            <div className="App" style={{backgroundColor: `${color}`}}/>
            <label>Select base color: </label>
            <select name="colors" value={color} onChange={handleColor}>
                <option value="">-select color-</option>
                <option value="#f00">Red</option>
                <option value="#0f0">Green</option>
                <option value="#00f">Blue</option>
            </select>
            <p>
                <label>Color HEX: </label>
                <input type="text" value={color} onChange={handleColor}/>
            </p>
        </>
    );
}

export default App;
