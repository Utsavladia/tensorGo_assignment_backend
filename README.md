# Feedback Application Backend

This is the backend part of the Feedback Application. It handles authentication, feedback submission, and storage using MongoDB.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js (v14 or higher)
- npm (v6 or higher)
- MongoDB

## Getting Started

To set up and run the backend server on your local machine, follow these steps:

### 1. Clone the Repository

```bash
git clone https://github.com/Utsavladia/tensorGo_assignment_backend
cd feedback-backend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Configure Environment Variables
#### Create a .env file in the root directory of the project and add the following environment variables:
```bash
GOOGLE_CLIENT_ID=your-google-client-id
MONGO_URI=your-mongodb-connection-string

```

### 4. Run the Application
```bash
npm start
```
### Usage
#### The backend server is now ready to handle authentication and feedback submission from the frontend. You can start using the frontend application to provide feedback.

### Note: I requested but could not get the Frill.co API, so MongoDB is used for storing and retrieving the feedback instead of frill.co
