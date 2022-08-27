import { useState, useEffect } from 'react';

const UseEffect = () => {
    const [count, setCount] = useState(1);
    const [name, setName] = useState("");

    const handleCountUpdate = () => {
        setCount(count + 1);
    }
    const handleInputChange = (e) => {
        setName(e.target.value)
    }

    useEffect(() => {
        console.log('렌더링되니')
    }, [])

    return (
        <div>
            <button onClick={handleCountUpdate}>Upload</button>
            <span>count: {count}</span>
            <input type="text" value={name} onChange={handleInputChange}></input>
            <span>name: {name}</span>
        </div>
    )
}

export default UseEffect