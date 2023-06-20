import { useReducer } from "react"

export default function Hooks() {
    const calcOptions = ["+", "-", "*", "/"] as const;
    type CalcOptions = typeof calcOptions[number];
    type Value = {
        valueA: number,
        valueB: number,
        calcOption: CalcOptions,
        result: number
    }
    type DispatchProp = {
        action: string
        payload: {
            name: string,
            value: any
        }
    }
    const initDispValues: Value = { valueA: 0, valueB: 0, calcOption: "+", result: 0 }
    const [disp, dispatch] = useReducer((prev: Value, dispatchProp: DispatchProp) => {
        switch (dispatchProp.action) {
            case "changeValue":
                return { ...prev, [dispatchProp.payload.name]: Number(dispatchProp.payload.value) };
            case "changeCalcOption":
                return { ...prev, calcOption: dispatchProp.payload.value };
            case "calc":
                switch (prev.calcOption) {
                    case "+":
                        return { ...prev, result: prev.valueA + prev.valueB };
                    case "-":
                        return { ...prev, result: prev.valueA - prev.valueB };
                    case "*":
                        return { ...prev, result: prev.valueA * prev.valueB };
                    case "/":
                        return { ...prev, result: prev.valueA / prev.valueB };
                    default:
                        throw new Error('不明なcalcOptionです。')
                }
            default:
                throw new Error('不明なactionです。')
        }
    }, initDispValues);
    const onChangeValue: React.ChangeEventHandler<HTMLInputElement> = (e) =>
        dispatch({ action: "changeValue", payload: { name: e.target.name, value: Number(e.target.value) } })
    const onChangeSelected: React.ChangeEventHandler<HTMLSelectElement> = (e) =>
        dispatch({ action: "changeCalcOption", payload: { name: "", value: e.target.value } })
    const calcButtonAction: React.MouseEventHandler<HTMLButtonElement> = (e) =>
        dispatch({ action: "calc", payload: { name: "", value: 0 } })
    return (
        <>
            <div>
                <input type="number" name="valueA" value={disp.valueA} onChange={onChangeValue} />
                <input type="number" name="valueB" value={disp.valueB} onChange={onChangeValue} />
                <select
                    value={disp.calcOption}
                    onChange={onChangeSelected}
                >
                    {calcOptions.map((calc) => (
                        <option key={calc} value={calc}>
                            {calc}
                        </option>
                    ))}
                </select>
                <button onClick={calcButtonAction}>計算</button>
                <p>{disp.result}</p>
            </div >
        </>
    );
}