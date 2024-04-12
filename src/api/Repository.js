import { log } from "../common/Log";
import { BASE_URL } from "../utils/Constant";

const myHeaderWithAuth = () => {
    let myHeaders = new Headers();
    myHeaders.append('Content-Type','application/json')
    return myHeaders;
  };

  let errorResponse ={
    code : 500,
    msg: ''
}


export let onPostGenericApi = (TAG, type, endPoint,json, callback, failure, navigation) => {
  
    const url = `${endPoint}`;
    let params = JSON.stringify(json)
    log(TAG, type, url);
    log(TAG, ` ${type} Params`, params)

    const formdata = new FormData();
    formdata.append("data", json);

    const requestOptions = {
        method: "POST",
        header: myHeaderWithAuth,
        body: formdata,
        redirect: "follow"
    };

fetch(url, requestOptions)
.then((response) => {
            log(TAG, type+' response ', JSON.stringify(response))
            if(response.status == 404) {
            } else if(response.status == 500) {
            } else {
              return response.json();
            }
        })
        .then((response) => {
            // logRes(TAG, type,JSON.stringify(response));
            if(response.code == 401 || response.code == 400) {
                log("Session Expired ======> ")
            } else {
                callback(response)
            }
        })
        .catch((error) => {
            log(TAG, 'error ', error)
            errorResponse.msg = error
            failure(errorResponse)
        });
}
