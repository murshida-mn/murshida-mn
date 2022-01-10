interface Iprops {
    value: string,
    onChange: (val: string) => void,
    label: string
}

const Field = ({ label, value, onChange }: Iprops) => {
    return (
        <div>
            <label htmlFor="text">{label}</label>
            <input type="text" name="text" value={value} onChange={(e) => onChange(e.target.value)} />
        </div>
    )
}

export default Field
