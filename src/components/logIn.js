/* eslint-disable import/no-cycle */
// // eslint-disable-next-line import/no-cycle
import { onNavigate } from '../main.js';
import { loginUserWithEmail, LoginUserWithGoogle, loginUserWithTwitter } from '../database/firebase.js';

export const login = () => {
  // elements
  const globalContainer = document.getElementById('globalContainer');
  const globalLogInDiv = document.createElement('div');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  const divLogo = document.createElement('div');
  const pLogo = document.createElement('p');
  const baseLogin = document.createElement('div');
  const loginEmail = document.createElement('input');
  const loginPassword = document.createElement('input');
  const span = document.createElement('span');
  const imgEye = document.createElement('i');
  const pForgotPassword = document.createElement('p');
  const errorMessage = document.createElement('div');
  const buttonLogin = document.createElement('button');
  const divLoginWith = document.createElement('div');
  const loginWithP = document.createElement('p');
  const loginWithGoogle = document.createElement('button');
  const loginWithTwitter = document.createElement('button');
  const imgGoogle = document.createElement('img');
  const imgTwitter = document.createElement('img');
  const divSignUp = document.createElement('div');
  const pSignUp = document.createElement('p');

  // attributes
  imgLogo.setAttribute('src', '../assets/img/logosmall.png');
  pLogo.setAttribute('class', 'pLogo');
  divLogo.setAttribute('id', 'divLogo');
  imgLogo.setAttribute('src', '../assets/img/logosmall.png');
  globalLogInDiv.setAttribute('class', 'globalLogInDiv');
  baseLogin.setAttribute('class', 'baseLogin');
  loginPassword.setAttribute('class', 'inputLogin');
  loginEmail.setAttribute('type', 'text');
  loginEmail.setAttribute('class', 'inputLogin');
  loginEmail.setAttribute('placeholder', 'Email');
  loginEmail.setAttribute('id', 'loginEmail');
  loginPassword.setAttribute('type', 'password');
  loginPassword.setAttribute('placeholder', 'Password');
  loginPassword.setAttribute('id', 'loginPassword');
  span.setAttribute('class', 'eyePassword');
  imgEye.setAttribute('id', 'imgEyePassword');
  imgEye.setAttribute('class', 'fa-solid fa-eye');
  pForgotPassword.setAttribute('class', 'pForgotPassword');
  buttonLogin.setAttribute('class', 'buttonLogin');
  divLoginWith.setAttribute('class', 'divLoginWith');
  loginWithP.setAttribute('class', 'loginWithP');
  loginWithGoogle.setAttribute('class', 'loginWith');
  loginWithTwitter.setAttribute('class', 'loginWith');
  loginWithGoogle.setAttribute('id', 'loginGoogle');
  imgGoogle.setAttribute('src', '../assets/img/google-logo.png');
  imgGoogle.setAttribute('id', 'imgGoogle');
  loginWithTwitter.setAttribute('id', 'loginTwitter');
  imgTwitter.setAttribute('src', '../assets/img/logo.png');
  imgTwitter.setAttribute('id', 'imgTwitter');
  errorMessage.setAttribute('id', 'errorMessage');
  divSignUp.setAttribute('id', 'divSignUp');
  pSignUp.setAttribute('class', 'pSignUp');

  // innerText
  divLogo.innerText = 'Mukí';
  pLogo.innerText = 'A safe network for women';
  buttonLogin.textContent = 'Login';
  pForgotPassword.innerText = 'Forgot password?';
  loginWithP.innerText = 'Or login with';
  divSignUp.innerText = 'You don’t have an account??';
  pSignUp.innerText = 'Sign up';
  // append
  globalContainer.appendChild(globalLogInDiv);
  globalLogInDiv.appendChild(header);
  globalLogInDiv.appendChild(baseLogin);
  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);
  span.appendChild(loginPassword);
  span.appendChild(imgEye);
  baseLogin.appendChild(loginEmail);
  baseLogin.appendChild(loginPassword);
  baseLogin.appendChild(pForgotPassword);
  baseLogin.appendChild(buttonLogin);
  baseLogin.appendChild(divLoginWith);
  baseLogin.appendChild(errorMessage);
  baseLogin.appendChild(divSignUp);
  divSignUp.appendChild(pSignUp);
  divLoginWith.appendChild(loginWithP);
  divLoginWith.appendChild(loginWithGoogle);
  loginWithGoogle.appendChild(imgGoogle);
  loginWithTwitter.appendChild(imgTwitter);
  divLoginWith.appendChild(loginWithTwitter);
  globalLogInDiv.appendChild(errorMessage);

  buttonLogin.addEventListener('click', () => {
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    loginUserWithEmail(email, password).then((userCredential) => {
      if (userCredential) {
        onNavigate('/home');
      } else {
        errorMessage.innerText = 'Invalid email or password';
      }
    });
  });

  loginWithGoogle.addEventListener('click', () => {
    LoginUserWithGoogle().then((result) => {
      if (result) {
        onNavigate('/home');
      }
    });
  });

  loginWithTwitter.addEventListener('click', () => {
    loginUserWithTwitter().then((result) => {
      if (result) {
        onNavigate('/home');
      }
    });
  });

  divSignUp.addEventListener('click', () => {
    onNavigate('/signup');
  });

  // imgEye.addEventListener('click', () => {
  //   if (loginPassword.type === 'password') {
  //     loginPassword.type = 'text';
  //   } else {
  //     loginPassword.type = 'password';
  //   }
  // });

  span.addEventListener('focus', () => span.classList.add('focused'), true);
  span.addEventListener('blur', () => span.classList.remove('focused'), true);

  // loginWithGoogle.addEventListener('click', () => {
  //   createUserWithGoogle().then((result) => {
  //     if (result) {
  //       onNavigate('/home');
  //     } else {
  //       errorMessage.innerText = 'You must choose a Google account';
  //     }
  //   });
  // });

  // loginWithTwitter.addEventListener('click', () => {
  //   createUserWithTwitter().then((result) => {
  //     if (result) {
  //       onNavigate('/home');
  //     } else {
  //       errorMessage.innerText = 'You must choose a Twitter account';
  //     }
  //   });
  // });
  return globalLogInDiv;
};
