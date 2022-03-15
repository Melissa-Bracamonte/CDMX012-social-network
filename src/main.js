// import { myFunction } from './lib/index.js';
import { signUp, home } from './components/signUp.js';
// import { home } from './components/home.js';

// myFunction();

const globalContainerDiv = document.getElementById('globalContainer');

export const routes = {
// '/' : login,
  '/Signup': signUp(),
  '/Home': home(),
// '/Profile' : Profile,
};

export const onNavigate = (pathname) => {
  window.history.pushState(
    {},
    pathname,
    window.location.origin + pathname,
  );
  // while (globalContainerDiv.firstChild) {
  //   globalContainerDiv.removeChild(globalContainerDiv.firstChild);
  // }

  globalContainerDiv.appendChild(routes[pathname]());
};

window.onpopstate = () => {
  globalContainerDiv.appendChild(routes[window.location.pathname]());
};

const component = () => routes[window.location.pathname];
globalContainerDiv.appendChild(component());

// onNavigate('/Signup');
