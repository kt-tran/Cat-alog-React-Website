//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t
import { useState, useEffect } from 'react';


const API_KEY = 'live_lrShtLyQ7EGPrE3YexNLwARt62UHXJmKhgYd8HPHFwtR1mP7QJDqsGjj0yTSGZ70';
const testCat = "Abyssinian";

// export function GetCat(testCat) {
//     const { loading, list, error } = HandleGetList();
//     if (list.name === testCat) {
//         let cat = 
//     }

// }


export async function GetCatImageList(catID) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catID}&limit=10`;
    let res = await fetch(url);
    let catImageObj = await res.json();
    return catImageObj;
}

export async function GetCatImage(catID) {
    const url = `https://api.thecatapi.com/v1/images/search?breed_ids=${catID}`;
    let res = await fetch(url);
    let catImageObj = await res.json();
    return catImageObj;
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


//functions for the cat facts in footer
export function HandleGetFact() {
    const [loading, setLoading] = useState(true);
    const [response, setResponse] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setResponse(await GetRandomCatFact());
                setLoading(false);
            } catch (error) {
                setError(error);
                setLoading(false);
            }
        })();
    }, []);
    return {
        loading,
        response,
        error,
    };
}

export async function GetRandomCatFact() {
    const url = `https://catfact.ninja/fact`;
    let res = await fetch(url);
    let data = await res.json();
    return data;
}