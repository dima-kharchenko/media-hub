import axios from "axios";
import Cookies from "js-cookie";

const API_URL = "http://127.0.0.1:8000/api/token/"

export const getTokens = async (username, password) => {
    const response = await axios.post(API_URL,
    {
        username: username,
        password: password,
    });
    return {access_token: response.data.access, refresh_token: response.data.refresh} 
}

export const setTokens = async (access_token, refresh_token) => {
    const inOneHour = new Date(new Date().getTime() + 3600 * 1000)

    Cookies.set('access_token', access_token, { expires: inOneHour })
    Cookies.set('refresh_token', refresh_token)
}

export const refreshAccessToken = async () => {
    const refresh_token = Cookies.get("refresh_token")
    if (!refresh_token) return null

    try {
        const response = await axios.post(`${API_URL}refresh/`, {refresh: refresh_token})
        setTokens(response.data.access, refresh_token)
        return response.data.access
    } catch (error) {
        console.error("Failed to refresh access token", error)
        return null
    }
}
