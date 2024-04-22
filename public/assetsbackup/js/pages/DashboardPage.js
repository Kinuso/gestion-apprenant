const DashboardPage = () =>
  `<div class="relative flex min-h-screen text-gray-800 antialiased flex-col justify-center overflow-hidden bg-gray-50 px-4 sm:py-6">
    <main>
        <div class="md:flex no-wrap md:-mx-2">
            <div class="w-full mx-2 md:block lg:block md:-mt-24 sm:mt-0">
                <div class="hidden md:block lg:block">
                    <ul class="flex bg-white ">
                        <li class=" mr-1">
                            <a class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700" href="#">Accueil</a>
                            <a class="rounded-sm bg-white inline-block border-l border-t border-r rounded-t py-2 px-4 text-gray-700" href="#">Promotions</a>
                        </li>
                    </ul>
                </div>
                <div class="bg-white p-3 rounded-sm">
                    <div class="flex items-center space-x-2 font-semibold text-gray-900 leading-8">
                        <span class="text-xl tracking-wide px-2">Cours du jour</span>

                    </div>
                </div>

                <div class="inline-block min-w-full py-2 align-middle md:px-6 lg:px-8 sm:block ">
                    <div class="overflow-hidden px-5 py-3 border border-gray-200  md:rounded-lg">
                        <div class="min-w-full">
                            <div class="flex justify-between">
                                <h2 class="font-medium text-gray-800 text-2xl inline-block">DWMM 2</h2>
                                <p class="justify-end font-medium text-gray-800 justify-items-end inline font-bold">Date</p>
                            </div>
                            <p class="font-medium text-gray-800 ">15 participants</p>

                            <div class="pt-4">
                                <label for="font-medium text-gray-800 ">Code *</label>
                                <input type="text" class="border w-full h-5 px-3 py-5 mt-2 hover:outline-none focus:outline-none focus:ring-indigo-500 focus:ring-1 rounded-md">
                            </div>
                            <div class="flex justify-end pt-6 items-baseline">
                                <button type="submit" id="btnConnexion" class="flex mt-4 bg-blue-500 font-semibold text-white py-2 px-2 hover:bg-blue-600">Valider présence</button>
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </main>
</div>
`;

export default DashboardPage;
