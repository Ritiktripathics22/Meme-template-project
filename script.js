document.addEventListener('DOMContentLoaded', () => {
    const memeContainer = document.getElementById('memeContainer');
    const searchInput = document.getElementById('searchInput');

    fetch(' https://dummyjson.com/recipes' )
        .then(response => response.json())
        .then(data => {
            const memes = data.data.memes;
            displayMemes(memes);

            searchInput.addEventListener('input', () => {
                const filteredMemes = memes.filter(meme =>
                    meme.name.toLowerCase().includes(searchInput.value.toLowerCase())
                );
                displayMemes(filteredMemes);
            });
        })
        .catch(error => console.error('Error fetching memes:', error));

    function displayMemes(memes) {
        memeContainer.innerHTML = '';
        memes.forEach(meme => {
            const memeCard = document.createElement('div');
            memeCard.className = 'meme-card';

            const memeImg = document.createElement('img');
            memeImg.src = meme.url;
            memeImg.alt = meme.name;

            const memeName = document.createElement('p');
            memeName.textContent = meme.name;

            memeCard.appendChild(memeImg);
            memeCard.appendChild(memeName);

            memeContainer.appendChild(memeCard);
        });
    }
});

