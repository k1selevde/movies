import {instance} from "./api";

const api_key: string = '4237669ebd35e8010beee2f55fd45546'


type RequestTokenResType = {
    success: boolean,
    expires_at: string,
    request_token: string
}

type ValidateTokenResType = {
    success: boolean,
    expires_at: string,
    request_token: string
}

type SessionIdResType = {
    "success": boolean,
    "session_id": string
}

type AccountDetailsResType = {
    "avatar": {
        "gravatar": {
            "hash": string
        }
    },
    "id": number,
    "iso_639_1": string,
    "iso_3166_1": string,
    "name": string,
    "include_adult": boolean,
    "username": string
}

export const authApi = {
    getRequestToken() {
        return instance.get<RequestTokenResType>(`/authentication/token/new?api_key=${api_key}`)
    },

    validateTokenWithLogin(username: string, password: string, requestToken: string) {
      return instance.post<ValidateTokenResType>(`/authentication/token/validate_with_login?api_key=${api_key}`, {
          body: {
              username,
              password,
              request_token: requestToken
          }
      })
    },

    getSessionId(requestToken: string) {
        return instance.post<SessionIdResType>(`/authentication/session/new?api_key=${api_key}`, {
            body: {
                request_token: requestToken
            }
        }, {})
    },

    getAccountDetails(session_id: string) {
        return instance.post<AccountDetailsResType>(`/account?api_key=${api_key}&session_id=${session_id}`)
    }
}
