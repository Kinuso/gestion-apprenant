import {DEFAULT_URL} from "../config/config";

const UserService = {
    async getUser() {
        return await fetch(DEFAULT_URL+"/getAllUsers").then(res => res.json()).then(data => {
            return data;
        }).catch(err => console.log(err));
    }
}

export default UserService;