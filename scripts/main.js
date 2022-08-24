import {getJournalEntries} from './entries.js';
const entries = getJournalEntries();


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
                <span class="date">Date: ${array[i].date}</span>
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
                <span class="date">Date: ${array[i].date}</span>
                <span class="concept">Concepts: ${array[i].concept}</span>
            </div>
            <p class="entryText">Entry: ${array[i].entry}</p>
        </p>`
    }
    document.getElementById('entries').innerHTML = HTML;
}

document.getElementById('backButton').onclick = function() {returnEntries1to3(entries)};
document.getElementById('forwardButton').onclick = function() {returnEntries4to6(entries)};



// later add if statement to highlight specific moods with corresponding colors