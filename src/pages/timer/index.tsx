import { useEffect, useReducer, useState } from "react"

export default function TodoPage() {
    const [time, dispatch] = useReducer((prev: number, action: string) => {
        switch (action) {
            case "oneSecPass":
                return prev + 1;
            case "reset":
                return 0;
            default:
                throw new Error('不明なactionです。')
        }
    }, 0)
    const [checked, setChecked] = useState(false);

    //timer
    useEffect(() => {
        const id = window.setInterval(() => {
            dispatch("oneSecPass");
        }, 1000);
        return () => window.clearInterval(id);
    }, []);

    //alert
    useEffect(() => {
        if (checked) {
            window.alert('checked')
        }
    }, [checked])

    return (
        <>
            <p>Time: {time}</p>
            <p>alertChackBox</p>
            <input type="checkbox" onClick={() => setChecked((checked) => !checked)} />
        </>
    );
}