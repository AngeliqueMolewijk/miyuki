@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Projecten</h1>
        {{-- <nav class="navbar navbar-expand-lg bg-body-tertiary">
            <div class="container-fluid">
                <div class="collapse navbar-collapse" id="navbarText">
                    <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href={{ route('projects.create') }}>Create
                                project</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link active" aria-current="page" href={{ route('projects.index') }}>Alle
                                Projecten</a>
                        </li>
                        @foreach ($categories as $categorie)
                            <li class="nav-item">
                                <a class="nav-link"
                                    href="/filter/{{ $categorie->categoriename }}">{{ $categorie->categoriename }}</a>
                            </li>
                        @endforeach
                    </ul>
                </div>
            </div>
        </nav> --}}

    </div>
    <div class="cardsgrid">
        @foreach ($projecten as $project)
            <div class="cards_item card-deck">
                <div class="card flex-fill">
                    <div class="card-img-top ratio ratio-1x1">
                        <a href="{{ route('projects.show', $project->id) }}">
                            <img class="object-fit-contain" src="{{ url('images/' . $project->image) }}">
                        </a>
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">{{ $project->naam }}</h4>
                        {{-- <p class="card-title"></p> --}}
                        {{ $project->omschrijving }}
                        <div class="card-title">In categorieen :</div>
                        @foreach ($cattoproject as $cat)
                            @if ($cat->projectid == $project->id)
                                {{ $cat->categoriename }}
                                {{-- <p>{{ $project->categoriename }} --}}
                            @endif
                        @endforeach
                    </div>
                </div>
            </div>
        @endforeach
    </div>
@endsection
