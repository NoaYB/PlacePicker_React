![image](https://github.com/user-attachments/assets/565b32aa-26b3-43ee-abcb-e7d3ba302841)



PlacePicker
PlacePicker is a React-based application that allows users to create their personal collection of places they would like to visit or have visited. Users can browse a list of available places, select places to add to their list, and remove them when no longer desired.
________________________________________
Features
1.	Interactive Place Selection:
o	Browse through a visually appealing list of available places.
o	Add places to your "I'd like to visit..." collection.
2.	Remove Confirmation Modal:
o	Confirms before removing a place.
o	Auto-confirm after 3 seconds unless canceled.
3.	Sorted by Distance:
o	Places are dynamically sorted based on the user's geolocation.
4.	Local Storage Integration:
o	Persist your selected places even after refreshing the page.
________________________________________
Technologies Used
•	Frontend: React (JSX, State, Props, Hooks)
•	Styling: CSS (Custom styles)
•	Geolocation: navigator.geolocation
•	Persistence: localStorage
________________________________________
Getting Started
Follow these steps to set up and run the project locally:
1. Clone the Repository
bash
Copy code
git clone https://github.com/your-repo/placepicker.git
cd placepicker
2. Install Dependencies
Make sure you have Node.js installed. Then, run:
bash
Copy code
npm install
3. Start the Development Server
Run the following command to start the app:
bash
Copy code
Npm run dev
The app will be available at http://localhost:5173.
________________________________________
File Structure
bash
Copy code
src/
├── App.js                       # Main application component
├── components/
│   ├── DeleteConfirmation.js    # Component for confirmation modal
│   ├── Modal.js                 # Reusable modal component
│   ├── Places.jsx               # Displays lists of places
├── assets/
│   ├── logo.png                 # App logo
├── data.js                      # List of available places
├── loc.js                       # Geolocation logic for sorting places
├── index.css                    # Stylesheet
├── index.js                     # Application entry point
________________________________________
Usage
1.	Add Places:
o	Select places from the "Available Places" section.
o	They will appear under "I'd like to visit...".
2.	Remove Places:
o	Click on a selected place to remove it.
o	A confirmation modal will appear.
3.	Dynamic Sorting:
o	The available places are automatically sorted by distance from your current location.
________________________________________
Customization
You can customize the following parts:
1.	Add/Remove Places: Modify the AVAILABLE_PLACES array in data.js to add or remove places.
2.	Styling: Edit index.css to change the theme, colors, or layout.
________________________________________
