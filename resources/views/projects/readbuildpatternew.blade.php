@extends('kralen.layout')
@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="navbar1">
        <button class="btn1">Reset</button>
        <button class="save">Save</button>
        <button class="deletebtn">Delete</button>
        {{-- <input type='tekst' id="myInput" class="name" name="name" size="10"> --}}
        <select name="name" id="name-select">
            <option value="">Click to select</option>
            @foreach ($patternnew as $patternName)
                <option value="{{ $patternName->name }}"{{ $patternName->name == $pattern->name ? 'selected' : '' }}>
                    {{ $patternName->name }}</option>
            @endforeach
        </select>
        <input type="color" value="#00eeff" class="color">
        <button class="open-button" onclick="openFormNew()">new pattern</button>

        <div class="form-popup" id="myForm">
            <form action="{{ url('newpattern') }}" method="post" class="form-container">
                @csrf
                <h1>New Pattern</h1>

                <label for="name"><b>Name</b></label>
                <input type="text" name="name" required>

                <label for="size"><b>Size</b></label>
                <input type="text" name="size" required>

                <select name="kind" id="kind-select" required>
                    <option value="">--Please choose an option--</option>
                    <option value="brick">brick</option>
                    <option value="cross">cross</option>
                </select>
                <button type="submit" class="btn">Add New Pattern</button>
                <button type="button" class="btn cancel" onclick="closeFormNew()">Close</button>
            </form>
        </div>
        <button class="open-button" onclick="openFormEdit()">Edit</button>

        <div class="form-popup" id="editForm">
            <form action="/editfrom/{{ $pattern->id }}" method="post" class="form-container">
                @csrf
                <h1>Edit Form</h1>

                <label for="name"><b>Name</b></label>
                <input type="text" name="name" value="{{ $pattern->name }}">

                <label for="size"><b>Size</b></label>
                <input type="text" name="size" value="{{ $pattern->size }}">

                <select name="kind" id="kind-select" required>
                    <option value="">--Please choose an option--</option>
                    <option value="brick">brick</option>
                    <option value="cross">cross</option>
                </select>
                <button type="submit" class="btn">Edit Pattern</button>
                <button type="button" class="btn cancel" onclick="closeFormEdit()">Close</button>
            </form>
        </div>
    </div>

    <div class="container1">
    </div>

    <script>
        let container1 = document.querySelector(".container1");
        // let sizeEl = document.querySelector(".size");
        const color = document.querySelector(".color");
        const resetBtn = document.querySelector(".btn1");
        const saveBtn = document.querySelector(".save");
        const deleteBtn = document.querySelector('.deletebtn');
        const restultjson = document.querySelector("restultjson");
        const laravel = document.querySelector(".laravel");
        let newname1 = '';
        const log = document.getElementById("log");
        // let kindselect = document.getElementById('kind-select')
        let nameselect = document.getElementById('name-select');
        let kind = '';
        let draw = false;
        let projects = [];
        let newname = '';
        var patternArray = {};
        let pattern1 = {!! json_encode($pattern) !!};
        let size = pattern1['size'];
        let sizechild = size + 1 + "n";
        let patterncolors = {!! json_encode($patterncolors) !!}
        let patternnew = {!! json_encode($patternnew) !!};
        let lastpart = window.location.pathname.split('/').filter(Boolean).pop();
        lastpart = Number(lastpart)
        let patterncolordata = {!! json_encode($patterncolordata) !!};

        $(document).ready(get_name_select);
        // console.log('newname1', newname1.value);
        // console.log('nameselect', nameselect.value);
        // console.log('lastpart', typeof(lastpart));

        function get_name_select() {
            // console.log(' patterncolordata', patterncolordata);

            // console.log('patternnew.length', patternnew.length);
            // console.log('patternnew', patternnew);
            for (let i = 0; i < patternnew.length; i++) {
                if (patternnew[i]['id'] == lastpart) {
                    newname1.value = patternnew[i]['name'];
                }
            }
            populate(patternArray, newname);
        }

        function populate(patternArray) {
            const jsonString = JSON.stringify(projects);


            if (pattern1['kind'] === "cross") {
                container1.className = "container1"
                container1.style.setProperty("--size", size);
                container1.innerHTML = ""
            } else if (pattern1['kind'] === "brick") {
                container1.className = "container2"
                // gridtemplatecolumns en gridtemplaterows vervangt de css in buildpattern.css
                container1.style.gridTemplateColumns = "repeat(21,10px)";
                container1.style.gridTemplateRows = "repeat(11,20px)";

                //onderstaande functie werkt niet
                // $(document).ready(function() {
                //     $(".container2.card:nth-child(1n)").css("gridColumn", "span 2");
                //     $(".container2.card:nth-child(1)").css("gridColumn", "span 1");
                //     $(".container2.card:nth-child(15n)").css("gridColumn", "span 1");
                //     $(".container2.card:nth-child(17n)").css("gridColumn", "span 1");
                //     $(".container2.card:nth-child(3)").css("background-color", "yellow");
                // });


                container1.innerHTML = ""
            } else {
                container1.className = "container1"
                container1.style.setProperty("--size", size);
                container1.innerHTML = ""
            }


            for (let i = 0; i < size * size; i++) {
                const div = document.createElement("div");
                div.classList.add("card");
                // var myObj = document.getElementsByClassName('card');
                // console.log(' myObj');
                // for (var j = 0; j < myObj.length; j++) {
                //     myObj[j].style['background-color'] = '#ccc';
                // }
                for (let x = 0; x < patterncolors.length; x++) {

                    if (patterncolors[x]['number'] == i) {
                        div.style.backgroundColor = patterncolors[x]['color'];
                    }
                }

                div.addEventListener("mouseover", function() {
                    if (!draw) return;
                    div.style.backgroundColor = color.value;
                    projects[i] = color.value;
                });

                div.addEventListener("mousdown", function() {
                    // add the insert in database in this function
                    div.style.backgroundColor = color.value;

                });
                div.addEventListener("click", function() {
                    // We don't need to check if draw is true here
                    // because if we click on a pixel that means we want to draw that pixel
                    div.style.backgroundColor = color.value;

                    projects.push({
                        patternid: lastpart,
                        colornumber: i,
                        color: color.value,
                        name: newname1.value,
                        size: size,
                        userid: {{ auth()->user()->id }},
                    });
                });
                container1.appendChild(div);
            }
            console.log('projects', projects);

        }
        window.addEventListener("mousedown", function() {
            draw = true;
        });
        // window.addEventListener("mousedown", function () {
        //     draw = true;
        // });
        // Set draw to false when the user release the mouse
        window.addEventListener("mouseup", function() {
            draw = false;
        });

        function reset() {
            takeshot();
            container1.innerHTML = "";
            newname1.value = "";
            projects = [];
            populate(size, patternArray, newname2)
        }

        function saveproject() {
            const jsonString = JSON.stringify(projects);
            // console.log(jsonString);
            console.log("jsonString", jsonString);
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
            });
            $.ajax({
                method: "POST",
                url: "/readbuildpatternew/" + lastpart,
                data: {
                    data: projects,
                },
                success: function(result) {
                    window.location.href = "/../readbuildpatternew/" + lastpart;

                    console.log(result);
                },
            });
        }

        // function deleteproject() {
        //     var result = confirm("Want to delete?");
        //     if (result) {

        //         // container1.innerHTML = "";
        //         // newname1.value = "";
        //         // projects = [];
        //         // populate(size, patternArray, newname2)
        //         $name = newname2;
        //         $userid = {
        //             {
        //                 auth() - > user() - > id
        //             }
        //         };
        //         $deletedata = [$name, $userid];
        //         console.log($deletedata);
        //         $.ajaxSetup({
        //             headers: {
        //                 "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
        //             },
        //         });
        //         $.ajax({
        //             method: "POST",
        //             url: "deleteproject",


        //             data: {

        //                 data: $deletedata,
        //             },
        //             success: function(result) {
        //                 // log response into console
        //                 console.log(result);
        //             },
        //         });
        //         location.reload();
        //         // get_name_select()
        //     }
        // }
        resetBtn.addEventListener("click", reset);

        saveBtn.addEventListener("click", saveproject);
        // deleteBtn.addEventListener("click", deleteproject);

        // newname1.addEventListener("keyup", function() {
        //     newname = newname1.value;
        //     //     console.log(newname);
        //     // patternArray = {};
        //     populate(size, patternArray);
        //     // });
        // });

        // kindselect.addEventListener("change", function() {
        //     // console.log(kindselect.value);
        //     kind = kindselect.value;
        //     populate(size, patternArray);
        // });

        nameselect.addEventListener("change", function() {
            for (let i = 0; i < patternnew.length; i++) {
                if (patternnew[i]['name'] == nameselect.value) {
                    window.location.href = "/../readbuildpatternew/" + patternnew[i]['id'];
                }
            }
        })

        function openFormNew() {
            document.getElementById("myForm").style.display = "block";
        }

        function closeFormNew() {
            document.getElementById("myForm").style.display = "none";
        }

        function openFormEdit() {
            document.getElementById("editForm").style.display = "block";
        }

        function closeFormEdit() {
            document.getElementById("editForm").style.display = "none";
        }
    </script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
@endsection
