// =======================TASK 1===============================

let user = {
    name: prompt('Как тебя зовут?'),
    surname: prompt(`Как твоя фамилия?`),
    age: prompt('Сколько тебе лет?'),
    mood: prompt('Как настроение?')
}

let div = document.createElement('div');
div.className = 'container';

for (let key in user) {
    let p = document.createElement('p');
    p.className = `${key}`;
    p.append(user[key]);
    div.append(p);
}

document.body.append(div);

// =======================TASK 2===============================

let amountOfTags = {}
amountOfTags.div = document.querySelectorAll('div').length;
amountOfTags.p = document.querySelectorAll('p').length;
amountOfTags.classes = [];
amountOfTags.classes.push(`${div.className}`);
for (let i of document.querySelectorAll('p')) {
    amountOfTags.classes.push(`${i.className}`);
}
console.log(amountOfTags);