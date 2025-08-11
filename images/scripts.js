const gymQuotes = [
    "The only bad workout is the one you didn’t do.",
    "Push yourself because no one else is going to do it for you.",
    "Sweat is just fat crying.",
    "Don’t limit your challenges. Challenge your limits.",
    "Success starts with self-discipline.",
    "Your body can stand almost anything. It’s your mind you have to convince.",
    "Train insane or remain the same.",
    "The pain you feel today will be the strength you feel tomorrow.",
    "When you feel like quitting, think about why you started.",
    "No excuses. Just results.",
    "Excuses don’t burn calories.",
    "Strength does not come from winning. Your struggles develop your strengths. – Arnold Schwarzenegger",
    "Fitness is like a relationship. You can’t cheat and expect it to work.",
    "Don’t wish for it. Work for it.",
    "The difference between try and triumph is a little ‘umph’.",
    "It’s going to be a journey. It’s not a sprint to get in shape. – Kerri Walsh Jennings",
    "Sore today, strong tomorrow.",
    "The harder you work for something, the greater you’ll feel when you achieve it.",
    "Wake up with determination. Go to bed with satisfaction.",
    "Motivation is what gets you started. Habit is what keeps you going. – Jim Ryun"
  ];
  const randomGym = Math.floor(Math.random() * gymQuotes.length)
  console.log(gymQuotes[randomGym])
  const motivation= document.querySelector(".motivation");
  motivation.textContent = gymQuotes[randomGym];

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
      image: "images/Triceps.avif"
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
      image: "images/combined.jpg"
    },
    {
      name: "Cardio",
      image: "images/cardio.jpg"
    },
    {
      name: "Ab",
      image: "images/ab.jpg"
    }
  ];
  
  const list_display = document.getElementById("list-display");
