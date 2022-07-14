import React, { useState} from "react";

const App = () => {
    const [name, setName] = useState("mkl");
    const handleChange=(e)=> {
        setName(e.target.value)
    }
    return (

        <div>
            <label>Nom :</label>
            <input type="text" value={name} onChange={handleChange} />
            <h1>{name}</h1>
        </div>

    )

};

export default App
