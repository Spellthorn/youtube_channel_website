const channelLogo = document.querySelector('.channel-logo');
const channelName = document.querySelector('.channel-name');
const subCount = document.querySelector('.subcount');
const viewCount = document.querySelector('.viewcount');
const vidCount = document.querySelector('.vidcount');
const channelBio = document.querySelector('.channel-bio');
const subLink = document.querySelector('.sub-link');

subLink.setAttribute('href', "https://www.youtube.com/channel/" + CHANNELID + "?sub_confirmation=1");

const URL = "https://www.googleapis.com/youtube/v3/channels?key=" + APIKEY + "&id=" + CHANNELID + "&part=statistics,snippet";

fetch(URL)
    .then((response) => response.json())
    .then((data) => updateData(data));

function updateData(data) {
    let f = Intl.NumberFormat('en', { notation: "compact" });

    let channelData = data['items'][0];
    let snippet = channelData['snippet'];
    let stats = channelData['statistics'];

    let logo = snippet['thumbnails']['high']['url'];

    channelLogo.style.backgroundImage = "url(" + logo + ")";
    channelName.innerHTML = '@'+ snippet['title'];

    subCount.innerHTML = f.format(stats['subscriberCount']);
    viewCount.innerHTML = f.format(stats['viewCount']);
    vidCount.innerHTML = f.format(stats['videoCount']);
    channelBio.innerHTML = snippet['description'];
}