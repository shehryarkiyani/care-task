export const getUser=()=>{
    return{
        type:"GET_USER"
    }
}
export const saveUser=(data)=>{
    return{
        type:"SAVE_USER",
        payload:data
    }
}
export const logout=()=>{
    return{
        type:"logout",
    }
}