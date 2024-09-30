@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Projecten</h1>
        <a href="{{ route('projects.create') }}" class="btn btn-info" role="button">Nieuw Project</a>

        <div class="cardsgrid">
            @foreach ($projecten as $project)
                <div class="cards_item card-deck">
                    <div class="card flex-fill">
                        <div class="card-img-top ratio ratio-1x1"><a href="{{ route('projects.show', $project->id) }}">
                                <img class="object-fit-contain" src="{{ url('images/' . $project->image) }}">
                            </a>
                        </div>
                        <div class="card-body">
                            <h4 class="card-title">{{ $project->naam }}</h4>
                            <p class="card-title"></p>
                            {{ $project->omschrijving }}
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @endsection
