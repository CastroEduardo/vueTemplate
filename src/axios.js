// axios
import axios from 'axios'

const baseURL = 'https://jsonplaceholder.typicode.com'

export default axios.create({
  baseURL
  // You can add your headers here
})
