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