import React from "react";
import {Route, Redirect} from "react-router-dom";
import useToken from "./useToken";

const PrivateRoute = (props) => {
    const { token } = useToken();
    const { component: Component, ...rest } = props;

    if(token)
    {
        return (
            <Route {...rest} render={(props) => <Component {...rest} {...props} />} />
        )
    }

    return <Redirect to="/login" />
}

export default PrivateRoute;