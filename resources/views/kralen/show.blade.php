@extends('kralen.layout')
@section('content')
    <div class="container ">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2> Kralen</h2>
                </div>
            </div>
        </div>
        <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>

        <div class="card ">
            <div class="row">
                <div class="col-md-4">
                    <img class="" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli">
                </div>
                <div class="col-sm-6 col-md-6 my-element">
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
                        <form action="{{ route('kralen.destroy', $kraal->id) }}" method="POST">
                            @csrf
                            @method('DELETE')
                            <a class="btn btn-primary" href="{{ route('kralen.edit', $kraal->id) }}">Edit</a>
                            <button type="submit" class="btn btn-danger"
                                onclick="return confirm('Do you want to delete this product?');">Delete</button>
                        </form>
                    </div>
                </div>
                <div class="col-sm-2 ">
                    <div class="row mt-2">
                        <a href="#kleureninmixlink" class="btn btn-primary mb-2" tabindex="-1" role="button"
                            aria-disabled="true">in mix</a>
                        <a href="#inkleurtype" class="btn btn-primary mb-2" tabindex="-1" role="button"
                            aria-disabled="true">kleurtype</a>
                        <a href="#linktoprojecten" class="btn btn-primary" tabindex="-1" role="button"
                            aria-disabled="true">Projecten</a>

                    </div>
                </div>
            </div>
        </div>

        @if (strpos($kraal->name, '%mix%'))
            <div class="card">
                <form action="{{ url('/storemix') }}" method="POST" enctype="multipart/form-data">
                    @csrf
                    <select class="form-control" name="kraalid">
                        @foreach ($mixkiezen as $kiezen)
                            <option value="{{ $kiezen->id }}">
                                {{ $kiezen->nummer }} - {{ $kiezen->name }}
                            </option>
                        @endforeach
                    </select>
                    <input type="hidden" name="mixid" value="{{ $kraleninmix->id }}">
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-2">
                        <button type="submit" class="btn btn-primary">kralen aan mix Toevoegen</button>
                    </div>
                </form>
            </div>
        @endif
        @php
            $mixes = strpos($kraal->name, 'mix');
        @endphp
        @if ($mixes)
            <div class="row">
                <h3>
                    <div class="mt-2"id="kleureninmixlink">
                        Kralen die in deze mix voorkomen
                </h3>
                <div class="row mt-2">
                    <div class="cardsgrid">
                        @foreach ($kraleninmix as $kraalchunck)
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
                        @endforeach
                    </div>
                </div>
            </div>
        @endif
        @php
            $mixes = strpos($kraal->name, 'mix');
        @endphp
        {{-- @if ($mixes) --}}
        {{-- <div class="row">
            <h3>
                <div class="mt-2"id="kleureninmixlink">
                    Kralen die in deze mix voorkomen
            </h3>
            <div class="row mt-2">
                <div class="cardsgrid">
                    @foreach ($mixvankraal as $kraalchunck)
                        <div class="card mr-2" style="">
                            <a href="{{ route('kralen.show', $kraalchunck->mixnr) }}"><img class="card-img-top1"
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
                    @endforeach
                </div>
            </div>
        </div> --}}
        {{-- @endif --}}
        <div class="row mt-2" id="linktoprojecten">
            <h3> projecten </h3>
            <div class="cardsgrid">

                @foreach ($projecten as $project)
                    <div class="card mr-2" style="width: 10rem;">
                        <a href="{{ route('projects.show', $project->projectid) }}"><img class="card-img-top1"
                                src="{{ url('images/' . $project->image) }}"></a>
                        <div class="card-footer">
                            <small class="text-muted">{{ $project->naam }}</small>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
        <h3>
            Komt in deze kleuren voor: </h3>
        <div class="row mt-2" id="inkleurtype">
            <div class="cardsgrid">
                @foreach ($inkleurtypes as $inkleurintypeslos)
                    <div class="card mr-2" style="width: 10rem;">
                        @if ($inkleurintypeslos->hexa != '#0')
                            <a href="{{ route('kleuren.show', $inkleurintypeslos->id) }}">
                                <div class="card_title" style="background-color:{{ $inkleurintypeslos->hexa }}">
                                </div>
                            </a>
                        @else
                            <a href="{{ route('kleuren.show', $inkleurintypeslos->id) }}">
                                <div><img src="{{ url('images/rainbow2.jpg') }}"></img>
                                </div>
                            </a>
                        @endif
                        <div class="card-footer">
                            <small class="text-muted">Kleur: {{ $inkleurintypeslos->kleur }}</small>
                        </div>
                    </div>
                @endforeach
            </div>
        </div>
    </div>
@endsection
