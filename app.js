// TEMP data (test ke liye)
let videos = [];

// LOGIN
function login(){
  alert("Firebase connect hone ke baad login chalega");
}

// ADD VIDEO
function addVideo(){
  let title = document.getElementById("title").value;
  let link = document.getElementById("link").value;

  videos.push({ title, link, likes: 0 });

  loadVideos();
}

// LOAD VIDEOS
function loadVideos(){
  let html = "";

  videos.forEach((v, i) => {
    html += `
      <div class="card">
        <h3>${v.title}</h3>
        <iframe src="${v.link.replace("watch?v=","embed/")}"></iframe>
        <br>
        <a href="video.html?id=${i}">Watch</a>
      </div>
    `;
  });

  document.getElementById("videos").innerHTML = html;
}

// VIDEO PAGE FUNCTIONS
function like(){
  alert("Like Firebase ke baad connect hoga");
}

function subscribe(){
  alert("Subscribe baad me add hoga");
}

function sendComment(){
  alert("Comment system Firebase ke baad");
}

loadVideos();