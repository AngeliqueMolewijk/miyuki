<!DOCTYPE html>
<html>

<head>
    <title></title>
    <!-- Latest compiled and minified CSS -->
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC" crossorigin="anonymous">
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
        integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM" crossorigin="anonymous">
    </script>
    <script src="https://kit.fontawesome.com/653626b1ec.js" crossorigin="anonymous"></script>

    <link rel="stylesheet" href="{{ asset('css/custom.css') }}">
    <link rel="stylesheet" href="{{ asset('css/grid.css') }}">
    <link rel="stylesheet" href="{{ asset('css/clickgrid.css') }}">
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    {{-- <script type="text/javascript" src="{{ asset('js/clickgrid.js') }}"></script> --}}

    {{-- <link rel="stylesheet" href="{{ asset('css/cards.css') }}"> --}}

</head>

<body>
    <div class="container">
        <div class="row">
            @include('kralen.navbar')
        </div>
        <div class="row">
            <div class="col-md-2">
                @include('kralen.sidebar')
            </div>
            <div class="col-md-10">
                @yield('content')
            </div>
        </div>
        {{-- <div class="row">

    </div> --}}
        {{-- <div class="container"> --}}
        {{-- </div> --}}
    </div>
</body>

</html>
<script type="text/javascript" src="{{ asset('js/clickgrid.js') }}"></script>
<script type="text/javascript" src="{{ asset('js/buttontotop.js') }}"></script>
