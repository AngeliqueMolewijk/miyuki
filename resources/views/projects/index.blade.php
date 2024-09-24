@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Projecten</h1>
        <div class="cardsgrid">
            {{-- <ul class="cards"> --}}
            @foreach ($projecten as $project)
                {{-- @foreach ($chunk as $kraal) --}}
                <div class="cards_item text-center">
                    <div class="card">
                        <div class="card-img-top"><a href="{{ route('projects.show', $project->id) }}"><img
                                    src="{{ url('images/' . $project->image) }}"></a></div>
                        <div class="card-body">

                            <div class="card_content">
                                <h2 class="card_title">{{ $project->naam }}</h2>
                            </div>
                            <p class="card_text fw-bold">omschrijving:</p>
                                {{ $project->omschrijving }}
                        </div>
                    </div>
                </div>
            @endforeach
            {{-- </ul> --}}
        </div>
    @endsection
