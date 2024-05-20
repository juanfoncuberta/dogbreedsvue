import { ref } from "vue"
import axios from 'axios'

export const fetchApi = () => {

  const data = ref(null)
  const getData = async(url) => {
    try{

       const result = await axios.get(url)
       data.value = result.data
       
   
      if(result.status == 200)
         return result.data
      else
        throw new TypeError(data.statusText)
    }catch(error){
      console.log("Error getting breed detail from api",error)
    }

  }

  return {  getData,
      data
   }
};