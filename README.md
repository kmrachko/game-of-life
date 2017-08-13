#Conway's Game of Life

##How to run the application
###Production
To build and launch production version - please run ````npm run bootstrap````.
It will automatically install npm packages, generate production code and run a serve command on the build folder.
###Development
If you want to launch the development version - you should run ````npm install```` and ````npm start````.

##App overview
This React app uses implements Conway's Game of Life algorithm. Main features are:
* Limitless field
* Random starting cells generation
* Full control of the app workflow (you can start/pause/stop, also set the game speed)
* Ability to zoom and pan
* History saving (1 step, can be changed in ````reducers/rootReducer.js````)
* Save functionality (app loads automatically on start)
* Adding some predefined shapes (just add some to the ````utils/standardShapes.js````)

You can also check and tweak some settings in ````constants/uiConstants.js```` file.
Happy reviewing!