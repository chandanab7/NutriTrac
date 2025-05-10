# NutriTrack - Functional Prototype

## Project Overview
NutriTrack is a smart nutrition companion that uses AI-based food recognition and the Spoonacular API to fetch real-time nutrition data.

## Folders
- `mobile-app/`: React Native app for food image input and nutrition results display.
- `backend/`: Node.js backend with API route for Spoonacular integration.

## Setup Instructions

### Backend
1. Navigate to `backend/`
2. Run `npm install`
3. Create a `.env` file with your Spoonacular API key:
```
SPOONACULAR_API_KEY=your_api_key_here
```
4. Run `node index.js` to start the server.

### Mobile App
1. Navigate to `mobile-app/`
2. Run `npm install`
3. Launch app with Expo or React Native CLI
4. Capture or select a food image to get nutrition info

## Notes
- This is a functional prototype meant for hackathon demonstration.
- AI food recognition is simulated; enter food names directly in this version.
