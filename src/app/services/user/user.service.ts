import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class UserService {
    saveUserCredentials(email: string, password: string) {
        // save user in localStorage
    }

    quitUserCredentials() {
        // quit user credentials of localStorage
    }
}