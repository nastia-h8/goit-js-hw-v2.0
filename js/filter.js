//--------------------------------------- throttle, debounce, search ---------------------------------------//
const frameworks = [
  { label: "Angular" },
  { label: "React" },
  { label: "Vue" },
  { label: "Ember" },
  { label: "Backbone" },
  { label: "Express" },
  { label: "Meteor" },
  { label: "Next" },
  { label: "NestJS" },
  { label: "Svelte" },
  { label: "Django" },
  { label: "Flask" },
  { label: "Node" },
  { label: "AdonisJS" },
  { label: "LoopBack" }
];

const searchInput = document.querySelector('#filter');
const searchList = document.querySelector('.js-search-list');

searchInput.addEventListener('input', _.debounce(onFilterChange, 300))
// searchInput.addEventListener('input', onFilterChange)

function createListItemsMarkup(items) {
  return items.map(item =>`<li>${item.label}</li>`).join('')
}

const initialMarkup = createListItemsMarkup(frameworks);
insertMarkup(initialMarkup)

function onFilterChange(evt) {
  // чому не працює evt.currentTarget??
    const filter = evt.target.value.trim().toLowerCase();  
    const filteredItems = frameworks.filter(f => f.label.toLowerCase().includes(filter))
    const filteredMarkup = createListItemsMarkup(filteredItems);
    
    insertMarkup(filteredMarkup);
}

function insertMarkup(markup) {
  searchList.innerHTML = markup;
}

