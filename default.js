window.onload = async function() {
    controllerLoad();;
    
};

function controllerLoad(){
    if(window.location === window.parent.location){
        fullScreenButtonEvent();
    } else {
        
    }
}

function fullScreenButtonEvent(){
    const button = document.querySelector("#fullscreenButton");
    button.addEventListener('click', (event) => {
        openFullscreen()
        console.log("click")
    });

}

function openFullscreen() {
    const elem = document.querySelector("#frame");
    if (elem.requestFullscreen) {
    elem.requestFullscreen();
    } else if (elem.webkitRequestFullscreen) { /* Safari */
    elem.webkitRequestFullscreen();
    } else if (elem.msRequestFullscreen) { /* IE11 */
    elem.msRequestFullscreen();
    }
}