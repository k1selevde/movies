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




