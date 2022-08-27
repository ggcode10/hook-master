import { useState } from 'react';

const UseState = () => {
    const [names, setNames] = useState(['이정후']);
    const [value, setValue] = useState('');

    const handleChange = (e) => {
        setValue(e.target.value)
        // console.log(value)
    }

    const handleClick = () => {
        setNames((prevState) => {
            console.log('prevState :', prevState)
            return ([value, ...prevState])
        })
    }
    return (
        <div>
            <input type="text" value={value} onChange={handleChange} />
            <button onClick={handleClick}>Upload</button>
            {names.map((name, idx) => {
                return <p key={idx}>{name}</p>
            })}
        </div>
    )
}

export default UseState;