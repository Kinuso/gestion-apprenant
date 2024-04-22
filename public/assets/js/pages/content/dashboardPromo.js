import DashboardService from "../../services/DashboardService";

const ViewPromPage = (nompromo) => {
  //   let btnView = document.querySelectorAll(".view");
  //   let promo = "";

  //   btnView.forEach((btn) => {
  //     btn.addEventListener("click", handleProm);
  //   });

  //   const handleProm = (e) => {
  //     promo = e.target.parentNode.id;
  //     handlePromView;
  //   };

  //   const handlePromView = async () => {
  //     await DashboardService.LoadPromDashboard(promo).then((response) => {});
  //   };

  return `<div
  class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 px-4 sm:py-6"
>
  <main>
    <h1></h1>
    <div class="md:flex no-wrap md:-mx-2">
      <div class="w-full mx-2 md:block lg:block md:-mt-24 sm:mt-0">
        <div class="hidden md:block lg:block">
          <ul class="flex bg-white">
            <li class="mr-1">
              <a
                class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700"
                href="#"
                >Accueil</a
              >
              <a
                class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700"
                href="#"
                >Promotions</a
              >
            </li>
          </ul>
        </div>
        <div class="bg-white p-3 rounded-sm">
          <div
            class="flex items-center space-x-2 font-semibold text-gray-900 leading-8"
          >
            <span class="text-xl tracking-wide px-2">Cours du jour</span>
          </div>
        </div>

        <div
          class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 sm:block"
        >
          <div class="hidden md:block lg:block">
            <ul class="flex bg-white">
              <li class="mr-1">
                <a
                  class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700"
                  href="#"
                  >Tableau Apprenants</a
                >
                <a
                  class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700"
                  href="#"
                  >Retards</a
                >
              </li>
            </ul>
          </div>
          <div class="overflow-hidden px-5 py-3">
            <div class="min-w-full" id="allStudents">
              <div class="flex border-b-4 border-black pb-2 font-bold">
                <p id="StudentsLastName" class="w-2/12">Nom de famille</p>
                <p id="SudentsFirstName" class="w-2/12">Prénom</p>
                <p id="StudentsMail" class="w-4/12">Mail</p>
                <p id="StudentsActivated" class="w-2/12">Compte activé</p>
                <p id="StudentsRole" class="w-4/12">Rôle</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</div>

`;
};

export default ViewPromPage;
