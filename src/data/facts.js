export const FACTS = [
  {
    id: 1,
    fact: "Octopuses have three hearts and blue blood. Two hearts pump blood to the gills, while a third pumps it to the rest of the body. Their blood is blue because it contains copper-based hemocyanin instead of iron-based hemoglobin.",
    question: "What color is octopus blood?",
    choices: [
      { text: "Red", correct: false },
      { text: "Blue", correct: true },
      { text: "Green", correct: false },
      { text: "Clear", correct: false },
    ],
  },
  {
    id: 2,
    fact: "A day on Venus is longer than a year on Venus. Venus rotates so slowly that it takes 243 Earth days to complete one rotation, but only 225 Earth days to orbit the Sun.",
    question: "On which planet is a single day longer than its entire year?",
    choices: [
      { text: "Mars", correct: false },
      { text: "Mercury", correct: false },
      { text: "Venus", correct: true },
      { text: "Saturn", correct: false },
    ],
  },
  {
    id: 3,
    fact: "The Great Wall of China is NOT visible from space with the naked eye. This is one of the most widely repeated myths in history — the wall is simply too narrow to be seen from low Earth orbit without optical aids.",
    question: "Can the Great Wall of China be seen from space with the naked eye?",
    choices: [
      { text: "Yes, on clear days", correct: false },
      { text: "No — it's too narrow", correct: true },
      { text: "Only at sunrise", correct: false },
      { text: "Only from the ISS", correct: false },
    ],
  },
  {
    id: 4,
    fact: "Honey never spoils. Archaeologists have found 3,000-year-old honey in Egyptian tombs that was still perfectly edible. Its low moisture content and acidic pH create an environment where bacteria simply cannot survive.",
    question: "How old was the edible honey found in Egyptian tombs?",
    choices: [
      { text: "500 years old", correct: false },
      { text: "1,000 years old", correct: false },
      { text: "3,000 years old", correct: true },
      { text: "10,000 years old", correct: false },
    ],
  },
  {
    id: 5,
    fact: "Bananas are slightly radioactive. They contain potassium-40, a naturally occurring radioactive isotope. The amount is harmless — you'd have to eat about 10 million bananas at once for it to be lethal.",
    question: "Why are bananas slightly radioactive?",
    choices: [
      { text: "They absorb UV radiation from the sun", correct: false },
      { text: "They contain trace amounts of uranium", correct: false },
      { text: "They contain potassium-40", correct: true },
      { text: "Their yellow pigment emits gamma rays", correct: false },
    ],
  },
  {
    id: 6,
    fact: "A group of flamingos is called a 'flamboyance.' These social birds live in large colonies and their pink color actually comes from the pigments in the algae and shrimp they eat — they're born grey.",
    question: "What is the official name for a group of flamingos?",
    choices: [
      { text: "A pride", correct: false },
      { text: "A colony", correct: false },
      { text: "A flock", correct: false },
      { text: "A flamboyance", correct: true },
    ],
  },
  {
    id: 7,
    fact: "Australia is wider than the Moon. The Moon has a diameter of about 3,474 km, while Australia spans roughly 4,000 km from east to west. So if you could place the Moon next to Australia, Australia would be wider.",
    question: "Which is wider — Australia or the Moon?",
    choices: [
      { text: "The Moon", correct: false },
      { text: "Australia", correct: true },
      { text: "They're approximately equal", correct: false },
      { text: "It depends on the measurement", correct: false },
    ],
  },
  {
    id: 8,
    fact: "Cleopatra lived closer in time to the Moon landing than to the construction of the Great Pyramid of Giza. The pyramids were built around 2560 BC, Cleopatra lived around 30 BC (~2,500 years after), and the Moon landing was in 1969 (~2,000 years after Cleopatra).",
    question: "Cleopatra lived closer in time to which historical event?",
    choices: [
      { text: "The construction of the Great Pyramid", correct: false },
      { text: "The invention of writing", correct: false },
      { text: "The Moon landing", correct: true },
      { text: "The fall of the Roman Empire", correct: false },
    ],
  },
  {
    id: 9,
    fact: "Water can boil and freeze at the same time. This phenomenon, called the 'triple point,' occurs at a specific temperature (0.01°C) and pressure (611.7 pascals) where water can exist simultaneously as solid, liquid, and gas.",
    question: "What is the 'triple point' of water?",
    choices: [
      { text: "Where three rivers meet", correct: false },
      { text: "The deepest point of the ocean", correct: false },
      { text: "Where water boils, freezes, and exists as liquid simultaneously", correct: true },
      { text: "The temperature where water is most dense", correct: false },
    ],
  },
  {
    id: 10,
    fact: "Crows can recognize and remember individual human faces — and hold grudges. In studies, crows were shown to warn their flock about specific people who had been mean to them, even while those people wore disguises.",
    question: "Which bird is known to recognize, remember, and hold grudges against specific humans?",
    choices: [
      { text: "Parrots", correct: false },
      { text: "Ravens", correct: false },
      { text: "Crows", correct: true },
      { text: "Jays", correct: false },
    ],
  },
  {
    id: 11,
    fact: "A bolt of lightning is about 5 times hotter than the surface of the Sun. Lightning reaches temperatures of around 30,000 Kelvin, while the Sun's surface is about 5,778 Kelvin.",
    question: "Approximately how much hotter is a lightning bolt than the Sun's surface?",
    choices: [
      { text: "Equally hot", correct: false },
      { text: "Twice as hot", correct: false },
      { text: "5 times hotter", correct: true },
      { text: "10 times hotter", correct: false },
    ],
  },
  {
    id: 12,
    fact: "The shortest war in recorded history was the Anglo-Zanzibar War of 1896. It lasted between 38 and 45 minutes. Britain demanded Zanzibar's Sultan step down; he refused; the Royal Navy opened fire and it was over before breakfast.",
    question: "How long did the shortest war in recorded history last?",
    choices: [
      { text: "38–45 minutes", correct: true },
      { text: "About 6 hours", correct: false },
      { text: "Exactly 2 days", correct: false },
      { text: "One full week", correct: false },
    ],
  },
  {
    id: 13,
    fact: "There are more possible chess games than there are atoms in the observable universe. The number of possible chess games is estimated at 10^120 (the Shannon number), while the number of atoms in the observable universe is estimated at 10^80.",
    question: "What outnumbers the atoms in the observable universe?",
    choices: [
      { text: "Grains of sand on all Earth's beaches", correct: false },
      { text: "Possible chess games", correct: true },
      { text: "Possible Go games", correct: false },
      { text: "Possible DNA sequences", correct: false },
    ],
  },
  {
    id: 14,
    fact: "Wombats are the only animals in the world that produce cube-shaped droppings. They use their uniquely shaped digestive system to produce about 80–100 cubes per night, which they stack to mark their territory.",
    question: "Which animal produces cube-shaped droppings?",
    choices: [
      { text: "Koalas", correct: false },
      { text: "Penguins", correct: false },
      { text: "Beavers", correct: false },
      { text: "Wombats", correct: true },
    ],
  },
  {
    id: 15,
    fact: "Russia spans 11 time zones — more than any other country on Earth. If you flew from Kaliningrad on the western edge to the Chukotka region in the far east, you'd cross a full 11 hours of time difference.",
    question: "How many time zones does Russia span?",
    choices: [
      { text: "7", correct: false },
      { text: "9", correct: false },
      { text: "11", correct: true },
      { text: "13", correct: false },
    ],
  },
  {
    id: 16,
    fact: "Trees can communicate with each other through underground fungal networks nicknamed the 'Wood Wide Web.' They share nutrients, water, and even warning signals when one tree is under attack by pests or disease.",
    question: "How do trees communicate and share resources underground?",
    choices: [
      { text: "Through root-to-root chemical contact", correct: false },
      { text: "Through soil vibrations", correct: false },
      { text: "Through fungal networks", correct: true },
      { text: "Through electromagnetic signals", correct: false },
    ],
  },
  {
    id: 17,
    fact: "Oxford University is older than the Aztec Empire. Teaching at Oxford began around 1096–1167 AD. The Aztec Empire wasn't founded until 1428 AD — meaning Oxford was already a well-established institution before the Aztecs even began building Tenochtitlan.",
    question: "Which is older — Oxford University or the Aztec Empire?",
    choices: [
      { text: "The Aztec Empire", correct: false },
      { text: "Oxford University", correct: true },
      { text: "They were founded around the same time", correct: false },
      { text: "Neither — both were founded after 1500 AD", correct: false },
    ],
  },
  {
    id: 18,
    fact: "Your stomach gets a brand new lining every 3 to 4 days. The stomach's digestive acids are so corrosive that without this rapid cell renewal, it would digest itself. Even with constant renewal, about 500,000 cells are replaced every minute.",
    question: "How often does your stomach grow a completely new lining?",
    choices: [
      { text: "Every week", correct: false },
      { text: "Every month", correct: false },
      { text: "Every 3–4 days", correct: true },
      { text: "Every year", correct: false },
    ],
  },
  {
    id: 19,
    fact: "Sloths can hold their breath longer than dolphins. Sloths can slow their heart rate to make oxygen last up to 40 minutes underwater, while dolphins typically need to surface every 10 minutes or so.",
    question: "Which animal can hold its breath longer underwater?",
    choices: [
      { text: "A dolphin", correct: false },
      { text: "They hold their breath equally long", correct: false },
      { text: "A sloth", correct: true },
      { text: "A sea turtle", correct: false },
    ],
  },
  {
    id: 20,
    fact: "About one million Earths could fit inside the Sun. The Sun's diameter is roughly 1.39 million km, while Earth's is about 12,742 km. The Sun is so massive it accounts for 99.86% of all the mass in our entire solar system.",
    question: "Approximately how many Earths could fit inside the Sun?",
    choices: [
      { text: "One thousand", correct: false },
      { text: "One million", correct: true },
      { text: "One billion", correct: false },
      { text: "One hundred thousand", correct: false },
    ],
  },
  {
    id: 21,
    fact: "The mantis shrimp has 16 types of color receptors. Humans only have 3 (red, green, blue). Scientists expected this would give mantis shrimp superhuman color vision, but research suggests their brains actually process color differently — more like a parallel scanner than a mixer.",
    question: "How many types of color receptors does a mantis shrimp have?",
    choices: [
      { text: "5", correct: false },
      { text: "8", correct: false },
      { text: "16", correct: true },
      { text: "32", correct: false },
    ],
  },
  {
    id: 22,
    fact: "Napoleon Bonaparte was not short. He was about 5'7\" (170 cm), which was average or even slightly above average for a French man of his era. The 'short Napoleon' myth likely came from British propaganda and a confusion between French and English inch measurements.",
    question: "What was Napoleon Bonaparte's actual height?",
    choices: [
      { text: "5'2\" — genuinely short for his era", correct: false },
      { text: "5'7\" — average for his time", correct: true },
      { text: "5'0\" — the shortest French emperor", correct: false },
      { text: "6'0\" — taller than average", correct: false },
    ],
  },
  {
    id: 23,
    fact: "Hot water can sometimes freeze faster than cold water — a phenomenon called the Mpemba effect. A Tanzanian student named Erasto Mpemba noticed this while making ice cream in 1963. Scientists still debate exactly why it happens.",
    question: "What does the Mpemba effect describe?",
    choices: [
      { text: "Ice melting faster in salt water", correct: false },
      { text: "Cold water boiling faster at high altitude", correct: false },
      { text: "Steam cooling faster in dry air", correct: false },
      { text: "Hot water freezing faster than cold water", correct: true },
    ],
  },
  {
    id: 24,
    fact: "Tardigrades (also called 'water bears') can survive in outer space. These microscopic animals can withstand extreme radiation, the vacuum of space, temperatures from -272°C to 150°C, and even pressures six times greater than the deepest ocean trench.",
    question: "Which microscopic animal can survive exposure to the vacuum of outer space?",
    choices: [
      { text: "Rotifers", correct: false },
      { text: "Tardigrades", correct: true },
      { text: "Dust mites", correct: false },
      { text: "Amoebas", correct: false },
    ],
  },
  {
    id: 25,
    fact: "Canada has more lakes than the rest of the world combined. Canada is home to roughly 879,000 lakes larger than 10 km², which is more than all other countries combined. About 9% of Canada's total area is covered by fresh water.",
    question: "Which country contains more lakes than the rest of the world combined?",
    choices: [
      { text: "Russia", correct: false },
      { text: "Finland", correct: false },
      { text: "Brazil", correct: false },
      { text: "Canada", correct: true },
    ],
  },
  {
    id: 26,
    fact: "A group of owls is called a 'parliament.' The name likely comes from the owl's long association with wisdom and law-making in mythology. A group of ravens is an 'unkindness,' and a group of crows is a 'murder.'",
    question: "What is a group of owls officially called?",
    choices: [
      { text: "A wisdom", correct: false },
      { text: "A council", correct: false },
      { text: "A parliament", correct: true },
      { text: "A senate", correct: false },
    ],
  },
  {
    id: 27,
    fact: "The human brain generates about 23 watts of electrical power — enough to power a dim light bulb. Despite making up only about 2% of your body weight, it consumes roughly 20% of your total energy.",
    question: "Approximately how much electrical power does the human brain generate?",
    choices: [
      { text: "5 watts", correct: false },
      { text: "23 watts", correct: true },
      { text: "100 watts", correct: false },
      { text: "1 watt", correct: false },
    ],
  },
  {
    id: 28,
    fact: "The world's first computer programmer was Ada Lovelace, in the 1840s. She wrote an algorithm for Charles Babbage's Analytical Engine to calculate Bernoulli numbers — a full century before modern computers were invented. The programming language 'Ada' is named after her.",
    question: "Who is considered the world's first computer programmer?",
    choices: [
      { text: "Charles Babbage", correct: false },
      { text: "Grace Hopper", correct: false },
      { text: "Alan Turing", correct: false },
      { text: "Ada Lovelace", correct: true },
    ],
  },
  {
    id: 29,
    fact: "Butterflies taste with their feet. They have chemoreceptors on their feet that detect sugars and other chemicals when they land on a leaf or flower, instantly telling them whether it's worth eating or laying eggs on.",
    question: "Which body part do butterflies use to taste food?",
    choices: [
      { text: "Their antennae", correct: false },
      { text: "Their proboscis (tongue)", correct: false },
      { text: "Their feet", correct: true },
      { text: "Their wings", correct: false },
    ],
  },
  {
    id: 30,
    fact: "The footprints left on the Moon by Apollo astronauts will last for approximately 100 million years. With no wind, weather, or tectonic activity to erode them, they'll remain pristine — though micrometeorite impacts will very slowly wear them down over millions of years.",
    question: "How long will the Apollo astronauts' footprints on the Moon last?",
    choices: [
      { text: "About 1,000 years", correct: false },
      { text: "About 1 million years", correct: false },
      { text: "About 100 million years", correct: true },
      { text: "They're already gone due to solar wind", correct: false },
    ],
  },
  {
    id: 31,
    fact: "Sea otters hold hands while sleeping so they don't drift apart. This behavior is called 'rafting.' Otters float in groups and hold hands (or wrap themselves in kelp) to stay together as a group while snoozing on the water's surface.",
    question: "Why do sea otters hold hands while sleeping?",
    choices: [
      { text: "To share body heat", correct: false },
      { text: "To protect their pups", correct: false },
      { text: "So they don't drift apart", correct: true },
      { text: "To communicate through vibrations", correct: false },
    ],
  },
  {
    id: 32,
    fact: "Vikings gave kittens to new brides as traditional household gifts. Cats were highly valued in Norse culture for keeping ships and homes free of rodents. Freyja, the goddess of love and fertility, was said to ride a chariot pulled by giant cats.",
    question: "What did Vikings traditionally give as a household gift to new brides?",
    choices: [
      { text: "Gold coins", correct: false },
      { text: "Kittens", correct: true },
      { text: "Hunting dogs", correct: false },
      { text: "Wool blankets", correct: false },
    ],
  },
  {
    id: 33,
    fact: "Sound travels about 4 times faster in water than in air. In air at room temperature, sound moves at roughly 343 m/s. In water, it travels at about 1,480 m/s. This is why whales can communicate across entire ocean basins.",
    question: "How much faster does sound travel in water compared to in air?",
    choices: [
      { text: "About the same speed", correct: false },
      { text: "About twice as fast", correct: false },
      { text: "About 4 times faster", correct: true },
      { text: "About 10 times faster", correct: false },
    ],
  },
];

export function pickRandomFact(excludeId = null) {
  const pool = excludeId !== null
    ? FACTS.filter((f) => f.id !== excludeId)
    : FACTS;
  return pool[Math.floor(Math.random() * pool.length)];
}
