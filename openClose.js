//Opening and Closing Form

function respond(event) {
    event.preventDefault();
    var delivery = document.getElementById("deliveryDate").value;
    printName(delivery);
}


function printName(date){
    var div = document.createElement("div");
    var print = document.createElement("p");
    //print.innerHTML = "Thank you " + name + " (" + id + ")! Your purchase will arrive on" + date + "!";
    print.innerHTML = "Thank you " + localStorage.getItem("openName") + " (" 
    + localStorage.getItem("openID") +")! Your purchase will arrive on " + date + "!";
    div.appendChild(print);
    document.getElementById("response").appendChild(div);
    console.log(localStorage);
}

window.onload = () => {
    postDate.addEventListener('submit', respond);
 };
