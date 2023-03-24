function authenticate() {
    return gapi.auth2.getAuthInstance()
        .signIn({scope: "https://www.googleapis.com/auth/youtube.force-ssl"})
        .then(function() { console.log("Sign-in successful"); },
              function(err) { console.error("Error signing in", err); });
}
function loadClient() {
    gapi.client.setApiKey("AIzaSyD2PF5Xa0DhP9J_L6-ZmcDNKUCq7ha0JVk");
    return gapi.client.load("https://www.googleapis.com/discovery/v1/apis/youtube/v3/rest")
        .then(function() { console.log("GAPI client loaded for API"); },
            function(err) { console.error("Error loading GAPI client for API", err); });
}

function generateVideoElem(title, thumbnail, id) {
    const link = document.createElement("a");
    link.href = `./watch/#${id}`;
    link.classList.add("video");

    const img = document.createElement("img");
    img.src = thumbnail.url;

    const span = document.createElement("span");
    span.textContent = title

    link.append(img, span);
    document.querySelector(".videos").append(link);
}

// Make sure the client is loaded and sign-in is complete before calling this method.
function search(text) {
    document.querySelector(".videos").innerHTML = "";

    return gapi.client.youtube.search.list({
        "q": text,
        "type": [
            "video"
        ],
        "maxResults": 50,
        "relevanceLanguage": "en",
        "videoEmbeddable": "true"
    }).then(res => {
        [...res.result.items].forEach(vIDwrapper => {
            let vID = vIDwrapper.id.videoId
            gapi.client.youtube.videos.list({
                "part": [
                    "snippet"
                ],
                "id": [
                    vID
                ],
                "maxResults": 1
            }).then(videoWrapper => {
                let video = videoWrapper.result.items[0].snippet;
                console.log(video)
                generateVideoElem(video.title, video.thumbnails.default, vID);
            });
        });
    }, err => {
        console.error("Execute error", err);
    });
}

document.querySelector(".search-form").addEventListener("submit", e => {
    e.preventDefault();
    search(document.querySelector(".search-in").value);
});

gapi.load("client:auth2", function() {
    gapi.auth2.init({client_id: "519167129143-bbqhf5tepo1ig6inlm8v6i5af7ruk44f.apps.googleusercontent.com"});
});