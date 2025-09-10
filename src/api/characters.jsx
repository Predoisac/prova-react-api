import api from "./api"

export const GetCharacters = async () => {
    const response = await api.get('/characters')

    if (response.status != 200) {
        return []
    }
    return response.data.items
}
