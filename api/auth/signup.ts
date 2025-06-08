import { apiClient } from "../apiClient"
import { apiEndPoints } from "../apiEndPoints"

export interface SignUpProps{
    loginId:string
    nickname:string
    password:string
    preferredArea?:string
    email:string
}

export const fetchSignUp = async({loginId, nickname, password, preferredArea, email } : SignUpProps) => {
    try{
        const res = await apiClient.post(apiEndPoints.AUTH.SIGN_UP,{
            loginId,
            nickname,
            password,
            preferredArea,
            email,
        })
        return res.data
    }catch(error){
        console.error('회원가입 실패', error)
    }
}