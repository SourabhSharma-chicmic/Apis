import { useState } from "react";
import { useDispatch } from "react-redux";
import { PostData , GetData} from "../../Redux/Actions/Index";

const initialValues = {
  name: "",
  email: "",
};

const AddData = () => {
  const dispatch = useDispatch();
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const onSubmitHandler = (e) => {
    
    e.preventDefault();
    const obj = {
      id: Math.random().toString(),
      ...formValues,
    };
    const payload = obj;
    
    //post Called
    dispatch(PostData(obj));
    
  };

  return (
    <>
      <div className="row ">
        <div className="col-md-6 offset-1 mt-5 border border-2  border-dark">
          <form onSubmit={onSubmitHandler}>
            <input
              onChange={onChangeHandler}
              type="text"
              className="form-control mt-1"
              name="name"
              placeholder="Enter name"
              value={formValues.name}
            />
            <br />

            <input
              onChange={onChangeHandler}
              type="text"
              className="form-control mt-1 "
              name="email"
              placeholder="Enter email"
              value={formValues.email}
            />
            <br />

            <button className="btn btn-dark btn-lg mt-1 mb-5" type="submit">
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddData;
