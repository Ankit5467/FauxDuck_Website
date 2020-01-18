// Like Button for Our Site

function addLike() {
    if (localStorage.getItem('likeys') === null) {
        document.getElementById("liked").innerHTML = "Thanks!";
        localStorage.setItem('likeys', "1");
    }    
    else {
        document.getElementById("liked").innerHTML = "Thanks Again!";
    }
}
