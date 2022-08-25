import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();

let x = entries.length - 1;
if (x % 3 === 0) {
    x = entries.length - 1;
} else if ((x - 1) % 3 === 0) {
    x = entries.length - 2;
} else {
    x = entries.length - 3;
}

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

const returnEntries1to3 = () => {
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

const returnEntries4to6 = () => {
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

document.getElementById('backButton').onclick = function() {returnEntries1to3()};
document.getElementById('forwardButton').onclick = function() {returnEntries4to6(entries)};



// need to figure out loop to display most recent "group" of entries, bc it only shows #10 right now
// later add if statement to highlight specific moods with corresponding colors
// later later: think about creating different arrays with .filter to ...
// ... have filter buttons that call function to show only certain concepts and moods
// later later later: can maybe add "favorite: (boolean)" key-value pair to each entry object ...
// ... default is false. maybe next to each entry displayed a star button appears when hover ...
// ... and this somehow lets you mark as favorite. after that, favorite can be another filter option