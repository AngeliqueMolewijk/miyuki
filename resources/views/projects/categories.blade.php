@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Projecten</h1>
        <div class="col-md-6 mb-2">
            <a href="{{ route('createCategorie') }}" class="btn btn-info" role="button">Nieuw categorie</a>
            {{-- </div> --}}

        </div>
        <div class="cardsgrid">
            @foreach ($categrories as $categorie)
                <div class="cards_item card-deck">
                    <div class="card flex-fill">
                        {{-- <div class="card-img-top ratio ratio-1x1"><a href="{{ route('projects.show', $project->id) }}">
                                <img class="object-fit-contain" src="{{ url('images/' . $project->image) }}">
                            </a>
                        </div> --}}
                        <div class="card-body">
                            <h4 class="card-title">{{ $categorie->categroiename }}</h4>
                            <p class="card-title"></p>
                            {{ $categorie->projectid }}
                        </div>
                    </div>
                </div>
            @endforeach
        </div>
    @endsection
