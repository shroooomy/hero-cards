// Hero Profile Card JavaScript Version
// This file contains the same functionality as hero.ts but in JavaScript

// Create hero objects with different superheroes' details
const spiderMan = {
    name: "Spider-Man",
    power: "Web-slinging & Spider-senses",
    bio: "Peter Parker, a friendly neighborhood superhero who swings through New York City! With amazing spider powers, he protects the innocent and helps people in need. Great power comes with great responsibility!",
    imageUrl: "🕷️"  // Spider emoji as placeholder
};

const wonderWoman = {
    name: "Wonder Woman",
    power: "Superhuman Strength & Lasso of Truth",
    bio: "Diana Prince, an Amazonian warrior princess with incredible strength and fighting skills! She wields the Lasso of Truth and fights for justice, peace, and equality. A true symbol of female empowerment!",
    imageUrl: "🦸‍♀️"  // Female superhero emoji
};

const batman = {
    name: "Batman",
    power: "Genius Intelligence & Master Detective",
    bio: "Bruce Wayne, the Dark Knight of Gotham City! With no superpowers, he relies on his brilliant mind, martial arts skills, and high-tech gadgets to fight crime. The world's greatest detective!",
    imageUrl: "🦇"  // Bat emoji
};

const ironMan = {
    name: "Iron Man",
    power: "Genius Intelligence & Advanced Technology",
    bio: "Tony Stark, a brilliant inventor who built a powerful suit of armor to protect the world! His arc reactor technology and Iron Man suits make him one of Earth's mightiest heroes. Genius, billionaire, playboy, philanthropist!",
    imageUrl: "🤖"  // Robot emoji
};

const thor = {
    name: "Thor",
    power: "God of Thunder & Mjolnir",
    bio: "Thor Odinson, the mighty God of Thunder from Asgard! He wields the legendary hammer Mjolnir and controls lightning and storms. A noble warrior who protects both Earth and the nine realms!",
    imageUrl: "⚡"  // Lightning bolt emoji
};

// Array of all heroes for easy access
const allHeroes = [spiderMan, wonderWoman, batman, ironMan, thor];

// Function to populate the HTML with hero data
function populateHeroCard(hero) {
    // Get references to the HTML elements we want to update
    const heroNameElement = document.querySelector('.hero-name');
    const heroPowerElement = document.querySelector('.hero-power');
    const heroBioElement = document.querySelector('.hero-bio');
    const heroImageElement = document.querySelector('.hero-image');

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
        
        // Add power level display to the card
        displayHeroPowerLevel(hero);
        
        console.log(`Hero card populated with ${hero.name}'s information!`);
    } else {
        console.error('Could not find all required HTML elements');
    }
}

// Function to change the hero (useful for switching between different superheroes)
function changeHero(newHero) {
    console.log(`Changing hero from ${spiderMan.name} to ${newHero.name}`);
    populateHeroCard(newHero);
}

// Function to display hero power level on the card
function displayHeroPowerLevel(hero) {
    const stats = heroStats[hero.name];
    if (stats) {
        const powerLevel = calculatePowerLevel(stats.strength, stats.speed);
        
        // Create or update power level display
        let powerLevelElement = document.querySelector('.hero-power-level');
        if (!powerLevelElement) {
            powerLevelElement = document.createElement('div');
            powerLevelElement.className = 'hero-power-level';
            powerLevelElement.style.cssText = `
                background: linear-gradient(45deg, #667eea, #764ba2);
                color: white;
                padding: 15px 20px;
                border-radius: 20px;
                margin: 15px 0;
                text-align: center;
                box-shadow: 0 5px 15px rgba(0,0,0,0.2);
                font-family: 'Comic Sans MS', cursive, sans-serif;
                position: relative;
                overflow: hidden;
            `;
            
            // Add sparkle effect
            powerLevelElement.innerHTML = `
                <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; 
                     background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); 
                     animation: sparkle 3s ease-in-out infinite;"></div>
                <div style="position: relative; z-index: 1;">
                    <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 8px;">⚡ POWER LEVEL ⚡</div>
                    <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 10px;">${powerLevel}</div>
                    <div style="font-size: 1em; opacity: 0.9;">
                        Strength: ${stats.strength}/10 | Speed: ${stats.speed}/10
                    </div>
                </div>
            `;
            
            // Insert after the hero power section
            const heroPowerElement = document.querySelector('.hero-power');
            if (heroPowerElement && heroPowerElement.parentNode) {
                heroPowerElement.parentNode.insertBefore(powerLevelElement, heroPowerElement.nextSibling);
            }
        } else {
            // Update existing power level display
            const stats = heroStats[hero.name];
            if (stats) {
                const powerLevel = calculatePowerLevel(stats.strength, stats.speed);
                powerLevelElement.innerHTML = `
                    <div style="position: absolute; top: -50%; left: -50%; width: 200%; height: 200%; 
                         background: radial-gradient(circle, rgba(255,255,255,0.1) 0%, transparent 70%); 
                         animation: sparkle 3s ease-in-out infinite;"></div>
                    <div style="position: relative; z-index: 1;">
                        <div style="font-size: 1.5em; font-weight: bold; margin-bottom: 8px;">⚡ POWER LEVEL ⚡</div>
                        <div style="font-size: 2.5em; font-weight: bold; margin-bottom: 10px;">${powerLevel}</div>
                        <div style="font-size: 1em; opacity: 0.9;">
                            Strength: ${stats.strength}/10 | Speed: ${stats.speed}/10
                        </div>
                    </div>
                `;
            }
        }
    }
}

