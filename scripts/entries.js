const entries = [
    {
        id: 1,
        date: new Date("2025-07-06"),
        mood: "Sad",
        concept: "Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve."
    },
    {
        id: 2,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 3,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 4,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 5,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 6,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 7,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    },
    {
        id: 8,
        date: new Date("2025-07-11"),
        mood: "Happy",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg."
    }
]

export const getJournalEntries = () => {
    return entries.map(entry => ({...entry}))
}

export const addNewJournalEntry = (newEntry) => {
    entries.push(newEntry)
    document.dispatchEvent(new CustomEvent("stateChanged"))
}