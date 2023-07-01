import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./form.css";

const Form = () => {

    const [name, setName] = useState("");
    const [cuisine, setCuisine] = useState("");
    const [food, setFood] = useState(0);
    const [price, setPrice] = useState(0);
    const [vibe, setVibe] = useState(0);
    let navigate = useNavigate(); 

    const handleSubmit = (e) => {
        e.preventDefault();
        const restaurant = {name, cuisine, food, price, vibe};
        console.log(restaurant);
        fetch("http://localhost:8080/restaurant/add",{
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(restaurant)
        }).then(() => {
            navigate("/");
        });
    }

    return (
        <div className="form_container">
            <div className="form_heading">
                <h1>JOIN THE COMMUNITY</h1>
                <h3>Post a review below</h3>
            </div>
            <div className="review">
                <form className="form">
                    <label>Restaurant Name:</label>
                    <input className="name_input" id="name_input" type="text" name="name" placeholder="Enter Restaurant Name" value={name} onChange={(e) => setName(e.target.value)}/>
                    <label>Cuisine Type:</label>
                    <input className="cuisine_input" id="cuisine_input" type="text" name="cuisine" placeholder="Enter Cuisine Type" value={cuisine} onChange={(e) => setCuisine(e.target.value)}/>
                    <label>Food Rating (0 - 10):</label>
                    <input className="food_rating" id="food" type="number" name="food" min="0" max="10" value={food} onChange={(e) => setFood(e.target.value)}/>
                    <label>Price Rating (0 - 10):</label>
                    <input className="price_rating" id="price" type="number" name="price" min="0" max="10" value={price} onChange={(e) => setPrice(e.target.value)}/>
                    <label>Vibe Rating (0 - 10):</label>
                    <input className="vibe_rating" id="vibe" type="number" name="vibe" min="0" max="10" value={vibe} onChange={(e) => setVibe(e.target.value)}/>
                    <button type='submit' className='btn' onClick={handleSubmit}>Submit</button>    
                </form>
            </div>
        </div>
    )
}

export default Form;