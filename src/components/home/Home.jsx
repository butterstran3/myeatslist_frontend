import React, { useEffect, useState } from "react";
import "./home.css";
import { FaTrash } from 'react-icons/fa';

const Home = () => {
    const [restaurants, setRestaurants] = useState([]);

    useEffect(() => {
        fetch("http://localhost:8080/restaurant/getAll")
            .then((res) => res.json())
            .then((result) => {
                setRestaurants(result);
            })
            .catch((error) => {
                console.error("Error fetching data:", error);
            });
    }, []);

    const deleteRestaurant = (id) => {
        fetch(`http://localhost:8080/restaurant/delete/${id}`, {
            method: "DELETE"
        }).then(() => {
            fetch("http://localhost:8080/restaurant/getAll")
                .then((res) => res.json())
                .then((result) => {
                    setRestaurants(result);
                })
        });
    }

    return (
        <div className="home_container">
            <div className="home_title">
                <h1>Restaurant Reviews</h1>
            </div>
            <table className="review_table">
                <thead>
                    <tr>
                        <th>Restaurant Name</th>
                        <th>Cuisine</th>
                        <th>Food</th>
                        <th>Price</th>
                        <th>Vibe</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {restaurants.map((restaurant) => (
                        <tr key={restaurant.id}>
                            <td>{restaurant.name}</td>
                            <td>{restaurant.cuisine}</td>
                            <td>{restaurant.food}</td>
                            <td>{restaurant.price}</td>
                            <td>{restaurant.vibe}</td>
                            <td><button className="delete_btn" onClick={() => deleteRestaurant(restaurant.id)}><FaTrash/></button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default Home;