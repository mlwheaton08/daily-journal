import { fetchEntries } from './dataAccess.js';
import { displayAllEntries } from './entries.js';
import { displayForm } from './form.js';

const render = async () => {
    await fetchEntries();
    displayForm();
    displayAllEntries();
}

render();

document.addEventListener("stateChanged", (e) => {
    render();
  })



// in database, eventually make mood its own object, bc there are limted options and it would make filtering easier
// also maybe do this with concepts? Although would probably need option to 'add new concept', and then select from dropdown

// Jeremy brought up a good point about date. it might be nice to get rid of date selection and instead
// have current date added to object (maybe option to change the date after submitting entry if it seems necessary)

// need to figure out loop to display most recent "group" of entries, bc it only shows #10 right now
// later add if statement to highlight specific moods with corresponding colors
// later later: think about creating different arrays with .filter to ...
// ... have filter buttons that call function to show only certain concepts and moods
// later later later: can maybe add "favorite: (boolean)" key-value pair to each entry object ...
// ... default is false. maybe next to each entry displayed a star button appears when hover ...
// ... and this somehow lets you mark as favorite. after that, favorite can be another filter option