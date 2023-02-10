# Exercism
https://exercism.org/

## First time only
1. Create a new Github project in your account called Exercism
2. git clone Exercism into you home directory
3. Install Exercism CLI: 
   brew update
   brew install exercism 
4. Test if Exercism is correctly installed
   exercism version
5. Configure Exercism:
   exercism configure --token=e772c1f1-8101-...

## Recurring
1. Work locally (CLI). Download the excercise, example:
   exercism download --exercise=freelancer-rates --track=javascript
2. Move to the exercise directory and check that .gitignore exists
3. git add / commit / pust (initial)
4. execute npm install to install all dependencies (package.json)
   this allows to test, watch the exercises.
5. Optional: test every time you save the JS file by running:
   npm run watch
6. Solve the exercise
   if you have activated npm run watch, the tests will be executed 
   in the terminal.
7. Once the test pass, submit the exercise to Exercism:
   exercism submit annalyns-infiltration.js
8. Go to the exercise webpage and if OK, mark as completed
9. Git add/commit/push
