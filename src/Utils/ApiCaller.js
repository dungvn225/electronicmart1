import axios from 'axios';
const ApiCaller=(url,method,data)=>{
    return(
        axios({
          url:url,
          method:method,
          data:data
        }).catch(err=>{
            console.log(err);
        })
    )
}

export default ApiCaller;