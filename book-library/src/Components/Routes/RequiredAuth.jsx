import { useContext ,useEffect} from "react"
import { Link,useNavigate} from "react-router-dom"
import { AuthContext } from "../context/AuthContext"

export const RequiredAuth = ({children})=>{
    const {token} = useContext(AuthContext);
    console.log(token);
    if(token){
      return children;
    }
//   get the token from auth context and if token exists return the children otherwise return the follwoing
    return <h3>Please <Link to = "/login">login</Link> to access this page</h3>
}