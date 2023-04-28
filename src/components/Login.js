import '../components/Login.css';
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import shesha from './images/shesha.png';
import sheshalogin from './images/sheshalogin.png';



const Login = () => {
    const [username, usernameupdate] = useState('');
    const [password, passwordupdate] = useState('');

    const usenavigate=useNavigate();

    const ProceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            //implentation
            // console.log('proceed');
            fetch("http://localhost:8000/user" + username).then((res) => {
                return res.json();
            }).then((resp) => {
                //console.log(resp)
                if (Object.keys(resp).length === 0) {
                    toast.error('Please Enter valid username');
                } else {
                    if (resp.password === password) {
                        toast.success('Success');
                        usenavigate('/Home')
                    } else {
                        toast.error('Please Enter valid credentials');
                    }
                }
            }).catch((err) => {
                toast.error('Login Failed due to :' + err.message);
            });
        }
    }
    const validate = () => {
        let results = true;
        if (username === '' || username === null) {
            results = false;
            toast.warning('Please Enter Username');
        }
        if (password === '' || password === null) {
            results = false;
            toast.warning('Please Enter Password');
        }
        return results;
    }
    return (
        
            
        <div className="offset-lg-3 col-lg-6">
                <form onSubmit={ProceedLogin} className="container1">
                    <img src={shesha} alt="shesha.png" />
                    <img src={sheshalogin} alt="sheshalogin.png" class="image2" />
                    <div>
                        <div>

                            <h2> Login</h2>
                        </div>
                        <div className="row">
                            <div className="form-group">
                                <input type="text" placeholder="Username" value={username} onChange={e => usernameupdate(e.target.value)} ></input>
                            </div>

                            <div className="form-group">
                                <input type="password" placeholder="Password" value={password} onChange={e => passwordupdate(e.target.value)} className="input1" ></input>
                            </div>

                            <div>
                                <p><Link className="text" to={'/forgot'}>Forgot Password</Link></p>
                                <button type="submit" className="login">Login</button>

                                <p class="p1"><Link className="text" to={'/register'}><span>Do have an Account?</span> Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </form>
            </div>

      
       
    );
}

export default Login;