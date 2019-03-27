
# Hack Belgium for kids


## Coding ? What the hell is coding ?! 
Coding allows you to communicate with a machine. In the same way  peoples uses french, english, dustch,... to understand each other, there are many programming languages that let you  speak to a machine. We will look together to some of them used and  that are mostly use in website and web application.

### Html (HyperText Markup Language)

Html is not really a prgraming language. It's a markup language. Html is a key in prgramming for the web, since it is the structure of the web page. In comparaison with the human body, it would be the skeleton aka the bones, muscles and flesh of the body.

Html uses tag to define a structur, you can find here some of the most used  tags : 
```html
<!-- A block of content -->
<div></div>
 
<!-- An image -->
<img src="" alt="" />

<!-- A link -->
<a href=""></a>

<!-- A title -->
<h1></h1>

<!-- a text paragraphe -->
<p></p>
```
As you can see, some tags have and opening and closing tag, others like the image one has  only one tag. 


### CSS (Cascading Style Sheets)

CSS is a styling language. It's used in order to change the display and position of a webpage's elements. With css you can change color color and size of every html element. In coparision with the human body, this all the estetics part : Size and color of the hair, color of the eyes and the skin, size and wheigth of the body,...

In order to use css you should select element in the  html trought classes and they apply them some properties

```css
/*change the color of the text to  blue*/
color:blue;

/*Change the color of the background to black*/
background-color:black;

/*Add an image hasabackground of an element*/
background-image: url('./images/bg-01.jpg');

/*Add a red border of 5px width to the left of the element*/
border-left: 5px solid red;
```

### Javascript

Javascript  is a programming language use in the web forhandeling interactions between the user an the application/website. Javascript has gain a traction these days and can bu use for the web, but allow us also  to communicate with connected object,  mobile phone app, desktop apllication, and can even run server.

Javascript is more complexe than html and css, it use function (blocks of code) to exécute precise tasks :

```js
/*Variable*/
Var text  = 5;

/*Declaring a function*/
function nameOfMyFunction(){
    console.log('hello');
}

/*Use it */ 
nameOfMyFunction();

/*Conditional statment*/
if(5 > 3){
    console.log(5 is  greater that 3);
}

/*Loop*/
for(var i  = 0; i < 10; i++){
    console.log(i)
}

```


## Use coding to customize your application

First to start your project run the following command in  your terminal :

```
npm start
```

![terminal](./assets/terminal.png)

This allow your project to start and can now be modified. Open your favorite borser and visite this  website :  http://localhost:5000/
this is you application.

In order to  test it we need to be sure the board is connectedto  your computer if you see  the status board blue the your reday  to start.

![status  board](./assets/status.png)

The app is configure to say hello when  you click on the button of the  arduino. Try-it.

First  try to change the text so that when you click on the button,the app says hello to you. To do this,  go  to `main.js` and find this  function

```js
socket.on('buttonPress', function (data) {
  showMessage('Hello');
  //happyEmot();
  //angryEmot();
  toggleMessageBox();
});
``` 

This functions is exécuted each time the  button is pressed. You just have to add your name after Hello, like this: 

```js
socket.on('buttonPress', function (data) {
  showMessage('Hello');
  //happyEmot();
  //angryEmot();
  toggleMessageBox();
});
```

Save the file with `ctrl + s`, got to your browser and refresh the page. Check the status board to be sure everything is ok, if not, refresh  the page. You need to do this each time you change a file.

Now press the burrton on the arduino board and admire the result. 

You can play with other options try to comment the ` showMessage()` function by using `//` in front of the line and uncoment `happyEmot()` by removing the comments `//`. 

Time for you to check with `Sebastiano` how to implement your idea.

When your idea is implemented you can personalise the website by playing with css. 

If you  want  to  change the background image of the website, the one with the subway, go online and search for an image. If you have found something cool, save-it to the image directory of the project folder along with : `bg-01.png`, `bg-02.png` and  `bg-03.png`.

The you can go to `style.css` file :

```css
@import './core/core.css';
/* Color of the title (Hack Belgium for kids) */
.site-title{
    color: #16BEFF;
}

/* Background image */
.header{
    background-image: url('./images/bg-01.png');
}

/* color of the blue bar under the image */
.date-container{
    background-color: #16BEFF;
}

/* Color of the border of the message box */
.message{
    border-left: 5px solid #16BEFF;
}

/* Backgground and text color on the on bubbles */
.status--on{
    background-color: #16BEFF;
    color: #FFFFFF;
}

```

In this file, all the code is commented. You can change  the link to the image. Pay attention to the extension of your image `jpg`, `png`, `giff`, ...

If you one change the colors go to [flatuicolor](https://flatuicolors.com/palette/nl) and click on one of the colors to automaticly copé the color and replace the ones in `style.css` file.

Don ? Good !! this means, you have your owne application running with and arduino board. Go customise your board case with some stickers. 

