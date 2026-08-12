import { Client, Account, ID } from "appwrite";
import envConfig from "../config/envConfig";

class AuthService {
    client = new Client();
    account;
    constructor() {
        this.client
            .setEndpoint(envConfig.appwrite_endpoint)
            .setProject(envConfig.appwrite_projectId)
        this.account = new Account(this.client)
    };

    checkInternetStatus() {
        console.log("navigator.onLine", navigator.onLine);
        return navigator.onLine
    }

    //Create New Account
    async createAccount({ email, password, name }) {
        try {
            if (this.checkInternetStatus()) {
                const res =  await this.account.create(ID.unique(), email, password, name)
                if (res){
                    console.log("Cacc Res: ", res);
                    const loginRes = await this.login({email, password});
                    console.log("loginRes : ", loginRes);
                    return loginRes;
                }
                return res;
            }
            else {
                const error = new Error("No Internet Connection");
                error.code = "ERR_INTERNET_DISCONNECTED";
                throw error;
            }
        }
        catch (error) {
            if (error.code === "ERR_INTERNET_DISCONNECTED") throw "ERR_INTERNET_DISCONNECTED";
            if (error.code === 409) throw "Email ALready Exists, Consider Loggin";
        }
    }

    //Get Current User Logged In
    async getCurrentUser() {
        try {
            const currentUser = await this.account.get();
            console.log(currentUser)
            return currentUser;
        } catch (error) {
            console.log(error);
            throw error;
        }
    }

    //Create New Session
    async login({ email, password }) {
        try {
            await this.logout();
            return await this.account.createEmailPasswordSession(email, password);
        } catch (error) {
            console.log(error.code);
            throw error;
        }
    }


    //Delete Session (Logout)
    async logout() {
        try {
            return await this.account.deleteSession("current");
        } catch {
            false;
        }
    }
}

const authService = new AuthService();
export default authService;