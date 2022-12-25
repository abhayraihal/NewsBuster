# NewsBuster
> A react app created which fetches the latest news from the news api and displays it on the screen. The user can also search for news based on the category and the news will be displayed on the screen.

## App Preview
![image](https://user-images.githubusercontent.com/78839827/209460886-2d1fc259-20a9-4e23-8c88-e6b40e63e7db.png)

## Requirements
- Node.js
- NPM

## Steps to run the app

- Dowload the zip file or clone the repository and open it in your code editor.

### Fetching the API key
> Since this is a development site, so hosting it will not be possible. So, you will have to fetch the API key from the news api website.
- Go to the [News API](https://newsapi.org/) website and create an account.
- After creating the account, you will be redirected to the dashboard.
- Click on the `Get API Key` button.
- Copy the API key and paste it in the `src/App.js` file in the `API` variable.
> Update line 14 in App.js:  const API = 'YOUR_API_KEY';

### Running the app
- Open the terminal and run the command `npm install` to install all the dependencies.
- Run the command `npm start` to start the app.
- The app will be running on `localhost:3000`