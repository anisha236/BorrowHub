function searchItem() {

    let searchText = document.getElementById("searchBox").value;

    window.location.href = "browse.html?search=" + searchText;
}


let params = new URLSearchParams(window.location.search);

let searchValue = params.get("search");

if (searchValue) {

    let items = document.querySelectorAll(".item-card");

    items.forEach(function(item) {

        let itemName = item.getAttribute("data-item").toLowerCase();

        if (itemName.includes(searchValue.toLowerCase())) {
            item.style.display = "block";
        } else {
            item.style.display = "none";
        }

    });

    document.getElementById("searchResult").textContent =
        "Search results for: " + searchValue;
}
function validateLogin() {

    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "" || password === "") {

        alert("Please enter username and password.");

    } else {

        window.location.href = "dashboard.html";

    }
}
function validateRegister() {

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("registerPassword").value;

    if (name === "" || email === "" || password === "") {

        alert("Please fill all the fields.");

    } else {

        alert("Registration successful!");

        window.location.href = "login.html";
    }
}