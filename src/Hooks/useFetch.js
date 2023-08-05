import { useState } from "react"
import { myAxios } from "../servises/axios/configs/myAxios"
import { useEffect } from "react"

export const useFetch = (url) => {
    const [data, setData] = useState(null)
    const [error, setError] = useState(null)
    const [loading, setLoading] = useState(true)


    const getData = async () => {
        setLoading(true)
        try {

            const response = await myAxios(url)
            setData(Object.entries(response.data))
            setLoading(false)

        } catch (error) {
            setError(error)
            setLoading(false)
        }
    }


    useEffect(() => {
        getData()
    }, [])

    return [data, loading, error]
}