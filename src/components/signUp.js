// import { onNavigate } from '../main.js';
// import { home } from './components/home.js';

export const signUp = () => {
  const newGlobalDiv = document.createElement('div');
  newGlobalDiv.setAttribute('id', 'newGlobalDiv');
  const header = document.createElement('header');
  const imgLogo = document.createElement('img');
  imgLogo.setAttribute('src', './img/logosmall.png');
  const divLogo = document.createElement('div');
  divLogo.innerText = 'Mukí';
  const pLogo = document.createElement('p');
  pLogo.innerText = 'A safe network for women';
  divLogo.setAttribute('id', 'divLogo');
  const buttonGoogle = document.createElement('button');
  buttonGoogle.innerText = 'Sign up with Google';
  buttonGoogle.setAttribute('id', 'buttonGoogle');
  const imgGoogle = document.createElement('img');
  imgGoogle.setAttribute('src', './img/google-logo.png');
  imgGoogle.setAttribute('id', 'imgGoogle');
  buttonGoogle.appendChild(imgGoogle);
  const buttonTwitter = document.createElement('button');
  buttonTwitter.innerText = 'Sign up with Twitter';
  buttonTwitter.setAttribute('id', 'buttonTwitter');
  const imgTwitter = document.createElement('img');
  imgTwitter.setAttribute('src', './img/logo.png');
  imgTwitter.setAttribute('id', 'imgTwitter');
  buttonTwitter.appendChild(imgTwitter);
  //const globalContainer = document.getElementById('globalContainer');

  const separation = document.createElement('div');
  separation.setAttribute('id', 'separation');
  const line = document.createElement('div');
  line.setAttribute('class', 'line');
  const or = document.createElement('p');
  or.innerText = 'Or';
  const line2 = document.createElement('div');
  line2.setAttribute('class', 'line');

  separation.appendChild(line);
  separation.appendChild(or);
  separation.appendChild(line2);

  const inputEmail = document.createElement('input');
  inputEmail.setAttribute('type', 'text');
  inputEmail.setAttribute('placeholder', 'Email');
  inputEmail.setAttribute('id', 'inputEmail');
  inputEmail.setAttribute('class', 'input');

  const span = document.createElement('span');
  span.setAttribute('class', 'eye');
  const inputPassword = document.createElement('input');
  inputPassword.setAttribute('type', 'password');
  inputPassword.setAttribute('placeholder', 'Password');
  inputPassword.setAttribute('id', 'inputPassword');
  inputPassword.setAttribute('class', 'input');
  span.appendChild(inputPassword);
  const imgEye = document.createElement('i');
  imgEye.setAttribute('id', 'imgEye');
  imgEye.setAttribute('class', 'fa-solid fa-eye');
  span.appendChild(imgEye);

  const inputUsername = document.createElement('input');
  inputUsername.setAttribute('type', 'text');
  inputUsername.setAttribute('placeholder', 'Username');
  inputUsername.setAttribute('id', 'inputUsername');
  inputUsername.setAttribute('class', 'input');
  const buttonSignup = document.createElement('button');
  buttonSignup.setAttribute('id', 'buttonSignup');
  buttonSignup.innerText = 'Continue';
  const errorMessage = document.createElement('div');
  errorMessage.setAttribute('id', 'errorMessage');
  const divAccount = document.createElement('div');
  divAccount.innerText = 'Already have an account?';
  divAccount.setAttribute('id', 'divAccount');

  header.appendChild(divLogo);
  header.appendChild(imgLogo);
  divLogo.appendChild(pLogo);

  newGlobalDiv.appendChild(header);
  newGlobalDiv.appendChild(buttonGoogle);
  newGlobalDiv.appendChild(buttonTwitter);
  newGlobalDiv.appendChild(separation);
  newGlobalDiv.appendChild(inputEmail);
  newGlobalDiv.appendChild(span);
  newGlobalDiv.appendChild(inputUsername);
  newGlobalDiv.appendChild(errorMessage);

  newGlobalDiv.appendChild(buttonSignup);
  newGlobalDiv.appendChild(divAccount);

  imgEye.addEventListener('click', () => {
    if (inputPassword.type === 'password') {
      inputPassword.type = 'text';
    } else {
      inputPassword.type = 'password';
    }
  });

  span.addEventListener('focus', () => span.classList.add('focused'), true);
  span.addEventListener('blur', () => span.classList.remove('focused'), true);

  return newGlobalDiv;
};

export const home = () => {
  // document.getElementById('globalContainer').innerText = '¡¡Holiii!! Aquí irá el homepage';
  // const g = document.getElementById('newGlobalDiv');
  const divHome = document.createElement('div');
  divHome.setAttribute('id', 'divHome');
  const h1 = document.createElement('h1');
  h1.innerText = '¡¡Holiii!! Aquí irá el homepage';
  divHome.appendChild(h1);
  return divHome;
};
