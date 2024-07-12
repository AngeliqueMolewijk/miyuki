@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Lijst met alle kralen</h2>
            </div>
            {{-- <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('kralen.index') }}"> Back</a>
            </div> --}}
        </div>
    </div>

    @if ($errors->any())
        <div class="alert alert-danger">
            <strong>Whoops!</strong> There were some problems with your input.<br><br>
            <ul>
                @foreach ($errors->all() as $error)
                    <li>{{ $error }}</li>
                @endforeach
            </ul>
        </div>
    @endif
    <table>
        <tr class="bg-primary">
            <th scope="col">Image</th>
            <th scope="col">Naam</th>
            <th scope="col">Nummer</th>
            <th width="10%">zit in mix</th>
            <th width="20%">Voorraad</th>
            <th></th>

        </tr>
        @foreach ($kralen as $kraal)
            <form action="{{ route('kralen.update', $kraal->id) }}" method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div style="overflow-x:auto;">

                    {{-- <table> --}}
                    {{-- <div class="row"> --}}

                    <tr>
                        <td>
                            <div class="col-sm-3 col-md-6" style="padding-left: 0px;  padding-right: 0px;">
                                <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli"
                                    width="500px">
                            </div>
                        </td>
                        <td>
                            <div class="form-group">
                                <strong>Name:</strong>
                                <input type="text" name="name" class="form-control" placeholder="Name"
                                    value="{{ $kraal->name }}" size="50">
                        </td>
                        <td>
                            <div class="form-group">
                                <strong>Nummer:</strong>
                                <input type="text" name="nummer" class="form-control" placeholder="Nummer"
                                    value="{{ $kraal->nummer }}">
                            </div>
                        </td>
                        <td>
                            <div class="form-group">
                                <strong>Zit in mix:</strong>

                                {{-- @foreach ($mix as $mixlos) --}}
                                {{-- @if (contains($kraal->id, $mix)) --}}
                                @if ($mix->contains('kraalnr', $kraal->id))
                                    {{-- @if ($mix->where('kraalnr', $kraal->id)->count() === 0) --}}
                                    {{-- {{ $kraal->id }} --}}
                                    <p>ja</p>
                                @else
                                    <p>nee</p>
                                @endif
                                {{-- @endforeach --}}
                            </div>
                            {{-- <strong>Nummer:</strong>

                                <input type="text" name="nummer" class="form-control" placeholder="Nummer"
                                    value="{{ $kraal->nummer }}"> --}}
                </div>
                </td>
                <td>
                    <div class="form-group">
                        <strong>stock:</strong>
                        <input type="text" name="stock" class="form-control" placeholder="Stock"
                            value="{{ $kraal->stock }}">
                    </div>
                </td>
                <td>
                    <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </td>
                </tr>
                {{-- </div> --}}
                </div>
            </form>
        @endforeach

    </table>
    </div>


    </form>
@endsection
