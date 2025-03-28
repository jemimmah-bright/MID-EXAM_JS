function addItems(){
    let input = document.getElementById('items');
    let items_placehold = input.value();
    if (items_placehold === "") return;


    let ul = document.getElementById('bucket-list')
    let li = document.createElement('li');
    li.appendChild('');
    ul.appendChild(li);
}