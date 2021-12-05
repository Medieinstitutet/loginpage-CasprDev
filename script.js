//Skapar element som alltid finns
let root = document.getElementById("root");
let nav = document.createElement("nav");
let navLogo = document.createElement("h2");
navLogo.innerText = "Logo";
nav.append(navLogo);
let main = document.createElement("main");
let footer = document.createElement("footer");
let footerText = document.createElement("p");
footerText.innerText = "All rights reserved";
footer.append(footerText);
root.append(nav, main, footer);

//Kollar om man redan är inloggad
if ((localStorage.getItem("userName") == "janne" && localStorage.getItem("passWord") == "test") ||
    (localStorage.getItem("userName") == "john" && localStorage.getItem("passWord") == "marston" )) {

    nav.innerHTML = "";
    main.innerHTML = "";
    //skapar knapp för utloggning
    let logoutButton = document.createElement("button");
    logoutButton.innerText = "Log out";
    logoutButton.addEventListener("click", logout);
    let LoggedinText = document.createElement("h1");
    LoggedinText.innerText = "Welcome " + localStorage.getItem("userName");
    nav.append(navLogo, logoutButton);
    main.append(LoggedinText);

    function logout() {
        localStorage.removeItem("userName");
        localStorage.removeItem("passWord");
        location.reload();
    }
}

//Är man inte inloggad så byggs startsidan med inloggningsformulär
else {
    nav.innerHTML = "";
    main.innerHTML = "";
    //skapar inputfält för användarnamn
    let inputUsername = document.createElement("input");
    inputUsername.setAttribute("type", "text");
    inputUsername.placeholder = "Username";
    //skapar inputfält för lösenord
    let inputPassword = document.createElement("input");
    inputPassword.setAttribute("type", "password");
    inputPassword.placeholder = "Password";
    //skapar knapp för inloggning
    let loginButton = document.createElement("button");
    loginButton.innerText = "Login";
    loginButton.addEventListener("click", login);
    let loginText = document.createElement("h1")
    loginText.innerText = "Please login";
    nav.append(navLogo, inputUsername, inputPassword, loginButton);
    main.append(loginText);

    //Funktion för att logga in
    function login() {

        let userName = inputUsername.value;
        let passWord = inputPassword.value;

        if (userName == "janne" && passWord == "test" || userName == "john" && passWord == "marston") {
            localStorage.setItem("userName", userName);
            localStorage.setItem("passWord", passWord);
            location.reload();
        }

        else {
            main.innerHTML = "";
            let errorText = document.createElement("h2");
            errorText.innerText = "Wrong username or password. Please try again!"
            main.append(errorText);
        }
    }
}
