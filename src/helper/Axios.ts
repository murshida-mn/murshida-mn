import axios from 'axios'

const unspalshAPi =  axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: { 
        Authorization:'Client-ID HHg7RlnPXu8ybfQxF7hhmAwuFzwJ3SlzyjAp-7B10fA'
    }
})


const jsonPlaceholderPi =  axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com'
})


export {
    unspalshAPi,
    jsonPlaceholderPi
} 
