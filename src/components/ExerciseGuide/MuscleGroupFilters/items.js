/* Full Body */
import burpees from "../../../assets/burpees.gif"

/* Chest */
import pushup from "../../../assets/Push-Up.gif"
import pecFly from "../../../assets/Pec-Fly.gif"
import bench_press from "../../../assets/Bench-Press.gif"
import dumbbell_fly from "../../../assets/Dumbbell_fly.gif"
import dumbbell_benchPress from "../../../assets/Dumbbell-Press.gif"
import chest_press from "../../../assets/Chest-Press.gif"
import cable_crossover from "../../../assets/Cable-Crossover.gif"


/*Shoulders */
import Lateral_raise from "../../../assets/Lateral-Raise.gif"
import cableLateral_raise from "../../../assets/Cable-Lateral-Raise.gif"
import Shoulder_press from "../../../assets/Shoulder-Press.gif"


/*Back */
import front_pulldown from "../../../assets/Front-Pulldown.gif"
import pullUp from "../../../assets/Pull-up.gif"
import lat_pulldown from "../../../assets/Lat-Pulldown.gif"
import cable_row from "../../../assets/Seated-Cable-Row.gif"


/*Arms */

/* Biceps */
import dumbbell_curls from "../../../assets/Dumbbell-Curl.gif"
import bicep_curls from "../../../assets/Lever-Bicep-Curl.gif"
/* Triceps */
import pushdown from "../../../assets/Pushdown.gif"
import rear_drive from "../../../assets/Cable-Rear-Drive.gif"
import tricep_dips from "../../../assets/Triceps-dips.gif"

/* Forearms */
import wrist_curls from "../../../assets/Dumbbell-Seated-Wrist-Curl.gif"
import hammer_curls from "../../../assets/Seated-Hammer-Curl.gif"


/* Abs */
import cross_crunch from "../../../assets/Cross-Crunch.gif"
import mountain_climber from "../../../assets/Cross-Body-Mountain-Climber.gif"
import leg_raises from "../../../assets/Leg-Raises.gif"
import plank from "../../../assets/plank.gif"




/* Legs */
import squat from "../../../assets/BARBELL-SQUAT.gif"
import leg_press from "../../../assets/Leg-Press.gif"
import leg_curl from "../../../assets/Leg-Curl.gif"
import leg_extension from "../../../assets/LEG-EXTENSION.gif"
import lunges from "../../../assets/lunges.gif"
import treadmill from "../../../assets/Treadmill.gif"
import bike from "../../../assets/Bike.gif"
import jump_rope from "../../../assets/Jump-Rope.gif"
import wall_sit from "../../../assets/Wall-Sit.png"


export const items = [
    /* Full Body */
    {
      name: "Burpees",
      category: "Full Body",
      image: burpees,
      Equipment: "None"

    },

    /* Chest */
    { 
      name: "Push Up",
      category: "Chest",
      image: pushup,
      Equipment: "None"

      
    },
    { 
      name: "Pec-Fly",
      category: "Chest",
      image: pecFly,
      Equipment: "Machine"

      
    },



    {
      name: "Bench Press",
      category: "Chest",
      image: bench_press,
      Equipment: "Barbell, Bench"

      
    },


    {
      name: "Dumbbell-Fly",
      category: "Chest",
      image: dumbbell_fly,
      Equipment: "Dumbbells, Bench"

      
    },

    {
      name: "Dumbbell Bench Press",
      category: "Chest",
      image: dumbbell_benchPress,
      Equipment: "Dumbbells, Bench"

      
    },

    {
      name: "Chest Press",
      category: "Chest",
      image: chest_press,
      Equipment: "Machine"

      
    },

    {
      name: "Cable Crossover",
      category: "Chest",
      image: cable_crossover,
      Equipment: "Cable"

      
    },


    /* Shoulders */
    {
      name: "Dumbbell Lateral Raises",
      category: "Shoulders",
      image: Lateral_raise,
      Equipment: "Dumbbells"

      
    },

    {
      name: "Dumbbell Shoulder Press",
      category: "Shoulders",
      image: Shoulder_press,
      Equipment: "Dumbbells"

      
    },

    {
      name: "Cable Lateral Raises",
      category: "Shoulders",
      image: cableLateral_raise,
      Equipment: "Cable"

      
    },

    /* Back */

    
    {
      name: "Front Pulldown",
      category: "Back",
      image: front_pulldown,
      Equipment: "Machine"

      
    },

    {
      name: "Pull Up",
      category: "Back",
      image: pullUp,
      Equipment: "Pull Up Bar"

      
    },


    {
    name: "Lat Pulldown",
    category: "Back",
    image: lat_pulldown,
    Equipment: "Cable, Bar"

    
  },

  {
    name: "Seated Cable Row",
    category: "Back",
    image: cable_row,
    Equipment: "Cable"

    
  },


  /* Arms */
  /* Biceps */
  {
    name: "Dumbbell Curls",
    category: "Biceps",
    image: dumbbell_curls,
    Equipment: "Dumbbells"

    
  },

  {
    name: "Bicep Curls",
    category: "Biceps",
    image: bicep_curls,
    Equipment: "Machine"

    
  },

  /* Triceps */
  {
    name: "Tricep Dips",
    category: "Triceps",
    image: tricep_dips,
    Equipment: "None" 
  },

  {
    name: "Cable Pushdown",
    category: "Triceps",
    image: pushdown,
    Equipment: "Cable" 
  },

  

  {
    name: "Cable Rear Drive",
    category: "Triceps",
    image: rear_drive,
    Equipment: "Cable"

    
  },

  /* Forarm */
  {
    name: "Dumbbell Seated Wrist Curl ",
    category: "Forearm",
    image: wrist_curls,
    Equipment: "Dumbbells"

    
  },

  {
    name: "Seated Hammer Curl",
    category: "Forearm",
    image: hammer_curls,
    Equipment: "Dumbbells"

    
  },


  /* Abs */
  {
    name: "Plank",
    category: "Abdominals",
    image:  plank,
    Equipment: "None"

    
  },
  {
    name: "Cross Crunches",
    category: "Abdominals",
    image:  cross_crunch,
    Equipment: "None"

    
  },

  {
    name: "Cross Body Mountain Climber",
    category: "Abdominals",
    image: mountain_climber,
    Equipment: "None"

    
  },

  {
    name: "Leg Raises",
    category: "Abdominals",
    image: leg_raises,
    Equipment: "None"

    
  },

  /* Legs */
  {
    name: "Wall Sit",
    category: "Legs",
    image:  wall_sit,
    Equipment: "None"

    
  },

  {
    name: "Treadmill",
    category: "Legs",
    image:  treadmill,
    Equipment: "Treadmill"

    
  },

  {
    name: "Bike",
    category: "Legs",
    image: bike,
    Equipment: "Stationary Bike"

    
  },

  {
    name: "Jump Rope",
    category: "Legs",
    image: jump_rope,
    Equipment: "Jump Rope"

    
  },

  {
    name: "Lunges",
    category: "Legs",
    image:  lunges,
    Equipment: "None"

    
  },

  {
    name: "Barbell Squat",
    category: "Legs",
    image: squat,
    Equipment: "Barbell"

    
  },

  {
    name: "Leg Press",
    category: "Legs",
    image: leg_press,
    Equipment: "Machine"

    
  },

  {
    name: "Leg Curl",
    category: "Legs",
    image: leg_curl,
    Equipment: "Machine"

    
  },

  {
    name: "Leg Extension",
    category: "Legs",
    image: leg_extension,
    Equipment: "Machine"

    
  },



    

    


    
    
    
  ];
  