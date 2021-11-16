import { takeEvery, put, takeLatest } from "redux-saga/effects";

function* postData({ payload }) {
  try {
    console.log(payload, "payload");
    const url = "https://61922ce9aeab5c0017105e0c.mockapi.io/UserData";
    const response = yield fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
      headers: {"Content-Type": "application/json"}
    });

    
    if (response.status == 201 || 200 ) {
      
      const result = yield response.json();
      console.log("result" ,response.statusText)
      alert("Succesfullly Submitted...!" );
    } else {
        alert("Errror is ", response.statusText);
    }
  } catch (err) {
    console.log("Outside Catch Error", err);
  }
}

export function* watchPostData() {
  yield takeLatest("POST_DATA", postData);
}
