@extends('kralen.layout')
@section('content')
    <div class="container-fluid mt-2 mb-3">
        <div class="row no-gutters">
            <div class="col-md-4 pr-2">
                <div class="card">
                    <div class="demo">
                        <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli"
                            width="200px">
                    </div>
                </div>
            </div>
            <div class="col-md-8">
                <div class="card">
                    <div class="d-flex flex-row align-items-center">
                        <strong>Stock:</strong>
                        {{ $kraal->stock }}
                    </div>
                    <div class="about"> <span class=" h2 font-weight-bold"> {{ $kraal->name }} </span>
                    </div>

                </div>
            </div>
            <div class="container">
                @foreach ($kralen as $kralenmix)
                    @foreach ($kralenmix as $kraalchunck)
                        <div class="row">
                            <div class="card" style="width:200px">
                                {{-- @foreach ($chunk as $kraalchunck) --}}
                                <div class="col-sm-12 ">
                                    {{-- <div class="card text-center" style="width: 12rem;"> --}}
                                    <img class="card-img-top" src="{{ url('images/' . $kraalchunck->image) }}">
                                    <div class="card-body">
                                        <h5 class="card-title"> {{ $kraalchunck->name }}</h5>
                                        <ul class="list-group list-group-flush">
                                            <li class="list-group-item">Voorraad:
                                                {{ $kraalchunck->stock }}</li>
                                        </ul>
                                        <form action="{{ route('kralen.destroy', $kraalchunck->id) }}" method="POST">
                                            <a class="btn btn-info"
                                                href="{{ route('kralen.show', $kraalchunck->id) }}">Show</a>
                                            <a class="btn btn-primary"
                                                href="{{ route('kralen.edit', $kraalchunck->id) }}">Edit</a>
                                            @csrf
                                            {{-- @method('DELETE')
                                        <button type="submit" class="btn btn-danger"
                                            onclick="return myFunction();">Delete</button> --}}
                                        </form>
                                    </div>
                                    {{-- </div> --}}
                                </div>
                                {{-- @endforeach --}}
                            </div>
                    @endforeach
                @endforeach
            </div>

        </div>
    </div>
    {{-- </div>
    </div> --}}
@endsection
