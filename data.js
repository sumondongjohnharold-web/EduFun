export const gameData = {
  math: {
    title: "Math Logic",
    questions: (function() {
      const baseQuestions = [
        { question: "What is 8 × 7?", answers: ["56", "54", "63", "49"], correct: "56", hint: "Try counting by 8s seven times, or break it down: (8 × 5) + (8 × 2) = 40 + 16" },
        { question: "What is 121 ÷ 11?", answers: ["10", "11", "12", "13"], correct: "11", hint: "Think: 11 times what number equals 121? Or notice that 121 = 11 × 11" },
        { question: "What is 9 + 8 - 3?", answers: ["14", "17", "13", "15"], correct: "14", hint: "Work left to right: First add 9 + 8 = 17, then subtract 3 from 17" },
        { question: "What is 25% of 200?", answers: ["25", "50", "75", "100"], correct: "50", hint: "25% means one quarter. Divide 200 by 4, or multiply 200 × 0.25" },
        { question: "What is 15 × 3 + 10?", answers: ["45", "50", "55", "60"], correct: "55", hint: "Remember order of operations! Do multiplication first: 15 × 3 = 45, then add 10" },
        { question: "What is 12 × 12?", answers: ["144", "124", "132", "156"], correct: "144", hint: "Think of a dozen dozens" },
        { question: "What is 45 + 67?", answers: ["112", "102", "122", "92"], correct: "112", hint: "Add tens first, then ones" },
        { question: "What is 100 - 37?", answers: ["63", "73", "53", "67"], correct: "63", hint: "Subtract from 100 step by step" },
        { question: "What is 15 × 4?", answers: ["60", "50", "70", "55"], correct: "60", hint: "15 × 4 = 15 × 2 × 2" },
        { question: "What is 81 ÷ 9?", answers: ["9", "8", "10", "7"], correct: "9", hint: "9 times what equals 81?" },
        { question: "What is 23 + 19 + 8?", answers: ["50", "48", "52", "46"], correct: "50", hint: "Add 23 and 19 first" },
        { question: "What is 7 × 8?", answers: ["56", "54", "49", "63"], correct: "56", hint: "Think of 7 groups of 8" },
        { question: "What is 144 ÷ 12?", answers: ["12", "11", "13", "10"], correct: "12", hint: "12 times what equals 144?" },
        { question: "What is 30% of 150?", answers: ["45", "50", "40", "55"], correct: "45", hint: "30% = 0.3, multiply by 150" },
        { question: "What is 5² + 3²?", answers: ["34", "32", "36", "30"], correct: "34", hint: "5² = 25, 3² = 9" },
        { question: "What is 18 × 5?", answers: ["90", "80", "100", "85"], correct: "90", hint: "18 × 5 = 18 × 10 ÷ 2" },
        { question: "What is 72 - 28?", answers: ["44", "46", "42", "48"], correct: "44", hint: "Subtract 20, then 8" },
        { question: "What is 13 + 27?", answers: ["40", "38", "42", "36"], correct: "40", hint: "Add to make 10s first" },
        { question: "What is 11 × 9?", answers: ["99", "88", "110", "100"], correct: "99", hint: "11 × 9 = 99" },
        { question: "What is 156 ÷ 12?", answers: ["13", "12", "14", "15"], correct: "13", hint: "12 times what equals 156?" },
        { question: "What is 20% of 250?", answers: ["50", "45", "55", "60"], correct: "50", hint: "20% = 1/5" },
        { question: "What is 9 + 16 + 25?", answers: ["50", "48", "52", "46"], correct: "50", hint: "These are perfect squares" },
        { question: "What is 16 × 3?", answers: ["48", "46", "50", "44"], correct: "48", hint: "16 × 3 = (10 + 6) × 3" },
        { question: "What is 200 - 87?", answers: ["113", "123", "103", "117"], correct: "113", hint: "Subtract from 200" },
        { question: "What is 14 × 7?", answers: ["98", "94", "102", "96"], correct: "98", hint: "14 × 7 = 7 × 2 × 7" }
      ];
      const expanded = [];
      for (let i = 0; i < 8; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  },

  puzzles: {
    title: "Puzzles",
    questions: (function() {
      const baseQuestions = [
        { question: "I have cities, but no houses. I have mountains, but no trees. I have water, but no fish. What am I?", answers: ["A Dream", "A Book", "A Map", "A Globe"], correct: "A Map", hint: "Think of something that shows places but isn't the actual place itself. It's flat and shows geography." },
        { question: "What has an eye, but cannot see?", answers: ["A Storm", "A Needle", "A Potato", "A Camera"], correct: "A Needle", hint: "This object is used for sewing. The 'eye' is a small hole where thread passes through." },
        { question: "What has hands but can't clap?", answers: ["A Clock", "A Tree", "A Monkey", "A Robot"], correct: "A Clock", hint: "Think of something that has hands that move in circles to show time." },
        { question: "What goes up but never comes down?", answers: ["Smoke", "Age", "Rain", "Balloon"], correct: "Age", hint: "This is something about you that increases every year on your birthday and can't decrease." },
        { question: "What gets wetter as it dries?", answers: ["Towel", "Sponge", "Water", "Soap"], correct: "Towel", hint: "You use this after a shower. As it dries you, it absorbs water and becomes wet itself." },
        { question: "What has keys but no locks?", answers: ["A Piano", "A Map", "A Door", "A Box"], correct: "A Piano", hint: "This musical instrument has many keys" },
        { question: "What can travel around the world while staying in a corner?", answers: ["A Stamp", "A Letter", "A Coin", "A Book"], correct: "A Stamp", hint: "Found on envelopes" },
        { question: "What has a head and a tail but no body?", answers: ["A Coin", "A Snake", "A Fish", "A Lizard"], correct: "A Coin", hint: "Used for payment" },
        { question: "What gets broken without being held?", answers: ["A Promise", "A Glass", "A Plate", "A Vase"], correct: "A Promise", hint: "Not a physical object" },
        { question: "What runs but never walks?", answers: ["Water", "A Horse", "A Person", "A Car"], correct: "Water", hint: "Found in rivers" },
        { question: "What has teeth but cannot bite?", answers: ["A Comb", "A Shark", "A Dog", "A Saw"], correct: "A Comb", hint: "Used for hair" },
        { question: "What can you catch but not throw?", answers: ["A Cold", "A Ball", "A Fish", "A Stick"], correct: "A Cold", hint: "An illness" },
        { question: "What goes through towns but never moves?", answers: ["A Road", "A Car", "A Person", "A Bus"], correct: "A Road", hint: "Connects places" },
        { question: "What has a neck but no head?", answers: ["A Bottle", "A Person", "A Giraffe", "A Shirt"], correct: "A Bottle", hint: "Container for liquids" },
        { question: "What can fill a room but takes no space?", answers: ["Light", "Air", "Water", "Sound"], correct: "Light", hint: "Comes from the sun" },
        { question: "What belongs to you but others use it more?", answers: ["Your Name", "Your Phone", "Your Car", "Your House"], correct: "Your Name", hint: "People call you by this" },
        { question: "What has many rings but no fingers?", answers: ["A Tree", "A Person", "A Phone", "A Door"], correct: "A Tree", hint: "Count these to find age" },
        { question: "What starts with E, ends with E, has one letter?", answers: ["Envelope", "Eye", "Eagle", "Ear"], correct: "Envelope", hint: "Contains mail" },
        { question: "What has four legs but cannot walk?", answers: ["A Table", "A Dog", "A Chair", "A Person"], correct: "A Table", hint: "Furniture" },
        { question: "What is full of holes but holds water?", answers: ["A Sponge", "A Bucket", "A Cup", "A Glass"], correct: "A Sponge", hint: "Used for cleaning" }
      ];
      const expanded = [];
      for (let i = 0; i < 10; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  },

  spelling: {
    title: "Spelling",
    questions: (function() {
      const baseQuestions = [
        { question: "Which spelling is correct?", answers: ["Accomodate", "Acommodate", "Accommodate", "Acomodate"], correct: "Accommodate", hint: "This word has double 'c' and double 'm'. Think: It needs to accommodate two of each letter!" },
        { question: "Which spelling is correct?", answers: ["Neccessary", "Necessary", "Necesary", "Neccesary"], correct: "Necessary", hint: "Remember: one 'c' and two 's' letters. A shirt has one Collar and two Sleeves - that's NeCeSSary!" },
        { question: "Choose the correct word:", answers: ["Recieve", "Receive", "Recive", "Receeve"], correct: "Receive", hint: "Remember the rule: 'I before E except after C'. This word has a 'c' before, so E comes before I." },
        { question: "Choose the correct word:", answers: ["Occured", "Occurred", "Ocurred", "Ocurred"], correct: "Occurred", hint: "When adding '-ed' to a word ending in a single consonant, double the consonant: occur + red = occurred" },
        { question: "Which spelling is correct?", answers: ["Separate", "Seperate", "Seperete", "Separat"], correct: "Separate", hint: "There's 'a rat' in separate! Remember: sep-A-rate, not sep-E-rate." },
        { question: "Which spelling is correct?", answers: ["Embarass", "Embarrass", "Embarras", "Embaras"], correct: "Embarrass", hint: "Double R, double S" },
        { question: "Which spelling is correct?", answers: ["Maintainance", "Maintenance", "Maintenence", "Maintanance"], correct: "Maintenance", hint: "Maintain + enance" },
        { question: "Which spelling is correct?", answers: ["Occassion", "Occasion", "Ocasion", "Occation"], correct: "Occasion", hint: "Double C, single S" },
        { question: "Which spelling is correct?", answers: ["Privilege", "Priviledge", "Privilage", "Privilige"], correct: "Privilege", hint: "I before E" },
        { question: "Which spelling is correct?", answers: ["Lisence", "License", "Lisense", "Licence"], correct: "License", hint: "S before E in American English" },
        { question: "Which spelling is correct?", answers: ["Begining", "Beginning", "Beginnig", "Begginning"], correct: "Beginning", hint: "Double N" },
        { question: "Which spelling is correct?", answers: ["Comittee", "Committee", "Commitee", "Comitee"], correct: "Committee", hint: "Double M, double T, double E" },
        { question: "Which spelling is correct?", answers: ["Calender", "Calendar", "Calendor", "Calander"], correct: "Calendar", hint: "A before R" },
        { question: "Which spelling is correct?", answers: ["Conscience", "Conscince", "Consience", "Consciense"], correct: "Conscience", hint: "Science with CON" },
        { question: "Which spelling is correct?", answers: ["Tommorrow", "Tomorrow", "Tommorow", "Tomorow"], correct: "Tomorrow", hint: "One M, double R" },
        { question: "Which spelling is correct?", answers: ["Excercise", "Exercise", "Exercize", "Exersise"], correct: "Exercise", hint: "C before I" },
        { question: "Which spelling is correct?", answers: ["Goverment", "Government", "Governmant", "Govenment"], correct: "Government", hint: "Govern + ment" },
        { question: "Which spelling is correct?", answers: ["Independant", "Independent", "Independant", "Indipendent"], correct: "Independent", hint: "Ends with ENT" },
        { question: "Which spelling is correct?", answers: ["Jewelery", "Jewelry", "Jewlery", "Jewellry"], correct: "Jewelry", hint: "American spelling, one L" },
        { question: "Which spelling is correct?", answers: ["Mischievous", "Mischevious", "Mischievious", "Mischeivous"], correct: "Mischievous", hint: "IE before vous" }
      ];
      const expanded = [];
      for (let i = 0; i < 10; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  },

  science: {
    title: "Science",
    questions: (function() {
      const baseQuestions = [
        { question: "What is the chemical symbol for water?", answers: ["O2", "H2O", "CO2", "HO"], correct: "H2O", hint: "Water has 2 hydrogen atoms and 1 oxygen atom. The '2' comes after the H." },
        { question: "Which planet is known as the Red Planet?", answers: ["Venus", "Jupiter", "Mars", "Saturn"], correct: "Mars", hint: "This planet appears reddish due to iron oxide (rust) on its surface. It's the 4th planet from the Sun." },
        { question: "What gas do humans need to breathe?", answers: ["Carbon Dioxide", "Nitrogen", "Oxygen", "Hydrogen"], correct: "Oxygen", hint: "Our lungs absorb this gas from the air. It makes up about 21% of Earth's atmosphere." },
        { question: "What part of the plant makes food?", answers: ["Root", "Leaf", "Stem", "Flower"], correct: "Leaf", hint: "This green part contains chlorophyll and performs photosynthesis using sunlight." },
        { question: "What force keeps us on the ground?", answers: ["Friction", "Magnetism", "Gravity", "Energy"], correct: "Gravity", hint: "This force pulls objects toward the center of the Earth. It's why things fall down, not up!" },
        { question: "How many bones are in the adult human body?", answers: ["206", "208", "204", "210"], correct: "206", hint: "Just over 200" },
        { question: "What is the largest organ in the human body?", answers: ["Skin", "Liver", "Heart", "Brain"], correct: "Skin", hint: "It covers your entire body" },
        { question: "What is the speed of light?", answers: ["300,000 km/s", "250,000 km/s", "350,000 km/s", "200,000 km/s"], correct: "300,000 km/s", hint: "About 300 million meters per second" },
        { question: "What is the smallest unit of life?", answers: ["Cell", "Atom", "Molecule", "Tissue"], correct: "Cell", hint: "Building block of all living things" },
        { question: "How many planets are in our solar system?", answers: ["8", "7", "9", "10"], correct: "8", hint: "Pluto is no longer counted" },
        { question: "What is the center of an atom called?", answers: ["Nucleus", "Electron", "Proton", "Neutron"], correct: "Nucleus", hint: "Contains protons and neutrons" },
        { question: "What is the boiling point of water?", answers: ["100°C", "90°C", "110°C", "120°C"], correct: "100°C", hint: "At sea level" },
        { question: "What gas do plants give off during photosynthesis?", answers: ["Oxygen", "Carbon Dioxide", "Nitrogen", "Hydrogen"], correct: "Oxygen", hint: "What we breathe" },
        { question: "How long does it take Earth to orbit the Sun?", answers: ["365 days", "360 days", "370 days", "355 days"], correct: "365 days", hint: "One year" },
        { question: "What is the hardest natural substance?", answers: ["Diamond", "Gold", "Iron", "Steel"], correct: "Diamond", hint: "Made of carbon" },
        { question: "What is the largest planet in our solar system?", answers: ["Jupiter", "Saturn", "Neptune", "Uranus"], correct: "Jupiter", hint: "The giant gas planet" },
        { question: "What is the chemical formula for salt?", answers: ["NaCl", "H2O", "CO2", "NaOH"], correct: "NaCl", hint: "Sodium Chloride" },
        { question: "How many chromosomes do humans have?", answers: ["46", "44", "48", "42"], correct: "46", hint: "23 pairs" },
        { question: "What is the powerhouse of the cell?", answers: ["Mitochondria", "Nucleus", "Ribosome", "Chloroplast"], correct: "Mitochondria", hint: "Produces energy" },
        { question: "What is the closest star to Earth?", answers: ["The Sun", "Proxima Centauri", "Sirius", "Alpha Centauri"], correct: "The Sun", hint: "We see it every day" }
      ];
      const expanded = [];
      for (let i = 0; i < 10; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  },

  english: {
    title: "English Grammar",
    questions: (function() {
      const baseQuestions = [
        { question: "Choose the correct sentence:", answers: ["He go to school everyday.", "He goes to school every day.", "He going to school every day.", "He gone to school everyday."], correct: "He goes to school every day.", hint: "Subject-verb agreement: 'He' is singular, so use 'goes'. 'Every day' is two words when it means each day." },
        { question: "Select the correct form:", answers: ["She don't like apples.", "She doesn't likes apples.", "She doesn't like apples.", "She don't likes apples."], correct: "She doesn't like apples.", hint: "Use 'doesn't' with third-person singular (he/she/it). The verb after 'doesn't' should be in base form." },
        { question: "Pick the correct spelling:", answers: ["Definately", "Definitely", "Definetely", "Definitly"], correct: "Definitely", hint: "Remember: 'finite' is in the middle of 'definitely'." },
        { question: "What is the plural of 'child'?", answers: ["childs", "children", "childes", "childrens"], correct: "children", hint: "This is an irregular plural noun. Don't add 's' or 'es'." },
        { question: "Which sentence is in the past tense?", answers: ["He walks to school.", "He is walking to school.", "He walked to school.", "He walking to school."], correct: "He walked to school.", hint: "Past tense verbs often end in '-ed' for regular verbs." },
        { question: "Choose the correct sentence:", answers: ["I seen him yesterday.", "I saw him yesterday.", "I have saw him yesterday.", "I had saw him yesterday."], correct: "I saw him yesterday.", hint: "Past tense of see" },
        { question: "Choose the correct sentence:", answers: ["She has went to the store.", "She have gone to the store.", "She has gone to the store.", "She has go to the store."], correct: "She has gone to the store.", hint: "Present perfect tense" },
        { question: "Which is the correct plural?", answers: ["Tomatos", "Tomatoes", "Tomatoe", "Tomatoss"], correct: "Tomatoes", hint: "Add ES to words ending in O" },
        { question: "Choose the correct form:", answers: ["Their going to the park.", "They're going to the park.", "There going to the park.", "Thier going to the park."], correct: "They're going to the park.", hint: "They are = They're" },
        { question: "Which is correct?", answers: ["I have less friends.", "I have fewer friends.", "I have lesser friends.", "I have few friends."], correct: "I have fewer friends.", hint: "Use fewer for countable items" },
        { question: "Choose the correct sentence:", answers: ["Between you and I", "Between you and me", "Between you and myself", "Between you and we"], correct: "Between you and me", hint: "Use object pronoun after preposition" },
        { question: "Which is correct?", answers: ["Who's book is this?", "Whose book is this?", "Who book is this?", "Whos' book is this?"], correct: "Whose book is this?", hint: "Whose shows possession" },
        { question: "Choose the correct form:", answers: ["I could of done it.", "I could have done it.", "I could of did it.", "I could has done it."], correct: "I could have done it.", hint: "Could have, not could of" },
        { question: "Which is correct?", answers: ["Each student have a book.", "Each student has a book.", "Each students has a book.", "Each student having a book."], correct: "Each student has a book.", hint: "Each is singular" },
        { question: "Choose the correct sentence:", answers: ["Me and John went to the store.", "John and me went to the store.", "John and I went to the store.", "I and John went to the store."], correct: "John and I went to the store.", hint: "Use I as subject" },
        { question: "Which is correct?", answers: ["Its a beautiful day.", "It's a beautiful day.", "Its' a beautiful day.", "It is' a beautiful day."], correct: "It's a beautiful day.", hint: "It's = It is" },
        { question: "Choose the correct form:", answers: ["You should of called.", "You should have called.", "You should has called.", "You should off called."], correct: "You should have called.", hint: "Should have, not should of" },
        { question: "Which is correct?", answers: ["The dog wagged it's tail.", "The dog wagged its tail.", "The dog wagged its' tail.", "The dog wagged it tail."], correct: "The dog wagged its tail.", hint: "Its = possessive" },
        { question: "Choose the correct sentence:", answers: ["She don't know nothing.", "She doesn't know nothing.", "She doesn't know anything.", "She don't know anything."], correct: "She doesn't know anything.", hint: "Avoid double negatives" },
        { question: "Which is correct?", answers: ["Your right about that.", "You're right about that.", "Youre right about that.", "Your'e right about that."], correct: "You're right about that.", hint: "You're = You are" }
      ];
      const expanded = [];
      for (let i = 0; i < 10; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  },

  civilservice: {
    title: "Civil Service Exam",
    questions: (function() {
      const baseQuestions = [
        { question: "What is the capital city of the Philippines?", answers: ["Quezon City", "Manila", "Makati", "Cebu"], correct: "Manila", hint: "It's the national capital, though not the largest city by population." },
        { question: "Choose the synonym of 'BENEVOLENT':", answers: ["Malicious", "Kind", "Angry", "Fearful"], correct: "Kind", hint: "Think about someone who is charitable and well-meaning." },
        { question: "If a train travels 120 km in 2 hours, what is its average speed?", answers: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], correct: "60 km/h", hint: "Speed = distance divided by time." },
        { question: "Solve for x: 2x + 5 = 17", answers: ["5", "6", "7", "8"], correct: "6", hint: "Subtract 5 from both sides, then divide by 2." },
        { question: "What is the area of a rectangle with length 8 cm and width 5 cm?", answers: ["30 cm²", "35 cm²", "40 cm²", "45 cm²"], correct: "40 cm²", hint: "Area = length × width." },
        { question: "If 3 apples cost ₱45, how much do 7 apples cost?", answers: ["₱95", "₱105", "₱115", "₱125"], correct: "₱105", hint: "First find the cost per apple, then multiply by 7." },
        { question: "What is 25% of 80?", answers: ["15", "18", "20", "22"], correct: "20", hint: "25% is 0.25; multiply by 80." },
        { question: "Simplify: 12/18", answers: ["1/2", "2/3", "3/4", "4/5"], correct: "2/3", hint: "Divide numerator and denominator by 6." },
        { question: "A box contains 50 balls, 20 are red. What percentage are red?", answers: ["30%", "35%", "40%", "45%"], correct: "40%", hint: "Percentage = (part/total) × 100." },
        { question: "Solve: 4 × (3 + 2) = ?", answers: ["20", "24", "28", "32"], correct: "20", hint: "First add inside the parentheses, then multiply." },
        { question: "What is the perimeter of a square with side 6 cm?", answers: ["18 cm", "20 cm", "24 cm", "30 cm"], correct: "24 cm", hint: "Perimeter = 4 × side." },
        { question: "If x = 5, what is 3x - 2?", answers: ["11", "13", "15", "17"], correct: "13", hint: "Substitute x and calculate." },
        { question: "A worker earns ₱500 per day. How much in 5 days?", answers: ["₱2,000", "₱2,500", "₱3,000", "₱3,500"], correct: "₱2,500", hint: "Multiply daily wage by number of days." },
        { question: "What is 40% of 150?", answers: ["50", "55", "60", "65"], correct: "60", hint: "40% is 0.4; multiply by 150." },
        { question: "Solve for y: y/4 = 9", answers: ["27", "32", "36", "40"], correct: "36", hint: "Multiply both sides by 4." },
        { question: "The area of a circle is 78.5 cm². What is the radius? (Use π ≈ 3.14)", answers: ["4 cm", "5 cm", "6 cm", "7 cm"], correct: "5 cm", hint: "Area = πr²; solve for r." },
        { question: "If 5 books cost ₱200, what is the cost of 1 book?", answers: ["₱35", "₱40", "₱45", "₱50"], correct: "₱40", hint: "Divide total cost by number of books." },
        { question: "What is 2/5 as a decimal?", answers: ["0.2", "0.3", "0.4", "0.5"], correct: "0.4", hint: "Divide 2 by 5." },
        { question: "A triangle has sides 3, 4, and 5. What type is it?", answers: ["Equilateral", "Isosceles", "Right-angled", "Scalene"], correct: "Right-angled", hint: "Check Pythagoras: 3² + 4² = 5²." },
        { question: "Solve: 7 + 8 × 2 = ?", answers: ["22", "23", "30", "32"], correct: "23", hint: "Multiplication before addition." },
        { question: "What is the volume of a cube with side 4 cm?", answers: ["32 cm³", "48 cm³", "64 cm³", "80 cm³"], correct: "64 cm³", hint: "Volume = side³." },
        { question: "If a shirt costs ₱300 after 20% discount, what was the original price?", answers: ["₱350", "₱360", "₱375", "₱400"], correct: "₱375", hint: "Let x be original; x - 0.2x = 300." },
        { question: "What is 50% of 120?", answers: ["50", "55", "60", "65"], correct: "60", hint: "Half of 120." },
        { question: "Solve: 9 - (4 + 3) = ?", answers: ["2", "4", "6", "8"], correct: "2", hint: "First add inside parentheses, then subtract." },
        { question: "The sum of angles in a triangle is?", answers: ["180°", "270°", "360°", "90°"], correct: "180°", hint: "Standard geometry rule." },
        { question: "If 2x = 10, what is x?", answers: ["3", "4", "5", "6"], correct: "5", hint: "Divide both sides by 2." },
        { question: "What is 15% of 200?", answers: ["20", "25", "30", "35"], correct: "30", hint: "Calculate 15% as 0.15 and multiply by 200." },
        { question: "If a train travels 120 km in 2 hours, what is its average speed?", answers: ["50 km/h", "60 km/h", "70 km/h", "80 km/h"], correct: "60 km/h", hint: "Speed = Distance ÷ Time. Calculate 120 ÷ 2." },
        { question: "The Philippine Revolution against Spain started in what year?", answers: ["1896", "1898", "1892", "1901"], correct: "1896", hint: "This was when the Katipunan uprising began, led by Andres Bonifacio." },
        { question: "Complete the series: 2, 4, 8, 16, __", answers: ["24", "32", "20", "28"], correct: "32", hint: "Each number is multiplied by 2 to get the next number." },
        { question: "What does 'VERBOSE' mean?", answers: ["Brief", "Wordy", "Clear", "Silent"], correct: "Wordy", hint: "Someone who is verbose uses more words than necessary." },
        { question: "Who is known as the 'Father of Philippine Revolution'?", answers: ["Jose Rizal", "Andres Bonifacio", "Emilio Aguinaldo", "Apolinario Mabini"], correct: "Andres Bonifacio", hint: "He founded the Katipunan, the secret society that started the revolution." },
        { question: "Choose the antonym of 'ABUNDANT':", answers: ["Plenty", "Scarce", "Excessive", "Numerous"], correct: "Scarce", hint: "What's the opposite of having plenty or excess?" },
        { question: "If 5 workers can complete a job in 12 days, how many days will 10 workers take?", answers: ["6 days", "8 days", "10 days", "4 days"], correct: "6 days", hint: "More workers = less time. If you double the workers, you halve the time." },
        { question: "The three branches of Philippine government are:", answers: ["Executive, Military, Judicial", "Executive, Legislative, Judicial", "Legislative, Military, Presidential", "Presidential, Judicial, Congressional"], correct: "Executive, Legislative, Judicial", hint: "These are the standard three branches in a democratic system of checks and balances." },
        { question: "Who wrote the Philippine national anthem?", answers: ["Julian Felipe", "Jose Palma", "Andres Bonifacio", "Jose Rizal"], correct: "Julian Felipe", hint: "He composed the music" },
        { question: "What is the longest river in the Philippines?", answers: ["Cagayan River", "Pasig River", "Agusan River", "Pampanga River"], correct: "Cagayan River", hint: "Located in Northern Luzon" },
        { question: "Choose the antonym of 'FRUGAL':", answers: ["Thrifty", "Wasteful", "Careful", "Economical"], correct: "Wasteful", hint: "Opposite of being careful with money" },
        { question: "If today is Monday, what day is it 100 days from now?", answers: ["Wednesday", "Thursday", "Friday", "Saturday"], correct: "Wednesday", hint: "100 ÷ 7 = 14 weeks and 2 days" },
        { question: "Complete the analogy: Book is to Reading as Fork is to:", answers: ["Writing", "Eating", "Cooking", "Cutting"], correct: "Eating", hint: "Tool used for the action" },
        { question: "What does 'METICULOUS' mean?", answers: ["Careless", "Very careful", "Quick", "Lazy"], correct: "Very careful", hint: "Paying great attention to detail" }
      ];
      const expanded = [];
      for (let i = 0; i < 5; i++) {
        expanded.push(...baseQuestions);
      }
      return expanded;
    })()
  }
};
