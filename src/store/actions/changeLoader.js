const changeLoader=(status)=>{
   return{
    type:"SET-LOADER",
    payload:status
   }

}
export default changeLoader;