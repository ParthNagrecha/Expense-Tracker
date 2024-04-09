let expinput = document.getElementById("expinput");
let amtinput = document.getElementById("amtinput");
let date = document.getElementById("dateinput");
let addexp = document.getElementById('addexp');
let del = document.getElementById('remove');

addexp.addEventListener("click",function(){


    var exp = expinput.value;
    var amt = amtinput.value;
    var dt = date.value;
    
    var tr = document.createElement('tr');

    var td1 = tr.appendChild(document.createElement('td'));
    var td2 = tr.appendChild(document.createElement('td'));
    var td3 = tr.appendChild(document.createElement('td'));
    var bt = tr.appendChild(document.createElement('button'))

    bt.innerText = "X";
    td1.innerHTML = exp;
    td2.innerHTML = amt;
    td3.innerHTML = dt;

    document.getElementById('tbl').appendChild(tr);

    
    bt.addEventListener('click',function(){
        document.getElementById('tbl').removeChild(tr);
        })
})