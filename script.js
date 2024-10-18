function menuFunction() {
    const mobileDropdown = document.querySelector('body > nav > ul');
    const menuButton = document.querySelector('body > nav > a:last-child');

    if (mobileDropdown.style.display == "flex") {
        mobileDropdown.style.display = null;
        menuButton.style = null;
    }
    else {
        mobileDropdown.style.display = "flex";
        menuButton.style.color = "var(--colour0)";
        menuButton.style.backgroundColor = "white";
    }
}