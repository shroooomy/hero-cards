// Hero Power Level Calculator JavaScript Version
// This program asks the user for hero information and calculates their power level

// Function to calculate power level using the formula: (strength * 2) + (speed * 3)
function calculatePowerLevel(strength, speed) {
    const powerLevel = (strength * 2) + (speed * 3);
    return powerLevel;
}

// Function to get a number from the user with error handling
function getNumberInput(promptMessage) {
    let userInput;
    let numberValue;
    
    // Keep asking until we get a valid number
    while (true) {
        // Ask the user for input
        userInput = prompt(promptMessage);
        
        // Check if user clicked Cancel
        if (userInput === null) {
            alert("You cancelled the input. Please try again!");
            continue;
        }
        
        // Try to convert the input to a number
        numberValue = Number(userInput);
        
        // Check if the conversion was successful and the number is valid
        if (!isNaN(numberValue) && isFinite(numberValue)) {
            return numberValue;
        } else {
            // If conversion failed, show error and ask again
            alert("Please enter a valid number! Try again.");
        }
    }
}

// Function to get hero information from the user
function getHeroInfo() {
    console.log("🦸‍♂️ Welcome to the Hero Power Level Calculator! 🦸‍♂️");
    
    // Step 1: Get the hero's name
    let heroName;
    while (true) {
        heroName = prompt("What is your hero's name?");
        if (heroName && heroName.trim() !== "") {
            break;
        } else {
            alert("Please enter a valid hero name!");
        }
    }
    
    // Step 2: Get the hero's strength (1-10 scale)
    console.log(`Getting stats for ${heroName}...`);
    const strength = getNumberInput(`How strong is ${heroName}? (1-10 scale, where 10 is super strong)`);
    
    // Step 3: Get the hero's speed (1-10 scale)
    const speed = getNumberInput(`How fast is ${heroName}? (1-10 scale, where 10 is super fast)`);
    
    return {
        name: heroName,
        strength: strength,
        speed: speed
    };
}

// Main function that runs the program
function runHeroCalculator() {
    try {
        // Get hero information from the user
        const hero = getHeroInfo();
        
        // Calculate the power level using our formula
        const powerLevel = calculatePowerLevel(hero.strength, hero.speed);
        
        // Display the results
        console.log("=".repeat(50));
        console.log(`🎯 HERO POWER LEVEL RESULTS 🎯`);
        console.log("=".repeat(50));
        console.log(`Hero Name: ${hero.name}`);
        console.log(`Strength: ${hero.strength}/10`);
        console.log(`Speed: ${hero.speed}/10`);
        console.log(`Power Level Formula: (${hero.strength} × 2) + (${hero.speed} × 3)`);
        console.log(`Calculation: ${hero.strength * 2} + ${hero.speed * 3}`);
        console.log(`🎉 ${hero.name}'s power level is: ${powerLevel} 🎉`);
        console.log("=".repeat(50));
        
        // Also show an alert for the user
        alert(`${hero.name}'s power level is: ${powerLevel}\n\nStrength: ${hero.strength}/10\nSpeed: ${hero.speed}/10`);
        
    } catch (error) {
        // Handle any unexpected errors
        console.error("Something went wrong:", error);
        alert("Oops! Something went wrong. Please try again.");
    }
}

// Start the program when the page loads
document.addEventListener('DOMContentLoaded', () => {
    console.log("🚀 Hero Power Level Calculator is ready! 🚀");
    console.log("Click the button below to start calculating hero power levels!");
    
    // Create a button to start the calculator
    const startButton = document.createElement('button');
    startButton.textContent = '🦸‍♂️ Calculate Hero Power Level 🦸‍♂️';
    startButton.style.cssText = `
        position: fixed;
        top: 20px;
        left: 20px;
        padding: 15px 25px;
        font-size: 18px;
        background: linear-gradient(45deg, #ff6b6b, #4ecdc4);
        color: white;
        border: none;
        border-radius: 25px;
        cursor: pointer;
        box-shadow: 0 5px 15px rgba(0,0,0,0.3);
        font-family: 'Comic Sans MS', cursive, sans-serif;
        z-index: 1000;
    `;
    
    // Add hover effect
    startButton.addEventListener('mouseenter', () => {
        startButton.style.transform = 'scale(1.1)';
        startButton.style.transition = 'transform 0.2s';
    });
    
    startButton.addEventListener('mouseleave', () => {
        startButton.style.transform = 'scale(1)';
    });
    
    // Start the calculator when button is clicked
    startButton.addEventListener('click', runHeroCalculator);
    
    // Add the button to the page
    document.body.appendChild(startButton);
});
