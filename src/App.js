import "./styles.css";
import { useState } from "react";
import handleGeneratePassword from "./handleGeneratePassword";

export default function App() {
  const [length, setLength] = useState(4);
  const [pass, setPass] = useState("");
  const [error, setError] = useState("");

  const [options, setOptions] = useState([
    { option: "Include Uppercase Letters", state: false },
    { option: "Include Lowercase Letters", state: false },
    { option: "Include Symbols", state: false },
    { option: "Include Numbers", state: false }
  ]);
  const handleLengthChange = (event) => {
    setLength(event.target.value);
  };

  const handleSubmit = () => {
    if (options.filter((option) => option.state).length === 0)
      setError("Please select an option...");
    else {
      setPass(handleGeneratePassword(length, options));
      setError("");
    }
  };

  const handleOptionChange = (index) => {
    const temp = [...options];
    temp[index].state = !temp[index].state;
    setOptions(temp);
  };

  return (
    <div className="App">
      {/* Header */}
      {pass !== "" && (
        <div className="header">
          <div className="password">{pass}</div>
        </div>
      )}

      {/* Password Length */}
      <div className="charLength">
        <div>
          <label>Password length</label>
          <label>{length}</label>
        </div>
        <input
          type="range"
          min={0}
          max={20}
          value={length}
          onChange={(e) => handleLengthChange(e)}
        />
      </div>

      {/* Options */}
      <div className="options">
        {options.map((item, index) => (
          <div key={index}>
            <input
              type="checkbox"
              onChange={() => handleOptionChange(index)}
              checked={item.state}
            />
            <label>{item.option}</label>
          </div>
        ))}
      </div>

      {/* Get Password */}
      <div className="getPassword">
        <span className="errorText">{error}</span>
        <button className="passBtn" onClick={() => handleSubmit()}>
          Generate Password
        </button>
      </div>
    </div>
  );
}
