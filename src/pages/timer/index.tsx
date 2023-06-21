import { useEffect, useState } from "react"

export default function TodoPage() {

    const [time, setTime] = useState(0);
    const [checked, setChecked] = useState(false);

    //timer
    useEffect(() => {
        const id = window.setInterval(() => {
            setTime(prev => prev + 1);
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