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
            @foreach ($kleuren as $kleur)
                <div class="kleurenkaart">
                    <a href="{{ route('kleuren.show', $kleur->id) }}">
                        <div class="card_title" style="background-color:{{ $kleur->hexa }}">
                        </div>
                    </a>
                    <h3> {{ $kleur->kleur }}</h3>
                </div>
            @endforeach
        </div>
    @endsection
