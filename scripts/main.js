import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();

let entriesHTML = '';

const returnEntries = (array) => {
    for (const entry of array) {
        entriesHTML += `
        <p class="entry">
        <span class="entryNumber">Entry #${entry.id}</span>
        <span class="date">Date: ${entry.date}</span>
        <span class="mood">Mood: ${entry.mood}</span>
        <span class="concespant">Concepts: ${entry.concept}</span>
        <span class="entryText">Entry: ${entry.entry}</span>
        </p>`
    }
}
returnEntries(entries);

document.getElementById('entries').innerHTML = entriesHTML;


// maybe do buttons at top right and left of notebook for "entries 1-5" and
// "entries 6-10" to kind of "turn" pages to nevigate entries, as opposed to
// the scrolling thing that is proving to be quite difficult.
// also remember reverse order would be best, so most recent entry is at top