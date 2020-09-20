const toDoArray = [
    // {title: 'item 1', finished: false},
    // {title: 'item 2', finished: true},
    // {title: 'item 3', finished: false}
];
const renderArray = () => {
    const list = document.querySelector('.list');
    list.innerHTML = '';
    toDoArray.forEach((item) => {
        const liItem = document.createElement('li');
        liItem.classList.add('item');
        if(item.finished) {
            liItem.classList.add('finished');
        }
        liItem.textContent = item.title;
        list.append(liItem);
    });
}
renderArray();

const form = document.querySelector('#formId');
form.addEventListener('submit', (event) => {
    event.preventDefault();
    const newItem = document.querySelector('input[name="newItem"]');
    toDoArray.push({
        title: newItem.value, finished: false
    });
    newItem.value = '';
    renderArray();
});
