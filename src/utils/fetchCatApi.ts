import axios from "axios"


 const FetchCatType = async () => {
     try {
         const res = await axios.get('https://catfact.ninja/fact');
         console.log(res)
          return res.data.fact
     } catch (error) {
         console.log('error:', error)
         return error;
     }
}


export default  FetchCatType