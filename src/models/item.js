import axios from 'axios'

const REACT_APP_API_URL = "http://localhost:3001/api/v1"


export default class ItemModel {
     static view() {
         console.log('Items')
         let request = axios.get(`${REACT_APP_API_URL}/items/all`)
         console.log('Items request')
         return request
     }
     static showItem(itemId) {
         console.log('showItem')
         console.log('itemId is:', itemId)
         let request = axios.get(`${REACT_APP_API_URL}/items/all/showitem/${itemId}`)
         return request
     }
}