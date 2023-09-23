//email and password field
document.addEventListener('DOMContentLoaded', function () {
    const emailField = document.getElementById('email-field');
    const passwordField = document.getElementById('password-field');
    const showPasswordButton = document.getElementById('show-password-button');
    const gotoPasswordButton = document.getElementById('goto-password-button');
    const loginForm = document.getElementById('login-form');

    passwordField.style.display = 'none';
    showPasswordButton.style.display = 'none';

    gotoPasswordButton.disabled = true;

    emailField.addEventListener('input', function () {
        if (emailField.value.trim() !== '') {
            gotoPasswordButton.disabled = false;
        } else {
            gotoPasswordButton.disabled = true;
            passwordField.value = '';
            passwordField.style.display = 'none';
            showPasswordButton.style.display = 'none';
        }
    });

    gotoPasswordButton.addEventListener('click', function (event) {
        event.preventDefault(); 
        if (emailField.value.trim() !== '') {
            showPasswordField();
        }
    });

    function showPasswordField() {
        passwordField.style.display = 'block';
        showPasswordButton.style.display = 'block';
        setTimeout(function () {
            passwordField.style.opacity = 1;
            showPasswordButton.style.opacity = 1;
        }, 10);
        passwordField.focus();
    }

    showPasswordButton.addEventListener('click', function () {
        if (passwordField.type === 'password') {
            passwordField.type = 'text';
            showPasswordButton.innerHTML = '<i class="fas fa-eye"></i>';
        } else {
            passwordField.type = 'password';
            showPasswordButton.innerHTML = '<i class="fas fa-eye-slash"></i>';
        }
    });

    loginForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
        alert('success');
    });
});


// Initialize Google Sign-In
// change the client id and redirect url
function startGoogleSignIn() {
    window.location.href = 'https://accounts.google.com/o/oauth2/auth?client_id=YOUR_CLIENT_ID&redirect_uri=YOUR_REDIRECT_URI&scope=profile%20email&response_type=code';
}

// Initialize facebook Sign-In
//change the app id and redirec url
function onfacebookLogin () {
    window.location.href = 'https://www.facebook.com/v12.0/dialog/oauth?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=email&response_type=code';
}

// Initialize instagram Sign-In
//change the app id and redirect url
function onInstagramLogin () {
    window.location.href = 'https://www.instagram.com/oauth/authorize?client_id=YOUR_FACEBOOK_APP_ID&redirect_uri=YOUR_REDIRECT_URI&scope=user_profile,user_media&response_type=code';
}
// Initialize instagram Sign-In
//change oauthtoken
function ontwitterLogin(){
    window.location.href = 'https://api.twitter.com/oauth/authenticate?oauth_token=YOUR_OAUTH_TOKEN';

}
function sendUserDataToServer(userdata) {
    //chnage the server url
    const serverUrl = 'https://your-server-endpoint-url';

    const requestData = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(userdata),
    };

    // Send the data to server
    fetch(serverUrl, requestData)
        .then(response => {
            if (response.ok) {
                console.log('User data sent to the server successfully.');
            } else {
                console.error('Failed to send user data to the server.');
            }
        })
        .catch(error => {
            console.error('An error occurred while sending user data:', error);
        });
}

const userdata = {};


sendUserDataToServer(userdata);

