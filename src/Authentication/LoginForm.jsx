import { useState } from "react";
import { useDispatch } from "react-redux";
import { LoginUser } from "../Redux/Actions/Index";

const LoginForm = () => {

    const dispatch = useDispatch();

  const [formdata, setFormData] = useState({
    name: "",
    email: "",
  });

  const onChangeHandler = (e) => {
    setFormData({ ...formdata, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
   dispatch(LoginUser(formdata))

  };

  return (
    <div className="row ">
      <div className="col-md-4  offset-3 border border-2  border-dark mt-5 ">
        <h2 className="bg-danger mt-5 text-capitalize text-center p-2">
          Login Form
        </h2>

        <form onSubmit={onSubmitHandler}>
          <input
            onChange={onChangeHandler}
            type="text"
            className="form-control mt-4"
            name="name"
            placeholder="Enter name"
            value={formdata.name}
          />
          <br />
          <input
            onChange={onChangeHandler}
            type="text"
            className="form-control mt-1"
            name="email"
            placeholder="Enter email"
            value={formdata.email}
          />
          <br />
          <button className="btn btn-dark btn-lg mt-1 mb-5" type="submit">
            Login
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
