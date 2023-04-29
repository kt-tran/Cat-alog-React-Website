//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
import { useState, useEffect } from 'react';


const API_KEY = 'live_lrShtLyQ7EGPrE3YexNLwARt62UHXJmKhgYd8HPHFwtR1mP7QJDqsGjj0yTSGZ70';

// export function useTestAPI() {
//     const [loading, setLoading] = useState(true);
//     const [image, setImage] = useState([]);
//     const [error, setError] = useState(null);
//     useEffect(() => {
//         (async () => {
//             try {
//                 setImage(await testAPI());
//                 setLoading(false);
//             } catch (err) {
//                 setError(error);
//                 setLoading(false);
//             }
//         })();
//     }, []);
//     return {
//         loading,
//         image,
//         error,
//     };
// }


//gets all of the cats from the API
export async function getBreedList() {
    const url = `https://api.thecatapi.com/v1/breeds`;
    let res = await fetch(url);
    let catList = await res.json();
    return catList;
}