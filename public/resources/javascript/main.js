const projects = {
    projectList: []
  };

function addProject(image, name, dateCompleted, languagesUsed, librariesUsed, description, sourceCodeLink){
    projects.projectList.push({"image": image, "name": name, "dateCompleted": dateCompleted, "languagesUsed": languagesUsed,
    "librariesUsed": librariesUsed, "description": description, "sourceCodeLink": sourceCodeLink})
    }


addProject("./resources/javascript/jImages/blockStreamCipher.png", "Block & Stream Ciphers", "June 2022", "C++", "", "encrypts and decrypts file through a symmetric key system.", "./blockStreamCipher.html");
addProject("./resources/javascript/jImages/symbolTable.png", "Symbol Table", "July 2021", "C", "", "C Program simulating functionality of the symbol table made by assembler", "symbolTable.html");
addProject("./resources/javascript/jImages/rentalStoreGUIPic.png", "Game Rental Store Interface", "March 2021", "Java", "", "Interface to help game rental store owner track information about customer rentals", "./gameRental.html");
addProject("./resources/javascript/jImages/gladiatorPIc.png", "Gladiator Game", "April 2021", "Java", "", "Survival text game implementing queus of monsters attacking from each cardinal direction", "./gladiator.html");
addProject("./resources/javascript/jImages/fiveCentDevPic.png", "FiveCentDev Website", "March 2020 - Present", "JavaScript, HTML, CSS, Express (Node.js)", "", "This website! Clicking this banner will route you to the code on github.", "https://github.com/clovern/fiveCentDevFinal");
addProject("./resources/javascript/jImages/stopWatchPic.png", "Triple Stopwatch GUI", "February 2021", "Java", "", "Simple GUI running and saving/loading multiple stopwatches with various settings", "./stopWatch.html");
// addProject("./resources/javascript/jImages/pokeStats.png", "Pokemon Stats Data Analysis", "April 2020", "Python", "iPywidgets (Jupyter notebook), \
// matplotlib, pandas", "retrieves useful statistics and charts from a csv on Pokemon data", "./pokeStats.html");
addProject("./resources/javascript/jImages/Euchre.png", "Euchre", "April 2020", "Python, Tkinter (GUI)", "", "Euchre game against 3 AI players", "./Euchre.html");
addProject("./resources/javascript/jImages/wildChefMadness.png", "Wild Chef Madness", "January 2020", "Python, Brython", "", "Text branching game simulating a cooking show", "wildChefMadness.html");

/*this code connects this to my script reference in a compiled version for handlebars add-on, and then
put the formatted version of that into the div with id projectDisplay.*/
const source = document.getElementById("projectsTemplate").innerHTML;

const template = Handlebars.compile(source);

const compiledHtml = template(projects);

document.getElementById("projectDisplay").innerHTML = compiledHtml;
