"use strict";
window.UserData = {};
function isUserData(obj) {
    if (obj &&
        typeof obj === 'object' &&
        ('nome' in obj || 'email' in obj || 'cpf' in obj)) {
        return true;
    }
    else {
        return false;
    }
}
function loadLocalStorage() {
    const localUserData = localStorage.getItem('UserData');
    if (localUserData && validateJson(localUserData)) {
        console.log('localUserData', JSON.parse(localUserData));
        const UserData = JSON.parse(localUserData);
        if (isUserData(UserData)) {
        }
        Object.entries(UserData).forEach(([key, value]) => {
            const input = document.getElementById(key);
            if (input instanceof HTMLInputElement) {
                input.value = value;
                window.UserData[key] = value;
            }
        });
    }
}
function validateJson(str) {
    try {
        JSON.parse(str);
    }
    catch (e) {
        return false;
    }
    return true;
}
const formData = document.querySelector('#form');
function handleInput({ target }) {
    if (target instanceof HTMLInputElement) {
        window.UserData[target.id] = target.value;
        localStorage.setItem('UserData', JSON.stringify(window.UserData));
    }
}
formData?.addEventListener('keyup', handleInput);
loadLocalStorage();
