import {getJournalEntries, addNewJournalEntry} from './entries.js';


// const displayAllEntries = () => {
//     const entries = getJournalEntries();
//     let HTML = '';
//     for (const entry of entries) {
//         HTML += `
//         <p class="entry">
//                 <div class="entryNumAndMood">
//                 <span class="entryNumber"><b>Entry #${entry.id}</b></span>
//                 <span class="mood">Mood: ${entry.mood}</span>
//                 </div>
//                 <div class="dateAndConcept">
//                 <span class="date">${entry.date.toLocaleString("en-US", {
//                     weekday: "short",
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric"})
//                     }</span>
//                     <span class="concept">Concepts: ${entry.concept}</span>
//                 </div>
//                 <p class="entryText">Entry: ${entry.entry}</p>
//             </p>`
//     }
//     document.getElementById('entries').innerHTML = HTML;
// }
// displayAllEntries()


const getNewEntryId = () => {
    const entries = getJournalEntries()
    let highestEntryId = 0
      if(entries.length > 0) {
        highestEntryId = entries.sort((a, b) => b.id - a.id)[0].id
      }
      return highestEntryId + 1
}

// SUBMIT BUTTON --> ADD NEW ENTRY
document.addEventListener('click', (e) => {
    // e.preventDefault()  --- when this isn't commented out, the date input doesn't work
    if (e.target.id === 'submitButton') {
        const newId = getNewEntryId()
        const newDate = document.querySelector('input[name=entryDate]')?.value;
        const newMood = document.getElementById('mood')?.value;
        const newConcept = document.getElementById('entryForm_concepts')?.value;
        const newEntry = document.getElementById('entryForm_journalEntry')?.value;
        const newJournalEntry = {
            id: newId,
            date: new Date(newDate),
            mood: newMood,
            concept: newConcept,
            entry: newEntry
        }
        addNewJournalEntry(newJournalEntry)
        // displayAllEntries()
    }
})

document.addEventListener("stateChanged", (e) => {
    displayLatestEntries()
  })

const getLatestIndex = () => {
    const entries = getJournalEntries()
    let x = entries.length - 1;
    if (x % 3 === 0) {
        x = entries.length - 1;
    } else if ((x - 1) % 3 === 0) {
        x = entries.length - 2;
    } else {
        x = entries.length - 3;
    }
    return x;
}

// GLOBAL VARIABLE
let x = getLatestIndex()

// DISPLAY LATEST ENTRIES
const displayLatestEntries = () => {
    const entries = getJournalEntries()
    let latestEntries = []
    for (let i = x; i < entries.length; i++) {
        latestEntries.push(entries[i]);
    }
    let HTML = '';
    for (const entry of latestEntries) {
            HTML += `
                <p class="entry">
                    <div class="entryNumAndMood">
                        <span class="entryNumber"><b>Entry #${entry.id}</b></span>
                        <span class="mood">Mood: ${entry.mood}</span>
                    </div>
                    <div class="dateAndConcept">
                        <span class="date">${entry.date.toLocaleString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                        year: "numeric"})
                    }</span>
                    <span class="concept">Concepts: ${entry.concept}</span>
                </div>
                <p class="entryText">Entry: ${entry.entry}</p>
            </p>`
    }
    document.getElementById('entries').innerHTML = HTML;
}
displayLatestEntries()


// PAGE BACK (3 ENTRIES)
const returnEntries1to3 = () => {
    const entries = getJournalEntries()
    if (x !== 0) {
        let HTML = '';
        x -= 3;
        let backArray = [entries[x], entries[x + 1], entries[x + 2]];
        for (const entry of backArray) {
            HTML += `
            <p class="entry">
                <div class="entryNumAndMood">
                <span class="entryNumber"><b>Entry #${entry.id}</b></span>
                <span class="mood">Mood: ${entry.mood}</span>
                </div>
                <div class="dateAndConcept">
                    <span class="date">${entry.date.toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric"})
                    }</span>
                    <span class="concept">Concepts: ${entry.concept}</span>
                </div>
                <p class="entryText">Entry: ${entry.entry}</p>
            </p>`
        }
        document.getElementById('entries').innerHTML = HTML;
    }
}

// PAGE FORWARD (3 ENTRIES)
const returnEntries4to6 = () => {
    const entries = getJournalEntries()
    if (x !== getLatestIndex()) {
        let HTML = '';
        x += 3;
        let forwardArray = [entries[x], entries[x + 1], entries[x + 2]];
        for (const entry of forwardArray) {
            HTML += `
            <p class="entry">
                <div class="entryNumAndMood">
                    <span class="entryNumber"><b>Entry #${entry.id}</b></span>
                    <span class="mood">Mood: ${entry.mood}</span>
                </div>
                <div class="dateAndConcept">
                    <span class="date">${entry.date.toLocaleString("en-US", {
                        weekday: "short",
                        month: "short",
                        day: "numeric",
                        year: "numeric"})
                    }</span>
                    <span class="concept">Concepts: ${entry.concept}</span>
                </div>
                <p class="entryText">Entry: ${entry.entry}</p>
            </p>`
        }
        document.getElementById('entries').innerHTML = HTML;
    }
}

document.getElementById('backButton').onclick = function() {returnEntries1to3()};
document.getElementById('forwardButton').onclick = function() {returnEntries4to6(entries)};



// need to figure out loop to display most recent "group" of entries, bc it only shows #10 right now
// later add if statement to highlight specific moods with corresponding colors
// later later: think about creating different arrays with .filter to ...
// ... have filter buttons that call function to show only certain concepts and moods
// later later later: can maybe add "favorite: (boolean)" key-value pair to each entry object ...
// ... default is false. maybe next to each entry displayed a star button appears when hover ...
// ... and this somehow lets you mark as favorite. after that, favorite can be another filter option