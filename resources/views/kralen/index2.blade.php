@extends('kralen.layout')
@section('content')
    {{-- <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Laravel 8 CRUD Example from scratch - ItSolutionStuff.com</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-success" href="{{ route('kralen.create') }}"> Create New Product</a>
            </div>
        </div>
    </div> --}}

    @if ($message = Session::get('success'))
        <div class="alert alert-success">
            <p>{{ $message }}</p>
        </div>
    @endif

    {{-- <table class="table table-bordered">
        <tr>
            <th>Image</th>
            <th>Name</th>
            <th>Stukjes</th>
            <th>eigen</th>
            <th>gelegd</th>

            <th width="280px">Action</th>
        </tr>
    </table> --}}

    <div class="container-fluid">
        @foreach ($kralen->chunk(3) as $chunk)
            <div class="row">
                @foreach ($chunk as $kraal)
                    <div class="col-lg-4 col-sm 2 mb-3 mb-sm-0">

                        <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
                            <a href="{{ route('kralen.show', $kraal->id) }}"> <img class="card-img-top"
                                    src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli" width="200px"></a>
                            <div class="card-body">
                                <h5 class="card-title"> {{ $kraal->name }}</h5>
                                <ul class="list-group list-group-flush">
                                    <li class="list-group-item">Voorraad:
                                        {{ $kraal->stock }}</li>
                                    {{-- <li class="list-group-item">Eigen:
                                        @if ($puzzel->own === 1)
                                            Ja
                                        @else
                                            Nee
                                        @endif
                                    </li>
                                    <li class="list-group-item">Gelegd:
                                        @if ($puzzel->gelegd === 1)
                                            Ja
                                        @else
                                            Nee
                                        @endif --}}
                                    </li>
                                </ul>




                                <form action="{{ route('kralen.destroy', $kraal->id) }}" method="POST">

                                    <a class="btn btn-info" href="{{ route('kralen.show', $kraal->id) }}">Show</a>

                                    <a class="btn btn-primary" href="{{ route('kralen.edit', $kraal->id) }}">Edit</a>

                                    @csrf
                                    @method('DELETE')

                                    <button type="submit" class="btn btn-danger"
                                        onclick="return myFunction();">Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                @endforeach
            </div>
        @endforeach
    </div>
    {{-- {!! $puzzels->links() !!} --}}
    <script>
        function myFunction() {
            if (!confirm("Are You Sure to delete this"))
                event.preventDefault();
        }
    </script>
@endsection
