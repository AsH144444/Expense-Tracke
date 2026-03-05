let item =JSON.parse(localStorage.getItem("item") ) || [];
const display = document.getElementById("display");


show();
tot();

function handel(event){
    event.preventDefault();
      const today = new Date();
const date = today.toISOString().split("T")[0];
console.log(date); 

    let input1 = document.getElementById('des').value;
    input1 = input1.charAt(0).toUpperCase() + input1.slice(1);
    const input2 = parseFloat(document.getElementById("am").value);
    const select_opt = document.getElementById('op');
    const select_opt_text=select_opt.options[select_opt.selectedIndex].text;
    
    const newiteam ={
        date: date,
        descripition: input1,
        amount: input2,
        op: select_opt_text
        
    };
    
   
    item.push(newiteam);

    localStorage.setItem("item",JSON.stringify(item));
    document.getElementById('des').value ="";
    document.getElementById("am").value ="";

    show();
    tot();
}


function show() {

    display.innerHTML ="";
    const divi = document.createElement("div");
    divi.className ="dis";

    
     const dive = document.getElementById("tdis");

    if (item.length === 0) {
        dive.style.display = "none";
        return; // stop function if no items
    } else {
        dive.style.display = "grid";
    }


    
    item.forEach((item,index) => {
        
    

         const d = document.createElement("p");
        d.innerText= item.date;
        
        const p = document.createElement("p");
        p.innerText= item.descripition;
        const q = document.createElement("p");
        q.innerText=`Rs ${item.amount}`;
        const r = document.createElement("p");
        const btm = document.createElement("button");
        btm.innerText ="Delete";
        btm.className="bt";
        r.innerText=item.op;

        divi.appendChild(d);
        divi.appendChild(p);
        divi.appendChild(q);
        divi.appendChild(r);
        divi.appendChild(btm);
        btm.onclick = function() {
            deleteItem(index);
        };


    });

     display.appendChild(divi);
}

function deleteItem(index) {
    item.splice(index, 1); 

    localStorage.setItem("item", JSON.stringify(item)); 

    show();
    tot();
}


function tot() {
    let total=0;
    item.forEach(item => {
        total  += parseFloat(item.amount);
        
    });
     
    const totals =`Total is RS ${total.toFixed(2)}`;
    document.getElementById('total').innerText= totals;
    

}
