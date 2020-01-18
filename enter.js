

function setInfo(event) {
    event.preventDefault();
    var store1 = document.getElementById("openName").value;
    var store2 = document.getElementById("openID").value;
    window.localStorage.setItem("openName", store1);
    window.localStorage.setItem("openID", store2);
}

window.onload = () => {
    getInfo.addEventListener('submit', setInfo);
};