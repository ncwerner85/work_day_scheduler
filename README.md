# work_day_scheduler

## Description 

* Created the HTML using bootstrap to layout the timeblocks of the day on the planner. 
* Added a button to my timeblocks so save the data. 
* The layout looked great! 
* I was able to use the Luxon API to set the current date at the top of the planner page. At first I could only get the static date to show but then I built a function that was able to actively show the current time.
* I had gotten the local storage to set the text but was having trouble get it. It needed some adjustments to make unique id's then I was able to build a function that  grabbed the text in textarea for 8am and set it when the page reset.
* I had everything is working except for the color coding based on the hour of the day. I looked into the Luxon docs to see how to grab the current hour so i can create a if/else statement the will look at the time and if past apply past color, if present apply present color and if future apply future color.
* I was able to find how to get the current hourand I was able to create a if/else statement the will look at the hour and color the textarea appropriately.
* The application seems to be working well. 

## Screenshot
![day planner image](https://github.com/ncwerner85/work_day_scheduler/blob/main/assets/Screen%20Shot%202020-11-02%20at%209.38.31%20AM.png)

## Link to deployed site
[Workday Planner](https://ncwerner85.github.io/work_day_scheduler/)

## License
[MIT](https://choosealicense.com/licenses/mit/)


