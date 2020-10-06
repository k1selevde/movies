import {Dispatch} from "redux";
import {authApi} from "../../api/auth-api";

export const SET_ACCOUNT_DETAILS = "AUTH/SET_ACCOUNT_DETAILS"


export type AccountDetailsType = {
    id: string,
    session_id?: string
}
export function setAccountDetails(payload: AccountDetailsType) {
    return {
        type: SET_ACCOUNT_DETAILS,
        payload
    }
}


export function authMe() {
    return async (distatch: Dispatch) => {
        await authApi.getRequestToken()
            .then(data => {
                console.log(`AXIOS!!! : token ${data.request_token}`)
                let password = process.env.PASSWORD
                let username = process.env.USERNAME
                let token = data.request_token
                authApi.validateTokenWithLogin(password,username,token)
                    .then(data => {
                        console.log(`AXIOS222 : ${data.request_token}`)
                        let token = data.request_token
                        authApi.getSessionId(token)
                            .then(data => {
                                console.log(`AXIOS333 session id: ${data.session_id}`)
                                let sessionId = data.session_id
                                authApi.getAccountDetails(sessionId)
                                    .then(data => {
                                        console.log(`AXIOS444 id and name: ${data.id} ${data.name}`)
                                        let id = String(data.id)
                                        setAccountDetails({id})
                                    })
                            })
                    })
            })
    }
}



