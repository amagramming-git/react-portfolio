import { useRouter } from "next/router"

export default function Home() {
    const router = useRouter();
    const clickHandler = () => {
        router.push('/')
    }
    return (
        <>
            <h1>Home</h1>
            <button onClick={clickHandler}>アクションに夜画面遷移</button>
        </>
    )
}