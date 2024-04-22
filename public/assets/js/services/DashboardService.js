import { DEFAULT_URL } from "../config/config";
import router from "../routes/router";

const DashboardService = {
  async LoadPromDashboard(PromName) {
    let PromCredential = {
      Prom: PromName,
    };

    let params = {
      method: "POST",
      headers: {
        "Content-Type": "application/json; charset=utf-8",
      },
      body: JSON.stringify(PromCredential),
    };
    return await fetch(DEFAULT_URL + "/public/loadStudentsFromProm", params)
      .then((res) => res.json())
      .then((data) => {
        if (data.status == "success") {
          window.history.pushState(
            {},
            "",
            DEFAULT_URL + "/public/dashboardAdmin/ViewProm"
          );
          router();

          const allStudents = document.querySelector("#allStudents");
          data.StudentsInfo.forEach((element) => {
            allStudents.innerHTML += `<div class="flex items-center pb-2 pt-2">
                                    <p class="w-2/12">${element["User_LastName"]}</p>
                                    <p class="w-2/12">${element["User_FirstName"]}</p>
                                    <p class="w-4/12">${element["User_Email"]}</p>
                                    <p class="w-2/12">${element["User_Activated"]}</p>
                                    <div class="flex justify-end w-4/12 text-blue-800 font-bold hover:cursor-pointer" id="${element["Class_Name"]}">  
                                    <p class="edit pr-4"  data-prom-name="${element["User_ID"]}">Éditer</p>
                                    <p class="delete pr-4"  data-prom-name="${element["Class_Name"]}">Supprimer</p>                 
                                    </div>
                                </div>`;
          });
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

export default DashboardService;
