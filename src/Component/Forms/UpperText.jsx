import { useState } from "react";

const UpperText = () => {
  const [text, setText] = useState("");

  const onChangeHandler = (e) => {
    setText(e.target.value);
  };
  const UperCaseHandler = (e) => {
    e.preventDefault();
    let newText = text.toUpperCase();
    setText(newText);
  };

  const ResetHandler = (e) => {
   
    
    setText("");
  };
  return (
    <div className="container">
        <h1 className="text-primary my-3">Enter text for changing case !</h1>
      <div class="mb-3">
        <textarea
          value={text}
          onChange={onChangeHandler}
          class="form-control"
          id="Textarea1"
          rows="8"
          placeholder="Enter text"
        ></textarea>
      </div>

      <button className="btn btn-primary me-4" onClick={UperCaseHandler}>Change to UpperCase</button> 
      <button className="btn btn-primary ms-3" onClick={ResetHandler}>Reset</button>
     <p className="text text-center">Number of words are <i className=" fw-bold text-primary"> {text.split(" ").length-1} </i> and number of characters are <i className=" fw-bold text-primary">{text.trim().length}</i></p>
    </div>
  );
};

export default UpperText;
