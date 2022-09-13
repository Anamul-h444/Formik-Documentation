import { successsToast, errorToast } from "../helperClass/FormHelper";
import axios from "axios";
import { showLoader, hideLoader } from "../redux/slice-state/loaderSlice";
import store from '../redux/store/store'

let BaseURL = "http://localhost:5000/api/v1/";

export function RegistrationRequest(name, brand, qty) {
  store.dispatch(showLoader());
  let URL = BaseURL + "/CreateProduct";
  let postBody = {
    name: name,
    brand: brand,
    qty: qty,
  };

  return axios
    .post(URL, postBody)
    .then((res) => {
      store.dispatch(hideLoader());
      if (res.status === 200) {
        successsToast('Product List created success!')
        return true
      } else {
        errorToast("Something Went Wrong");
        return false;
      }
    })
    .catch((error) => {
      store.dispatch(hideLoader());
      errorToast("Something went wrong!");
      return false;
    });
}
