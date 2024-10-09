@extends('kralen.layout')
@section('content')
    <div class="container">
        <div class="row">
            {{-- <div class="col-lg-12 margin-tb">
                <div class="pull-left"> --}}
            <h2> Project</h2>
            {{-- </div> --}}
            {{-- <div class="pull-right">
                    {{-- <a class="btn btn-primary" href="{{ route('createCategorie') }}"> Nieuwe categorie</a> --}}
        </div>
        {{-- </div> --}}
        {{-- </div> --}}
        <div class="card">
            <div class="row">
                <div class="col-lg-4">
                    <div class="row">
                        <div class="col-sm-2 col-lg-6">
                            <img class="card-img-top" src="{{ url('images/' . $project->image) }}">
                        </div>
                        @if ($project->image2 != '')
                            <div class="col-sm-2 col-lg-6">
                                <img class="card-img-top1" src="{{ url('images/' . $project->image2) }}">
                            </div>
                        @endif
                    </div>
                </div>
                <div class = "col-lg-8">
                    {{-- </div> --}}
                    {{-- <div class="col-lg-8"> --}}
                    <div class="row">
                        {{-- <div class="col-sm-6 col-lg-8 my-element"> --}}
                        {{-- <div class="row "> --}}
                        <div class="col-lg-8">
                            <div class="form-group">
                                <h4><strong>Naam: </strong>
                                    {{ $project->naam }}</h4>
                            </div>
                            {{-- </div> --}}
                            {{-- <div class="col-lg-8"> --}}
                            <div class="form-group">
                                <h4><strong>omschrijving: </strong></h4>
                                <h4>{{ $project->omschrijving }}</h4>
                            </div>
                            {{-- </div> --}}
                            <h4><strong>categorie:</strong></h4>
                            @foreach ($categories as $categorie)
                                {{-- <div class="col-lg-8"> --}}
                                <div class="form-group">
                                    {{ $categorie->categoriename }}

                                </div>
                                {{-- </div> --}}
                            @endforeach
                        </div>
                        <div class="col-lg-4">
                            {{-- <a href="{{ route('projects.edit', $project->id) }}" class="btn btn-primary" role="button"
                                aria-pressed="true">Edit</a> --}}
                            <a class="btn btn-primary mb-2" href="{{ route('projects.edit', $project->id) }}">Edit</a>
                            <form action="{{ route('projects.destroy', $project->id) }}" method="post">
                                @csrf
                                @method('DELETE')

                                <button type="submit" class="btn btn-danger"
                                    onclick="return confirm('Do you want to delete this product?');">Delete
                                    project</button>
                            </form>
                        </div>
                        {{-- </div> --}}
                    </div>
                </div>
            </div>
        </div>
        {{-- </div> --}}
        {{-- </div> --}}
        {{-- <div class="card">
        <strong> in de volgende categorien <strong><br>
                @foreach ($categories as $projectcat)
                    {{ $projectcat->categoriename }}
                @endforeach
    </div> --}}
        <div class="col-lg-12">
            <div class="row mt-2">
                <div class="cardsgrid">
                    {{-- <ul class="cardgrid"> --}}
                    {{-- @foreach ($kraleninproject as $kraleninproject) --}}
                    @foreach ($kraleninproject as $kraallos)
                        <div class="card mr-2">
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
                                action="{{ route('delete-from-project', ['projectid' => $project->id, 'kraalid' => $kraallos->kraalid]) }}"
                                method="get">

                                <a class="btn btn-info" href="{{ route('kralen.show', $kraallos->kraalid) }}">Show</a>

                                <a class="btn btn-primary" href="{{ route('kralen.edit', $kraallos->kraalid) }}">Edit</a>
                                {{-- @method('DELETE')
                                    @csrf --}}

                                <button type="submit" class="btn btn-danger"
                                    onclick="return confirm('Do you want to delete this product?');">Delete from
                                    project</button>
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
    </div>
@endsection
