// document.onkeydown = function (e) {
//     if (e.keyCode === 116) {
//       return false;
//     }
//   };

let headerHeight = document.querySelector('.wr-header').offsetHeight;
let clientHeight = window.pageYOffset - headerHeight;

window.addEventListener('scroll', () => {
    
});

let request = document.querySelector('.header-works');
request.addEventListener('click', () => {
    request.disabled = true;
    let list = document.createElement('div');
    list.classList.add('listForm')
    list.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 80vh;
        top: 10vh;
        background: white;
        z-index: 1000;
        border-radius: 50px;
    `
    document.querySelector('.fixed-menu').appendChild(list);

    let form = document.createElement('form');
    form.style.cssText = `
        height: 80%;
    `
    list.appendChild(form);

    let nummerText = document.createElement('p');
    nummerText.innerText = 'Ваш номер телефона:';
    nummerText.style.cssText = `
        font-size: 25px;
        text-align: center;
        margin-top: 30px;
    `;
    form.appendChild(nummerText);

    let nummerInput = document.createElement('input');
    nummerInput.setAttribute('placeholder', '375(29)1112233');
    nummerInput.style.cssText = `
        display: block;
        width: 300px;
        height: 50px;
        margin: auto;
        border: 1px solid blue;
        border-radius: 15px;
        margin-top: 30px;
    `
    form.appendChild(nummerInput);

    let nameText = document.createElement('p');
    nameText.innerText = 'Вас зовут:';
    nameText.style.cssText = `
        font-size: 25px;
        text-align: center;
        margin-top: 30px;
    `;
    form.appendChild(nameText);

    let nameInput = document.createElement('input');
    nameInput.setAttribute('placeholder', 'Имя Фамилия');
    nameInput.style.cssText = `
        display: block;
        width: 300px;
        height: 50px;
        margin: auto;
        border: 1px solid blue;
        border-radius: 15px;
        margin-top: 30px;
    `
    form.appendChild(nameInput);

    let submit = document.createElement('input');
    submit.setAttribute('type', 'submit');
    submit.innerText = 'отправить';
    submit.style.cssText = `
        display: block;
        width: 300px;
        height: 50px;
        margin: auto;
        border: 1px solid blue;
        border-radius: 15px;
        margin-top: 30px;
    `
    form.appendChild(submit);

    let close = document.createElement('button');
    close.style.cssText = `
        position: absolute;
        top: 2%;
        right: 1.2%;
        display: block;
        width: 50px;
        height: 50px;
        margin: auto;
        background: url("./sources/logout.png");
        background-size: contain;
        border: none;
        border-radius: 15px;
    `   
    list.appendChild(close);
    close.addEventListener('click', () => {
        document.querySelector('.listForm').parentNode.removeChild(list);
        document.querySelector('.header-works').disabled = false;
    });
});
