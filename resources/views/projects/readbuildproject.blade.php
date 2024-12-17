@extends('kralen.layout')
@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="navbar1">
        <button class="btn1">Reset</button>
        <button class="save">Save</button>
        <button class="deletebtn">Delete</button>

        {{-- <button class="laravel">tolaravel</button> --}}
        {{-- <button onClick="onBtnClick()" data-url="{{ route('testroute') }}"></button> --}}
        <input type='tekst' id="myInput" class="name" name="name" size="10">
        <select name="name" id="name-select">
            <option value="">Click to select</option>
            @foreach ($patternNames as $patternName)
                {{-- <option value="{{ $patternName->name }}">{{ $patternName->name }}</option> --}}
                <option value="{{ $patternName->name }}" <?php echo isset($_GET['name']) && $_GET['name'] == '{{ $patternName->name }}' ? 'selected' : ''; ?>>{{ $patternName->name }}</option>
            @endforeach
        </select>
        <select name="kind" id="kind-select">
            <option value="">--Please choose an option--</option>
            <option value="brick">brick</option>
            <option value="cross">cross</option>
        </select>
        <input type="color" value="#00eeff" class="color">
        <input type="number" value="10" class="size">

        {{-- <div class="restultjson"></div> --}}

    </div>
    {{-- <p id="userid" value=>{{ auth()->user()->id }} </p> --}}



    {{-- <div>HI <span id="enteredName">hi!</span> </div> --}}

    <div class = "container1">
    </div>


    <script>
        let container1 = document.querySelector(".container1");
        let sizeEl = document.querySelector(".size");
        const color = document.querySelector(".color");
        const resetBtn = document.querySelector(".btn1");
        const saveBtn = document.querySelector(".save");
        const deleteBtn = document.querySelector('.deletebtn');
        const restultjson = document.querySelector("restultjson");
        const laravel = document.querySelector(".laravel");
        let newname1 = document.getElementById("myInput");
        const log = document.getElementById("log");
        let kindselect = document.getElementById('kind-select')
        // const userid = document.getElementById("userid").textContent;
        // let enteredName = document.getElementById("enteredName");

        // console.log(`${userid}`);
        // Getting the value of the size input
        let size = sizeEl.value;
        let kind = '';
        let draw = false;
        let projects = [];
        let newname = newname1.value;
        let newname2 = '';
        // let nameselect = ""
        var patternArray = {};
        // console.log(patternArray);

        function get_name_select() {
            var patternArray = {!! json_encode($Pattern->toArray()) !!};
            console.log('patterArray1', patternArray);
            console.log('project', projects.length);
            console.log('project', projects);
            // add project to patternArry
            // if (projects != 0) {
            //     for (let x = 0; x < projects.length; x++) {
            //         newpattern = 
            //         patternArray.push(pro[x]);
            //     }
            // }
            // console.log('patterArray2', patternArray);
            // window.onload = function() {
            //     var citySelector = document.getElementById('name-select');
            //     citySelector.addEventListener('change', function() {
            //         if (this.value) {
            //             window.location = '/' + this.value
            //         }
            //     }, false);
            // }
            document.getElementById('name-select').addEventListener('change', function() {
                // console.log('You selected: ', this.value);
                // nameselect = this.value;
                // enteredName.textContent = this.value;
                // console.log(nameselect);

                newname2 = $(this).children("option:selected").attr("value");
                $("input[name='name']").attr("value", newname2)
                // reset();
                // console.log(newname2);
                newname = this.value;

                projects = []
                console.log('patternaraay', patternArray);
                populate(size, patternArray, newname2);
            });
        }

        /*
            Now you can print it or use the way you want.
          */
        // console.log(patternArray);
        // let pattern = json($data);
        // enteredName.innerHTML = pattern;
        newname1.addEventListener("input", function() {
            // Update the output paragraph with the current value of the input
            // enteredName.textContent = newname1.value;
            newname = newname1.value;
        });

        // let newname = newname1.value;
        // const newname = newname1.value;
        // console.log(newname);

        // restultjson.innerHTML = projects;

        function populate(size, patternArray, newname2) {
            get_name_select()
            if (Object.keys(patternArray).length !== 0) {
                for (let x = 0; x < patternArray.length; x++) {
                    if (patternArray[x]['name'] == newname2) {
                        kind = patternArray[x]['kind']
                        // console.log('kindselect', kindselect);
                        size = patternArray[x]['size'];
                        sizeEl.value = size;
                    }
                }
            }
            if (kind === "cross") {
                container1.className = "container1"
                container1.style.setProperty("--size", size);
                container1.innerHTML = ""
            } else if (kind === "brick") {
                kindselect.innerHTML = kind;

                container1.className = "container2"
                container1.style.setProperty("--size", size);
                container1.innerHTML = ""
            } else {
                container1.className = "container1"
                container1.style.setProperty("--size", size);
                container1.innerHTML = ""
            }

            // console.log(size);

            for (let i = 0; i < size * size; i++) {
                const div = document.createElement("div");
                div.classList.add("card");

                for (let x = 0; x < patternArray.length; x++) {
                    if (newname2 !== "") {
                        if (patternArray[x]['number'] == i && patternArray[x]['name'] == newname2) {
                            div.style.backgroundColor = patternArray[x]['color'];
                        }
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
                    if (kind == '') {
                        kind = 'cross';
                    }
                    projects.push({
                        number: i,
                        color: color.value,
                        name: newname,
                        size: size,
                        kind: kind,
                        userid: {{ auth()->user()->id }},
                    });
                });
                container1.appendChild(div);
            }
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
            container1.innerHTML = "";
            newname1.value = "";
            // newname = this.value;
            // enteredName.innerHTML = "";
            projects = [];
            populate(size, patternArray, newname2)
        }
        // newname1.addEventListener("change", updateValue);

        // function updateValue(e) {
        //     log.textContent = e.target.value;
        // }
        populate(size, patternArray, newname2)

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
                success: function(result) {
                    // log response into console
                    // location.reload();

                    console.log(result);
                },
            });
            get_name_select()
            // populate(size, patternArray, newname2)
        }

        function deleteproject() {
            var result = confirm("Want to delete?");
            if (result) {

                // container1.innerHTML = "";
                // newname1.value = "";
                // projects = [];
                // populate(size, patternArray, newname2)
                $name = newname2;
                $userid = {{ auth()->user()->id }};
                $deletedata = [$name, $userid];
                console.log($deletedata);
                $.ajaxSetup({
                    headers: {
                        "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                    },
                });
                $.ajax({
                    method: "POST",
                    url: "deleteproject",


                    data: {

                        data: $deletedata,
                    },
                    success: function(result) {
                        // log response into console
                        console.log(result);
                    },
                });
                location.reload();
                // get_name_select()
            }
        }
        resetBtn.addEventListener("click", reset);

        saveBtn.addEventListener("click", saveproject);
        deleteBtn.addEventListener("click", deleteproject);


        sizeEl.addEventListener("keyup", function() {
            size = sizeEl.value;
            populate(size, patternArray, newname2)
            // reset();
        });


        newname1.addEventListener("keyup", function() {
            newname = newname1.value;
            //     console.log(newname);
            // patternArray = {};
            populate(size, patternArray, newname2);
            // });
        });

        kindselect.addEventListener("change", function() {
            // console.log(kindselect.value);
            kind = kindselect.value;
            populate(size, patternArray, newname2);
        });
        populate(size, patternArray, newname2);
    </script>
    {{-- <script type="text/javascript" src="{{ asset('js/readbuildpattern.js') }}"></script> --}}
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
@endsection
