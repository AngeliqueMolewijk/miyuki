@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <div class="row">
        <div class="col-md-5">
            <div class="main">
                <h1>Miyuki kralen</h1>
                <div class="cardgridkleur">
                    {{-- <ul class="cards"> --}}
                    @foreach ($kleuren as $kleur)
                        {{-- @foreach ($chunk as $kraal) --}}
                        <div class="cards_item text-center">
                            <div class="card">
                                {{-- <div class="card-img-top"><a href="{{ route('kleuren.show', $kleur->id) }}"><img src=""></a>
                        </div> --}}
                                <div class="card-body">
                                    <div class="card_content kleurheight">
                                        <a href="{{ route('kleuren.show', $kleur->id) }}">
                                            <div class="card_title h-50" style="background-color:{{ $kleur->hexa }}">
                                            </div>
                                            </h3>
                                        </a>
                                        {{ $kleur->kleur }}

                                    </div>
                                    {{-- <h3 class="card_text fw-bold">{{ $kleur->kleur }}
                                    </h3> --}}
                                    {{-- <p class="card_text fw-bold">Hexa:
                                        {{ $kleur->hexa }}</p> --}}
                                </div>

                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="col-md-5">
            {{-- </ul> --}}
            <h3>In deze kleur komen de volgende kralen voor:</h3>
            <div class="row mt-2">
                <div class="cardsgrid">
                    @foreach ($kleurcollectie as $collectie)
                        <div class="card mr-2" style="">
                            {{-- @foreach ($chunk as $kraalchunck) --}}
                            {{-- <li class="cards_item"> --}}
                            {{-- <div class="card text-center" style="width: 12rem;"> --}}
                            <a href="{{ route('kralen.show', $collectie->id) }}"><img class="card-img-top1"
                                    src="{{ url('images/' . $collectie->image) }}"></a>
                            <div class="card-body">
                                <h5 class="card-title"> {{ $collectie->name }}</h5>
                                <h5 class="card-title"> Nummer: {{ $collectie->nummer }}</h5>

                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Voorraad: {{ $collectie->stock }} gram</small>
                            </div> {{ $collectie->mixnr }}
                        </div>
                    @endforeach
                </div>
            </div>

        </div>
    </div>
@endsection
