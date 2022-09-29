const applicationState = {
    entries: []
}

const API = 'http://localhost:8080';

export const getLatestPage = async () => {
    const dataFetch = await fetch(`${API}/entries`);
    const data = await dataFetch.json();
    let i = data.length - 1;
    if (i % 3 === 0) {
        i = ((data.length - 1) / 3) + 1;
    } else if ((i - 1) % 3 === 0) {
        i = ((data.length - 2) / 3) + 1;
    } else {
        i = ((data.length - 3) / 3) + 1;
    }
    latestPage = i;
    page = latestPage;
}

// GLOBAL VARIABLES
let latestPage = 0;
let page = 0;

export const fetchEntries = async () => {
    const dataFetch = await fetch(`${API}/entries?_page=${page}&_limit=3`);
    const data = await dataFetch.json();
    applicationState.entries = data;
    console.log(data);
}

export const getEntries = () => {
    return applicationState.entries.map(entry => ({...entry}));
}

export const pageBack = () => {
    if (page > 1) {
        page -= 1;
    }
}

export const pageForward = () => {
    if (page < latestPage) {
        page += 1;
    }
}

export const getButtonState = () => {
    if (page <= 1) {
        return 'first page';
    } else if (page >= latestPage) {
        return 'last page';
    }
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




// fetch latest entries
// fetch previous 3 entries (and moods and concepts when i refactor those into separate key-value pairs)
// fetch next 3 entries (and moods and concepts when i refactor those into separate key-value pairs)

// global variable for pages should probably be on dataBase file? Bc it is what changes what is fetched

// "If the JSON response does not include a link to the next page, you have reached the end of the results.
// If there is no link to the previous page, you have reached the beginning of the results."


// filters: for each function that invokes fetch calls, maybe they need a conditional saying "if [filter].value = blank (need 1 conditional for possible filter), then
// fetch the next page normally"