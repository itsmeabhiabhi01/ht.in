const API_KEY = 'AIzaSyAsQ7E02xCW3qAdxwHK2PLj-pppMfm9fBw';
const meetingLinks = [
    'https://meet.jit.si/IndependentHabitatsBounceEqually',
    'https://meet.jit.si/HungryCloudsConfirmThroughout',
    'https://meet.jit.si/HollowHabitatsAttractLightly',
    'https://meet.jit.si/AnonymousMinimumsNodFree',
    'https://meet.jit.si/SecondarySwimmingsPlantEffectively'
];
const languages = [
    'English', 'Spanish', 'French', 'German', 'Italian', 'Japanese', 'Chinese', 'Korean', 'Russian', 'Arabic',
    'Portuguese', 'Hindi', 'Bengali', 'Tamil', 'Telugu', 'Marathi', 'Gujarati', 'Punjabi', 'Urdu', 'Kannada',
    'Malayalam', 'Odia', 'Assamese', 'Dutch', 'Swedish', 'Norwegian', 'Danish', 'Finnish', 'Polish', 'Turkish',
    'Greek', 'Hebrew', 'Thai', 'Vietnamese', 'Indonesian', 'Filipino', 'Malay', 'Sinhala', 'Nepali', 'Persian', 'Swahili'
];

const allButton = document.getElementById('all-button');
const categoryButtons = document.getElementById('category-buttons');
const navButtons = document.querySelectorAll('.nav-button');
const createRoomBtn = document.getElementById('create-room-btn');
const createRoomModal = document.getElementById('create-room-modal');
const modalOverlay = document.getElementById('modal-overlay');
const createButton = document.getElementById('create-button');
const modeToggle = document.getElementById('mode-toggle');
const roomMaxPeople = document.getElementById('room-max-people');
const customMax = document.getElementById('custom-max');
const searchInput = document.getElementById('search-input');
const roomGrid = document.getElementById('room-grid');
const plusButton = document.getElementById('plus-button');
const phoneWrap = document.getElementById('phone-wrap');
const closeButton = document.getElementById('close-button');
const backButton = document.getElementById('back-button');
const youtubeApp = document.getElementById('youtube-app');
const gamesFolder = document.getElementById('games-folder');
const meetingsApp = document.getElementById('meetings-app');
const mailApp = document.getElementById('mail-app');
const instagramApp = document.getElementById('instagram-app');
const twitterApp = document.getElementById('twitter-app');
const facebookApp = document.getElementById('facebook-app');
const tiktokApp = document.getElementById('tiktok-app');
const whiteboardApp = document.getElementById('whiteboard-app');
const watchpartyApp = document.getElementById('watchparty-app');
const docsApp = document.getElementById('docs-app');
const netflixApp = document.getElementById('netflix-app');
const chatgptApp = document.getElementById('chatgpt-app');
const dalleApp = document.getElementById('dalle-app');
const bardApp = document.getElementById('bard-app');
const mapsApp = document.getElementById('maps-app');
const whatsappApp = document.getElementById('whatsapp-app');
const appScreen = document.getElementById('app-screen');
const gamesScreen = document.getElementById('games-screen');
const youtubeContainer = document.getElementById('youtube-container');
const whiteboardScreen = document.getElementById('whiteboard-screen');
const watchpartyScreen = document.getElementById('watchparty-screen');
const searchButton = document.getElementById('youtube-search-button');
const youtubeSearchInput = document.getElementById('youtube-search-input');

navButtons.forEach(button => {
    button.addEventListener('click', () => {
        navButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
    });
});

function sortRoomsByLanguage(language) {
    const rooms = Array.from(roomGrid.children);
    rooms.sort((a, b) => {
        const aTitle = a.querySelector('.room-title').textContent.toLowerCase();
        const bTitle = b.querySelector('.room-title').textContent.toLowerCase();
        if (aTitle === language.toLowerCase()) return -1;
        if (bTitle === language.toLowerCase()) return 1;
        return 0;
    });
    rooms.forEach(room => roomGrid.appendChild(room));
}

allButton.addEventListener('click', () => {
    if (categoryButtons.classList.contains('active')) {
        categoryButtons.classList.remove('active');
        categoryButtons.innerHTML = '';
        allButton.classList.remove('active');
    } else {
        categoryButtons.classList.add('active');
        allButton.classList.add('active');
        languages.forEach(lang => {
            const button = document.createElement('button');
            button.className = 'bg-[#1e90ff] px-4 py-2 rounded-full nav-button';
            button.textContent = lang;
            button.addEventListener('click', () => {
                navButtons.forEach(btn => btn.classList.remove('active'));
                button.classList.add('active');
                categoryButtons.classList.remove('active');
                categoryButtons.innerHTML = '';
                allButton.classList.remove('active');
                sortRoomsByLanguage(lang);
            });
            categoryButtons.appendChild(button);
        });
    }
});

searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const rooms = Array.from(roomGrid.children);
    rooms.sort((a, b) => {
        const aTitle = a.querySelector('.room-title').textContent.toLowerCase();
        const bTitle = b.querySelector('.room-title').textContent.toLowerCase();
        if (aTitle.includes(searchTerm) && !bTitle.includes(searchTerm)) return -1;
        if (!aTitle.includes(searchTerm) && bTitle.includes(searchTerm)) return 1;
        return 0;
    });
    rooms.forEach(room => roomGrid.appendChild(room));
});

