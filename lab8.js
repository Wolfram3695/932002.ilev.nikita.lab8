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

function saver(){
    var info = document.createElement('div');
    info.className = 'save';
    info.innerHTML = '{';
    document.body.append(info);
    var object = document.getElementsByClassName('count');
    for (const k in object){
        if (object.hasOwnProperty(k)){
            const element = object[k];
            if(element != document.getElementsByClassName('.count')[0]){
                var text = '"' + element.children[0].value + '":"' + element.children[1].value + '"';
                info.innerHTML += text;
                if(element.nextSibling != undefined){
                    info.innerHTML += ',';
                }
            }
        }
    }
    info.innerHTML += '}';
}
