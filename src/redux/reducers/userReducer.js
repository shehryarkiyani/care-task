const initialUser={
    email:"",
    password:""
}
const setUser=(state=initialUser,action)=>{
switch(action.type){
    case "GET_USER":
        let s = localStorage.getItem('user');
        if (s === null) {
            return initialUser;
          }
        return JSON.parse(localStorage.getItem('user'));
    case "SAVE_USER":
        localStorage.setItem("user",JSON.stringify(action.payload))
        return state=action.payload;
    case "logout":
        localStorage.clear();
        return initialUser;
    default:
        return state
}
}
export default setUser