import { Injectable, inject } from "@angular/core"
import { UserService } from "src/app/services/user/user.service"

interface UserState {
    logging: boolean
    creatingUser: boolean
}

const initState: UserState = {
    logging: false,
    creatingUser: false
}

const state: UserState = {
    logging: false,
    creatingUser: false
}

@Injectable({
    providedIn: 'root'
})
export class UserFacade {
    static readonly state: UserState = initState
    private userService = inject(UserService)

    private constructor() {}

    // actions
    static logginUser() {
        UserFacade.state.logging = true
        // UserFacade.user
    }
}