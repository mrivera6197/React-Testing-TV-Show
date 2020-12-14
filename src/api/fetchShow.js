import axios from 'axios'

export const fetchShow = () => {
    return axios.get
      .then(res => {return res}) // or res.data, however you want to set that up
  }