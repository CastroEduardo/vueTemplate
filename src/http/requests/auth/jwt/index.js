import axios from '../../../axios/index.js'
// import store from '../../../../store/store.js'

// // Token Refresh
// let isAlreadyFetchingAccessToken = false
// let subscribers = []

// function onAccessTokenFetched (access_token) {
//   subscribers = subscribers.filter(callback => callback(access_token))
// }

// function addSubscriber (callback) {
//   subscribers.push(callback)
// }

export default {

  postDemo () {

    const miPrimeraPromise = new Promise(async (resolve, reject) => {
      const res = await axios.get('/posts/1')
      setTimeout(() => {
        resolve(res.data) // ¡Todo salió bien!
      }, 2500)

    })

    return miPrimeraPromise


  }

}
