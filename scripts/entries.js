import { getEntries } from "./dataAccess.js";

export const displayAllEntries = () => {
    const entries = getEntries();
    let HTML = '';
    for (const entry of entries) {
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

// const getLatestIndex = () => {
    //     const entries = getJournalEntries()
    //     let x = entries.length - 1;
    //     if (x % 3 === 0) {
        //         x = entries.length - 1;
        //     } else if ((x - 1) % 3 === 0) {
            //         x = entries.length - 2;
            //     } else {
                //         x = entries.length - 3;
                //     }
                //     return x;
                // }
                
                // // GLOBAL VARIABLE
                // let x = getLatestIndex()
                
                // // DISPLAY LATEST ENTRIES
                // const displayLatestEntries = () => {
                    //     const entries = getJournalEntries()
                    //     let latestEntries = []
                    //     for (let i = x; i < entries.length; i++) {
                        //         latestEntries.push(entries[i]);
                        //     }
                        //     let HTML = '';
                        //     for (const entry of latestEntries) {
                            //         HTML += `
                            //         <p class="entry">
                            //                     <div class="entryNumAndMood">
//                     <span class="entryNumber"><b>Entry #${entry.id}</b></span>
//                     <span class="mood">Mood: ${entry.mood}</span>
//                     </div>
//                     <div class="dateAndConcept">
//                     <span class="date">${entry.date.toLocaleString("en-US", {
//                         weekday: "short",
//                         month: "short",
//                         day: "numeric",
//                         year: "numeric"})
//                     }</span>
//                     <span class="concept">Concepts: ${entry.concept}</span>
//                     </div>
//                     <p class="entryText">Entry: ${entry.entry}</p>
//                     </p>`
//                 }
//                 document.getElementById('entries').innerHTML = HTML;
//             }
            
            
// // PAGE BACK (3 ENTRIES)
// const returnEntries1to3 = () => {
//     const entries = getJournalEntries()
//     if (x !== 0) {
//         let HTML = '';
//         x -= 3;
//         let backArray = [entries[x], entries[x + 1], entries[x + 2]];
//         for (const entry of backArray) {
//             HTML += `
//             <p class="entry">
//             <div class="entryNumAndMood">
//             <span class="entryNumber"><b>Entry #${entry.id}</b></span>
//             <span class="mood">Mood: ${entry.mood}</span>
//             </div>
//             <div class="dateAndConcept">
//             <span class="date">${entry.date.toLocaleString("en-US", {
//                 weekday: "short",
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric"})
//             }</span>
//             <span class="concept">Concepts: ${entry.concept}</span>
//             </div>
//             <p class="entryText">Entry: ${entry.entry}</p>
//             </p>`
//         }
//         document.getElementById('entries').innerHTML = HTML;
//     }
// }

// // PAGE FORWARD (3 ENTRIES)
// const returnEntries4to6 = () => {
//     const entries = getJournalEntries()
//     if (x !== getLatestIndex()) {
//         let HTML = '';
//         x += 3;
//         let forwardArray = [entries[x], entries[x + 1], entries[x + 2]];
//         for (const entry of forwardArray) {
//             HTML += `
//             <p class="entry">
//             <div class="entryNumAndMood">
//             <span class="entryNumber"><b>Entry #${entry.id}</b></span>
//             <span class="mood">Mood: ${entry.mood}</span>
//             </div>
//             <div class="dateAndConcept">
//             <span class="date">${entry.date.toLocaleString("en-US", {
//                 weekday: "short",
//                 month: "short",
//                 day: "numeric",
//                 year: "numeric"})
//             }</span>
//             <span class="concept">Concepts: ${entry.concept}</span>
//             </div>
//             <p class="entryText">Entry: ${entry.entry}</p>
//             </p>`
//         }
//         document.getElementById('entries').innerHTML = HTML;
//     }
// }

// document.getElementById('backButton').onclick = function() {returnEntries1to3()};
// document.getElementById('forwardButton').onclick = function() {returnEntries4to6(entries)};

