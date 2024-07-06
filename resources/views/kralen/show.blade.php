@extends('kralen.layout')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2> Kralen</h2>
                </div>
                {{-- <div class="pull-right">
                    <a class="btn btn-primary" href="{{ route('kralen.index') }}"> Back</a>
                </div> --}}
            </div>
        </div>
        <div class="row border">
            <div class="col-md-2 " style="padding-left: 0px;  padding-right: 0px;">
                <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli" width="200px">
            </div>
            <div class="col-md-12">
                <div class="form-group">
                    <strong>Name:</strong>
                    {{ $kraal->name }}
                </div>
            </div>
            <div class="col-md-4">
                <div class="form-group">
                    <strong>Stock:</strong>
                    {{ $kraal->stock }}
                </div>
            </div>
            {{-- </div> --}}
        </div>

        <div class="mt-2">
            Kralen die in deze mix voorkomen

            <form action="{{ url('/storemix') }}" method="POST" enctype="multipart/form-data">
                @csrf
                <select class="form-control" name="kraalid">
                    {{-- {{ Form::open(['action' => 'KralenController@storemix']) }} --}}
                    @foreach ($mixkiezen as $kiezen)
                        <option value="{{ $kiezen->id }}">
                            {{ $kiezen->nummer }} - {{ $kiezen->name }}
                        </option>
                    @endforeach
                    {{-- {{ Form::close() }} --}}

                </select>
                <input type="hidden" name="mixid" value="{{ $kraal->id }}">

                <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-2">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </form>
        </div>
        {{-- {{ $kralen }} --}}
        <div class="row mt-2">
            <div class="cardsgrid">
                @foreach ($kralen as $kralenmix)
                    @foreach ($kralenmix as $kraalchunck)
                        <div class="cardgrid mr-2" style="">
                            {{-- @foreach ($chunk as $kraalchunck) --}}
                            {{-- <li class="cards_item"> --}}
                            {{-- <div class="card text-center" style="width: 12rem;"> --}}
                            <a href="{{ route('kralen.show', $kraalchunck->id) }}"><img class="card-img-top1"
                                    src="{{ url('images/' . $kraalchunck->image) }}"></a>
                            <div class="card-body">
                                <h5 class="card-title"> {{ $kraalchunck->name }}</h5>
                            </div>
                            <div class="card-footer">

                                <small class="text-muted">Voorraad: {{ $kraalchunck->stock }}</small>

                            </div>
                        </div>
                    @endforeach
                @endforeach
            </div>
        </div>
        Komt in deze mixen voor:
        {{-- @foreach ($kraleninmix as $inmix)
            {{ $inmix }};
        @endforeach --}}
        <div class="row mt-2">
            <div class="cardsgrid">
                {{-- <ul class="cardgrid"> --}}
                @foreach ($kraleninmix as $kraleninmix)
                    @foreach ($kraleninmix as $kraallos)
                        <div class="cardgrid mr-2" style="width: 10rem;">
                            {{-- @foreach ($chunk as $kraalchunck) --}}
                            {{-- <li class="cards_item"> --}}
                            {{-- <div class="card text-center" style="width: 12rem;"> --}}
                            <a href="{{ route('kralen.show', $kraallos->id) }}"><img class="card-img-top1"
                                    src="{{ url('images/' . $kraallos->image) }}"></a>
                            <div class="card-body">
                                <h5 class="card-title"> {{ $kraallos->name }}</h5>
                            </div>
                            <div class="card-footer">

                                <small class="text-muted">Voorraad: {{ $kraallos->stock }}</small>

                            </div>
                        </div>
                    @endforeach
                @endforeach
                {{-- </ul> --}}
            </div>
        </div>
    @endsection
