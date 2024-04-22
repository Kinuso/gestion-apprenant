import LoginService from "../../services/LoginService";

const HomePage = () => {
  //La home page contient le login
  let email = ""; //il me faut le mail donc je créé une variable pour la recup
  let password = ""; //pareil pour le mdp

  const handleEmail = (e) => {
    email = e.target.value;
  };

  const handlePassword = (e) => {
    password = e.target.value;
  };

  const handleLogin = async () => {
    await LoginService.login(email, password).then((response) => {}); //A voir comment on gere dans le controller php pour la reponse
  };

  window.addEventListener("load", () => {
    //En gros tu attend que l'html ai chargé dans la page sinon tu peux pas recup l'input

    //une fois chargé
    const emailInput = document.getElementById("emailLogin"); //je regarde l'input email et quand il y a un changement je recup la value
    emailInput.addEventListener("change", handleEmail); //Quand il y a un changement j'appel la fonction handleEmail pour recup la value

    const passwordInput = document.getElementById("passwordLogin"); //pareil ici
    passwordInput.addEventListener("change", handlePassword);

    const loginBtn = document.getElementById("loginBtn");
    loginBtn.addEventListener("click", handleLogin); //quand je click sur le boutton se connecter j'appel la fonction handlelogin pour essayer de me connecter
  });

  return `
    <main class="h-4/5 justify-center items-center flex mainLogin" id="mainLogin">
        <div class="flex flex-col place-content-center  inset-y-1/4 border-2">
            <p>Email</p>
            <input type="text" placeholder="Email" name="emailLogin" id="emailLogin">
            <p>Password</p>
            <input type="password" placeholder="Password" name="passwordLogin" id="passwordLogin"><br>
            <p id="error"></p><br>
             <button type="button" id="loginBtn">Se connecter</button>
            <div id="loginData">
            </div>
        </div>
    </main>`;
};

export default HomePage;
