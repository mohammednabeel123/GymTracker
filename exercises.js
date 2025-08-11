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
  
  const exerciseCategories = [
    {
      category: "Abdominal",
      exercises: [
        { name: "Ab crunch machine", description: "" },
        { name: "Abs crunch machine", description: "" },
        { 
          name: "Ab Rollout", 
          description: "This exercise works the abs and lower back and is the proper version of an ab roller.",
          
        },
        { 
          name: "Ab Rollout on Knees", 
          description: "This exercise works the abs and lower back and is the proper version of an ab roller. This version is done on the knees." 
        },
        { 
          name: "Abdominal 4 Point Drawing In", 
          description: "This is a simple but powerful exercise to strengthen the abs and the core, the muscles that support the spine." 
        },
        { 
          name: "Bent Knee Hip Raise", 
          description: "This is a good exercise for core muscle development." 
        },
        { 
          name: "Cross Body Crunches", 
          description: "This version of the crunch works both the upper and lower portion of the abs." 
        },
        { 
          name: "Crunches", 
          description: "This is the most common abdominal exercise and possibly the most often improperly performed. Here, focus on proper form." 
        },
        { 
          name: "Crunches with Legs on Stability Ball", 
          description: "This exercise uses a Stability Ball as the base during your crunches." 
        },
        { 
          name: "Decline Crunches", 
          description: "Using a decline crunch allows you to keep your legs steady and isolate all of the abdominal muscles." 
        },
        { 
          name: "Decline Oblique Crunches", 
          description: "This version of a decline crunch isolates the oblique (side) muscles of the abs." 
        },
        { 
          name: "Exercise Ball Pull-In", 
          description: "This exercise uses a ball to isolate and work the lower abdominal muscles." 
        },
        { name: "Incline Crunches", description: "" },
        { 
          name: "L-Sit", 
          description: "The legs are bent at a 90 degree angle to the torso, so that the entire body forms an 'L'." 
        },
        { name: "Leg raise machine", description: "" },
        { 
          name: "Leg Raises", 
          description: "Leg raises work your lower abs which are usually hard muscles to target." 
        },
        { 
          name: "Seated Cable Ab Crunches", 
          description: "This exercise uses the weight of a cable machine to assist in an abs crunch." 
        },
        { 
          name: "Side Bend", 
          description: "This exercise works the obliques, the muscles on the sides of your abs." 
        },
        { 
          name: "Side Plank", 
          description: "A simple exercise for core strength and conditioning." 
        },
        { 
          name: "Sit-ups", 
          description: "This is the most common abdominal exercise and possibly the most often improperly performed." 
        },
        { name: "Sit-Ups", description: "A sit-up is a basic abdominal exercise." },
        { 
          name: "Stability Ball Abdominal Crunches", 
          description: "This crunch uses a Stability Ball. The ball allows you a better range of movement because it adapts to your body." 
        },
        { 
          name: "Toes To Bar", 
          description: "The toes-to-bar is a calisthenics exercise that primarily targets the abs and to a lesser degree the hip flexors." 
        },
        { 
          name: "V-Ups", 
          description: "V-Ups are an exercise that work both the upper and lower abdominal muscles at the same time. You raise both your legs and upper body to form a 'V'." 
        },
        { 
          name: "Weighted Ball Side Bend", 
          description: "This exercise uses a Stability Ball instead of a bench. The Stability Ball conforms better to your body and allows a better range of motion." 
        },
      ]
    },
    {
      category: "Back",
      exercises: [
        { 
          name: "Back Extension on Stability Ball", 
          description: "This exercise provides flexibility as it strengthens the muscles of the back and core." 
        },
        { 
          name: "Back Flys With Resistance Bands", 
          description: "Back Flyes will strengthen your upper back and improve your posture." 
        },
        { 
          name: "Barbell Rear Delt Row", 
          description: "A good workout that targets your middle back and posterior deltoids." 
        },
        { name: "Barbell Row", description: "Barbell row pulls up to abdominal." },
        { 
          name: "Barbell Shrugs", 
          description: "This is an exercise for the traps." 
        },
        { name: "Barbell Straight Leg Deadlift", description: "" },
        { 
          name: "Barbell Upright Rows", 
          description: "The barbell upright row is a standard upright row exercise that targets your traps and deltoids." 
        },
        { 
          name: "Bent Arm Pullover", 
          description: "The bent arm pullover targets your chest using an arcing motion." 
        },
        { name: "Body Row", description: "" },
  
        { name: "Cable Close Grip Pulldown", description: "Cable lat pulldown." },
        { name: "Cable Rope Overhead Triceps Extension", description: "No description available." },
        { 
          name: "Cable Shrugs", 
          description: "The Cable Shrug is a variation of the standard shrug done using a cable machine." 
        },
        { 
          name: "Cable Upright Rows", 
          description: "Cable upright rows are a good exercise for strengthening your upper back." 
        },
        { 
          name: "Climbers Chin Up", 
          description: "This variation on the basic chin up is a great exercise for people who rock climb." 
        },
        { 
          name: "Close Grip Front Lat Pulldown", 
          description: "This is a classic body builder exercise to build your lower Lats (back muscles)." 
        },
        { 
          name: "Deadlift", 
          description: "The deadlift is a weight training exercise where a loaded barbell is lifted off the ground from a standing position." 
        },
        { 
          name: "Dumbbell Bent Arm Pullover", 
          description: "A variation on the standard barbell bent arm pullover, using only a single dumbbell." 
        },
        { name: "Dumbbell Row", description: "No description available." },
        { 
          name: "Dumbbell Shrugs", 
          description: "This shrugs exercise is great for targeting the traps using only a pair of dumbbells." 
        },
        { 
          name: "Dumbbell Upright Row", 
          description: "The dumbbell upright row targets your upper back, deltoids and biceps using only a pair of dumbbells." 
        },
        { 
          name: "Front and Back Neck Isometric", 
          description: "The front and back neck isometric exercises are great for your neck muscles." 
        },
        { 
          name: "Gironda Sternum Chins", 
          description: "This is a variation of the basic Chin Up that focuses more on the lats." 
        },
        { 
          name: "Good Mornings", 
          description: "Good Mornings are an advanced exercise that work your lower back while incorporating the hamstrings." 
        },
        { 
          name: "Hyperextensions", 
          description: "This exercise not only adds strength but also flexibility to the back and core muscles." 
        },
        { 
          name: "Machine Shrug", 
          description: "The smith machine shrug is a safer alternative to barbell shrugs, especially if you are doing heavy weights." 
        },
        { 
          name: "Narrow Parallel Grip Chin-ups", 
          description: "This is a more advanced version of the basic Chin Up." 
        },
        { name: "Power clean", description: "No description available." },
        { name: "Power Clean Second Pull", description: "No description available." },
        { name: "Pull-up", description: "No description available." },
        { 
          name: "Pull-Ups", 
          description: "A pull-up is a variety of upper-body compound pulling motions for exercise." 
        },
        { 
          name: "Rear Deltoid Row", 
          description: "Rear Deltoid Rows are a simple, yet effective exercise for targeting your lats and rear deltoids." 
        },
        { 
          name: "Reverse Grip Bent Over Rows", 
          description: "This exercise is excellent for developing overall back strength." 
        },
        { 
          name: "Romanian Deadlift", 
          description: "This exercise is similar to a regular Deadlift but differs because you keep your legs straight." 
        },
        { 
          name: "Seated Cable Rows", 
          description: "Cable Seated Rows target the large muscles in your back." 
        },
        { name: "Seated Pulley Row", description: "No description available." },
        { 
          name: "Side Neck Isometric", 
          description: "This exercise will strengthen the sides of your neck." 
        },
        { 
          name: "Smith Machine Dead Lifts", 
          description: "This is the same as a Dead Lift but the Smith Machine allows for better control of the weight." 
        },
        { 
          name: "Smith Machine Good Mornings", 
          description: "This is one of the oldest exercises in bodybuilding but it still is one of the best for working the lower back." 
        },
        { 
          name: "Smith Machine Rear Deltoid Row", 
          description: "This exercise works your upper back to improve your posture and prevent muscle imbalance." 
        },
        { 
          name: "Smith Machine Shrugs", 
          description: "The smith machine shrug is a safer alternative to barbell shrugs, especially for heavy weights." 
        },
        { 
          name: "Smith Machine Upright Row", 
          description: "This exercise targets the deltoids and traps as well as surrounding muscles." 
        },
        { 
          name: "Straight Arm Pushdown", 
          description: "This exercise helps build the Lats and also works the Triceps (back of the arms)." 
        },
        { 
          name: "Supermans", 
          description: "This is an excellent exercise and a stretch for the lower back and core muscles." 
        },
        { 
          name: "T-Bar Row", 
          description: "If you have a T-Bar machine, this is a good exercise for building the major muscles of your back." 
        },
        { 
          name: "Underhand Pulldowns", 
          description: "This exercise works the muscles of the back and arms." 
        },
        { 
          name: "Upright Row", 
          description: "This exercise is a good alternative to an upright row using barbells or dumbbells." 
        },
        { 
          name: "V Bar Pulldown", 
          description: "This is another exercise for sculpting the Lats (muscles of the back)." 
        },
        { 
          name: "Wide Grip Lat Pulldown", 
          description: "This is one of the classic body building exercises for building and sculpting the lats." 
        },
      ]
    },
    {
      category: "Biceps",
      exercises: [
        { 
          name: "Alternate Bicep Curl", 
          description: "This exercise is a single arm version of a biceps curl." 
        },
        { 
          name: "Alternate Hammer Curl", 
          description: "This exercise uses a hammering (up and down) motion to isolate the biceps." 
        },
        { 
          name: "Alternate Incline Curl", 
          description: "This exercise uses an incline bench to change your body's position as you perform bicep curls." 
        },
        { 
          name: "Ball Wall Circles", 
          description: "Ball Wall Circles will strengthen and stretch your rotator cuff while stretching your chest." 
        },
        { name: "Barbell biceps curl", description: "No description available." },
        { 
          name: "Bicep Curl Lunge with Bowling Motion", 
          description: "This exercise is similar to the motions of bowling." 
        },
        { 
          name: "Bicep Curl on Stability Ball with Leg Raised", 
          description: "This exercise incorporates balance along with a bicep curl." 
        },
        { 
          name: "Bicep Curl with Deadlift", 
          description: "This is an advanced exercise. This exercise combines a bicep curl with a deadlift." 
        },
        { 
          name: "Bicep Curl, Stork Stance", 
          description: "This is an advanced exercise that requires excellent coordination and balance." 
        },
        { 
          name: "Bicep Curls", 
          description: "This version of a biceps curl uses both arms at the same time." 
        },
        { 
          name: "Bicep Curls Machine", 
          description: "This exercise uses a machine to ensure proper form." 
        },
        { 
          name: "Bicep Curls Seated on Stability Ball", 
          description: "This version of a biceps curl uses a Stability Ball. Exercises performed with Stability Balls engage core muscles." 
        },
        { 
          name: "Bicep Curls V Sit on Dome", 
          description: "This exercise uses a Dome (or Bosu) as a seat forcing you to engage and contract your abs throughout." 
        },
        { 
          name: "Bicep Curls with Overhead Extension Kneeling on SB", 
          description: "This is an advanced exercise. Requires balance kneeling on a stability ball." 
        },
        { 
          name: "Bicep Hammer Curl", 
          description: "This exercise uses a hammering (up and down) motion to isolate the biceps." 
        },
        { name: "Biceps machine", description: "No description available." },
        { name: "Cable Concentration Curl", description: "No description available." },
        { name: "Cable curls", description: "No description available." },
        { 
          name: "Cable Machine Preacher Curl", 
          description: "A Preacher Curl uses a special bench to support the triceps and isolate the biceps." 
        },
        { 
          name: "Chin-Ups", 
          description: "This exercise is one of the most basic and best for building strength in the back and arms." 
        },
        { 
          name: "Close Grip EZ Bar Curls", 
          description: "This exercise uses a cambered EZ or curl bar to isolate the biceps during a curl." 
        },
        { 
          name: "Close Grip Standing Bicep Curls", 
          description: "This exercise uses a standard barbell to isolate the biceps during a curl." 
        },
        { name: "Concentration curl", description: "No description available." },
        { 
          name: "Concentration Curls", 
          description: "Concentration exercises limit your range of movement to increase the effectiveness." 
        },
        { 
          name: "Cross Body Hammer Curl", 
          description: "This exercise targets the biceps using a crossing motion rather than a standard curl." 
        },
        { 
          name: "Crossover With Bands", 
          description: "The crossover with bands targets your chest and biceps while offering variable resistance." 
        },
        { 
          name: "Drag Curl", 
          description: "This exercise is credited to the late Vince Gironda, the Iron Guru. It blasts the biceps." 
        },
        { 
          name: "EZ Bar Curls", 
          description: "This exercise uses an EZ or curl bar to better isolate and build the arms." 
        },
        { 
          name: "Flexor Incline Curls", 
          description: "This exercise was designed to keep the stress on the biceps." 
        },
        { 
          name: "Hammer Curls with Rope", 
          description: "Using the rope with the cable machine isolates the biceps with this version of the Hammer Curl." 
        },
        { 
          name: "Hammer Preacher Curl", 
          description: "This exercise combines a Hammer Curl with a Preacher bench." 
        },
        { 
          name: "High Cable Curls", 
          description: "This exercise allows you to target the muscles of your arms from a different position." 
        },
        { 
          name: "Incline Bicep Curls", 
          description: "This exercise uses an incline bench to change your body's position as you perform bicep curls." 
        },
        { 
          name: "Incline Inner Bicep Curls", 
          description: "This exercise uses an incline bench and twist to change your body's position during curls." 
        },
        { 
          name: "Lying Bicep Cable Curl", 
          description: "By lying down you isolate the muscles of your biceps without standing or sitting." 
        },
        { name: "Lying cable curls", description: "No description available." },
        { 
          name: "Lying Close Grip Bicep Curls", 
          description: "This exercise combines a flat body position with a pulling motion to work the biceps." 
        },
        { 
          name: "Lying High Bench Bicep Curls", 
          description: "With this exercise you lay face down to isolate your biceps." 
        },
        { 
          name: "Lying Incline Curl", 
          description: "This exercise uses an incline bench to change your body's position as you perform bicep curls." 
        },
        { 
          name: "Lying Supine Bicep Curls", 
          description: "This is another biceps exercise where you lay down to isolate the muscles." 
        },
        { 
          name: "Medicine Ball Bicep Curls on Stability Ball", 
          description: "This exercise combines Stability Ball use with medicine ball curls." 
        },
        { 
          name: "One Arm Bicep Concentration on Stability Ball", 
          description: "This exercise uses a Stability Ball instead of a bench for better form." 
        }
      ]
    },
        {
            category: "Chest",
            exercises: [
              {
                name: "Ring Push-Ups",
                description: "The push-up is a staple body weight exercise that almost everyone is familiar with. Adding gymnastic rings makes it more challenging and engages stabilizer muscles."
              },
              {
                name: "Smith Machine Bench Press",
                description: "This is the same exercise as a Bench Press but using the Smith Machine allows for greater control of the bar path."
              },
              {
                name: "Straight Arm Pullover",
                description: "An exercise to strengthen the muscles of the shoulder and the rotator cuff."
              },
              {
                name: "Wide Grip Bench Press",
                description: "Targets the Pectoral (Chest) muscles with a wider grip focusing on the outer chest."
              },
              {
                name: "Wide Grip Decline Bench Press",
                description: "Targets the Pectoral (Chest) muscles with a wider grip, focusing on the outer lower chest."
              },
              {
                name: "Wide Grip Decline Pullover",
                description: "An advanced exercise for the pectoral muscles (Chest), similar to the Wide Grip Pullover."
              }
            ]
          },
          {
            category: "Combined / Full Body / Conditioning",
            exercises: [
              {
                name: "Box Jumps",
                description: "Box jumps are a compound, multi-joint exercise similar to bench press and squats that develop power."
              },
              {
                name: "Burpee Pull-Up",
                description: "A compound exercise targeting chest, triceps, legs, and back."
              },
              {
                name: "Burpees",
                description: "A full-body exercise used in strength training and conditioning, also known as squat thrust."
              },
              {
                name: "Clean and Jerk",
                description: "A highly technical lift challenging almost every muscle in the body."
              },
              {
                name: "Double Unders",
                description: "A jump rope exercise where the rope passes twice under the feet per jump."
              },
              {
                name: "Farmer's Walk",
                description: "A strongman event involving carrying heavy weights in each hand."
              },
              {
                name: "Hang Clean",
                description: "Starting with the barbell hanging, this exercise develops explosive power."
              },
              {
                name: "Iron Cross",
                description: "An advanced full-body exercise."
              },
              {
                name: "Jump Rope",
                description: "Great cardio exercise that improves coordination and endurance."
              },
              {
                name: "Kettlebell Overhead Squat",
                description: "No description available."
              },
              {
                name: "Kettlebell Snatch",
                description: "Builds explosive power and endurance using kettlebell."
              },
              {
                name: "Kettlebell Swing",
                description: "Works core, shoulders, quads, hamstrings, and back with dynamic swings."
              },
              {
                name: "Knees to Elbows",
                description: "A dynamic gymnastics core exercise that strengthens the abdominal muscles."
              },
              {
                name: "L-Pull-Ups",
                description: "An advanced pull-up variation that tests core strength along with back and arms."
              },
              {
                name: "Medicine Ball Cleans",
                description: "Starts in a deadlift position, generating momentum for a jump-based movement."
              },
              {
                name: "Medicine Ball Sit-Ups",
                description: "Basic abdominal exercise made more challenging by using a medicine ball."
              },
              {
                name: "One Arm Side Deadlift",
                description: "Advanced exercise working most muscles of the body."
              },
              {
                name: "One Arm Snatch",
                description: "Advanced exercise working most muscles of the body."
              },
              {
                name: "Power Clean",
                description: "Teaches explosive movement and requires speed in execution."
              },
              {
                name: "Push Jerk",
                description: "Progression of the push press involving forceful hip drive and drop."
              },
              {
                name: "Ring Dips",
                description: "Standard dip performed on gymnastic rings, focusing on chest and triceps."
              },
              {
                name: "Snatch",
                description: "The world's fastest lift requiring speed and coordination."
              },
              {
                name: "Snatch Pull",
                description: "An exercise that improves physique quickly when done properly."
              },
              {
                name: "Sumo Deadlift High Pull",
                description: "An explosive compound movement developing power."
              },
              {
                name: "Turkish Get-Up",
                description: "Functional strength exercise using a kettlebell, great for overall stability."
              },
              {
                name: "Wall Balls",
                description: "An all-around conditioning movement performed by throwing a ball at a wall."
              }
            ]
          },
          {
            category: "Legs",
            exercises: [
              {
                name: "Ankle Circles",
                description: "Simple exercise for calves and ankle mobility."
              },
              {
                name: "Balance Board",
                description: "Uses a balance board or wobble board to strengthen stabilizer muscles in calves."
              },
              {
                name: "Barbell Jump Squat",
                description: "No description available."
              },
              {
                name: "Barbell Lunges",
                description: "Classic lower body exercise for strength and balance."
              },
              {
                name: "Barbell Rear Lunges",
                description: "An advanced lunge variation."
              },
              {
                name: "Barbell Step Ups",
                description: "Builds coordination and leg strength."
              },
              {
                name: "Bicep Curl Squat",
                description: "Combines squat with bicep curl for full body workout."
              },
              {
                name: "Bridge",
                description: "Great for glutes and hamstrings, beginner to advanced."
              },
              {
                name: "Calf Raises with Bands",
                description: "Resistance band exercise targeting calves."
              },
              {
                name: "Calves Press on Leg Machine",
                description: "Uses leg press machine to work calves."
              },
              {
                name: "Donkey Calf Raises",
                description: "Old-school calf exercise requiring assistance."
              },
              {
                name: "Dumbbell Lunges",
                description: "Lunge using dumbbells for added resistance."
              },
              {
                name: "Dumbbell Rear Lunges",
                description: "Advanced lunge using dumbbells."
              },
              {
                name: "Dumbbell Squats",
                description: "Squats with dumbbells for added load."
              },
              {
                name: "Exercise Band Squats",
                description: "Squats using flexible exercise bands instead of weights."
              },
              {
                name: "Flutter Kicks",
                description: "Simple leg exercise to be done almost anywhere."
              },
              {
                name: "Forward Lunge with Bicep Curl",
                description: "Combines forward lunge with bicep curl."
              },
              {
                name: "Front Squat",
                description: "Squat variation with the barbell on front shoulders."
              },
              {
                name: "Front Squat to Bench",
                description: "Front squat variation with a bench for support."
              },
              {
                name: "Goblet Squat",
                description: "Front squat variation holding a dumbbell or kettlebell."
              },
              {
                name: "Hack Squat Machine",
                description: "Squat variation using a machine focusing on legs."
              },
              {
                name: "Hack Squats",
                description: "Squat variation emphasizing quadriceps."
              },
              {
                name: "Hip Adduction",
                description: "Strengthens hip flexors and thigh muscles."
              },
              {
                name: "Jefferson Squats",
                description: "Rarely used but excellent for building leg muscles."
              },
              {
                name: "Knee Circles",
                description: "Simple exercise and stretch for knees."
              },
              {
                name: "Lateral Lunge with Bicep Curl",
                description: "Advanced exercise combining lateral lunge and bicep curl."
              },
              {
                name: "Leg Extensions",
                description: "Classic machine exercise for quadriceps."
              },
              {
                name: "Leg Lift",
                description: "Stretches and strengthens glutes and hamstrings."
              },
              {
                name: "Leg Press Machine",
                description: "Key exercise for building leg strength."
              },
              {
                name: "Lying Squat",
                description: "Similar to leg press machine exercise."
              },
              {
                name: "Narrow Stance Hack Squats",
                description: "Hack squat variation targeting specific leg muscles."
              },
              {
                name: "Narrow Stance Leg Press",
                description: "Leg press variation targeting outer leg muscles."
              },
              {
                name: "One Leg Squat",
                description: "Isolates leg muscles for optimal training."
              },
              {
                name: "One Legged Kickback",
                description: "Targets glutes for toning and strengthening."
              },
              {
                name: "Overhead Squat",
                description: "Squat with barbell held overhead for added challenge."
              },
              {
                name: "Pile Squat",
                description: "Squat variation mimicking a pile driver movement."
              },
              {
                name: "Pistol Squats",
                description: "Trains strength, balance, and mobility on one leg."
              },
              {
                name: "Rocking Standing Calf Raise",
                description: "Uses a rocking motion to strengthen calves."
              },
              {
                name: "Seated Barbell Calf Raise",
                description: "Calf raise variation using a barbell."
              },
              {
                name: "Seated Calf Raise Machine",
                description: "Simple and effective calf exercise."
              },
              {
                name: "Seated Leg Curl",
                description: "Machine exercise targeting hamstrings."
              },
              {
                name: "Seated One Leg Calf Raise",
                description: "Calf raise performed one leg at a time."
              },
              {
                name: "Side Split Squats",
                description: "Works hip adductors and core strength."
              },
              {
                name: "Single Leg Squat",
                description: "Advanced single-leg squat requiring prior squat mastery."
              },
              {
                name: "Smith Machine Hack Squat",
                description: "Hack squat variation using smith machine."
              },
              {
                name: "Smith Machine Reverse Calf Raises",
                description: "Targets tibialis anterior muscle."
              },
              {
                name: "Smith Machine Squats",
                description: "Overall lower body exercise using smith machine."
              },
              {
                name: "Smith Standing Calf Raise",
                description: "No description available."
              },
              {
                name: "Speed Squats",
                description: "Squats done at faster pace with empty barbell."
              },
              {
                name: "Squat",
                description: "Main power exercise for muscle mass and strength."
              },
              {
                name: "Squat to Bench",
                description: "Squat variation using a bench for support."
              },
              {
                name: "Squat to Bench with Dumbbells",
                description: "Squat to bench variation with added dumbbells."
              },
              {
                name: "Squats",
                description: "Barbell squats for building leg muscles and strength."
              },
              {
                name: "Standing Barbell Calf Raise",
                description: "Calf raises performed standing with a barbell."
              },
              {
                name: "Standing Calf Raises",
                description: "Machine exercise to ensure proper form."
              },
              {
                name: "Standing Leg Curl",
                description: "Targets hamstrings."
              },
              {
                name: "Step Ups with Dumbbells",
                description: "Builds coordination and leg muscle."
              },
              {
                name: "Thigh Abductor",
                description: "Targets outer thigh muscles."
              },
              {
                name: "Thigh Adductor",
                description: "Targets inner thigh muscles."
              },
              {
                name: "Walking Lunges",
                description: "Dynamic lunge training legs and core."
              },
              {
                name: "Weighted Sissy Squat",
                description: "Assisted squat that effectively targets quads."
              },
              {
                name: "Wide Stance Squat",
                description: "Squat with wider stance to isolate inner thigh."
              },
              {
                name: "Zercher Squats",
                description: "Squat variation holding bar in front of body."
              }
            ]
          },
          {
            category: "Shoulders",
            exercises: [
              {
                name: "Arnold Press",
                description: "Variation of military press targeting rotator cuff."
              },
              {
                name: "Barbell Front Raises",
                description: "Works front shoulder muscles improving arm movement."
              },
              {
                name: "Bent Over Cable Lateral Raises",
                description: "Targets rear deltoids using cables."
              },
              {
                name: "Bent Over Rear Delt Row With Head On Bench",
                description: "Uses bench for support targeting rear deltoids."
              },
              {
                name: "Cable Front Raises",
                description: "Works front shoulder muscles using cables."
              },
              {
                name: "Cable Internal Rotation",
                description: "Targets small rotator cuff muscles."
              },
              {
                name: "Cable One Arm Lateral Raise",
                description: "No description available."
              },
              {
                name: "Cable Seated Rear Lateral Raise",
                description: "Variation targeting rear deltoids seated."
              },
              {
                name: "Cuban Press",
                description: "Targets rotator cuff muscles."
              },
              {
                name: "Dumbbell Front Raises",
                description: "Improves front shoulder muscles."
              },
              {
                name: "Dumbbell Lateral Raises",
                description: "Builds strong and defined shoulders."
              },
              {
                name: "Dumbbell Raise",
                description: "Targets shoulders effectively."
              },
              {
                name: "Dumbbell Shoulder Press",
                description: "Variation of military press focusing on deltoids."
              },
              {
                name: "Handstand Push-Ups",
                description: "Inverted vertical push-up targeting shoulders."
              },
              {
                name: "Lying One Arm Rear Lateral Raise",
                description: "Advanced rear deltoid exercise."
              },
              {
                name: "Lying Rear Lateral Raise",
                description: "Targets shoulders from lying position."
              },
              {
                name: "One Arm Shoulder Press",
                description: "Targets deltoids using one arm."
              },
              {
                name: "One Arm Upright Row",
                description: "Works traps and deltoids as a variation."
              },
              {
                name: "Power Jerk",
                description: "Explosive overhead press variation."
              },
              {
                name: "Pullover On Stability Ball With Weight",
                description: "Uses stability ball to stabilize core while working shoulders and back."
              },
              {
                name: "Push Press",
                description: "Weight training for anterior deltoid with leg drive."
              },
              {
                name: "Reverse Fly Machine",
                description: "No description available."
              },
              {
                name: "Seated Barbell Shoulder Press",
                description: "No description available."
              },
              {
                name: "Seated Dumbbell Shoulder Press",
                description: "No description available."
              },
              {
                name: "Seated Military Shoulder Press",
                description: "Primarily works deltoids seated."
              },
              {
                name: "Shoulder Press",
                description: "Overhead press targeting shoulder muscles."
              },
              {
                name: "Shoulder Press Machine",
                description: "Machine version of shoulder press."
              }
            ]
          },
          {
            category: "Triceps",
            exercises: [
              {
                name: "Barbell Incline Triceps Extension",
                description: "Uses gravity to increase resistance for triceps."
              },
              {
                name: "Bench Dips",
                description: "Basic and effective triceps builder using body weight."
              },
              {
                name: "Cable Incline Triceps Extension",
                description: "Isolates triceps using cables."
              },
              {
                name: "Cable One Arm Pushdown",
                description: "No description available."
              },
              {
                name: "Cable Pushdown",
                description: "Isolates and works triceps muscles."
              },
              {
                name: "Close Grip Smith Machine Bench Press",
                description: "Uses close grip to isolate triceps."
              },
              {
                name: "Close Triceps Push-Up",
                description: "Push-up variation targeting triceps."
              },
              {
                name: "Close-Grip Bench Press",
                description: "Variation putting more pressure on triceps."
              },
              {
                name: "Decline Close Grip Bench To Skull Crusher",
                description: "Combines close grip bench press with triceps extension."
              },
              {
                name: "Decline EZ Bar Triceps Extension",
                description: "Uses decline bench and curved bar for triceps."
              },
              {
                name: "Decline Triceps Extension",
                description: "Combines decline bench and dumbbells for triceps."
              },
              {
                name: "French Press",
                description: "No description available."
              },
              {
                name: "Incline Pushdown",
                description: "Isolates triceps using cables."
              },
              {
                name: "Incline Triceps Extensions",
                description: "Uses incline bench to target triceps."
              },
              {
                name: "JM Press",
                description: "Advanced triceps exercise named after inventor J.M. Blakley."
              },
              {
                name: "Kneeling Concentration Triceps Extension",
                description: "Limits range of motion to increase effectiveness."
              },
              {
                name: "Kneeling Triceps Extension",
                description: "Allows better triceps isolation."
              },
              {
                name: "Low Triceps Extension",
                description: "Performed lying on seated row station."
              },
              {
                name: "Lying Close Grip Triceps Press to Chin",
                description: "Classic triceps builder."
              },
              {
                name: "Lying Close-Grip Triceps Extension Behind the Head",
                description: "Uses barbell or EZ curl bar for triceps."
              },
              {
                name: "Lying Supine Two Arm Triceps Extension",
                description: "Targets triceps from supine position."
              },
              {
                name: "Lying Triceps Extension",
                description: "Basic triceps extension done lying down."
              },
              {
                name: "Lying Triceps Extension Across Face",
                description: "No description available."
              },
              {
                name: "Lying Triceps Extension Using Cable Machine",
                description: "Cable variation of lying triceps extension."
              },
              {
                name: "Lying Triceps Press",
                description: "No description available."
              },
              {
                name: "Narrow Grip Bench Press",
                description: "Bench press with narrow grip targeting triceps."
              },
              {
                name: "Old School Reverse Extensions",
                description: "Targets triceps."
              },
              {
                name: "One Arm Tricep Cable Extensions",
                description: "No description available."
              },
              {
                name: "One Arm Tricep Extensions",
                description: "Isolation exercise for one arm triceps."
              },
              {
                name: "Reverse Grip Triceps Pushdown",
                description: "Variation of pushdown with reverse grip."
              },
              {
                name: "Reverse Triceps Bench Press",
                description: "No description available."
              },
              {
                name: "Seated Bent-Over One Arm Triceps Extension",
                description: "Targets triceps with one arm bent over."
              },
              {
                name: "Seated Overhead Triceps Extension",
                description: "Overhead triceps extension while seated."
              },
              {
                name: "Tricep Dip Machine",
                description: "Machine exercise for triceps dips."
              },
              {
                name: "Tricep Dips",
                description: "Bodyweight exercise targeting triceps."
              },
              {
                name: "Triceps Extensions",
                description: "General exercise targeting triceps."
              },
              {
                name: "Triceps Kickback",
                description: "Isolates triceps with dumbbells."
              },
              {
                name: "Triceps Pushdown",
                description: "Cable exercise for triceps."
              },
              {
                name: "Triceps Pushdown with Rope",
                description: "Cable pushdown using rope attachment."
              },
              {
                name: "Triceps Pushdown with V Bar",
                description: "Cable pushdown using V-bar attachment."
              }
            ]
          }
        ]   
    
    const container = document.getElementById('exercise-container')
    
    exerciseCategories.forEach((items, index) => {
      console.log(`Rendering category: ${items.category}`);
      
      const catDiv = document.createElement('div');
      catDiv.classList.add('category');
  
      const catTitle = document.createElement('h2');
      catTitle.textContent = items.category;
      catDiv.appendChild(catTitle);
  
      items.exercises.forEach(exercise => {
        const exDiv = document.createElement('div');
        exDiv.classList.add('exercise');
  
        const exName = document.createElement('div');
        exName.classList.add('exercise-name');
        exName.textContent = exercise.name;
  
        const exDesc = document.createElement('div');
        exDesc.classList.add('exercise-description');
        exDesc.textContent = exercise.description;
  
        exDiv.appendChild(exName);
        exDiv.appendChild(exDesc);
        catDiv.appendChild(exDiv);
      });
  
      container.appendChild(catDiv);
    });
