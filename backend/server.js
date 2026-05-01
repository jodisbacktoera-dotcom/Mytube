const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());
app.use(express.json());

// 🔥 fake DB
let videos = [
  {
    id: "dQw4w9WgXcQ",
    title: "Best Video 🔥",
    channel: "MyTube",
    likes: 0,
    comments: []
  }
];

// 📺 GET VIDEOS
app.get("/videos", (req, res) => {
  res.json(videos);
});

// 👍 LIKE
app.post("/like/:id", (req, res) => {
  const v = videos.find(v => v.id === req.params.id);
  if (v) v.likes++;
  res.json(v);
});

// 💬 COMMENT
app.post("/comment/:id", (req, res) => {
  const v = videos.find(v => v.id === req.params.id);
  if (v) v.comments.push(req.body.text);
  res.json(v);
});

app.listen(3000, () => console.log("🔥 Server running"));