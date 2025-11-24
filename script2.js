// Songs JSON data (6 songs only)
const songs = [
  {
    id: "1N87W35XAC3",
    title: "Can You Feel It?",
    artists: ["BoyWithUke"],
    album: { 
      id: "10ZK54TN",
      name: "Burnout",
      year: 2024,
      cover: "cover1.jpg"
    },
    duration_seconds: 184,
    explicit: false,
    genre: ["alternative", "indie"],
    rating: 3/5
  },

  {
    id: "B9T11PZD",
    title: "Black Sun Relay",
    artists: ["Iron Solvent"],
    album: { id: "ALB8834", name: "Furnace Dream", year: 2019, cover: "cover2.jpg" },
    duration_seconds: 261,
    explicit: true,
    genre: ["metal", "hard rock"],
    rating: 5/5
  },

  {
    id: "C7U44LKM",
    title: "Midnight Satellite",
    artists: ["Rhea Linden"],
    album: { id: "ALB2291", name: "Orbit Lines", year: 2022, cover: "cover3.jpg" },
    duration_seconds: 198,
    explicit: false,
    genre: ["pop", "synthpop"],
    rating: 3/5
  },

  {
    id: "D5R02HSQ",
    title: "Concrete Wildfire",
    artists: ["The Rotations"],
    album: { id: "ALB7710", name: "Street Geometry", year: 2020, cover: "cover4.jpg" },
    duration_seconds: 175,
    explicit: true,
    genre: ["punk", "garage"],
    rating: 4/5
  },

  {
    id: "E3M87QPA",
    title: "Cypress Valley",
    artists: ["Hollow Pines"],
    album: { id: "ALB6657", name: "Dust Season", year: 2023, cover: "cover5.jpg" },
    duration_seconds: 244,
    explicit: false,
    genre: ["folk", "americana"],
    rating: 4/5
  },

  {
    id: "F8S19WVV",
    title: "Vapor Cathedral",
    artists: ["Lucent Drift"],
    album: { id: "ALB9983", name: "Harmonics of Ash", year: 2024, cover: "cover6.jpg" },
    duration_seconds: 227,
    explicit: false,
    genre: ["ambient", "electronic"],
    rating: 5/5
  }
];

// Build queue rows dynamically
const queueList = document.getElementById("queue-list");

songs.forEach(song => {
  const row = document.createElement("div");
  row.classList.add("row");

  row.innerHTML = `
    <div class="song">
      <img src="${song.album.cover}" width="40px" height="40px">
      <div style="margin-left:10px;">
        ${song.title}<br>
        <small>${song.artists.join(", ")}</small>
      </div>
    </div>
    <div style="margin-left:auto;">
      <button type="button">Download</button>
    </div>
  `;

  queueList.appendChild(row);
});
