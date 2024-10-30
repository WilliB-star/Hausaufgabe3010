import catFacts from 'cat-facts';
import inquirer from 'inquirer';

// Funktion zur Anzeige eines zufälligen Katzenfakts
function showCatFact() {
  const fact = catFacts.random(); // Zufälliger Katzenfakt
  console.log(fact);
}

// Funktion zur Abfrage des Benutzernamens
async function askForUsername() {
  const answers = await inquirer.prompt([
    {
      type: 'input',
      name: 'username',
      message: 'Wie lautet dein Name?'
    }
  ]);
  return answers.username; // Benutzername zurückgeben
}

// Funktion zur Abfrage, ob der Benutzer einen weiteren Katzenfakt hören möchte
async function askForNewCatFact() {
  const answers = await inquirer.prompt([
    {
      type: 'confirm',
      name: 'anotherOne',
      message: 'Möchtest du einen weiteren Katzenfakt hören?'
    }
  ]);
  return answers.anotherOne;
}

// Hauptfunktion
async function main() {
  const username = await askForUsername();
  console.log(`Hallo ${username}, möchtest du einen Katzenfakt wissen?`);
  
  // Zeige den ersten Katzenfakt an
  showCatFact();
  
  let anotherOne = await askForNewCatFact();
  
  // Schleife, um weitere Katzenfakten anzuzeigen, solange der Benutzer dies möchte
  while (anotherOne) {
    showCatFact();
    anotherOne = await askForNewCatFact();
  }
  
  console.log('Danke für deinen Besuch!');
}

// Startet das Programm
main();

