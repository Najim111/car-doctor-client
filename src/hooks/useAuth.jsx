import { useContext } from "react";
import { AuthContext } from "../component/contextCreate/AuthProvider";


const useAuth = () => {
   const auth=useContext(AuthContext)
   return auth;
};

export default useAuth;