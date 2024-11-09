# My Clean Architecture React/Next.js Project

## Overview

This project is a simple React/Next.js application that follows **Clean Architecture** principles to ensure that the code is modular, maintainable, and scalable. The app fetches and displays a list of users using React, Redux, and Ant Design, demonstrating how Clean Architecture can be applied in a modern web development stack.

## Features

- **User List**: Displays a list of users with their names, email addresses, and avatars.
- **Responsive UI**: Uses Ant Design components to ensure a modern, responsive UI.
- **Loading and Error States**: Implements loading and error handling with Ant Design’s `Spin` and `Alert` components.
- **State Management**: Uses Redux to manage application state, with actions and reducers to handle user data fetching.

## Clean Architecture in This Project

The project follows the **Clean Architecture** principles, which emphasizes separation of concerns, modularization, and testability. Here’s a brief explanation of how Clean Architecture has been applied:

### 1. **Core Layer (Entities)**
- **Purpose**: Contains business logic and core models.
- **What’s in it**: 
  - `User.js`: Defines the user model with fields like `id`, `name`, `email`, and `avatar`.
- **Benefit**: Decouples business logic from the rest of the application, ensuring it’s reusable and testable.

### 2. **Use Cases Layer (Application Logic)**
- **Purpose**: Contains the application-specific logic.
- **What’s in it**:
  - `fetchUsers.js`: Defines the logic for fetching user data from an API and returning it as `User` entities.
- **Benefit**: The use cases are independent of UI and external libraries, making it easier to manage and test the business logic.

### 3. **Interface Adapters Layer (UI and State Management)**
- **Purpose**: Acts as a bridge between the core business logic (entities and use cases) and the UI.
- **What’s in it**:
  - **Redux Actions and Reducers**: Manages the fetching of users, handling loading states, and storing the user data in the Redux store (`userActions.js`, `userReducer.js`).
  - **Components**: React components like `UserCard` and `UserContainer` are used to display the user data.
- **Benefit**: This layer adapts the data coming from the core logic into the format needed by the UI, making it easier to update or replace the UI without affecting core business logic.

### 4. **Frameworks & Drivers Layer (External Tools)**
- **Purpose**: Contains external libraries and tools such as React, Redux, and Ant Design, which drive the UI and handle external interactions like API requests.
- **What’s in it**:
  - **React Components**: Displays data using Ant Design’s `Card`, `Row`, and `Col` components for a responsive UI.
  - **API Service**: Uses a simple `fetch` function to interact with the backend API for fetching user data.
- **Benefit**: This layer contains the specifics of how external tools and libraries are used, without affecting the core business logic.

### Folder Structure

The project is organized into distinct folders, each corresponding to a layer of the Clean Architecture:

```
/src
  /core
    /entities
      User.js
    /usecases
      fetchUsers.js
  /store
    /actions
      userActions.js
    /reducers
      userReducer.js
  /components
    UserCard.js
  /containers
    UserContainer.js
  /services
    api.js
```

### Key Benefits of Clean Architecture:

- **Separation of Concerns**: Each part of the application has a clear responsibility. This makes the application easier to maintain and test.
- **Testability**: With business logic (use cases and entities) separated from the UI and framework logic, unit testing becomes easier.
- **Scalability**: As new features or components are added, the code remains modular and easy to extend.
- **Flexibility**: The core business logic is independent of React, Redux, and other frameworks, allowing for easier changes to external libraries or UI components.

## How to Run

1. Clone this repository.
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the development server:
   ```bash
   npm run dev
   ```
4. Open `http://localhost:3000` in your browser to see the app in action.
