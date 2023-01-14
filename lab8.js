function adder(){
    const targetDiv = document.querySelector('.content');
    let newDiv = document.createElement('div');
    newDiv.className = 'count';
    newDiv.innerHTML = '<input type="text"> <input type="text"> <button onclick="upper(this)">↑</button> <button onclick="downer(this)">↓</button> <button onclick="deleter(this)">x</button>';
    targetDiv.append(newDiv);
}

function upper(i){
    const a = i.parentElement.previousSibling;
    const b = i.parentElement;
    const parent = document.querySelector('.content');
    parent.insertBefore(b,a);
}

function downer(i){
    const a = i.parentElement;
    const b = i.parentElement.nextSibling;
    const parent = document.querySelector('.content');
    parent.insertBefore(b,a);
}

function deleter(i){
    const del = i.parentElement;
    del.remove();
}