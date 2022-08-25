import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();

let x = entries.length - 1;
let latestEntry = `
    <p class="entry">
        <div class="entryNumAndMood">
            <span class="entryNumber"><b>Entry #${entries[x].id}</b></span>
            <span class="mood">Mood: ${entries[x].mood}</span>
        </div>
        <div class="dateAndConcept">
            <span class="date">${entries[x].date.toLocaleString("en-US", {
                weekday: "short",
                month: "short",
                day: "numeric",
                year: "numeric"})
            }</span>
            <span class="concept">Concepts: ${entries[x].concept}</span>
        </div>
        <p class="entryText">Entry: ${entries[x].entry}</p>
    </p>`
document.getElementById('entries').innerHTML = latestEntry;

const returnEntries1to3 = (array) => {
    let HTML = '';
    for (let i = 0; i < 3; i++) {
        HTML += `
        <p class="entry">
            <div class="entryNumAndMood">
                <span class="entryNumber"><b>Entry #${array[i].id}</b></span>
                <span class="mood">Mood: ${array[i].mood}</span>
            </div>
            <div class="dateAndConcept">
                <span class="date">${array[i].date.toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric"})
                }</span>
                <span class="concept">Concepts: ${array[i].concept}</span>
            </div>
            <p class="entryText">Entry: ${array[i].entry}</p>
        </p>`
    }
    document.getElementById('entries').innerHTML = HTML;
}

const returnEntries4to6 = (array) => {
    let HTML = '';
    for (let i = 3; i < 6; i++) {
        HTML += `
        <p class="entry">
            <div class="entryNumAndMood">
                <span class="entryNumber"><b>Entry #${array[i].id}</b></span>
                <span class="mood">Mood: ${array[i].mood}</span>
            </div>
            <div class="dateAndConcept">
                <span class="date">${array[i].date.toLocaleString("en-US", {
                    weekday: "short",
                    month: "short",
                    day: "numeric",
                    year: "numeric"})
                }</span>
                <span class="concept">Concepts: ${array[i].concept}</span>
            </div>
            <p class="entryText">Entry: ${array[i].entry}</p>
        </p>`
    }
    document.getElementById('entries').innerHTML = HTML;
}

document.getElementById('backButton').onclick = function() {returnEntries1to3(entries)};
document.getElementById('forwardButton').onclick = function() {returnEntries4to6(entries)};



// maybe there's a way to know which entries are displayed so can write function to display "next" or "previous" entries
// get most recent entry(ies) to display on loading of page
// later add if statement to highlight specific moods with corresponding colors
// later later: think about creating different arrays with .filter to ...
// ... have filter buttons that call function to show only certain concepts and moods
// later later later: can maybe add "favorite: (boolean)" key-value pair to each entry object ...
// ... default is false. maybe next to each entry displayed a star button appears when hover ...
// ... and this somehow lets you mark as favorite. after that, favorite can be another filter option