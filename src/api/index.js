import axios from 'axios'
let baseUrl = '/api/'
export const getVideoList = function (params) {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + 'getVideoList', {params}).then(r => {
      resolve(r.data)
    }).catch(err => {
      reject(err)
    })
  })
}
export const collectVideo = function (params) {
  return new Promise((resolve, reject) => {
    axios.post(baseUrl + 'collectVideo', params).then(r => {
      resolve(r.data)
    }).catch(err => {
      reject(err)
    })
  })
}
export const getVideoDetail = function (params) {
  return new Promise((resolve, reject) => {
    axios.get(baseUrl + 'getVideoDetail/' + params.id).then(r => {
      resolve(r.data)
    }).catch(err => {
      reject(err)
    })
  })
}
