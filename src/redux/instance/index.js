import axios from "axios";
import config from "../../../config";

export const instance = axios.create({
  baseURL: config.instance.baseURL,
  timeout: config.instance.timeout,
  headers: config?.instance?.headers,
});
