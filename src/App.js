import React, { useState, useEffect } from 'react';
import './App.css'; 


export default function ReactChallenge() {
    
    const [photo, setPhoto] = useState([]);
    
    // Array de nombres de razas de gatos
    const catsArr = ["abyssinian", "siamese", "asian", "balinese"];

    // Función asincrónica para obtener un gato aleatorio por nombre
    const getRandomCat = async (name) => {
        try {
            const apiKey = 'DMbH8e6gKhpUPfzYXoDhFw==ugJdOSMtRPDzh6C1'; 
            const response = await fetch(`https://api.api-ninjas.com/v1/cats?name=${name}`, {
                method: 'GET',
                headers: {
                    'X-Api-Key': apiKey,
                    'Content-Type': 'application/json'
                }
            });
            const data = await response.json();
            setPhoto(data); // Actualiza el estado photo
        } catch (error) {
            console.error('Error al obtener datos:', error);
        }
    }


    // manejar el evento 
    const handleNextFact = () => {
        const randomCat = catsArr[Math.floor(Math.random() * catsArr.length)]; // Elige un nombre de raza de gato aleatorio
        getRandomCat(randomCat); 
    }
    console.log(photo)
    // Efecto que se ejecuta al cargar el componente para obtener un gato 
    useEffect(() => {
        getRandomCat('abyssinian'); 
    }, []); 

    
    return (
        <div className="Container">
            <div className="Cat">
                <h1>{photo.map(e => e.name)}</h1>
                <p>{photo.map(e => e.origin)}</p>
                <img style={{width: 200, height: 100}} src={photo.map(e => e.image_link)} alt={photo.title} />
                <br></br>
                <button className="button" onClick={handleNextFact}>Next Fact</button>
            </div>
        </div>
    )
}
