import React, { useState } from 'react';
import style from './login.module.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';
import { emit } from 'process';
import GoogleButton from 'react-google-button';
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <>
      <div className={style.login}>
        <div className={style.loginContainer}>
          <div>
            <h2>Welocome back!</h2>
          </div>
          <form
            onSubmit={handleSubmit}
            autoComplete="off"
          >
            <div className={style.inputContainer}>
              <input
                type="text"
                placeholder="example@gmail.com"
                id="email"
                onChange={(e) => setEmail(e.target.value)}
                className={error != '' ? style.inputError : ''}
              />
              {/* {errors.email && touched.email && (
              <p className={style.error}>{errors.email}</p>
            )} */}
            </div>

            <div className={style.inputContainer}>
              <input
                type="text"
                id="password"
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}

                //   className={
                //     errors.password && touched.password ? style.inputError : ""
                //   }
              />
              {error && <p className={style.error}>{error}</p>}
            </div>

            <button
              className={style.button}
              type="submit"
            >
              Login
            </button>
            <div>
              New to Have Yum ?
              <span
                className={style.signUp}
                onClick={() => navigate('/signup')}
              >
                signup
              </span>
            </div>
          </form>
        </div>
        <div></div>

        <div style={{ marginTop: '2rem' }}>
          <GoogleButton />
        </div>
        <ToastContainer />
      </div>
    </>
  );
};

export default Login;
