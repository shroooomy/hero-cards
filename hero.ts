// Define the Hero interface - this describes what properties a hero should have
interface Hero {
    name: string;        // The hero's name
    power: string;       // Their main superpower
    bio: string;         // A short description about the hero
    imageUrl: string;    // URL to the hero's image (we'll use emoji for now)
}

// Create a hero object with Spider-Man's details
// You can easily change this to any superhero you like!
const spiderMan: Hero = {
    name: "Spider-Man",
    power: "Web-slinging & Spider-senses",
    bio: "Peter Parker, a friendly neighborhood superhero who swings through New York City! With amazing spider powers, he protects the innocent and always helps those in need. Great power comes with great responsibility!",
    imageUrl: "🕷️"  // Spider emoji as placeholder
};

// Function to populate the HTML with hero data
function populateHeroCard(hero: Hero): void {
    // Get references to the HTML elements we want to update
    const heroNameElement = document.querySelector('.hero-name') as HTMLElement;
    const heroPowerElement = document.querySelector('.hero-power') as HTMLElement;
    const heroBioElement = document.querySelector('.hero-bio') as HTMLElement;
    const heroImageElement = document.querySelector('.hero-image') as HTMLElement;

    // Check if all elements were found before updating
    if (heroNameElement && heroPowerElement && heroBioElement && heroImageElement) {
        // Update the hero's name
        heroNameElement.textContent = hero.name;
        
        // Update the hero's power (keep the power icon)
        const powerIcon = heroPowerElement.querySelector('.power-icon');
        if (powerIcon) {
            heroPowerElement.innerHTML = `${powerIcon.outerHTML} ${hero.power}`;
        } else {
            heroPowerElement.innerHTML = `<span class="power-icon">⚡</span> ${hero.power}`;
        }
        
        // Update the hero's bio
        heroBioElement.textContent = hero.bio;
        
        // Update the hero's image
        heroImageElement.textContent = hero.imageUrl;
        
        console.log(`Hero card populated with ${hero.name}'s information!`);
    } else {
        console.error('Could not find all required HTML elements');
    }
}

// Function to change the hero (useful for switching between different superheroes)
function changeHero(newHero: Hero): void {
    console.log(`Changing hero from ${spiderMan.name} to ${newHero.name}`);
    populateHeroCard(newHero);
}

// Wait for the HTML page to fully load before running our code
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded! Populating hero card...');
    
    // Populate the HTML with Spider-Man's data
    populateHeroCard(spiderMan);
    
    // Example: You can easily change to a different hero like this:
    // const ironMan: Hero = {
    //     name: "Iron Man",
    //     power: "Genius Intelligence & Advanced Technology",
    //     bio: "Tony Stark, a brilliant inventor who built a powerful suit of armor to protect the world!",
    //     imageUrl: "🤖"
    // };
    // changeHero(ironMan);
});

// Function to calculate a hero's power level based on strength and speed
function calculatePowerLevel(strength: number, speed: number): number {
    // Power level formula: (strength * 2) + (speed * 3)
    const powerLevel = (strength * 2) + (speed * 3);
    return powerLevel;
}

// Spider-Man's stats (on a scale of 1-10)
const spiderManStats = {
    strength: 7,  // Spider-Man is quite strong
    speed: 9      // Spider-Man is very fast and agile
};

// Calculate and display Spider-Man's power level
const spiderManPowerLevel = calculatePowerLevel(spiderManStats.strength, spiderManStats.speed);
console.log(`🕷️ ${spiderMan.name}'s Power Level: ${spiderManPowerLevel}`);
console.log(`   Strength: ${spiderManStats.strength}/10`);
console.log(`   Speed: ${spiderManStats.speed}/10`);
console.log(`   Formula: (${spiderManStats.strength} × 2) + (${spiderManStats.speed} × 3) = ${spiderManStats.strength * 2} + ${spiderManStats.speed * 3} = ${spiderManPowerLevel}`);

// Export the interface and functions so they can be used in other files if needed
export { Hero, populateHeroCard, changeHero, spiderMan, calculatePowerLevel };
