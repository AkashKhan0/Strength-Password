function Strength(password){
    let i = 0;
    if(password.length > 6){
        i++;
    }
    if(password.length >= 10){
        i++;
    }
    if(/[A-Z]/.test(password)){
        i++;
    }
    if(/[0-9]/.test(password)){
        i++;
    }
    if(/[A-Z,a-z-8 @ . - _]/.test(password)){
        i++;
    }
    return i;
}

let container = document.getElementById('content');
document.addEventListener("keyup" , function(e){
    let password = document.getElementById('pass').value;

    let strength = Strength(password);
    if(strength <= 0){
        container.classList.add('empty');
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }
    else if(strength <= 2){
        container.classList.add('weak');
        container.classList.remove('empty');
        container.classList.remove('medium');
        container.classList.remove('strong');
    }
    else if(strength >= 2 && strength <= 4){
        container.classList.remove('weak');
        container.classList.remove('empty');
        container.classList.add('medium');
        container.classList.remove('strong');
    }
    else {
        container.classList.remove('weak');
        container.classList.remove('medium');
        container.classList.add('strong');
    }
})


let pswrd = document.getElementById('pass');
let show = document.getElementById('show');
show.onclick = function(){
    if(pswrd.type === 'password'){
        pswrd.setAttribute('type', 'text');
        show.classList.add('hide');
    }
    else{
        pswrd.setAttribute('type', 'password');
        show.classList.remove('hide');
    }
}


