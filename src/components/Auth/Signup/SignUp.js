import React, { useState } from 'react';
import style from './signup.module.css';
import { useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../../config/firebase';

const SignUp = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createUserWithEmailAndPassword(auth, email, password);

      setError('');
      navigate('/');
    } catch (err) {
      setError(err.message);
      console.log(err.message);
    }
  };

  return (
    <div className={style.signup}>
      <div className={style.signupContainer}>
        <div>
          <h3>Create Account</h3>
        </div>
        <form
          onSubmit={handleSubmit}
          autoComplete="off"
        >
          <ToastContainer />
          <div className={style.inputContainer}>
            <input
              type="text"
              placeholder="example@gmail.com"
              id="email"
              onChange={(e) => setEmail(e.target.value)}
              // className={errors.email && touched.email ? style.inputError : ""}
            />

            {/* {errors.email && touched.email && (
            <p className={style.error}>{errors.email}</p>
          )} */}
          </div>
          <div className={style.inputContainer}>
            <input
              type="text"
              id="password"
              placeholder="Create Password"
              onChange={(e) => setPassword(e.target.value)}
              // className={
              //   errors.password && touched.password ? style.inputError : ""
              // }
            />
            {/* {errors.password && touched.password && (
            <p className={style.error}>{errors.password}</p>
          )} */}
          </div>
          <div>{error !== '' && <p className={style.error}>{error}</p>}</div>
          <button
            className={style.button}
            type="submit"
          >
            Create Account
          </button>
          <div className={style['already-account']}>
            Already a customer ?{' '}
            <span
              className={style.login}
              onClick={() => navigate('/login')}
            >
              Login
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default SignUp;
