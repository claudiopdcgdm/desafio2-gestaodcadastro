import axios from 'axios'

//'http://claudiopdcgdm.pythonanywhere.com/api/data-produtos/'

const api = axios.create({
    baseURL:'http://claudiopdcgdm.pythonanywhere.com'
})

export default api