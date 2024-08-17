const mobile = document.querySelector("#mobile_display");
function open_navbar() {
    mobile.classList.add("open");
}

function close_navbar() {
    mobile.classList.remove("open");
}

document.addEventListener("click", function (event) {
    const isClickInside = mobile.contains(event.target);
    const isClickOnButton = event.target.closest(".icon_bar, .exit_btn");

    if(!isClickInside && !isClickOnButton && mobile.classList.contains("open")){
        mobile.classList.remove("open");
    }
});