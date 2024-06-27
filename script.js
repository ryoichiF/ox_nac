document.getElementById('diaryForm').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const title = document.getElementById('entryTitle').value;
    const content = document.getElementById('entryContent').value;
    const entriesContainer = document.getElementById('entriesContainer');

    const entryDiv = document.createElement('div');
    entryDiv.classList.add('entry');

    const entryTitle = document.createElement('h3');
    entryTitle.textContent = title;
    entryDiv.appendChild(entryTitle);

    const entryContent = document.createElement('p');
    entryContent.textContent = content;
    entryDiv.appendChild(entryContent);

    entriesContainer.prepend(entryDiv);

    document.getElementById('diaryForm').reset();
});
