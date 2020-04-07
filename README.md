# WeatherApp ReactJS

Live Demo on https://fedeevilla-weather-challenge.glitch.me/ or https://weather-challenge.netlify.com

### Challenge

Your task is to simply build a forecast application. The requirements are the following:
The user must be able to do a search by the city name. Each time the user searches the forecast for a city the result should be shown indicating:

- Temperature
- Pressure
- Humidity
- Max temperature
- Min temperature
- A Map showing the location of the city (using long and lat)

You need to maintain a list with the last 5 searched cities (it should be persisted in local storage). Any item of the list can be deleted. Every time a city from the above list is clicked, the forecast information should be shown as in step (2). Add at least one additional feature that you think would be useful for the user.

Some tips:

- The forecast prediction must be consumed using this api: https://openweathermap.org/current
- You must use https://github.com/facebookincubator/create-react-app to accomplish this task.
- Include comments in code where necessary.
- We recommend you follow this style guide: https://github.com/airbnb/javascript/tree/master/react.
- While an elaborate graphic design is not necessary, you should still make your page look nice.
- If you cannot complete all the requirements, include an explanation of how you would go about completing them if given more time.
- If you take code from somewhere like stackoverflow, please add a comment of why you did it and why you think it was the best solution.

### Installation

You need to have a GoogleMap API Key and a OpenWeatherMap API Key.

- Clone this repository

- Run `npm install`

- Create `.env` with this props: `REACT_APP_OPENWEATHER_URI`, `REACT_APP_API_KEY`, `REACT_APP_GOOGLE_API`

- Edit `.env` and fill with your generated API keys

- Save and run `npm start`

### Development

This is a challenge from IT Croud Argentina
