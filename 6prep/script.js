const link = document.querySelectorAll('a');

for (let i = 0; i < link.length; i++) {
  link[i].textContent = 'Mozilla Developer Network';
  link[i].href = 'https://developer.mozilla.org';
  link[i].style.color = 'red';
}

const sect = document.querySelector('section');

const para = document.createElement('p');
para.textContent = 'Well, this is a new paragraph.';
sect.appendChild(para);

const text = document.createTextNode(
  ' -- the premier source for webdev knowledge.'
);

const linkPara = document.querySelector('p');
linkPara.appendChild(text);

sect.appendChild(linkPara);

link[1].remove();

para.setAttribute('class', 'highlight');