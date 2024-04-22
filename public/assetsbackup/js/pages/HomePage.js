



const HomePage = () => {
    
       let email = "";
       let password = "";

       const handleEmail = (e) => {
         //e recup un object qui te permet de recup la value de l'input
         email = e.target.value;
       };
       const handlePassword = (e) => {
         password = e.target.value;
         console.log(password);
       };

       const handleLogin = () => {
         LoginService.login(email, password).then((response) => {
           console.log(response);
         });
       };

       //étape 1 créer un service qui vas faire la requete (login Service JS)
       //étape 2 créer un controller PHP qui vas traiter la request
       //étape 3 dans le App.php mettre la request (t'as un exemple avec getAllUser que j'avais fais c'est le meme principe
       //étape 4 faire la page en JS
       //étape 5 récupérer l' email et password avec le onchange pour avoir les derniere value
       // créer un boutton qui fera la soumission

       const loginBtn = document.getElementById("loginBtn");

       loginBtn.addEventListener("click", handleLogin);

 
    //

    return `
    <h1>Home Page</h1>
    <a href="/public/about" class="nav_link">About</a>
    
   
<main class="h-4/5 justify-center items-center flex mainLogin" id="mainLogin">
    <div class="flex flex-col place-content-center  inset-y-1/4 border-2">
        <p>Email</p>
        <input type="text" placeholder="Email" name="emailLogin" id="emailLogin" value="admin@admin.fr" onchange="handleEmail()">
        <p>Password</p>
        <input typ-e="password" placeholder="Password" name="passwordLogin" id="passwordLogin" value="admin" onchange="handlePassword()"><br>
         <button type="button" id="loginBtn">Se connecter</button>
        <div id="loginData">
        </div>
    </div>
</main>

<main class="h-4/5 justify-center items-center flex hidden mainRenewPassword" id="mainRenewPassword">
    <div class="flex flex-col place-content-center  inset-y-1/4 border-2">
        <p>Mot de passe</p>
        <input type="password" placeholder="*****" name="passwordRenew" id="passwordRenewLogin">
        <p>Confirmez mot de passe</p>
        <input type="password" placeholder="*****" name="passwordRenewBis" id="passwordRenewLoginBis"><br>

        <button onclick="renewPassword()">Sauvegarder</button>
        <div id="loginData">
        </div>
    </div>
</main>`;



};

export default HomePage;
