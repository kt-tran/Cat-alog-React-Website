//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
import { useState, useEffect } from 'react';


const API_KEY = 'live_lrShtLyQ7EGPrE3YexNLwARt62UHXJmKhgYd8HPHFwtR1mP7QJDqsGjj0yTSGZ70';
const testCat = "Abyssinian";

export function GetCat(testCat) {
    const { loading, list, error } = HandleGetList();
    if (list.name === "testCat") {
    }

}

export function HandleGetList() {
    const [loading, setLoading] = useState(true);
    const [list, setList] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setList(await GetBreedList());
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();
    }, []);
    return {
        loading,
        list,
        error,
    };
}


//gets all of the cats from the API
export async function GetBreedList() {
    const url = `https://api.thecatapi.com/v1/breeds`;
    let res = await fetch(url);
    let list = await res.json();
    return list;
}