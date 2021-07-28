import axios from 'axios'
import envConfig from './service.config'

const connect = axios.create({
  baseURL: envConfig,
  timeout: 6000,
  headers: {},
});

export default connect
