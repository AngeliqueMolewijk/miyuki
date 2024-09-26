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
        <div class="card">
            <div class="row">
                <div class="col-sm-3">
                    <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli" width="200px">
                </div>
                <div class="col-sm-8 my-element">
                    <div class="row ">
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>Naam: </strong>
                                    {{ $kraal->name }}</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>Nummer: </strong>
                                    {{ $kraal->nummer }}</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>Voorraad:</strong>
                                    {{ $kraal->stock }} gram</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>aantal:</strong>
                                    {{ $kraal->stock * 200 }} stuks</h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href="{{ route('kralen.edit', $kraal->id) }}" class="btn btn-primary" role="button"
                                aria-pressed="true">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="card">
            @if (strpos($kraal->name, '%mix%'))
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

                    <input type="hidden" name="mixid" value="{{ $kraleninmix->id }}">
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-2">
                        <button type="submit" class="btn btn-primary">kralen aan mix Toevoegen</button>
                    </div>
                </form>
            @endif

            <h3>
                <div class="mt-2">
                    Kralen die in deze mix voorkomen1
            </h3>
        </div>
    </div>
    <div class="container">
        <div class="row mt-2">
            <div class="cardsgrid">
                @foreach ($kraleninmix as $kraalchunck)
                    {{-- @foreach ($kralenmix as $kraalchunck) --}}
                    <div class="card mr-2" style="">
                        <a href="{{ route('kralen.show', $kraalchunck->id) }}"><img class="card-img-top1"
                                src="{{ url('images/' . $kraalchunck->image) }}"></a>
                        <div class="card-body">
                            <h5 class="card-title"> {{ $kraalchunck->name }}</h5>
                            <h5 class="card-title"> Nummer: {{ $kraalchunck->nummer }}</h5>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Voorraad: {{ $kraalchunck->stock }} gram</small>
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Aantal: {{ $kraalchunck->stock * 200 }} stuks</small>
                        </div>
                        <form
                            action="{{ route('delete-from-mix', ['mixid' => $kraalchunck->mixnr, 'kraalid' => $kraalchunck->id]) }}"
                            method="get">
                            <a class="btn btn-info" href="{{ route('kralen.show', $kraalchunck->id) }}">Show</a>
                            <a class="btn btn-primary" href="{{ route('kralen.edit', $kraalchunck->id) }}">Edit</a>
                            <button type="submit" class="btn btn-danger"
                                onclick="return confirm('Do you want to delete this product?');">Delete from
                                mix</button>
                        </form>
                    </div>
                    {{-- @endforeach --}}
                @endforeach
            </div>
        </div>
        <h3>
            Komt in deze kleuren voor: </h3>
        <div class="row mt-2">
            <div class="cardsgrid">
                @foreach ($inkleurtypes as $inkleurintypeslos)
                    <div class="card mr-2" style="width: 10rem;">
                        <div class="card_title" style="background-color:{{ $inkleurintypeslos->hexa }}">
                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Kleur: {{ $inkleurintypeslos->kleur }}</small>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
