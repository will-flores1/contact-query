console.log('hello world');
const contacts = ['Chris:3243439038', 'Ruth:3428933498', 'Max:6540930982'];
const para = document.querySelector('p');
const input = document.querySelector('input');
const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const searchName = input.value.toLowerCase();
    input.value = '';
    input.focus();
    para.textContent = '';
    for (const contact of contacts) {
        const splitContact = contact.split(':');
        if (splitContact[0].toLowerCase() === searchName) {
            para.textContent = splitContact[0] + '\'s number is ' + splitContact[1] + '.';
            break;
        }
    }
    if (para.textContent === '') {
        para.textContent = 'Contact not found.';
    }
});