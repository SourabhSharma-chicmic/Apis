import { takeEvery, put, takeLatest, all } from "redux-saga/effects";

function* handleApi({ type, payload }) {
  let url;
  try {
    if (type == "DELETE_DATA")
    {
      url = `https://61922ce9aeab5c0017105e0c.mockapi.io/UserData/${payload}`;
    }
    else
    {
      url = "https://61922ce9aeab5c0017105e0c.mockapi.io/UserData";
    }
    const response = yield fetch(
      url,
      type == "POST_DATA"
        ? {
            method: "POST",
            body: JSON.stringify(payload),
            headers: { "Content-Type": "application/json" },
          }
        : type == "GET_DATA"
        ? { method: "GET" }
        : {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }
    );

    if (response.status == 201 || 200) {
      const result = yield response.json();

          if (type == "POST_DATA")
          {

            alert("Succesfullly Submitted...!", response.statusText);
          } 
          else if (type == "GET_DATA") {
            yield put({ type: "SAVE_USERS", payload: result });
          }
          else
          {
            alert("Delted Succedfully");  
          }
    }
    else 
    {
      alert("Errror is ", response.statusText);
    }
  } catch (err) 
  {
    console.log("Outside Catch Error", err);
  }
}

export function* watchPostData() {
  //yield all([ all take lateste hits here ]) //this is for multiple hits for singles
  // simple yeild takelates("POST_DATA", fnToCalss)
  yield all([
    takeLatest("POST_DATA", handleApi),
    takeLatest("GET_DATA", handleApi),
    takeLatest("DELETE_DATA", handleApi),
  ]);
}
