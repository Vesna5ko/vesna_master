Prerequisite:
				1. Install nodejs: https://nodejs.org/en/download/ 
					[IMPORTANT: use official installer. I had some problems with installing globaly packages with version installed troug homebrew]

				2. Check taht you have node and npm. Open termina and type:
					node -v
					npm -v

				3. Install Express globaly:
					npm install -g express

				4. Check that expresso is instaled by typing:
					express --version


				5. In order to run test you must install mocha globally:
					npm install -g mocha

				6. Install nodemon. It is a tool that helps develop node.js based applications by automatically restarting the node application when file changes in the directory are detected.
					npm install -g nodemon


a) for development I am using WebStorm!! Do not ask me about any other IDE or editor!!! :)

b) To open any restapi project in WebStorm just simply import it by selecting root folder of project in import dialog. For instance import usersapi project you must navigate to:

	.../myballs/source/restapi/usersapi

d) to start new empty node project from teminal first make it's folder, move to that folder and type
	
	npm init

   use npm insall comand to add missing nedded packages 	

c) to install node packages(dependencies) for some project from terminal go to root folder of required project, for instance .../myballs/source/restapi/usersapi and type: 
	
	npm install

d) to run some restservice from termina go to its root and start with node comand its service.js file:
	
	node service.js

	if you want to change port doe set PORT=[new port number] and than run node service.js

e) sudo lsof -i tcp:3000  - usefull comand on mac to find which process listens on port 3000
