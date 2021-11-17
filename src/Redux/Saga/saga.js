import { takeEvery, put, takeLatest, all } from "redux-saga/effects";

function* handleApi({ type, payload }) {
  let url;
  try {
    if (type == "DELETE_DATA" || type == "PUT_DATA") {
      let payloadId;
      type == "PUT_DATA" ? (payloadId = payload.id) : (payloadId = payload);

      url = `https://61922ce9aeab5c0017105e0c.mockapi.io/UserData/${payloadId}`;
    } else {
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
        : type == "DELETE_DATA"
        ? { method: "DELETE", headers: { "Content-Type": "application/json" } }
        : {
            method: "PUT",
            body: JSON.stringify({ name: payload.name, email: payload.email }),
            headers: { "Content-Type": "application/json" },
          }
    );

    if (response.status == 201 ||response.status ==  200) {
      const result = yield response.json();

      if (type == "POST_DATA") {
        alert("Succesfullly Submitted...!", response.statusText);
      } else if (type == "GET_DATA") {
        yield put({ type: "SAVE_USERS", payload: result });
      } else if (type == "DELETE_DATA") {
        alert("Delted Succedfully..!!");
      } else {
        alert("Updated Succesful..!!");
      }
    } else {
      alert("Errror is ", response.statusText);
    }
  } catch (err) {
    console.log("Outside Catch Error", err);
  }
}

function* Login({ type, payload }) {
  const { name, email } = payload;
  console.log("inseide saga " ,payload)
  let url = `https://61922ce9aeab5c0017105e0c.mockapi.io/UserData/${email}`;
  try {
    const result = yield fetch(url, {
      method: "GET",
     
    });

    if(result.status == 201 ||result.status ==  200)
    {
      const finalData = yield result.json();
      console.log(finalData);

    }else{
      alert("Email or Name doestn match")
      console.log("Data is", result.statusText)
    }
    
  } catch (err) {
    console.log("Error Outside Cathc", err);
  }
}
export function* watchPostData() {
  //yield all([ all take lateste hits here ]) //this is for multiple hits for singles
  // simple yeild takelates("POST_DATA", fnToCalss)
  yield all([
    takeLatest("POST_DATA", handleApi),
    takeLatest("GET_DATA", handleApi),
    takeLatest("DELETE_DATA", handleApi),
    takeLatest("PUT_DATA", handleApi),
    takeLatest("LOGIN", Login),
  ]);
}
