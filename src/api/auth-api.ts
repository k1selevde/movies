import {instance} from "./api";

const api_key: string = ''


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

    validateTokenWithLogin<ValidateTokenResType>(username: string, password: string, requestToken: string) {
      return instance.post(`/authentication/token/validate_with_login?api_key=${api_key}`, {
          body: {
              username,
              password,
              request_token: requestToken
          }
      })
    },

    getSessionId<SessionIdResType>(requestToken: string) {
        return instance.post(`/authentication/session/new?api_key=${api_key}`, {
            body: {
                request_token: requestToken
            }
        }, {})
    },

    getAccountDetails<AccountDetailsResType>(session_id: string) {
        return instance.post(`/account?api_key=${api_key}&session_id=${session_id}`)
    }
}
