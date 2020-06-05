let repearScreen = document.querySelector('.phone-page_prices').children[0];
let repearBattery = document.querySelector('.phone-page_prices').children[1];
let repearPort = document.querySelector('.phone-page_prices').children[2];
let repearCamera = document.querySelector('.phone-page_prices').children[3];
let repearBody = document.querySelector('.phone-page_prices').children[4];
let repearOther = document.querySelector('.phone-page_prices').children[5];
let alertas = (valueRepear) => { 
    let list = document.createElement('div');
    list.classList.add('listForm')
    list.style.cssText = `
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        width: 100%;
        height: 85%;
        top: 10vh;
        background: white;
        z-index: 1000;
        border-radius: 50px;
        background: url("./sources/wp-phone.jpg");
        background-color: black;
        background-size: contain;
        background-repeat: no-repeat;
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
        color: white;
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
        margin-top: 10px;
    `
    form.appendChild(nummerInput);

    let nameText = document.createElement('p');
    nameText.innerText = 'Вас зовут:';
    nameText.style.cssText = `
        font-size: 25px;
        text-align: center;
        margin-top: 10px;
        color: white;
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
        margin-top: 10px;
    `
    form.appendChild(nameInput);

    let repearInput = document.createElement('input');
    repearInput.value = `${valueRepear}`;
    repearInput.readOnly = true;
    repearInput.style.cssText = `
        display: block;
        background-color: rgb(200,200,200);
        width: 300px;
        height: 50px;
        margin: auto;
        border: 1px solid blue;
        border-radius: 15px;
        margin-top: 10px;
        cursor: not-allowed;
    `
    form.appendChild(repearInput);

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
        margin-top: 10px;
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
        background-color: white;
        background-size: contain;
        border: none;
        border-radius: 100px;
    `   
    list.appendChild(close);
    close.addEventListener('click', () => {
        document.querySelector('.listForm').parentNode.removeChild(list);
        document.querySelector('.header-works').disabled = false;
    });
}
repearScreen.addEventListener('click', () => alertas(`Замена экрана или стекла телефона`));
repearBattery.addEventListener('click', () => alertas(`Замена батареи телефона`));
repearPort.addEventListener('click', () => alertas(`Замена порта телефона`));
repearCamera.addEventListener('click', () => alertas(`Замена камеры телефона`)); 
repearBody.addEventListener('click', () => alertas(`Замена корпуса телефона`));
repearOther.addEventListener('click', () => alertas(`Другое (телефон)`));

