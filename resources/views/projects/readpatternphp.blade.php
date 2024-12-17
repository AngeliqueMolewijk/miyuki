@extends('kralen.layout')
@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="navbar1">
        <button class="btn1">Reset</button>
        <button class="save">Save</button>
        <button class="deletebtn">Delete</button>

        {{-- <button class="laravel">tolaravel</button> --}}
        {{-- <button onClick="onBtnClick()" data-url="{{ route('testroute') }}"></button> --}}
        {{-- <input type='tekst' id="myInput" class="name" name="name" size="10"> --}}
        <select name="name" id="name-select">
            <option value="">Click to select</option>
            @foreach ($patternnew as $patternName)
                {{-- <option value="{{ $patternName->name }}">{{ $patternName->name }}</option> --}}
                <option value="{{ $patternName->name }}" <?php echo isset($_GET['name']) && $_GET['name'] == '{{ $patternName->name }}' ? 'selected' : ''; ?>>{{ $patternName->name }}</option>
            @endforeach
        </select>
        {{-- <select name="kind" id="kind-select">
            <option value="">--Please choose an option--</option>
            <option value="brick">brick</option>
            <option value="cross">cross</option>
        </select> --}}
        <input type="color" value="#00eeff" class="color">
        {{-- <input type="number" value="10" class="size"> --}}
        <button class="open-button" onclick="openFormNew()">new pattern</button>
        <div class="form-popup" id="myForm">
            <form action="{{ url('newpatternphp') }}" method="post" class="form-container">
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
        {{-- <div class="restultjson"></div> --}}
    </div>
    {{-- {{ $patterncolors }} --}}
    <div>Name: {{ $pattern->name }}</div>
    <div>Kind: {{ $pattern->kind }}</div>
    <div>Size: {{ $pattern->size }}</div>
    <div class ="container1" style="--size: {{ $pattern->size * 2 }}">
        {{-- echo {{ $pattern->size - 1 }}; --}}

        @php $forspan = 0 @endphp
        @if ($pattern->kind == 'brick')
            @for ($i = 0; $i < $pattern->size + count($arrayspan) - ceil($pattern->size / 2); $i++)
                @php $divcard = 1 @endphp
                @foreach ($patterncolors as $patterncolor)
                    @if ($patterncolor->number == $i)
                        @if ($i == $arrayspan[$forspan])
                            <div class="cardforpattern" id = "divid{{ $i }}"
                                style="background-color:  {{ $patterncolor->color }}; grid-column: span 1">
                                {{ $i }}
                            </div>
                            @php $forspan +=1 @endphp

                            @php $divcard = 2 @endphp
                        @else
                            <div class="cardforpattern" id = "divid{{ $i }}"
                                style="background-color:  {{ $patterncolor->color }}; grid-column: span 2">
                                {{ $i }}
                            </div>
                            @php $divcard = 2 @endphp
                        @endif
                    @endif
                @endforeach

                @if ($divcard == 1)
                    @if ($i == $arrayspan[$forspan])
                        <div class="cardforpattern" id = "divid{{ $i }}" style="grid-column: span 1">
                            {{ $i }}
                        </div>
                        @php $forspan +=1 @endphp
                    @else
                        <div class="cardforpattern" id = "divid{{ $i }}" style="grid-column: span 2">
                            {{ $i }}
                        </div>
                    @endif
                @endif
            @endfor
        @else
            @for ($i = 0; $i < $pattern->size * $pattern->size; $i++)
                {{-- <div class="card"> --}}
                @php $divcard = 1 @endphp

                @foreach ($patterncolors as $patterncolor)
                    {{-- {{ $patterncolor->patternid }}{{ $pattern->id }} --}}
                    @if ($patterncolor->number == $i)
                        {{-- @if ($patterncolor->patternid == $pattern->id) --}}
                        <div class="cardforpattern" id = "divid{{ $i }}"
                            style="background-color:  {{ $patterncolor->color }}; grid-column: span 2">
                            {{-- @else
                                <div class="card" id = "divid{{ $i }}"
                                    style="background-color:  {{ $patterncolor->color }}">
                                </div> --}}
                            {{-- @endif --}}
                        </div>
                        @php $divcard = 2 @endphp
                    @endif
                @endforeach

                @if ($divcard == 1)
                    {{-- @if ($i == $arrayspan[$forspan]) --}}
                    <div class="cardforpattern" id = "divid{{ $i }}" style="grid-column: span 2">
                        {{ $i }}
                    </div>
                @endif
            @endfor
        @endif
    </div>
    <script>
        let nameselect = document.getElementById('name-select');
        let patternnew = {!! json_encode($patternnew) !!};
        let patternsize = {!! json_encode($pattern) !!};

        let lastpart = window.location.pathname.split('/').filter(Boolean).pop();
        const color = document.querySelector(".color");
        let divbox = document.querySelector(".cardforpattern");
        let colorarray = [];
        let saveBtn = document.querySelector(".save");

        // console.log(patternsize)
        nameselect.addEventListener("change", function() {
            for (let i = 0; i < patternnew.length; i++) {
                if (patternnew[i]['name'] == nameselect.value) {
                    window.location.href = "/../readpatternphp/" + patternnew[i]['id'];
                }
            }
        })
        for (let i = 0; i < patternnew.length; i++) {
            if (patternnew[i]['id'] == lastpart) {
                nameselect.value = patternnew[i]['name'];
                // console.log(nameselect.value)
            }
        }
        for (let j = 0; j < patternsize['size'] * patternsize['size']; j++) {
            // console.log(j);

            var divid = document.getElementById('divid' + j);
            // console.log(divbox);
            // console.log(divid);
            divid.addEventListener('click', function() {
                this.style.backgroundColor = color.value;
                // console.log(this);
                colorarray.push({
                    patternid: lastpart,
                    colornumber: j,
                    color: color.value,
                    // name: newname1.value,
                    // size: size,
                    userid: {{ auth()->user()->id }},
                });
                // console.log(colorarray)
            });
            // divid.addEventListener('click', (event) => {
            //     console.log(divid);
            // rentalCheckBox.value = rentalCheckBox.getAttribute('data-rental');

            // function toggleRental() {
            //     rentalCheckBox.value = !rentalCheckBox.value;
            // }
        };

        divbox.addEventListener('click', (event) => {
            // console.log("getdiv");
            var divid = document.querySelector('#divid');
            // console.log(divid);
            // rentalCheckBox.value = rentalCheckBox.getAttribute('data-rental');

            // function toggleRental() {
            //     rentalCheckBox.value = !rentalCheckBox.value;
            // }
        });

        function openFormNew() {
            document.getElementById("myForm").style.display = "block";
        }

        function closeFormNew() {
            document.getElementById("myForm").style.display = "none";
        }

        function saveproject() {
            const jsonString = JSON.stringify(colorarray);
            // console.log(jsonString);
            console.log("jsonString", colorarray);
            $.ajaxSetup({
                headers: {
                    "X-CSRF-TOKEN": $('meta[name="csrf-token"]').attr("content"),
                },
            });
            $.ajax({
                method: "POST",
                url: "/updatepattern",
                data: {
                    data: colorarray,
                },
                success: function(result) {
                    // window.location.href = "/../updatepattern/";

                    console.log(result);
                },
            });
        }
        saveBtn.addEventListener("click", saveproject);
    </script>
    {{-- <script type="text/javascript" src="{{ asset('js/readbuildpattern.js') }}"></script> --}}
@endsection
