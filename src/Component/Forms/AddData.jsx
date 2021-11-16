import { useState } from "react";

const initialValues = {
  name: "",
  email: "",
};

const AddData = () => {
  const [formValues, setFormValues] = useState(initialValues);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const PostData = async (obj) => {
    try {
      const url = "https://61922ce9aeab5c0017105e0c.mockapi.io/UserData";
      const resolve = await fetch(url, {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-Type": "application/json",
        },
      });
      const response = await resolve.json();
      console.log(response)
    } catch (err) {
      console.log("Outside Catch Error", err);
    }
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    const obj = {
      id: Math.random().toString(),
      ...formValues,
    };
    PostData(obj);
    console.log(obj);
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
