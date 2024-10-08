@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Miyuki kralen</h1>
        <div class="cardsgrid">
            {{-- <ul class="cards"> --}}
            @foreach ($kleuren as $kleur)
                {{-- @foreach ($chunk as $kraal) --}}
                {{-- <div class="cards_item text-center">
                    <div class="card">
                        <div class="card-body">
                            <div class="card_content"> --}}
                <div class="kleurenkaart">
                    <a href="{{ route('kleuren.show', $kleur->id) }}">
                        <div class="card_title" style="background-color:{{ $kleur->hexa }}">
                        </div>
                    </a>
                    <h3> {{ $kleur->kleur }}</h3>
                </div>
                {{-- <h3 class="card_text fw-bold">
                            </h3>
                            <p class="card_text fw-bold">Hexa:
                                {{ $kleur->hexa }}</p>
                        </div> --}}

                {{-- </div>
                </div> --}}
            @endforeach
            {{-- </ul> --}}
        </div>
    @endsection
