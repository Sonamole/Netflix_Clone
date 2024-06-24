// Define and export the base URL for the TMDb API
export const baseUrl = 'https://api.themoviedb.org/3';

// Define and export the API key for accessing TMDb API
export const API_KEY = 'eda33502d587c71ac511700b76d61656';

export const imageUrl='https://image.tmdb.org/t/p/original';


// export:
// The export keyword is used to export functions, objects, or primitive values from a module so they can be used in other files using the import statement.

// const:
// const is used to declare variables that are read-only, meaning their values cannot be changed once assigned. Here, const is used to ensure that the baseUrl and API_KEY remain constant throughout the application.

// baseUrl:
// baseUrl is a constant that stores the base URL for the TMDb API. The base URL is the starting point for all API endpoints provided by TMDb. For instance, if you want to fetch movie details, you will append the specific endpoint to this base URL.

// API_KEY:
// API_KEY is a constant that stores the API key required to authenticate requests to the TMDb API. API keys are used to track and control how the API is being used, ensuring that the service is not being abused.