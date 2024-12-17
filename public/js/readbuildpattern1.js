const container1 = document.querySelector(".container1");
const sizeEl = document.querySelector(".size");
const color = document.querySelector(".color");
const resetBtn = document.querySelector(".btn1");
const saveBtn = document.querySelector(".save");
const restultjson = document.querySelector("restultjson");
const laravel = document.querySelector(".laravel");
const newname1 = document.getElementById("myInput");
const log = document.getElementById("log");
const enteredName = document.getElementById("enteredName");
// Getting the value of the size input
let size = sizeEl.value;
let draw = false;
let projects = [];
let newname = newname1.value;
let x = "{{$x}}";
/*
    Now you can print it or use the way you want.
  */
console.log(x);
let pattern = json($data);
console.log(pattern);
enteredName.innerHTML = pattern;
newname1.addEventListener("input", function () {
    // Update the output paragraph with the current value of the input
    enteredName.textContent = newname1.value;
    newname = newname1.value;
});

// let newname = newname1.value;
// const newname = newname1.value;
// console.log(newname);

// restultjson.innerHTML = projects;

function populate(size) {
    // Updating the --size CSS variable
    container1.style.setProperty("--size", size);
    for (let i = 0; i < size * size; i++) {
        const div = document.createElement("div");
        div.classList.add("pixel");
        // console.log(i);
        div.addEventListener("mouseover", function () {
            if (!draw) return;
            div.style.backgroundColor = color.value;
            projects[i] = color.value;
        });
        div.addEventListener("mousdown", function () {
            // We don't need to check if draw is true here
            // because if we click on a pixel that means we want to draw that pixel
            div.style.backgroundColor = color.value;
            // projects[i] = color.value;
            // let proj = (proj = proj.number = i), (proj.color = color.value);
            // projects[number] = color.value;
            // projects.push((proj.number = i), (proj.color = color.value));
            // console.log(projects);
        });
        div.addEventListener("click", function () {
            // console.log(newname);
            // console.log(newname);

            // We don't need to check if draw is true here
            // because if we click on a pixel that means we want to draw that pixel
            div.style.backgroundColor = color.value;

            projects.push({
                number: i,
                color: color.value,
                name: newname,
                size: size,
            });
            // projects.obj1 = obj1;

            // projects[i] = new Array(i, color.value);
            // projects.push((proj.number = i), (proj.color = color.value));
        });
        container1.appendChild(div);
    }
}
window.addEventListener("mousedown", function () {
    draw = true;
});
// window.addEventListener("mousedown", function () {
//     draw = true;
// });
// Set draw to false when the user release the mouse
window.addEventListener("mouseup", function () {
    draw = false;
});

function reset() {
    container1.innerHTML = "";
    newname1.value = "";
    newname = "";
    enteredName.innerHTML = "";
    projects = [];
    populate(size);
}
// newname1.addEventListener("change", updateValue);

// function updateValue(e) {
//     log.textContent = e.target.value;
// }
populate(size);

function saveproject() {
    // var result = Object.keys(projects).map((key) => [key, projects[key]]);
    // console.log("result", result);
    console.log("projects", projects);
    // container1.innerHTML = "";
    let jsonObject = {
        key1: "value1",
        key2: "value2",
    };
    const jsonString = JSON.stringify(projects);
    // console.log(jsonString);
    console.log("jsonString", jsonString);

    var region = "regionInput";
    $.ajaxSetup({
        headers: {
            "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        },
    });
    $.ajax({
        method: "POST",
        url: "testroute",
        // type: "POST",
        // dataType: "json",
        // contentType: false,

        data: {
            // data: jsonString,
            // data: jsonObject,
            data: projects,
        },
        success: function () {
            // log response into console
            // console.log(result);
        },
    });

    populate(size);
}

resetBtn.addEventListener("click", reset);

saveBtn.addEventListener("click", saveproject);
laravel.addEventListener("click", saveprojectlaravel);

sizeEl.addEventListener("keyup", function () {
    size = sizeEl.value;
    reset();
});

// newname1.addEventListener("keyup", function () {
//     newname = newname1.value;
//     console.log(newname);
//     reset();
// });

populate(size);
