// Get the current path and query string
const currentPath = window.location.pathname;
const queryString = window.location.search;

// Use history.pushState to keep the URL intact, including query parameters
window.history.pushState({}, '', currentPath + queryString);

// Fetch the content of the main index.html file, including the query parameters
fetch('/' + queryString)
  .then(response => response.text())
  .then(html => {
    // Replace the current document's content with the fetched HTML
    document.open();
    document.write(html);
    document.close();

    // Optionally, re-run any initialization scripts here
  })
  .catch(err => console.error('Failed to load the main index.html', err));
