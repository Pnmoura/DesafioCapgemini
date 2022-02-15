const pwd = document.getElementById('pwd');
const pwd2 = document.getElementById('pwd2');

if (item == pwd2) {
    if (item.value === pwd.value) item.setCustomValidity('');
    else item.setCustomValidity('invalidos');
}