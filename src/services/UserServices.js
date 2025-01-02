import axios from 'axios'


const fectchAllUser = () => {
   return axios.get("https://reqres.in/api/users?page=1");
}

//export theo object export bao nhiêu bien cung được
export {fectchAllUser};
