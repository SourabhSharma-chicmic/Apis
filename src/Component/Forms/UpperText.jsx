import { useState } from "react";

const UpperText = () => {
  const [text, setText] = useState("");
  const [preview, setPreview] = useState(false);

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

  const setPreviewHandler = () => {
    setPreview(!preview);
    if(!preview){
    document.body.style.backgroundColor ='black'}else{
        document.body.style.backgroundColor ='white'  
    }
  };
  return (
    <div className={`container ${preview ?"bg-dark text-white" :""}`}>
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

      <button className="btn btn-primary me-4" onClick={UperCaseHandler}>
        Change to UpperCase
      </button>
      <button className="btn btn-primary ms-3" onClick={ResetHandler}>
        Reset
      </button>
      <button disabled="true" className="btn btn-primary ms-3" onClick={setPreviewHandler}>
        Preview
      </button>

      <button className="btn btn-primary ms-3" onClick={setPreviewHandler}>
        {preview?"Default Mode":"DarkMode"}
      </button>
      <p className="text text-center">
        Number of words are
        <i className=" fw-bold text-primary"> {text.split(" ").length} </i> and
        number of characters are
        <i className=" fw-bold text-primary">{text.trim().length}</i>
      </p>
      
      {/* {preview && (
        <div className="row">
          <div style={{textAlign:'justify'}} className="col-md-8 offset-2  border border- table-bordered opacity-75 ">{text}</div>
        </div>
      )} */}
    </div>
  );
};

export default UpperText;
