import axios from 'axios'

const apiClientGet = axios.create({
  baseURL: 'http://80.89.238.253:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
    // Authorization: `Bearer ${localStorage.token}`
  }
})

const apiClientPost = axios.create({
  baseURL: 'http://80.89.238.253:5000/api',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded' //,
    //Authorization: `Bearer ${localStorage.token}`
  }
})
const apiClientMedia = axios.create({
  baseURL: 'http://80.89.238.253:5000',
  withCredentials: false,
  headers: {
    'Content-Type': 'multipart/form-data' //,
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
  },
  sendFileMedia(file, comment) {
    const formData = new FormData()
    formData.set('file', file)
    formData.set('comment', comment)
    const token = localStorage.token
    return apiClientMedia.put(`/media/upload_file?token=${token}`, formData)
  },
  userInfo(user_id, token) {
    return apiClientGet.get(`/get_user_by_id?token=${token}&user_id=${user_id}`)
  },
  userInfoNew(
    new_first_name,
    new_email,
    current_password,
    new_password,
    new_password_confirmation,
    new_role,
    new_about_me,
    new_profile_photo_id,
    token
  ) {
    var bodyFormData = new FormData() //+
    bodyFormData.set('new_first_name', new_first_name)
    bodyFormData.set('new_email', new_email)
    bodyFormData.set('current_password', current_password)
    bodyFormData.set('new_password', new_password)
    bodyFormData.set('new_password_confirmation', new_password_confirmation)
    bodyFormData.set('new_role', new_role)
    bodyFormData.set('new_about_me', new_about_me)
    bodyFormData.set('new_profile_photo_id', new_profile_photo_id)
    return apiClientPost.post(`/edit_user_info?token=${token}`, bodyFormData)
  },
  getTrainingTypes() {
    return apiClientGet.get(
      `/training_type_get?token=${localStorage.token}&limit=20&offset=0`
    )
  }
}
