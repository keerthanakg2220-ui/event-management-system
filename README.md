# Personal Event Planner System (PEPS)

A full-stack web application for managing personal events with Express.js backend and React frontend.

## Features

- Add new events with details (name, date, time, title, location, description)
- View events by event name
- Update existing events
- Delete events
- Filter events by status (Pending, Completed, Cancelled)
- Update event status and comments

## Tech Stack

- **Backend**: Node.js, Express.js, MongoDB, Mongoose
- **Frontend**: React.js, Axios
- **Database**: MongoDB

## API Endpoints

- `POST /api/event` - Add a new event
- `GET /api/event/{eventName}` - View all events for a specific event name
- `PUT /api/event/{id}` - Edit/update an event by ID
- `DELETE /api/event/{id}` - Delete an event by ID
- `GET /api/event/status/{status}` - View events filtered by status
- `PUT /api/event/status/{id}` - Update status and comment of a specific event

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally on port 27017)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
   ```bash
   cd nodeapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the backend server:
   ```bash
   npm start
   ```

   The backend will run on `http://localhost:8080`

### Frontend Setup

1. Navigate to the frontend directory:
   ```bash
   cd reactapp
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the frontend application:
   ```bash
   npm start
   ```

   The frontend will run on `http://localhost:3000`

### MongoDB Setup

Ensure MongoDB is running locally:
```bash
mongod
```

The application will connect to `mongodb://127.0.0.1:27017/personal_event_planner`

## Usage

1. Start MongoDB service
2. Start the backend server (port 8080)
3. Start the frontend application (port 3000)
4. Open your browser and navigate to `http://localhost:3000`
5. Use the interface to add, view, edit, and delete events

## Project Structure

```
personal-event-planner/
├── nodeapp/                 # Backend (Express.js)
│   ├── controllers/         # Request handlers
│   ├── services/           # Business logic
│   ├── models/             # Database models
│   ├── repositories/       # Data access layer
│   ├── routes/             # API routes
│   ├── config/             # Configuration files
│   ├── package.json
│   └── server.js           # Entry point
├── reactapp/               # Frontend (React)
│   ├── public/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── App.js          # Main App component
│   │   ├── index.js        # Entry point
│   │   └── index.css       # Styles
│   └── package.json
└── README.md
```

## Sample Event Data

```json
{
  "eventName": "Tech Drive Aug 2025",
  "eventDate": "2025-08-20",
  "eventTime": "10:00 AM",
  "eventTitle": "Backend Developer Interview",
  "eventLocation": "Online - Zoom",
  "description": "Final round interview with CTO",
  "status": "Pending",
  "comment": ""
}
```