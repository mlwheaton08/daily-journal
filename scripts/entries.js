import { deleteEntry, getEntries } from "./dataAccess.js";

export const displayEntries = () => {
    const entries = getEntries();
    let entriesHTML = '';
    for (const entry of entries) {
        let entryDate= new Date(entry.date)
        entriesHTML += `
            <p class="entry">
                <div class="entryNumAndMood">
                    <span class="entryNumber"><b>Entry #${entry.id}</b></span>
                    <span class="entryDelete" id="entryDelete--${entry.id}">🗑️</span>
                    <span class="mood">Mood: ${entry.mood}</span>
                </div>
                <div class="dateAndConcept">
                    <span class="date">
                        ${
                            entryDate.toLocaleString("en-US", {
                                weekday: "short",
                                month: "short",
                                day: "numeric",
                                year: "numeric"})
                        }
                    </span>
                    <span class="concept">Concepts: ${entry.concept}</span>
                </div>
                <div class="entryText">${entry.entry}</div>
            </p>
        `
    }
    document.getElementById('entries').innerHTML = entriesHTML;
    document.getElementById('backButtonContainer').innerHTML = '<button><img id="backButton" class="pageButtonImg back" src="./images/arrow.png"></button>';
    document.getElementById('forwardButtonContainer').innerHTML = '<button><img id="forwardButton" class="pageButtonImg forward" src="./images/arrow.png"></button>';
}

// DELETE ENTRY
document.addEventListener('click', (e) => {
    if (e.target.id.startsWith('entryDelete--')) {
        const [, entryId] = e.target.id.split('--');
        deleteEntry(parseInt(entryId));
    }
})