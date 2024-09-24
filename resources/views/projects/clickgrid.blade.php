@extends('kralen.layout')
@section('content')
    {{-- <script src="https://ajax.googleapis.com/ajax/libs/jquery/2.1.1/jquery.min.js"></script>
    <script type="text/javascript" src="{{ asset('js/clickgrid.js') }}"></script> --}}
    {{-- <script type="text/javascript" src="{{ asset('js/clickgrid.js') }}"></script> --}}

    <canvas id="myCanvas" width="410" height="410"></canvas>

    <div class="mybuttons">
        <button id="green">Green</button>
        <button id="blue">Blue</button>
        <button id="black">Black</button>
    </div>
    <div id="mapNumber">mapNumber:</div>
@endsection
