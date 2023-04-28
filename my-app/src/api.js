//https://developers.thecatapi.com/view-account/ylX4blBYT9FaoVd6OhvR?report=bOoHBz-8t

export function useNewsArticles(search) {
    const [loading, setLoading] = useState(true);
    const [headlines, setHeadlines] = useState([]);
    const [error, setError] = useState(null);
    useEffect(() => {
        (async () => {
            try {
                setHeadlines(await getHeadlines(search));
                setLoading(false);
            } catch (err) {
                setError(error);
                setLoading(false);
            }
        })();
    }, [search]);
    return {
        loading,
        headlines,
        error,
    };
}

async function getHeadlines(search) {
    const url =
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${API_KEY}&q=${search}
    `;
    let res = await fetch(url);
    let data = await res.json();
    let articles = data.articles; // get just the list of articles
    return articles.map((article) => ({
        title: article.title,
        url: article.url,
    }));
}