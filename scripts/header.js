import createModal from './auth.js';

export default () => {
    let header = document.createElement('div');
    header.className = 'header';
    header.innerText = 'header here';

    // Login and Signup buttons
    const buttons = document.createElement('div');
    const login = document.createElement('buttons');
    const signup = document.createElement('buttons');
    login.className = 'login';
    signup.className = 'signup';
    login.innerHTML = 'Log in';
    signup.innerHTML = 'Sign up';
    buttons.append(login);
    buttons.append(signup);
    buttons.className = 'buttons';  //need class to select div
    header.append(buttons);

    const modal = createModal();
    header.append(modal);

    function openModal(buttonClicked) {
        modal.style.visibility = 'initial';
        modal.firstChild.firstChild.children[3].innerText = buttonClicked;
        if(buttonClicked === 'Log in') {
          modal.firstChild.firstChild.children[0].style.display = 'none';
        } else {
          modal.firstChild.firstChild.children[0].style.display = 'inline';
        }
    }
    login.onclick = () => openModal('Log in');
    signup.onclick = () => openModal('Sign up');



    return header;
  };
