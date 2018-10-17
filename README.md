# FaC14: Pairs Game
A card game based on the memory game known as Concentration, Match Match, Match Up, Memory, Pelmanism or simply Pairs. 
Match each github avatar/username with the correct fun fact (from the name-game icebreaker**) to complete the game.

[Play it here!](https://fac14-name-game.netlify.com/)

The github profiles are all from members of the 14th cohort of Founders & Coders. And their fun-facts are from a silly icebreaker game for remembering new peoples names, which is based on the traditional "When I went to the shops I bought..." game. But instead of food items everyone adds their name and a silly-fact about themselves to the on-going list.

So this is actually memory game-ception, can you remember where the cards are AND can you remember which person matches to which fact 🧐.

## Getting Started
If you want to get a copy of the project up and running on your local machine to play with follow these instructions.

*Please ensure you have this software **installed and running** on your local machine **before** you attempt to run this webapp.*
> **Node** (via nvm recomended)
> see: https://github.com/creationix/nvm

### Setup

#### 1. Clone or fork the repo:
```
$ git clone https://github.com/SleepySheepy172/name-game-pairs.git
```
#### 2. Install Dependencies 
```
$ cd name-game-pairs
$ npm i
```

#### 3. Ensure you have the neccesary Access Token for the Github API call
Create a file called `accessToken.js` in the root folder.
Add this👇 line to the file inserting your own github access token.
```
export const accessToken = ' [YOUR-ACCESS-TOKEN] ';
```
You can get an access token on Github by going to your 
```
Settings > Developer Settings > Personal access tokens
```

#### 4. Run the Server
```
$ npm start
```
You should recieve a 
```
Server running at http://localhost:1234
✨  Built in 5.84s.
``` 
message.

#### 5. Have Fun
Go to
```localhost:1234```
in the browser and play with the code all you like 🎉

If you notice anything wrong with the instructions or the project isn't running as expected don't hesitate to raise an issue and we'll try to figure it out.