createRoomBtn.addEventListener('click', () => {
    createRoomModal.classList.add('active');
    modalOverlay.classList.add('active');
});

modalOverlay.addEventListener('click', () => {
    createRoomModal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

createButton.addEventListener('click', () => {
    createRoomModal.classList.remove('active');
    modalOverlay.classList.remove('active');
});

modeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    document.body.classList.toggle('light-mode');
    modeToggle.innerHTML = document.body.classList.contains('dark-mode') ? '<i class="fas fa-moon"></i>' : '<i class="fas fa-sun"></i>';
});

roomMaxPeople.addEventListener('change', () => {
    customMax.classList.toggle('active', roomMaxPeople.value === 'Custom');
});

// Time Widget
function updateTime() {
    const now = new Date();
    let hours = now.getHours();
    const minutes = now.getMinutes().toString().padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    document.getElementById('time-widget').innerHTML = `${hours}:${minutes} <span class="ampm">${ampm}</span>`;
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('date-widget').innerText = now.toLocaleDateString('en-US', options);
}
setInterval(updateTime, 1000);
updateTime();

plusButton.addEventListener('click', () => {
    phoneWrap.classList.toggle('active');
});

closeButton.addEventListener('click', () => {
    phoneWrap.classList.remove('active');
    appScreen.classList.add('active');
    gamesScreen.classList.remove('active');
    youtubeContainer.classList.remove('active');
    whiteboardScreen.classList.remove('active');
    watchpartyScreen.classList.remove('active');
});

backButton.addEventListener('click', () => {
    appScreen.classList.add('active');
    gamesScreen.classList.remove('active');
    youtubeContainer.classList.remove('active');
    whiteboardScreen.classList.remove('active');
    watchpartyScreen.classList.remove('active');
});

youtubeApp.addEventListener('click', () => {
    appScreen.classList.remove('active');
    youtubeContainer.classList.add('active');
});

gamesFolder.addEventListener('click', () => {
    appScreen.classList.remove('active');
    gamesScreen.classList.add('active');
});

meetingsApp.addEventListener('click', () => {
    const randomMeeting = meetingLinks[Math.floor(Math.random() * meetingLinks.length)];
    window.open(randomMeeting, '_blank');
});

mailApp.addEventListener('click', () => {
    window.open('https://mail.google.com', '_blank');
});

instagramApp.addEventListener('click', () => {
    window.open('https://instagram.com', '_blank');
});

twitterApp.addEventListener('click', () => {
    window.open('https://twitter.com', '_blank');
});

facebookApp.addEventListener('click', () => {
    window.open('https://facebook.com', '_blank');
});

tiktokApp.addEventListener('click', () => {
    window.open('https://tiktok.com', '_blank');
});

whiteboardApp.addEventListener('click', () => {
    appScreen.classList.remove('active');
    whiteboardScreen.classList.add('active');
});

watchpartyApp.addEventListener('click', () => {
    appScreen.classList.remove('active');
    watchpartyScreen.classList.add('active');
});

docsApp.addEventListener('click', () => {
    window.open('https://docs.google.com', '_blank');
});

netflixApp.addEventListener('click', () => {
    window.open('https://netflix.com', '_blank');
});

chatgptApp.addEventListener('click', () => {
    window.open('https://chat.openai.com', '_blank');
});

dalleApp.addEventListener('click', () => {
    window.open('https://labs.openai.com', '_blank');
});

bardApp.addEventListener('click', () => {
    window.open('https://bard.google.com', '_blank');
});

mapsApp.addEventListener('click', () => {
    window.open('https://maps.google.com', '_blank');
});

whatsappApp.addEventListener('click', () => {
    window.open('https://web.whatsapp.com', '_blank');
});

searchButton.addEventListener('click', () => {
    const query = youtubeSearchInput.value;
    searchYouTube(query);
});

youtubeSearchInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') {
        searchYouTube(youtubeSearchInput.value);
    }
});

function searchYouTube(query) {
    const url = `https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&q=${encodeURIComponent(query)}&key=${API_KEY}`;
    
    fetch(url)
        .then(response => {
            if (!response.ok) throw new Error('Network response was not ok');
            return response.json();
        })
        .then(data => {
            const videoList = document.getElementById('youtube-video-list');
            videoList.innerHTML = '';
            data.items.forEach(item => {
                const videoItem = document.createElement('div');
                videoItem.className = 'video-item bg-gray-700 rounded-lg overflow-hidden';
                videoItem.innerHTML = `
                    <img alt="${item.snippet.title}" src="${item.snippet.thumbnails.medium.url}" class="w-full"/>
                    <div class="p-2">
                        <h3 class="font-bold text-sm">${item.snippet.title}</h3>
                        <p class="text-gray-400 text-xs">${item.snippet.channelTitle}</p>
                    </div>
                `;
                videoItem.addEventListener('click', () => playYouTubeVideo(item.id.videoId));
                videoList.appendChild(videoItem);
            });
        })
        .catch(error => console.error('Error fetching YouTube videos:', error));
}

function playYouTubeVideo(videoId) {
    const iframe = document.getElementById('youtube-iframe');
    iframe.src = `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    iframe.classList.remove('hidden');
}
