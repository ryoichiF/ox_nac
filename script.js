document.addEventListener('DOMContentLoaded', function() {
    const entriesContainer = document.getElementById('diary-entries');

    // 例の日記エントリ
    const entries = [
        {
            title: "日記のタイトル1",
            content: "これは日記の内容1です。",
            date: "2024-06-28"
        },
        {
            title: "日記のタイトル2",
            content: "これは日記の内容2です。",
            date: "2024-06-27"
        }
    ];

    entries.forEach(entry => {
        const entryDiv = document.createElement('div');
        entryDiv.classList.add('entry');

        const entryTitle = document.createElement('h3');
        entryTitle.textContent = entry.title;
        entryDiv.appendChild(entryTitle);

        const entryDate = document.createElement('p');
        entryDate.textContent = entry.date;
        entryDiv.appendChild(entryDate);

        const entryContent = document.createElement('p');
        entryContent.textContent = entry.content;
        entryDiv.appendChild(entryContent);

        entriesContainer.appendChild(entryDiv);
    });
});
