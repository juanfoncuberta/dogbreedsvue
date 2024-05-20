import { ref } from "vue"
import axios from 'axios'

export const fetchApi = () => {

  const loading = ref(true)
  const data = ref(null)
  const getData = async(url) => {
    try{
      loading.value = true;
      const result = await axios.get(url)
      data.value = result.data
      if(result.status == 200)
         return result.data
      else
        throw new TypeError(data.statusText)
    }catch(error){
      console.log("Error getting breed detail from api",error)
    } finally {
      loading.value = false
    }

  }

  return {  getData,
      loading
   }
};