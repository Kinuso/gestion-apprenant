import config from "../config/config";

const LoginService = {
  async login(loginCredentialsMail,loginCredentialsPassword) {
    console.log("j'ai cliquer login");

    let userCredentials = {
      email: loginCredentialsMail,
      password: loginCredentialsPassword,
    };

    // Define parameters to use
    let params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(userCredentials),
    };

    fetch(config.DEFAULT_URL, params)
      .then((res) => res.json())
      .then((data) => {
        console.log("j'y fus" + data);
      })
      .catch((err) => console.log(err));
  },
};
export default LoginService;
