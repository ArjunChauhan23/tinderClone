import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom'
import axios from 'axios'

const AuthModal = ({setShowModal, isSignUp}) => {

    const navigate = useNavigate()

    const [error, setError] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null)
    const [confirmPassword, setConfirmPassword] = useState(null)

    const handleSubmit = async (e) =>{
       e.preventDefault()
        try{
           if(isSignUp && (password !== confirmPassword)){
               setError("Password not match")
               return
           }

        const response =   await axios.post('http://localhost:8080/signup',{
            email , password
        })
        const processed = response.status == 201;
           if(processed)
               navigate('/reg_page_user')

        } catch (error){
           console.log(error)
        }
    }

    const handleClick = () =>{
        setShowModal(false)
    }

    return (
        <div className="auth-modal">
            <div className="close-icon" onClick={handleClick}>ⓧ</div>

            <h2>{isSignUp ? 'CREATE ACCOUNT': 'LOG IN'}</h2>
            <p>By clicking Log In, you agree to our terms. Learn how we process your data in our Privacy Policy and Cookie Policy.</p>
            <form onSubmit={handleSubmit}>
                <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="email"
                    required={true}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="password"
                    required={true}
                    onChange={(e) => setPassword(e.target.value)}
                />
                {isSignUp && <input
                    type="password"
                    id="password-check"
                    name="password-check"
                    placeholder="confirm password"
                    required={true}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                />}
                <input className="secondary-button" type="submit"/>
                <p>{error}</p>
            </form>

            <hr/>
            <h2>GET THE APP</h2>

        </div>
    );
};

export default AuthModal;