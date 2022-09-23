const applicationState = {
    entries: []
}

const API = 'http://localhost:8080';

export const fetchEntries = async () => {
    const dataFetch = await fetch(`${API}/entries`);
    const data = await dataFetch.json();
    applicationState.entries = data;
}

export const getEntries = () => {
    return applicationState.entries.map(entry => ({...entry}));
}

export const sendNewEntry = async (newEntry) => {
    const fetchOptions = {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(newEntry)
    }
    
    const response = await fetch(`${API}/entries`, fetchOptions);
    const responseJson = await response.json();
    document.dispatchEvent(new CustomEvent("stateChanged"));
    return responseJson;
}

export const deleteEntry = async (id) => {
    await fetch(`${API}/entries/${id}`, {method: "DELETE"});
    document.dispatchEvent(new CustomEvent("stateChanged"));
}