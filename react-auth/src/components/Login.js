import {useState} from 'react';
import axios from 'axios';

function Login({setToken}) {
    const [loginUser, setLoginUser] = useState({
        email: '',
        password: '',
        remember: false
    });

    const [errors, setErrors] = useState({});

    const handleChange = (e) => {
        let input = {...loginUser};
        let {name, value, type} = e.target;

        if(type === 'checkbox') {
            input[name] = e.target.checked;
        }
        else {
            input[name] = value;
        }
        
        setLoginUser(input);
    }

    // 
    const handleLogin = (e) => {
        e.preventDefault();

        if(validateLogin()){
            // "email": "eve.holt@reqres.in",
            // "password": "cityslicka"
            axios.post('https://reqres.in/api/login', loginUser)
                .then(response => {
                    localStorage.setItem('token', response.data.token);
                    window.location = '/customers-search';
                })
                .catch(error => {
                    // console.log(error);
                    // Show error or redirect to logout if response is 401
                    alert('Invalid Credentials');
                });
        }
    }

    // 
    const validateLogin = () => {
        let err = {};
        let isValid = true;
        const emailPattern = new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i);

        if(!loginUser.email.length) {
            isValid = false;
            err['email'] = ['The email field is required.'];
        }
        else if(loginUser.email.length && !emailPattern.test(loginUser.email)) {
            isValid = false;
            err['email'] = ['The email must be a valid email address.'];
        }

        if(!loginUser.password.length)
        {
            isValid = false;
            err['password'] = ['The password field is required.'];
        }

        setErrors(err);
        return isValid;
    }

    // 
    return(
        <div id="login-row" className="row justify-content-center">
            <div id="login-column" className="col-md-6">
                <div id="login-box" className="col-md-12">
                    <form onSubmit={handleLogin} id="login-form" className="form">
                        <h3>Login</h3>
                        <div className="form-group">
                            <label htmlFor="email">Email:</label>
                            <input type="text" name="email" value={loginUser.email} onChange={handleChange} id="email" className="form-control" />
                            {errors.email && errors.email.map(err => <span className="help-block text-danger">{err}</span>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="password">Password:</label>
                            <input type="password" name="password" value={loginUser.password} onChange={handleChange} id="password" className="form-control" />
                            {errors.password && errors.password.map(err => <span className="help-block text-danger">{err}</span>)}
                        </div>
                        <div className="form-group">
                            <label htmlFor="remember-me"><span>Remember me</span> <span><input id="remember-me" name="remember-me" type="checkbox" /></span></label><br />
                            <input type="submit" name="submit" className="btn btn-info btn-md btn-block" value="submit" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default Login;
