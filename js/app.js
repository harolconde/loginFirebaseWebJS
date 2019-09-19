'use strict'

// Varibles registro
const emailRegister = document.getElementById('email')
const passworRegister = document.getElementById('password')
const btnregistro = document.getElementById('btnRegistro')

// Variables login
const emailLogin = document.getElementById('emailLogin')
const passwordLogin = document.getElementById('passwordLogin')
const btnlogin = document.getElementById('btnLogin')

// Logout o cerrar sesion


let register = () => {
    firebase.auth().createUserWithEmailAndPassword(emailRegister.value, passworRegister.value)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ...
        });
}

// Funcion para logeo usuario
let login = () => {
    firebase.auth().signInWithEmailAndPassword(emailLogin.value, passwordLogin.value)
        .catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode)
            console.log(errorMessage)
            // ...
        });
}

// Funcion observable de usuarios activos.
let observable = () => {
    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log('Existe usuario activo')
            // User is signed in.
            var displayName = user.displayName;
            var email = user.email;
            var emailVerified = user.emailVerified;
            var photoURL = user.photoURL;
            var isAnonymous = user.isAnonymous;
            var uid = user.uid;
            var providerData = user.providerData;

            containerInfoLogin(email)
            // ...
        } else {
            console.log('no existe usuario activo')
            // User is signed out.
            // ...
        }
    });
}

// Funcion que muestra informacion del login
let containerInfoLogin = (email) => {
    let containerUserLoged = document.getElementById('containerDates')
    containerUserLoged.innerHTML = /* html*/ `
        <div>
            <span>${email}</span>
            <ul class="list-group">
                <li class="list-group-item">
                    <button onclick="logout()" class="btn btn-block btn-danger" id="btnLogout">Cerrar sesión</button>
                </li>
            </ul>
        </dvi>
    `
}

// Funcion para cerrar sesión 
let logout = () => {
    console.log('Saliendo..')
    firebase.auth().signOut().then(function(){
      console.log('Saliendo...')  
    })
    .catch(function(error){
        console.log(error)
    })
}


// Evento para registrar 
btnregistro.addEventListener('click', register)

// Evento para logear
btnlogin.addEventListener('click', login)

// Evento observador
window.addEventListener('load', observable);

// Evento para cerrar sesión
//btnlogout.addEventListener('click', logout);