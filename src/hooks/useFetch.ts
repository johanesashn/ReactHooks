import { useEffect, useState } from "react";
import api from "../services/api";

type User = {
    id: number, 
    name: string
}

export default function useFetch(url: string) {
    const [data, setData] = useState<User[] | null>(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        let isMounted = true;

        async function fetchData() {
            const res = await api.get(url)

            if (isMounted) {
                setData(res.data)
                setLoading(false)
            }
        }
        
        if (url) fetchData()

        return () => {
            isMounted = false
        }
    }, [url])

    return { data, loading }
}