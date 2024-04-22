import { DEFAULT_URL } from "../config/config";
import router from "../routes/router";
import DashboardService from "./DashboardService";

const LoginService = {
  async login(loginCredentialsMail, loginCredentialsPassword) {
    // On recupere correctement les credentials

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

    return await fetch(DEFAULT_URL + "/public/login", params)
      .then((res) => res.json())
      .then((data) => {
        if (data.status === "success") {
          if (data.userInfo["Role_ID"] <= 4) {
            params = {
              method: "GET",
              headers: {
                "Content-Type": "application/json; charset=utf-8",
              },
            };
            fetch(DEFAULT_URL + "/public/loadProm", params)
              .then((res) => res.json())
              .then((data) => {
                window.history.pushState(
                  {},
                  "",
                  DEFAULT_URL + "/public/dashboardAdmin"
                );
                router();
                const allProm = document.querySelector("#allPromotions");
                data.promInfo.forEach((element) => {
                  allProm.innerHTML += `<div class="flex items-center pb-2 pt-2">
                                          <p id="NomPromo" class="w-2/12">${element["Class_Name"]}</p>
                                          <p id="DateDebut" class="w-2/12">${element["Class_Start"]}</p>
                                          <p id="DateFin" class="w-2/12">${element["Class_Finish"]}</p>
                                          <p id="NombrePlace" class="w-4/12">${element["Class_Places"]}</p>
                                          <div class="flex justify-end w-2/12 text-blue-800 font-bold hover:cursor-pointer" id="${element["Class_Name"]}">  
                                            <p class="show pr-4" data-prom-name="${element["Class_Name"]}">Voir</p>
                                            <p class="edit pr-4">Éditer</p>
                                            <p class="delete pr-4">Supprimer</p>                 
                                          </div>
                                        </div>`;
                });
                const handleRetrieveProm = async (whichProm) => {
                  await DashboardService.LoadPromDashboard(whichProm).then(
                    (response) => {}
                  );
                };
                const handleProm = async (whichProm) => {
                  handleRetrieveProm(whichProm);
                };

                document.addEventListener("click", function (event) {
                  if (
                    event.target.classList.contains("show") &&
                    event.target.hasAttribute("data-prom-name")
                  ) {
                    const promName =
                      event.target.getAttribute("data-prom-name");
                    showProm(promName);
                  }
                });

                function showProm(PromName) {
                  handleProm(PromName);
                }
              });
          } else if (data.userInfo["Role_ID"] > 4) {
          }
        } else {
          document.getElementById("error").innerHTML = data.message;
          setTimeout(() => {
            document.getElementById("error").innerHTML = "";
          }, 3000);
        }
      })
      .catch((err) => console.log(err));
  },
};

// function showProm(PromName) {
//   handleProm(PromName);
// }
export default LoginService;
