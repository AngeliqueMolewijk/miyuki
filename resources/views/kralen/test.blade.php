@extends('kralen.layout')
@section('content')
    <div class="cardsgrid">
        @foreach ($kralen as $kraal)
            <div class="card">
                <div class="card-img-top"><a href="{{ route('kralen.show', $kraal->id) }}"><img
                            src="{{ url('images/' . $kraal->image) }}"></a></div>
                <div class="card-body">

                    <div class="card_content">
                        <h2 class="card_title">{{ $kraal->name }}</h2>
                        <div class="form-group">


                        </div>
                    </div>
                    <p class="card-footer">Voorraad:
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
        @endforeach
        <div class="cardgrid">ONE</div>
        <div class="cardgrid">TWO</div>
        <div class="cardgrid">THREE</div>
        <div class="cardgrid">FOUR</div>
        <div class="cardgrid">FIVE</div>
        <div class="cardgrid">SIX</div>
        <div class="cardgrid">SEVEN</div>
        <div class="cardgrid">EIGHT</div>
        <div class="cardgrid">NINE</div>
        <div class="cardgrid">TEN</div>
        <div class="cardgrid">ELEVEN</div>
        <div class="cardgrid">TWELVE</div>
    </div>
@endsection
