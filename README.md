# Dice Game
This is a kid's game to be played with yourself online.  If you need to waste a few minutes, this game is for you.

## Description

This project was made using Visual Code for the IDE along with React and Webpack for compiling the code. When you click the "Roll" button, a timer starts and you have 30 seconds to make all ten die the same number.  You click or select the die you wish to keep and they will turn green. If all ten dice are green and the same number under 30 seconds, you win the game.  Otherwise, you will get a notification that you have lost the game as a loser.


## Getting Started

[![application images](https://github.com/tiptonspiderj/Dice-Game/blob/main/images/Screenshot.png)](https://tiptonspiderj1-dice-game.netlify.app/)

### Installing for Windows

You can make a pull request from this repository and save it onto your local computer.  From there, open up the folder location with Visual Studio Code and run it with the live server extension.  However, you will have to make sure you have NPM installed onto your local machine first and run the following commands in your terminal within Visual Studio Code: "npm install" followed by "npm run dev"  or combine the terminal commands like "npm install && npm run dev".  If you don't know whether or not NPM is installed on your computer, type "npm -v" into your command terminal first.  It should return a number if it is installed.  You also have to ensure you are in the right folder directory of this project if you receive an error in the terminal within Visual Studio Code.

### Dependencies

The dependencies are React and the Vite compiler.  I also used Visual Studio Code to make the project from scratch.  Because of the API calls and React used in the project, it must be ran in a server environment.  Visual Studio Code makes this really easy if you enable the "Live Server" extension.  If you have quesitons about that, you can find sources on how to enable the extension on YouTube.  Third part libraries used in the project are "nanoid" for creating keys when mapping over arrays and "he" for decoding characters that show up in the information returned from the trivia database.

## Color Reference

| Color             | Hex                                                                |
| ----------------- | ------------------------------------------------------------------ |
| Background Color | ![#0b2434](https://via.placeholder.com/10/0b2434?text=+) #0b2434 |
| Card Background Color | ![#f5f5f5](https://via.placeholder.com/10/f5f5f5?text) #f5f5f5 |
| Dice Color | ![#d7d7d7](https://via.placeholder.com/10/d7d7d7=+) #d7d7d7 |
| Selected Dice Color | ![#8b8b8b](https://via.placeholder.com/10/8b8b8b=+) #8b8b8b |
| Button Color | ![#5035ff](https://via.placeholder.com/10/5035ff?text=+) #5035ff |


## Authors

Contributors names and contact info

Jeremy Tipton  
[@tiptonspiderj1](https://tiptonspiderj1.com)

## Version History

* 1.0.0
    * Initial Release

## Feedback

If you have any feedback, please reach out to me at <tiptonspiderj1@aol.com>

## Badges

[![MIT License](https://img.shields.io/badge/License-MIT-green.svg)](https://choosealicense.com/licenses/mit/)
![CSS3](https://img.shields.io/badge/css3-%231572B6.svg?style=for-the-badge&logo=css3&logoColor=white)
![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white)
![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E)
![Scrimba](https://img.shields.io/badge/scrimba-2B283A?style=for-the-badge&logo=scrimba&logoColor=white)
![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white)
![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB)
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-0078d7.svg?style=for-the-badge&logo=visual-studio-code&logoColor=white)
![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white)

## Acknowledgments

Inspiration, code snippets, etc.
* [awesome-readme](https://github.com/matiassingers/awesome-readme)

### Scrimba

At Scrimba our goal is to create the best possible coding school at the cost of a gym membership! 💜
If we succeed with this, it will give anyone who wants to become a software developer a realistic shot at succeeding, regardless of where they live and the size of their wallets 🎉
The Frontend Developer Career Path aims to teach you everything you need to become a Junior Developer, or you could take a deep-dive with one of our advanced courses 🚀

- [Our courses](https://scrimba.com/allcourses)
- [The Frontend Career Path](https://scrimba.com/learn/frontend)
- [Become a Scrimba Pro member](https://scrimba.com/pricing)
1

### React + Vite

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh
