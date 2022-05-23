import React, {useState} from 'react'
import { useNavigate } from 'react-router-dom'


const Form = (props) => {
        const [varId, setVarId] = useState(1);
        const [category, setCategory] = useState('people');
    
    const navigate = useNavigate();

    const submitHandler = (e) => {
        e.preventDefault();
        console.log(varId, category);
        navigate("/" + category + "/" + varId);
    }

    return (
    <>
    <h1>Luke Api Walker!</h1>
            <form onSubmit={submitHandler}>
                <div>
                    <div>
                        <label>
                            <p>Enter in a Name and an ID!</p>
                        </label>
                        <select value={category} onChange={e => setCategory(e.target.value)}>
                            <option value='people'>People: </option>)
                            <option value='planets'>Planets:</option>)
                        </select>
                    </div>
                    <input type='number' value={varId} onChange ={ (e) => setVarId(e.target.value)}></input>
                </div>
            </form>
    </>
    )
}

export default Form