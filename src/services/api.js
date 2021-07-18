import axios from 'axios'

//'http://claudiopdcgdm.pythonanywhere.com/api/data-produtos/'

const api = axios.create({
    baseURL:'https://claudiopdcgdm.pythonanywhere.com'
})

export default api