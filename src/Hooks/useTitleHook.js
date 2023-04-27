import { useEffect } from "react"

const useTitleHook = title =>{
    useEffect(()=>{
        document.title = `${title} - A. Redoan Portfolio`
    },[title])
}

export default useTitleHook;