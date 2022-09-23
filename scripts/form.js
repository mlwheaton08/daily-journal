import { getEntries, sendNewEntry } from "./dataAccess.js";

export const displayForm = () => {
    let html = '';
    html += `
        <form id="entryForm">
            <h2 id="newEntry">New Entry</h2>
            <div id="moodAndConcepts">
                <fieldset id="moodField">
                    <label for="mood">Mood</label>
                    <select name="mood" id="mood" class="noBorder">
                        <option value="Excited">Excited</option>
                        <option value="Happy">Happy</option>
                        <option value="Determined">Determined</option>
                        <option value="In the Zone">In the Zone</option>
                        <option value="Neutral">Neutral</option>
                        <option value="Overwhelmed">Overwhelmed</option>
                        <option value="Discouraged">Discouraged</option>
                        <option value="Frustrated">Frustrated</option>
                        <option value="Burnt Out">Burnt Out</option>
                        <option value="Somber">Somber</option>
                    </select>
                </fieldset>
                <fieldset id="conceptsField">
                    <label for="concepts">Concepts covered</label>
                    <input type="text" name="concepts" id="entryForm_concepts" class="textField noBorder">
                </fieldset>
            </div>
            <fieldset>
                <label for="journalEntry">Journal entry</label>
                <textarea name="journalEntry" id="entryForm_journalEntry" class="textField noBorder"></textarea>
            </fieldset>
            <button id="submitButton" class="noBorder" type="button">Submit ✏️</button>
        </form>
    `
    document.getElementById('userForm').innerHTML = html;
}


// SUBMIT BUTTON -- ADD NEW ENTRY
document.addEventListener('click', (e) => {
    if (e.target.id === 'submitButton') {
        const newMood = document.getElementById('mood')?.value;
        const newConcept = document.getElementById('entryForm_concepts')?.value;
        const newEntry = document.getElementById('entryForm_journalEntry')?.value;
        const newJournalEntry = {
            date: new Date(),
            mood: newMood,
            concept: newConcept,
            entry: newEntry
        }
        sendNewEntry(newJournalEntry)
    }
})