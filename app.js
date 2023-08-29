const form = document.querySelector("form");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");
const emailPattern = /^[A-Za-z0-9](([a-zA-Z0-9,=\.!\-#|\$%\^&\*\+/\?_`\{\}~]+)*)@(?:[0-9a-zA-Z-]+\.)+[a-zA-Z]{2,9}$/;


const userInfo = (event) => {
    event.preventDefault();
    const userFirstName = form.firstName.value.trim();
    const userLastName = form.lastName.value.trim();
    const email = form.email.value.trim();
    const password = form.password.value.trim();
    
    if((userFirstName == "") || (userLastName == "") || (!emailPattern.test(email)) || (password == "")){
        inputs.forEach(input => {
            input.setAttribute("class", "error");
        });
        labels.forEach(label => {
            label.style.display = "block";
        })
    } 
}

form.addEventListener("submit", userInfo);

