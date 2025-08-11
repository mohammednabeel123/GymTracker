const exercises = [
    {
      name: "Chest",
      image: "images/Chest.jpg"
    },
    {
      name: "Biceps",
      image: "images/Biceps.jpg"
    },
    {
      name: "Triceps",
      image: "images/Triceps.jpg"
    },
    {
      name: "Back",
      image: "images/back.jpg"
    },
    {
      name: "Shoulder",
      image: "images/shoulder.jpg"
    },
    {
      name: "Legs",
      image: "images/legs.avif"
    },
    {
      name: "Abdominal",
      image: "images/Abdominall.jpg"
    },
    {
      name: "Combined",
      image: "images/Combined.jpeg"
    },
    {
      name: "Cardio",
      image: "images/Cardio.jpg"
    },
  ];
  const list_display = document.getElementById("list-display");

  exercises.forEach((item, index) => {
    console.log(`${index + 1}: ${item.name}`);
    
    list_display.innerHTML += `
      <div class="col">
        <div class="card" style="width: 18rem;">
          <img src="${item.image}" class="card-img-top" alt="${item.name}">
           <p class="card-text overlay">${item.name}</p>
        </div>
      </div>
    `;
  });
  
