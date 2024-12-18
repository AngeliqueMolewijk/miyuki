@extends('kralen.layout')
@section('content')
    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    <div class="row">
        <h1>Alle kralen</h1>
    </div>
    <div class="cardsgrid">
        @foreach ($kralen as $kraal)
            <div class="cards_item text-center">
                <div class="card h-100">
                    <div class="card-img-top"><a href="{{ route('kralen.show', $kraal->id) }}"><img
                                src="{{ url($kraal->image) }}"></a>
                    </div>
                    <div class="card-body">
                        <div class="card_content">
                            <h5 class="card-title">{{ $kraal->name }}</h5>
                        </div>
                        <p class="card_text fw-bold">Nummer:
                            {{ $kraal->number }}</p>
                        <p class="card_text">Soort:
                            {{ $kraal->kind }} </p>
                        <p class="card_text">Size:
                            {{ $kraal->size }} </p>
                    </div>
                    <div class="card-footer">

                        <form action="{{ route('kralen.destroy', $kraal->id) }}" method="POST">
                            @csrf
                            @method('DELETE')

                            <a class="btn btn-info" href="{{ route('kralen.show', $kraal->id) }}">Show</a>

                            <a class="btn btn-primary" href="{{ route('kralen.edit', $kraal->id) }}">Edit</a>

                            <button type="submit" class="btn btn-danger"
                                onclick="return confirm('Do you want to delete this product?');">Delete</button>
                        </form>
                    </div>

                </div>
            </div>
        @endforeach
    </div>
    </div>
@endsection
