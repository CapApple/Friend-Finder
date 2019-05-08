# Friend-Finder

In this project, I built a compatibility-based "FriendFinder" application -- basically a dating app. This full-stack site takes in results from users' surveys, then compare their answers with those from other users. The app will then display the name and picture of the user with the best overall match.

I used Express to handle routing. And heave deployed the app to Heroku: https://mighty-badlands-27450.herokuapp.com/

### How the app works:

* Users are supposed to finish all the required areas, otherwise will be alerted. 
* After they submit their answers, their best match will be displayed in a modal. 

### How I built the app

* I used express to handle routing and GET/POST request. And jQuery for manipulating DOM.
* The logics I used to calculate the best match:

  Convert each user's results into a simple array of numbers (ex: [5, 1, 4, 4, 5, 1, 2, 5, 4, 1]). With that done, compare the difference between current user's scores against those from other users, question by question. Add up the differences to calculate the totalDifference.
  
### What's next

I will tweak the code further more so that the it can handle the situation where there are two or more users with same "matching scores". 
  
