function getSquare(canvas, evt) {
    var rect = canvas.getBoundingClientRect();
    return {
        x: 1 + (evt.clientX - rect.left) - ((evt.clientX - rect.left) % 20),
        y: 1 + (evt.clientY - rect.top) - ((evt.clientY - rect.top) % 20),
    };
}

function drawGrid(context) {
    for (var x = 0.5; x < 401; x += 20) {
        context.moveTo(x, 0);
        context.lineTo(x, 400);
    }

    for (var y = 0.5; y < 401; y += 20) {
        context.moveTo(0, y);
        context.lineTo(400, y);
    }

    context.strokeStyle = "#ddd";
    context.stroke();
}

function fillSquare(context, x, y, mapNumber) {
    context.fillStyle = mapNumber;
    context.fillRect(x, y, 19, 19);
}

var canvas = document.getElementById("myCanvas");
var context = canvas.getContext("2d");
var mapNumber;
var mybuttons = document.querySelectorAll(".mybuttons button");

drawGrid(context);

canvas.addEventListener(
    "click",
    function (evt) {
        var mousePos = getSquare(canvas, evt);
        fillSquare(context, mousePos.x, mousePos.y, mapNumber);
    },
    false
);

mybuttons.forEach((mybutton) => {
    mybutton.addEventListener("click", processClick);
});

function processClick() {
    // save the id of the clicked button as mapNumber
    window.mapNumber = this.id;

    // set climate variable based on which was clicked, e.g.

    // Display the mapNumber, just to show its working :)
    document.getElementById("mapNumber").innerHTML =
        "mapNumber: " + window.mapNumber;
    // document.getElementById("climate").innerHTML = "Climate: " + climate;
}
