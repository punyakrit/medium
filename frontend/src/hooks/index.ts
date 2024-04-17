import axios from "axios"
import { useEffect, useState } from "react"
import { BACKEND_URL } from "../../config"

export interface Blog{
    "title": string,
    "content":string,
    "id": number,
    "author": {
        "username": string
    }
}

    export const useBlog = ({id}:any) => {
        const [loading, setLoading] = useState(true)
    const [blog , setBlog] = useState<Blog[]>([])

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get(`${BACKEND_URL}/api/v1/blog/${id}`,
        {
            headers:{
                Authorization: token
            }
        }
        )
        .then(res => {
            setBlog(res.data.blog)
            setLoading(false)
        })
    },[id])

    return {
        loading,
        blog
    }
    }



export const useBlogs = () =>{
    const [loading, setLoading] = useState(true)
    const [blogs , setBlogs] = useState<Blog[]>([])

    useEffect(()=>{
        const token = localStorage.getItem('token')
        axios.get(`${BACKEND_URL}/api/v1/blog/bulk`,
        {
            headers:{
                Authorization: token
            }
        }
        )
        .then(res => {
            setBlogs(res.data.blog)
            setLoading(false)
        })
    },[])

    return {
        loading,
        blogs
    }
}