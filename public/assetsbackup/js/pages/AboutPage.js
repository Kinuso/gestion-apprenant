import UserService from "../services/UserService";

const AboutPage = () => { // ou tu peux le faire en fonction fléchée aussi

    //ici tu peux faire des traitement de données ect...
    let userInformation = [];

    const getUserInformation = async () => {
        userInformation = await UserService.getUser();
    }

    getUserInformation().then(() => {
        console.log("User Information: ", userInformation);
        const aboutPage = document.getElementById('about-page');
        const div = document.createElement('div');
        div.innerHTML = JSON.stringify(userInformation);
        aboutPage.appendChild(div);
    });

    return `<div id="about-page">About Page <a href="/public/" class="nav_link">Home</a> </div>`;
}


export default AboutPage;
