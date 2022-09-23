import { getEntries, sendNewEntry } from "./dataAccess.js";

export const displayForm = () => {
    let html = '';
    html += `
        <form id="entryForm">
            <h2 id="newEntry">New Entry</h2>
            <div id="dateAndMood">
                <fieldset>
                    <label for="entryDate">Date of entry</label>
                    <input type="date" name="entryDate" id="entryForm_date" class="noBorder">
                </fieldset>
                <fieldset>
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
            </div>
            <fieldset>
                <label for="concepts">Concepts covered</label>
                <input type="text" name="concepts" id="entryForm_concepts" class="textField noBorder">
            </fieldset>
            <fieldset>
                <label for="journalEntry">Journal entry</label>
                <textarea name="journalEntry" id="entryForm_journalEntry" class="textField noBorder"></textarea>
            </fieldset>
            <button id="submitButton" class="noBorder" type="button">Submit ✏️</button>
        </form>
    `
    document.getElementById('userForm').innerHTML = html;
}


const getNewEntryId = () => {
    const entries = getEntries()
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
        sendNewEntry(newJournalEntry)
    }
})