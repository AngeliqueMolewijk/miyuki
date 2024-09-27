@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Product</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('kralen.index') }}"> Back</a>
            </div>
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    {{-- <div class="container"> --}}
    <div class="card">
        <div class="row">
            <div class="col-md-3" style="padding-left: 0px;  padding-right: 0px;">
                <img class="img-thumbnail" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli">
            </div>
            <div class="col-sm-9 col-md-8">
                <form class="form-horizontal" role="form" action="{{ route('kralen.update', $kraal->id) }}"
                    method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    {{-- <div class="form-group"> --}}
                    <div class="input-group mb-3">

                        {{-- <label class="control-label" for="file">Choose a photo!</label> --}}
                        {{-- <span class="input-group-text">Image</span> --}}
                        <input type="file" class="form-control" name="image">
                    </div>
                    {{-- <div class="form-group"> --}}
                    <div class="input-group mb-3">

                        {{-- <label class="control-label col-sm-2" for="name"><span>name</span></label> --}}
                        <span class="input-group-text">Name</span>
                        <input type="text" name="name" class="form-control" value="{{ $kraal->name }}"
                            placeholder="Name">

                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Voorraad</span>

                        <input type="text" name="stock" class="form-control" value= "{{ $kraal->stock }}"
                            placeholder="stock">
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Aantal</span>
                        <input type="text" name="aantal" class="form-control" value= "{{ $kraal->stock * 200 }}"
                            placeholder="aantal" readonly>
                    </div>
                    <div class="input-group mb-3">
                        <span class="input-group-text">Nummer</span>
                        <input type="text" name="nummer" class="form-control" value= "{{ $kraal->nummer }}"
                            placeholder="nummer">
                    </div>
                    <div class="form-group mb-2 mt-2">
                        <strong>Valt in de kleurgroep:</strong>

                        <select name="kleurid">
                            {{-- {{ Form::open(['action' => 'KralenController@storemix']) }} --}}
                            <option value="Empty">
                                @foreach ($kleuren as $kleur)
                            <option value="{{ $kleur->id }}">
                                {{ $kleur->kleur }}
                            </option>
                            @endforeach
                            {{-- {{ Form::close() }} --}}

                        </select>
                    </div>
                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>

                </form>

            </div>
        </div>
    </div>
    <div class="row mt-2">
        <div class="col-md-3">
            @php
                $name = strpos($kraal->name, 'mix');
            @endphp
            @if ($name)
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
                    <div class="">
                        <button type="submit" class="btn btn-primary">kralen aan mix Toevoegen</button>
                    </div>
                </form>
            @endif
            <h3>in deze kleurgroepen behoort deze kraal</h3>
            <div class="row mt-2">
                <div class="cardsgrid">
                    @foreach ($kleurcollectie as $item)
                        <div class="card">
                            <div class="card">
                                <div>
                                    <a href="{{ route('kleuren.show', $kleur->id) }}">
                                        @if ($item->hexa != '#0')
                                            <a href="{{ route('kleuren.show', $item->id) }}">
                                                <div class="card_title h-50" style="background-color:{{ $item->hexa }}">
                                                </div>
                                            </a>
                                            <h5 class="card-title"> {{ $item->kleur }}</h5>
                                        @else
                                            <a href="{{ route('kleuren.show', $item->id) }}">
                                                <div><img src="{{ url('images/rainbow3.jpg') }}"></img>
                                                </div>
                                                <h5 class="card-title"> {{ $item->kleur }}</h5>
                                            </a>
                                        @endif
                                    </a>
                                </div>
                            </div>
                        </div>
                    @endforeach
                </div>
            </div>
        </div>
        <div class="col-md-8">
            {{-- <h3>
                <div class="mt-2">
                    Kralen die in deze mix voorkomen
            </h3> --}}
            <div class="cardsgrid col-md-12">
                @foreach ($kraleninmix as $item)
                    <div class="card" style="max-width: 200px;">
                        <div class="card-body">
                            <div>

                                <a href="{{ route('kralen.show', $item->id) }}">
                                    <img class="img-thumbnail" src="{{ url('images/' . $item->image) }}"
                                        alt="Italian Trulli">

                                </a>
                                <h5 class="card-title"> {{ $item->name }}</h5>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>

            {{-- </div> --}}

        </div>
    </div>
@endsection
