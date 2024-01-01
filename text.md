# Color Changer

## HTML Source Code

``` html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="./style.css" type="text/css">
    <title>Color Changer</title>
</head>
<body>
    <div class="canvas">
        <h1>Color Scheme Switcher</h1>
        <span class="button" id="grey"></span>
        <span class="button" id="white"></span>
        <span class="button" id="blue"></span>
        <span class="button" id="yellow"></span>
    </div>
    <script src="./script.js"></script>
</body>
</html>
```

## Javascript Source Code

```` Js
const buttons = document.querySelectorAll('.button');
// console.log(buttons)
const body = document.querySelector('body');

buttons.forEach( (button) => {
    // console.log(button)

    button.addEventListener('click', (event) => {
        // console.log(event);
        // console.log(event.target);
        switch (event.target.id) {
            case "grey":
                // console.log(event.target.id)
                // body.style.backgroundColor = 'grey';
                body.style.backgroundColor = event.target.id;
                break;

            case "white":
                // console.log(event.target.id)
                // body.style.backgroundColor = 'white';
                body.style.backgroundColor = event.target.id;
                break;

            case "blue":
                // console.log(event.target.id)
                // body.style.backgroundColor = 'blue';
                body.style.backgroundColor = event.target.id;
                break;
        
            case "yellow":
                // console.log(event.target.id)
                // body.style.backgroundColor = 'yellow';
                body.style.backgroundColor = event.target.id;
                break;
        }

    })
})
```
