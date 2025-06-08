import axios, {CreateAxiosDefaults} from "axios"

export const BASE_URL=process.env.NEXT_PUBLIC_API_URL
export const baseConfig : CreateAxiosDefaults = {
    baseURL:BASE_URL,
    headers:{
        'Content-Type':'application/json',
    },
}

export const apiClient = axios.create(baseConfig)