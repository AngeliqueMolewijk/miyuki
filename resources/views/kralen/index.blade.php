@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="main">
        <h1>Responsive Card Grid Layout</h1>
        <div class="cardsgrid">
            {{-- <ul class="cards"> --}}
            @foreach ($kralen as $kraal)
                {{-- @foreach ($chunk as $kraal) --}}
                <div class="cards_item text-center">
                    <div class="card">
                        <div class="card-img-top"><a href="{{ route('kralen.show', $kraal->id) }}"><img
                                    src="{{ url('images/' . $kraal->image) }}"></a></div>
                        <div class="card-body">

                            <div class="card_content">
                                <h2 class="card_title">{{ $kraal->name }}</h2>
                            </div>

                            <p class="card_text">Voorraad:
                                {{ $kraal->stock }}</p>
                        </div>
                        <div class="card-footer">

                            <form action="{{ route('kralen.destroy', $kraal->id) }}" method="POST">

                                <a class="btn btn-info" href="{{ route('kralen.show', $kraal->id) }}">Show</a>

                                <a class="btn btn-primary" href="{{ route('kralen.edit', $kraal->id) }}">Edit</a>

                                @csrf
                                @method('DELETE')

                                <button type="submit" class="btn btn-danger" onclick="return myFunction();">Delete</button>
                            </form>
                        </div>
                    </div>
                </div>
            @endforeach
            {{-- </ul> --}}
        </div>

        <h3 class="made_by">Made with ♡</h3>
    @endsection
