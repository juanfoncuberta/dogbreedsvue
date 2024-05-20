import { ref } from "vue"
import axios from 'axios'

export const fetchApi = () => {

  const data = ref(null)
  const getData = async(url) => {
    try{
      console.log('dentro getdata')
      //const data = await axios.get(`https://dog.ceo/api/breed/`+useRoute().params.breed+`/images/random`)
       const result = await axios.get(url)
       data.value = result.data
       
       return result.data
      // if(result.status == 200)
      //    // urlImage.value = data.data.message
      //   return result.data.message
      // else
      //   throw new TypeError(data.statusText)
    }catch(error){
      console.log("Error getting breed detail from api",error)
    }

  }

  return {  getData,
      data
   }
};