const container = document.querySelector('.container');

const para = document.createElement('p');
para.style.color = 'red';
para.textContent = `Hey I'm Red!`;
container.appendChild(para);

const thirdHeader = document.createElement('h3');
thirdHeader.style.color = 'blue';
thirdHeader.textContent = "I'm a blue h3!";
container.appendChild(thirdHeader);

const div = document.createElement('div');
div.setAttribute('id', 'theDiv');
div.style.backgroundColor = 'pink';
div.style.border = 'black';
container.appendChild(div);

const headerOne = document.createElement('h1');
const secondPara = document.createElement('p');

secondPara.textContent = "ME TOO";
headerOne.textContent = "I'm in a div";
div.appendChild(headerOne);
div.appendChild(secondPara);

const btn = document.querySelector('#btn');
btn.onclick = () => alert('Hello World');

btn.addEventListener('click', function (e) {
    console.log(e);
    e.target.style.background = 'blue';
});

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => {
        alert(button.id);
    })
})