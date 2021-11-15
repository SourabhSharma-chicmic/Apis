const AddData = () => {

    
  return (
    <>
      <div className="row ">
        <div className="col-md-6 offset-1 mt-5 border border-2  border-dark">
          <form>
            <input
              type="text"
              className="form-control mt-1"
              name="name"
              placeholder="Enter name"
            />
            <br />

            <input
              type="text"
              className="form-control mt-1 "
              name="email"
              placeholder="Enter email"
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
