// export default function Login() {
//     return <form action="/auth/login" method="post">
//         <label htmlFor="email">Email</label>
//         <input name="email" />
//         <label htmlFor="password">Password</label>
//         <input name="password" type="password" />
//         <button>Sign In</button>
//     </form>
// }

'use client'

import { supabase } from "@/lib/supabase"
import { useRouter } from "next/router"

import { useState } from "react"

export default function Login() {
    const [data, setData] = useState<{
        email: string,
        password: string
    }>({
        email: "",
        password: ""
    })

    const router = useRouter();

    const login = async () => {
        try {
            let { data: dataUser, error } = await supabase
                .auth
                .signInWithPassword({
                    email: data.email,
                    password: data.password
                })
            if (dataUser) {
                router.replace(router.asPath)
            }
        } catch (error) {
            console.log(error)
        }
    }
    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setData((prev: any) => ({
            ...prev,
            [name]: value
        }))
    }
    return (
        <div className="container mx-auto w-[400px] grid gap-4">
            <div className="grid">
                <label >Email</label>
                <input type="text" name="email" value={data?.email} onChange={handleChange} />
            </div>
            <div className="grid">
                <label >Password</label>
                <input type="password" name="password" value={data?.password} onChange={handleChange} />
            </div>
        </div>
    )
}