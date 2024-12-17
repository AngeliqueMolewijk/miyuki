@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif
    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
    <div class="row">
        <div class="col-md-12">
            <div class="main">
                <h1>Miyuki kralen</h1>
                <div class="">

                    {{-- @foreach ($kleuren->chunk(8) as $chunk) --}}
                    <div class="row">
                        @foreach ($kleuren as $kleur)
                            {{-- @foreach ($chunk as $kleur) --}}
                            <div class="col">
                                <div class="kleurenkaart">
                                    @if ($kleur->hexa != '#0')
                                        <a href="{{ route('kleuren.show', $kleur->id) }}">
                                            <div class="card_title h-50" style="background-color:{{ $kleur->hexa }}">
                                            </div>
                                        </a>
                                    @else
                                        <a href="{{ route('kleuren.show', $kleur->id) }}">
                                            <div><img src="{{ url('images/rainbow3.jpg') }}"></img>
                                            </div>
                                        </a>
                                    @endif
                                    {{ $kleur->kleur }}
                                </div>
                            </div>
                            {{-- @endforeach --}}
                        @endforeach
                    </div>
                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12">
        <h3>In deze kleur komen de volgende kralen voor: {{ $currentkleur->kleur }}</h3>

        <div class="row mt-2">
            <div class="cardsgrid">

                @foreach ($kleurcollectie as $collectie)
                    <div id="anchor-kleuren" class="card mr-2" style="">
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
    <a class="nav-link" href="{{ route('kleuren.create') }}">Nieuwe kleur</a>
    </div>
@endsection
