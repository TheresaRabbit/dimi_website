const myName = 'Theresa';
const div = document.getElementById( `nameDiv`);

function changetext(div, text) {
    div.innerText = text;
}

i = 0;

function Button(){
    if (i==0) {
        changetext(div, `Hello my name is ${myName}`);
    } else {
        const currentTime = new Date();
        const newElement = document.createElement(`div`);
         newElement.innerText = `Created at ${currentTime}`;
         document.body.appendChild(newElement);
    }
    i = i + 1;
}
