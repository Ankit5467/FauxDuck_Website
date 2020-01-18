//Dynamically Manipulate the DOM
//Part 1 : Reviews

function userInfo(event) {
    event.preventDefault();
    var formUsername = document.getElementById("formUsername").value;
    if(formUsername.length == 0) {
        formUsername = "Faux Ducks' Anonymous User Review"
    }
    var formReview = document.getElementById("formReview").value;
    custRev(formUsername, formReview);
}


function custRev(name, review){
    var div = document.createElement("div");
    div.className = "comment";

    var info = document.createElement("div");
    info.className = "profile-info";

    var img = document.createElement("img");
    img.className = "profile-pic";
    img.src = "ReviewPics/mallard2.jpg";
    img.alt = "Anonymous Picture";

    var user = document.createElement("p");
    user.className = "user";
    user.innerHTML = name;

    info.appendChild(img);
    info.appendChild(user);

    var content = document.createElement("div");

    var rev = document.createElement("p");
    rev.innerHTML = review;

    content.appendChild(document.createElement("hr"));
    content.appendChild(rev);


    div.appendChild(info);
    div.appendChild(content);

    document.getElementById("placeReview").appendChild(div);
}

window.onload = () => {
    postForm.addEventListener('submit', userInfo);
 };