// Function to fetch and display the news feed
function fetchNewsFeed() {
    const rssUrl = 'http://feeds.bbci.co.uk/news/world/rss.xml'; // Replace with the RSS feed URL of the news website

    fetch(rssUrl)
        .then(response => response.text())
        .then(data => {
            const parser = new DOMParser();
            const xmlDoc = parser.parseFromString(data, 'text/xml');
            const items = xmlDoc.querySelectorAll('item');

            const newsList = document.getElementById('news-list');
            newsList.innerHTML = '';

            items.forEach(item => {
                const title = item.querySelector('title').textContent;
                const link = item.querySelector('link').textContent;

                const li = document.createElement('li');
                const a = document.createElement('a');
                a.textContent = title;
                a.href = link;
                li.appendChild(a);
                newsList.appendChild(li);
            });
        })
        .catch(error => console.error('Error fetching news feed:', error));
}

// Fetch and display the news feed when the page loads
fetchNewsFeed();
