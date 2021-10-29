const moldQuote = (data) => {
    const shapedData = {
        quote: data.quote,
        image: data.image,
        character: data.character
    }

    return shapedData;
}

export const getQuote = async () => {
    try {
        const res = await fetch('https://thesimpsonsquoteapi.glitch.me/quotes');
        const json = await res.json();
        console.log(json)
        const shapedData = moldQuote(json[0]);

        return shapedData;
    } catch(err) {
        return err
    }
}