// Function to calculate a hero's power level based on strength and speed
function calculatePowerLevel(strength, speed) {
    // Power level formula: (strength * 2) + (speed * 3)
    const powerLevel = (strength * 2) + (speed * 3);
    return powerLevel;
}

// Hero stats (on a scale of 1-10)
const heroStats = {
    "Spider-Man": { strength: 7, speed: 9 },      // Spider-Man is quite strong and very fast
    "Wonder Woman": { strength: 9, speed: 8 },    // Wonder Woman is super strong and fast
    "Batman": { strength: 6, speed: 7 },          // Batman is strong and fast but human
    "Iron Man": { strength: 8, speed: 6 },        // Iron Man is strong in armor but moderate speed
    "Thor": { strength: 10, speed: 7 }            // Thor is maximum strength but moderate speed
};

// Calculate and display all heroes' power levels
console.log("🎯 HERO POWER LEVELS 🎯");
console.log("=".repeat(40));
allHeroes.forEach(hero => {
    const stats = heroStats[hero.name];
    if (stats) {
        const powerLevel = calculatePowerLevel(stats.strength, stats.speed);
        console.log(`${hero.imageUrl} ${hero.name}: ${powerLevel} (Strength: ${stats.strength}/10, Speed: ${stats.speed}/10)`);
    }
});
console.log("=".repeat(40));

// Function to cycle through heroes
let currentHeroIndex = 0;

function nextHero() {
    currentHeroIndex = (currentHeroIndex + 1) % allHeroes.length;
    populateHeroCard(allHeroes[currentHeroIndex]);
    console.log(`Switched to ${allHeroes[currentHeroIndex].name}!`);
}

function previousHero() {
    currentHeroIndex = (currentHeroIndex - 1 + allHeroes.length) % allHeroes.length;
    populateHeroCard(allHeroes[currentHeroIndex]);
    console.log(`Switched to ${allHeroes[currentHeroIndex].name}!`);
}

function goToHero(heroName) {
    const heroIndex = allHeroes.findIndex(hero => hero.name.toLowerCase() === heroName.toLowerCase());
    if (heroIndex !== -1) {
        currentHeroIndex = heroIndex;
        populateHeroCard(allHeroes[currentHeroIndex]);
        console.log(`Switched to ${allHeroes[currentHeroIndex].name}!`);
    } else {
        console.log(`Hero ${heroName} not found!`);
    }
}

// Wait for the HTML page to fully load before running our code
document.addEventListener('DOMContentLoaded', () => {
    console.log('Page loaded! Populating hero card...');
    
    // Populate the HTML with Spider-Man's data
    populateHeroCard(spiderMan);
    
    // Create navigation buttons
    createHeroNavigation();
    
    // Example: You can easily change to a different hero like this:
    // goToHero("Iron Man");
    // nextHero();
    // previousHero();
});

// Function to create hero navigation buttons
function createHeroNavigation() {
    const navigationDiv = document.createElement('div');
    navigationDiv.style.cssText = `
        position: fixed;
        top: 80px;
        left: 20px;
        display: flex;
        flex-direction: column;
        gap: 10px;
        z-index: 1000;
    `;
    
    // Previous/Next buttons
    const prevButton = document.createElement('button');
    prevButton.textContent = '⬅️ Previous Hero';
    prevButton.style.cssText = `
        padding: 10px 15px;
        font-size: 14px;
        background: linear-gradient(45deg, #4ecdc4, #45b7d1);
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        font-family: 'Comic Sans MS', cursive, sans-serif;
    `;
    prevButton.addEventListener('click', previousHero);
    
    const nextButton = document.createElement('button');
    nextButton.textContent = 'Next Hero ➡️';
    nextButton.style.cssText = `
        padding: 10px 15px;
        font-size: 14px;
        background: linear-gradient(45deg, #ff6b6b, #ffd93d);
        color: white;
        border: none;
        border-radius: 20px;
        cursor: pointer;
        box-shadow: 0 3px 10px rgba(0,0,0,0.2);
        font-family: 'Comic Sans MS', cursive, sans-serif;
    `;
    nextButton.addEventListener('click', nextHero);
    
    // Quick hero selection buttons
    const heroButtons = allHeroes.map(hero => {
        const button = document.createElement('button');
        button.textContent = hero.imageUrl + ' ' + hero.name;
        button.style.cssText = `
            padding: 8px 12px;
            font-size: 12px;
            background: linear-gradient(45deg, #96ceb4, #fecfef);
            color: #333;
            border: none;
            border-radius: 15px;
            cursor: pointer;
            box-shadow: 0 2px 8px rgba(0,0,0,0.15);
            font-family: 'Comic Sans MS', cursive, sans-serif;
            margin: 2px 0;
        `;
        button.addEventListener('click', () => goToHero(hero.name));
        return button;
    });
    
    // Add all buttons to navigation
    navigationDiv.appendChild(prevButton);
    navigationDiv.appendChild(nextButton);
    heroButtons.forEach(button => navigationDiv.appendChild(button));
    
    // Add navigation to the page
    document.body.appendChild(navigationDiv);
}
