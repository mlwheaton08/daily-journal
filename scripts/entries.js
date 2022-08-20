const entries = [
    {
        id: 1,
        date: "07/06/2025",
        concept: "Flexbox",
        entry: "I tried to have an element in my Flexbox layout also be another Flexbox layout. It hurt my brain. I hate Steve.",
        mood: "Sad"
    },
    {
        id: 2,
        date: "07/11/2025",
        concept: "HTML",
        entry: "HTML is easy. I'm so dang good at it omg omg.",
        mood: "Happy"
    },
    {
        id: 3,
        date: "07/14/2025",
        concept: "CSS",
        entry: "CSS can be fun sometimes! Today was one of those times.",
        mood: "Sad"
    },
    {
        id: 4,
        date: "08/16/2025",
        concept: "Javascript",
        entry: "Brain hurt. What is function? What is array?",
        mood: "Neutral"
    },
    {
        id: 5,
        date: "08/26/2025",
        concept: "Javascript",
        entry: "Getting better but brain still hurt.",
        mood: "Neutral"
    },
    {
        id: 6,
        date: "08/28/2025",
        concept: "Javascript",
        entry: "I'm learning! I solved something! I can iterate! I can do it!",
        mood: "Motivated"
    },
    {
        id: 7,
        date: "08/30/2025",
        concept: "Javascript",
        entry: "Got stuck today. Javascript hurts me sometimes.",
        mood: "Meh"
    },
    {
        id: 7,
        date: "08/30/2025",
        concept: "Javascript",
        entry: "Got stuck today. Javascript hurts me sometimes.",
        mood: "Meh"
    },
    {
        id: 7,
        date: "08/30/2025",
        concept: "Javascript",
        entry: "Got stuck today. Javascript hurts me sometimes.",
        mood: "Meh"
    },
    {
        id: 7,
        date: "08/30/2025",
        concept: "Javascript",
        entry: "Got stuck today. Javascript hurts me sometimes.",
        mood: "Meh"
    },
    {
        id: 7,
        date: "08/30/2025",
        concept: "Javascript",
        entry: "Got stuck today. Javascript hurts me sometimes.",
        mood: "Meh"
    }
]


export const getJournalEntries = () => {
    const copyOfEntries = entries.map(entry => ({...entry}));
    return copyOfEntries;
}

console.log(getJournalEntries())