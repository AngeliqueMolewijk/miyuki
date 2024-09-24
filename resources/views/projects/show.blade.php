@extends('kralen.layout')
@section('content')
    <div class="container">
        <div class="row">
            <div class="col-lg-12 margin-tb">
                <div class="pull-left">
                    <h2> Project</h2>
                </div>
                {{-- <div class="pull-right">
                    <a class="btn btn-primary" href="{{ route('kralen.index') }}"> Back</a>
                </div> --}}
            </div>
        </div>
        <div class="card">
            <div class="row">
                <div class="col-sm-2">
                    <img class="card-img-top" src="{{ url('images/' . $project->image) }}">
                </div>
                <div class="col-sm-2">
                    <img class="card-img-top1" src="{{ url('images/' . $project->image2) }}">
                </div>
                <div class="col-sm-6 my-element">
                    <div class="row ">
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>Naam: </strong>
                                    {{ $project->naam }}</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>omschrijving: </strong></h4>
                                <h4>{{ $project->omschrijving }}</h4>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <div class="form-group">
                                <h4><strong>kralen:</strong>
                                    {{ $project->kraalid }} </h4>
                            </div>
                        </div>
                        <div class="col-md-4">
                            <a href="{{ route('projects.edit', $project->id) }}" class="btn btn-primary" role="button"
                                aria-pressed="true">Edit</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-md-12">
            <div class="row mt-2">
                <div class="cardsgrid">
                    {{-- <ul class="cardgrid"> --}}
                    {{-- @foreach ($kraleninproject as $kraleninproject) --}}
                    @foreach ($kraleninproject as $kraallos)
                        <div class="card mr-2" style="width: 10rem;">
                            {{-- @foreach ($chunk as $kraalchunck) --}}
                            {{-- <li class="cards_item"> --}}
                            {{-- <div class="card text-center" style="width: 12rem;"> --}}
                            <a href="{{ route('kralen.show', $kraallos->kraalid) }}"><img class="card-img-top1"
                                    src="{{ url('images/' . $kraallos->image) }}"></a>
                            <div class="card-body">
                                <h5 class="card-title"> {{ $kraallos->name }}</h5>
                                <h5 class="card-title"> Nummer: {{ $kraallos->nummer }}</h5>

                            </div>
                            <div class="card-footer">
                                <small class="text-muted">Voorraad: {{ $kraallos->stock }} gram</small>
                            </div>
                            <form
                                action="{{ route('become-a-customer', ['projectid' => $project->id, 'kraalid' => $kraallos->kraalid]) }}"
                                method="get">

                                <a class="btn btn-info" href="{{ route('kralen.show', $kraallos->kraalid) }}">Show</a>

                                <a class="btn btn-primary" href="{{ route('kralen.edit', $kraallos->kraalid) }}">Edit</a>
                                {{-- @method('DELETE')
                                    @csrf --}}

                                <button type="submit" class="btn btn-danger" onclick="return myFunction();">Delete</button>
                            </form>
                            {{-- <div class="card-footer">
                                            <small class="text-muted">aantal: {{ $kraallos->stock * 200 }} stuks</small>
                                        </div> --}}
                        </div>
                    @endforeach
                    {{-- @endforeach --}}
                    {{-- </ul> --}}
                </div>
            </div>
        </div>

    </div>
@endsection
