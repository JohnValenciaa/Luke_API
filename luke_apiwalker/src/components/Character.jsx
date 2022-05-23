import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useParams, useNavigate } from 'react-router-dom';

const People = (props) => {
        const [data, setData] = useState(null);
        const {category, varId} = useParams();

        const navigate = useNavigate();
            console.log(category)

        useEffect( () => {
            axios.get(`https://swapi.dev/api/${category}/${varId}`)
                .then( res => {
                    console.log(res.data);
                    setData(res.data);
                })
                .catch( err => {
                    console.log(err)
                    console.log("error!!!")
                    navigate("/error")
                })
        }, [category, varId])

        
        return (
            category === 'people'?(
                <div>
                    {
                        data ? (
                            <>
                        <h1>Character:</h1>
                            <h3>Name: {data.name}</h3>
                            <h3>Gender: {data.gender}</h3>
                            <h3>Mass: {data.mass}</h3>
                            <h3>Hair Color: {data.hair_color}</h3>
                        </>
                    ): "loading"}
                </div>
            ):(
                <div>
                    {
                        data ? (
                            <>
                            <h1>Planet:</h1>
                                <h3>Climate: {data.climate}</h3>
                                <h3>Terrain: {data.terrain}</h3>
                                <h3>Surface Water: {data.surface_water}</h3>
                                <h3>Population: {data.population}</h3>
                            </>
                        ) : "loading"}
                </div>
            )
            )
    };

export default People