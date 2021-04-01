import axios from 'axios'

export default axios.create({
  baseURL: 'https://react-quiz-509a7.firebaseio.com/'
})