# Dublin Transport Quiz

![Am I responsive](/assets/images/am_i_responsive.png)

[Link to live website](https://www.figma.com/file/JGjOtJ32DX9stmCM0YSNvB/Untitled?node-id=27%3A601497)

A quiz designed to test your knowledge of Dublin's three key public transport services. The Dart, the Bus and the Luas.

## Project-Kickoff 

My idea for the Portfolio 2 project was to code a quiz using 8bit graphics as I felt my knowledge of javascript is quite basic so it makes sense for the style of the site to hark back to more basic time of the internet. I chose the 3 main Dublin Transport services as the focus of my quiz as I thought they would make cool graphics and I only very recently got a car so I spent nearly three decades using the beloved Dart, Bus and Luas. 

The goal of the project was to create a simple visually impressive quiz that would test users knowledge of Dublin cities three main types of public transport with interesting questions, impressive visuals and an enjoyable user experience.

## Visual Design

### Graphics

I designed all the graphics in Adobe Illustrator. I used the grid and live paint tools to create the 8bit style retro graphics. The main points of inspiration were the three castles burning on the Dublin crest worn by the GAA team. I also took inspiration from the original video game 'DOOM' for the PC for the game over screen. In the DOOM game as your health decreased your face became more bloody so I created an illustration of the president of Ireland Michael D Higgins looking a bit worse for wear when you get a game over and one of him wearing shades enjoying a smoke when you complete it. I used the three castles again to represent your three lives, with you losing a castle for each incorrect answer. 
The various forms of transport themselves make up the rest of the illustrations along with a simple 8bit dublin city skyline. 

![Graphics](/assets/images/graphics.png)

### Color Pallette

The color pallette took inspiration from the Dublin flag with its tones of blue for the colder side of it. The flames that appear on the three burning castles of the city's emblem were the inspiration for the warmer side. 

![Color Pallete](/assets/images/colour_pallete.png)

### Typography

For the typography I used the font '8 Bit Wonder' from [DaFont](https://www.dafont.com/8bit-wonder.font) its not a web font so wherever I used it I had to export SVGs from Figma and have them as images in the site. I felt a 8bit font such as this was key to the vibe of the site I wanted to get across so I feel it was worth the extra work.
The other font I used was 'Roboto Mono' as it is a monospaced font common in this kind of style as it's a google font so very easy to use [Roboto Mono](https://fonts.google.com/specimen/Roboto+Mono)

![Typography](/assets/images/typography.png)

### Soundtrack

My brother Brendan is a talented musician so I got him to compose a custom soundtrack for my Quiz in 'Logic' in the vein of the Gameboy soundtracks of our youth. I think it really adds to the experience as soundtracks are key to endearing games to their users in particular with the kind of 8but vibe I was going for

![Soundtrack](/assets/images/soundtrack.jpeg)


## UX

### Wireframes

I designed the screens in Figma. One of my key learnings from the first portfolio project was the practicality of designing mobile first in particular when you are going to be the one developing the site so I began with the homepage, main quiz page,and about page, a game over page and a quiz completed page. 

![Mobile Screens](/assets/images/mobile_screens.png)

I then designed the desktop screens afterwards which was far easier than doing it vice versa as you have more space to play with rather than less. 

![Desktop Screens](/assets/images/desktop_screens.png)

The link to the Figma file where I created the screens for mobile and desktop can be found here [Figma Design File](https://www.figma.com/file/JGjOtJ32DX9stmCM0YSNvB/Untitled?node-id=27%3A601497)

### User Stories

    -  #### First Time Visitor Goals

        1. As a First Time Visitor, I want to be able to find out easily what this site is about.
        2. As a First Time Visitor, I want the navigation to be intutitive and feel seamless between pages.
        3. As a First Time Visitor, I want to enjoy the visual aesthetic of the site.
        4. As a First Time Visitor, I want to find the quiz challenging and informative.

    -   #### Returning Visitor Goals

        1. As a Returning Visitor, I want there to be new questions on a regular basis related to the topic to keep it interesting.
        2. As a Returning Visitor, I want to a way to log my score so that I can try beat it upon return visits.
        3. As a Returning Visitor, I want to be able to potentially upload my own questions related to the content so I can customise the quiz somewhat.


## Features

**Landing Page**
* A button that allows users to commence the quiz
* A button that will bring users to an about page where they can get more information about the quiz
* The page is fully responsive
* Custom 8bit illustrations designed for the site

**About Page**
* An about section where users can read about the quiz
* Links out to more information on each of the three types of transport that open in new tabs
* A back button to return to the landing page
* The page is fully responsive

**Quiz Page**
* A score counter that updates as you click correct answers
* A lives section where the three castles of Dublin represent your three lives and one is removed each time you select an incorrect answer
* An button to play the soundtrack that will trigger the custom soundtrack composed for the game
* A question number that progresses from 1/10 - 10/10 as you progress through the quiz
* The questions themselves that update as you move through the quiz
* The answer buttons of DART, BUS and LUAS with their custom 8bit illustrations
* Audio feedback on the buttons if you get a question correct or wrong

**Gameover Page**
* Your finalscore from the quizpage is taken from the url and displayed beneath the gameover logo
* A play again button if you wish to repeat the quiz
* A custom illustration of aN 8bit irish president looking worse for wear

**Quiz Complete Page**
* Your finalscore from the quizpage is taken from the url and displayed beneath the quiz complete logo
* A play again button if you wish to repeat the quiz
* A custom illustration of an 8bit irish president wearing shades and having a smoke to celebrate with you


### Languages Used

[HTML5](https://en.wikipedia.org/wiki/HTML5)

[CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)

[JavaScript](https://en.wikipedia.org/wiki/JavaScript)

### Frameworks, Libraries & Programs Used

1. [Bootstrap 5.1:](https://getbootstrap.com/docs/5.1/getting-started/introduction/)
    - Bootstrap was used to make use of it's grid feature when making the site responsive
2. [Google Fonts:](https://fonts.google.com/)
    - Google fonts were used to import the 'Roboto Mono' font into the style.css file which is used on all pages throughout the project.
3. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the Gitpod terminal to commit to Git and Push to GitHub.
4. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code after being pushed from Git.
5. [Illustrator:](https://www.adobe.com/ie/products/illustrator.html?mv=search&mv=search&sdid=KCJMVLF6&ef_id=CjwKCAjw_L6LBhBbEiwA4c46usyUOLVy_x_F-6I0Nrl6Bz6TWvq6yhBbKT9K_MpoAb3e8lnDm1jMChoC2WQQAvD_BwE:G:s&s_kwcid=AL!3085!3!520938456683!e!!g!!adobe%20illustrator!1426208079!56320331272&gclid=CjwKCAjw_L6LBhBbEiwA4c46usyUOLVy_x_F-6I0Nrl6Bz6TWvq6yhBbKT9K_MpoAb3e8lnDm1jMChoC2WQQAvD_BwE)
    - Illustrator was used to create all the 8bit Graphics
6. [Figma:](https://www.figma.com/)
    - Figma was used to create the wireframe screens I included in the design section of this readme
7. [Logic](https://www.apple.com/logic-pro/)
    - Logic was used to create the soundtrack for the game by my brother

## Testing
### Validation

The following tools were used to validate the code.

For HTML [W3C Markup Validator](https://validator.w3.org/)

For CSS [W3C CSS Validator Services](https://jigsaw.w3.org/css-validator/)

For Javascript [JShint](https://jshint.com/)

* W3C Markup Validator of index.html
  * The index.html passed with 0 error
  ![Index HTML Testing](/assets/images/index_test.png)

* W3C Markup Validator of about.html
  * The about.html passed with 0 error
  ![About HTML Testing](/assets/images/about_test.png)

* W3C Markup Validator of quiz.html
  * The quiz.html passed with 1 warning for not having a H1 inside a section element but the reason I had used a section element here was just to make the colour of the header bleed to full width but have the content inside the grid of the bootstrap container so it had no need for a h element.  
  ![Quiz HTML Testing](/assets/images/quiz_test.png)

* W3C Markup Validator of gameover.html
  * The gameover.html passed with 0 error
  ![Gameover](/assets/images/gameover_test.png)

* W3C Markup Validator of quizcomplete.html
  * The quizcomplete.html passed with 0 error
  ![Quiz Complete](/assets/images/quizcomplete_test.png)

* W3C CSS Validator 
  * The CSS passed with 0 error
  ![CSS](/assets/images/css_testing.png)


## Deployment

## If I had more time

## Credits

This video was helpful figuring out how to get URL parameters from javascript to get the final score onto the gameover screen [Youtube Tutorial](https://www.youtube.com/watch?v=j3-LV3XxhVg&ab_channel=ProcureEminence)

This video was very helpful in figuring out how to create 8bit style graphics in Adobe Illustrator [Youtube Tutorial](https://www.youtube.com/watch?v=krTF_DLe96c&ab_channel=MakeItPOP)









