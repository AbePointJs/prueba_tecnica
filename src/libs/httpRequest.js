import axios from "axios";

// TODO --> Make it more general. Change the data propery
export default class Fetch {
  static get(url) {
    return axios
      .get(url)
      .then((res) => res.data)
      .catch((e) => console.error(e));
  }

  static post(url, data) {
    return axios.post(url, data).catch((e) => console.error(e));
  }
}
