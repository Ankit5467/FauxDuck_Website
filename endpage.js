function response(event) {
    event.preventDefault();
    // var studentName = document.getElementById("name");
    // var studentID = document.getElementsById("studentID");
    var delivery = document.getElementsById("deliveryDate");
    printName(delivery);
}


function printName(date){
    var print = document.createElement("p");
    print.innerHTML = "Thank you " + name + " (" + id + ")! Your purchase will arrive on " + date + "!";
    document.getElementById("response").appendChild(print);
}

window.onload = () => {
    postForm.addEventListener('submit', response);
 };