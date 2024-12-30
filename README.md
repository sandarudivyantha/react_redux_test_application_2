# Redux Toolkit Project

This project demonstrates the use of Redux Toolkit to manage state in a React application. It includes examples of fetching data from APIs, updating state entities, and managing asynchronous actions with `createAsyncThunk`.

## Technologies and Libraries Used

- **React**: JavaScript library for building user interfaces.
- **React Redux**: Official React bindings for Redux.
- **Redux Toolkit**: Official library for efficient Redux development.
- **Redux Entity Adapter**: Simplifies the management of normalized state.
- **JavaScript ES6**: Used throughout the application for modern syntax and features.
- **Fetch API**: For making API requests to external services.
- **React DOM**: Enables rendering React components in the DOM.
- **Vite**: Build tool for blazing-fast development.
- **CSS**: For styling the components.

## Project Structure

```
src
├── Components
│   └── Post.jsx       # Renders individual posts with user data.
├── Store
│   ├── Reducers
│   │   ├── numberSlice.jsx  # Manages number state with actions and selectors.
│   │   ├── postSlice.jsx    # Manages posts state with async fetching and updates.
│   │   └── userSlice.jsx    # Manages user state with async fetching and selectors.
│   └── store.jsx       # Configures the Redux store.
├── index.css           # Global CSS styles.
├── index.jsx           # Application entry point.
└── App.jsx             # Main application component.
```

## Features

### Posts Management
- Fetches posts from `https://jsonplaceholder.typicode.com/posts`.
- Displays posts with their title and body.
- Allows updating post titles.

### User Management
- Fetches users from `https://jsonplaceholder.typicode.com/users`.
- Displays the name of the user associated with a post.

### Number Increment/Decrement
- Demonstrates the use of `createAction` and `createReducer` for managing a simple counter.

## API Endpoints
- **Posts API**: `https://jsonplaceholder.typicode.com/posts`
- **Users API**: `https://jsonplaceholder.typicode.com/users`

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```bash
   cd <project-directory>
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open the application in your browser:
   ```
   http://localhost:5173
   ```

## Key Files

### `App.jsx`
- Contains the main application logic, including buttons for fetching posts and users, displaying posts, and updating post titles.
- Demonstrates the use of `useDispatch`, `useSelector`, and refs.

### `Post.jsx`
- Renders individual posts and their associated user data.
- Utilizes `selectById` selectors from both `postSlice` and `userSlice`.

### `store.jsx`
- Configures the Redux store and combines reducers from slices.

### `postSlice.jsx`
- Manages post entities and handles fetching posts via `createAsyncThunk`.
- Exports entity selectors like `selectIds`, `selectById`, etc.

### `userSlice.jsx`
- Manages user entities and handles fetching users via `createAsyncThunk`.
- Exports entity selectors like `selectAllUser`, `selectByIdUser`, etc.

### `numberSlice.jsx`
- Demonstrates simple state management for a counter using `createAction` and `createReducer`.

## Dependencies

```json
{
  "dependencies": {
    "@reduxjs/toolkit": "^1.9.0",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-redux": "^8.0.5"
  },
  "devDependencies": {
    "vite": "^4.0.0"
  }
}
```

## Future Improvements
- Add error handling for API requests.
- Implement detailed loading states for better UX.
- Expand the app to include more features such as user creation and deletion.