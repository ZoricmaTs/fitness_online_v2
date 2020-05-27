import axios from 'axios'

// const apiClient = axios.create({
//   baseURL: 'http://80.89.238.253:5000/api',
//   withCredentials: false,
//   headers: {
//     Accept: 'application/json',
//     'Content-Type': 'application/json'
//     // Authorization: `Bearer ${localStorage.token}`
//   }
// })

const apiClientPost = axios.create({
  baseURL: 'http://80.89.238.253:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded' //,
    //Authorization: `Bearer ${localStorage.token}`
  }
})

const userId = `${localStorage.userId}`
const credential = `token=${localStorage.token}`

export default {
  login(email, password) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('email', email)
    bodyFormData.set('password', password)
    return apiClientPost.post(`/signin`, bodyFormData)
  },
  register(first_name, email, role, password, password_confirmation) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('first_name', first_name)
    bodyFormData.set('email', email)
    bodyFormData.set('role', role)
    bodyFormData.set('password', password)
    bodyFormData.set('password_confirmation', password_confirmation)
    return apiClientPost.post(`/signup`, bodyFormData)
  },
  confirmAccount(email, confirmation_code, token) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('email', email)
    bodyFormData.set('confirmation_code', confirmation_code)
    return apiClientPost.post(`/confirm?token=${token}`, bodyFormData)
  }
}
