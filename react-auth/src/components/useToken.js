import { useState } from "react";

const useToken = () => {
    const getToken = () => {
        let token = localStorage.getItem('token');
        return token;
    }
    
    const [token, setToken] = useState(getToken());

    return {
        setToken: function() {},
        token
    }
}

export default useToken;