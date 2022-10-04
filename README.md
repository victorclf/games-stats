# games-stats
This is a proof of concept of a Games DB web app.

## Requirements
- Given a title query, return a list of videogames matching that title (name, imageUrl, releaseDate) from the Rawg service.

## API Endpoints
- Search games: `/api/v1/games/search=X&page=1&page_size=[1, 20]`

## Installation

### Backend
1. `npm install` to install the packages;
2. `cp .env.example .env` to create a new .env file;
3. Add a valid RAWG API key to the `.env` file;
4. `npm test` to run the tests
5. `npm start` to start the server.

### Frontend
TODO


## Project Structure

### Backend
```
src
│   app.js          # App entry point
└───api             # Express route controllers for all the endpoints of the app
└───config          # Environment variables and configuration related stuff
└───loaders         # The startup process is split into separate loader modules here
└───services        # Service layer
└───tests           # Integration and e2e tests
```

## Decisions

### Backend
- Chose to use this project structure https://softwareontheroad.com/ideal-nodejs-project-structure/ because:
	- Splits layers well
	- Helps setup the basic dependencies needed for a project with Express:
		- Supports API parameters validation with celebrate
		- Supports dependency injection with typedi
		- Supports testing with Jest
		- Separates config into .env file with dotenv
		- Sets up typescript
		- Supports logging with Winston
	- Already comes with other necessary boilerplate code


## Future Improvements

### Backend
- Setup automatic generation of Swagger API documentation
- Add more test cases to the integration test
- Add e2e tests
- Use an in-memory cache like Redis for caching
- Is it better to organize src folders by features like Angular instead of by layers?
