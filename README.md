# phase_five_project - TrainingBuddy

TrainingBuddy is a React/Redux application with a RAILS API backend that allows a user to keep track of workout sessions and each workout that is a part of that session, their personal bests, and people who inspire them to keep training. The application uses "Thunk middleware" so that asynchronous requests can be made between the Redux store and the backend API. Users can create, view and delete data from the backend using forms, links and buttons that dispatch actions to the store. The application was styled using the "MaterialUI library", in order to make the application more aesthetically pleasing than a regular HTML application.

# Installation
Clone this repo, and then go to https://github.com/Strycora/phase_five_backend and clone the code. While in the terminal for the backend, run 'rails db:create' and 'rails db:migrate', and optionally, 'rails db:seed'. Then run 'rails s' and come back to the frontend. Run 'npm install' and 'npm start' or 'yarn start' to boot up the frontend.  

# Usage 

Begin by clicking on the 'New Session' tab in the navbar at the top of the page. Enter a session name and date and click submit. Then click the 'Sessions' tab and a new session should appear on the screen. Click the link and enter a workout name, sets, reps and weight to begin adding workouts. Enter a Personal Best in the 'New Personal Best' tab, adding a workout name, weight, and reps in order to add it to the list of personal bests, accessible in the 'Personal Bests' tab. Click on 'Add an Inspiration' in the navbar to go to a form where you can enter the name, image URL, and bio of someone who motivates you to train. It will show up on the list in the 'My Inspirations' tab. 

# Contributing
Send an email to strycora@gmail.com if you would like to make a contribution. 

# License
[MIT](https://choosealicense.com/licenses/mit/)
