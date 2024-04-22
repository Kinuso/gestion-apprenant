import { DEFAULT_URL } from "../config/config";

const Header = () => {
  return `<!DOCTYPE html>
<html lang="fr" class="h-full bg-gray-100">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SIMPLON</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
    

<body class="h-full">

    <header class="bg-white shadow bcg-img justify-between flex">
        <div class="py-6 pl-4">
            <h1 class="font-bold tracking-tight text-gray-900">SIMPLON</h1>
        </div>
        <a href="${DEFAULT_URL}/public" class="tracking-tight text-gray-900 pr-4 py-6" >Deconnexion</a>

    </header>`;
};

export default Header;
