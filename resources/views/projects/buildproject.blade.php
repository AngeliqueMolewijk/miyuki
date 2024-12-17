@extends('kralen.layout')
@section('content')
    <meta name="csrf-token" content="{{ csrf_token() }}">

    <div class="navbar1">
        <button class="btn1">Reset</button>
        <button class="save">Save</button>
        {{-- <button class="laravel">tolaravel</button> --}}
        {{-- <button onClick="onBtnClick()" data-url="{{ route('testroute') }}"></button> --}}
        <input type='tekst' id="myInput" class="name">
        <input type="color" value="#00eeff" class="color">
        <input type="number" value="30" class="size">
        <p id="log"></p>

        {{-- <div class="restultjson"></div> --}}

    </div>
    <div>HI <span id= "enteredName">hi!</span> </div>

    <div class="container1">
        <!-- Here we will add divs representing our pixels -->
    </div>
    <script type="text/javascript" src="{{ asset('js/buildpattern.js') }}"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.16.0/umd/popper.min.js"></script>
@endsection
