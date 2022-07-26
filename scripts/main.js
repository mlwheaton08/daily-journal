import { fetchEntries, getLatestPage, pageBack, pageForward, getButtonState } from './dataAccess.js';
import { displayEntries } from './entries.js';
import { displayForm } from './form.js';

const renderAll = async () => {
  await getLatestPage();
  await fetchEntries();
  displayForm();
  displayEntries();
  let buttonState = getButtonState();
  if (buttonState === 'first page') {
    document.getElementById('backButtonContainer').innerHTML = '<div class="pageButtonGone"></div>';
  } else if (buttonState === 'last page') {
    document.getElementById('forwardButtonContainer').innerHTML = '<div class="pageButtonGone"></div>';
  }
}

renderAll();

const renderEntries = async () => {
  await fetchEntries();
  displayEntries();
  let buttonState = getButtonState();
  if (buttonState === 'first page') {
    document.getElementById('backButtonContainer').innerHTML = '<div class="pageButtonGone"></div>';
  } else if (buttonState === 'last page') {
    document.getElementById('forwardButtonContainer').innerHTML = '<div class="pageButtonGone"></div>';
  }
}

document.addEventListener("stateChanged", (e) => {
  renderAll();
})

// PAGE BACK BUTTON
document.addEventListener('click', (e) => {
  if (e.target.id === 'backButton') {
    pageBack();
    renderEntries();
  }
})

// PAGE FORWARD BUTTON
document.addEventListener('click', (e) => {
  if (e.target.id === 'forwardButton') {
    pageForward();
    renderEntries();
  }
})



// in database, eventually make mood its own object, bc there are limted options and it would make filtering easier
// also maybe do this with concepts? Although would probably need option to 'add new concept', and then have each option with a checkbox

// for each entry, probably only make delete button visible when hovering over "Entry #" (might need to be a js function bc will be hovering over different item)
// also maybe make a lil popup (not annoying) that asks if you're sure you want to delete the entry

// from bonus exercise: "- Add an edit button to each Journal Entry.  On clicking this button, a form with the current values populated should be displayed
// There should be a save button displayed that updates the entry when clicked and displays the edited values
// Optional to reuse the form you already have"

// Jeremy brought up a good point about date. it might be nice to get rid of date selection and instead
// have current date added to object (maybe option to change the date after submitting entry if it seems necessary)

// need to figure out loop to display most recent "group" of entries, bc it only shows #10 right now
// later add if statement to highlight specific moods with corresponding colors
// later later: think about creating different arrays with .filter to ...
// ... have filter buttons that call function to show only certain concepts and moods
// later later later: can maybe add "favorite: (boolean)" key-value pair to each entry object ...
// ... default is false. maybe next to each entry displayed a star button appears when hover ...
// ... and this somehow lets you mark as favorite. after that, favorite can be another filter option