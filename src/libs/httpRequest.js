import { setupCache, buildWebStorage, defaultHeaderInterpreter } from "axios-cache-interceptor";
import axios from "axios";

import { DATA_PERSISTENCE_TIME } from "../data/constants";

const cacheConfig = {
  ttl: DATA_PERSISTENCE_TIME,
  methods: ["get"],
};

const axiosCache = setupCache(axios.create(), {
  storage: buildWebStorage(sessionStorage, "axios-cache:"),
  headerInterpreter: defaultHeaderInterpreter,
});

const request = (url, method, data) =>
  axiosCache({
    method,
    url,
    data,
    cache: cacheConfig,
    // ID para retornar datos en sessionStorage
    id: url,
  }).catch((e) => console.error(e));

const interceptor = async (url, method, data) => {
  const cache = await axiosCache.storage.get(url);
  if (cache.state === "stale") {
    return cache.data.data;
  }
  return request(url, method, data);
};

export default class API {
  static get(url) {
    return interceptor(url, "GET");
  }

  static post(url, data) {
    return interceptor(url, "POST", data);
  }
}
