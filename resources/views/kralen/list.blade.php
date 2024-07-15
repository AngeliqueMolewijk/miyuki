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
        @foreach ($kleurcollectie as $kraal)
            {{-- @foreach ($kleurcollectie as $kraal) --}}
            <form action="{{ route('kralen.update', $kraal->id) }}" method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div style="overflow-x:auto;">

                    {{-- <table> --}}
                    {{-- <div class="row"> --}}
                    {{-- {{ $kraal->id }} --}}
                    <tr>
                        <td>

                            @if ($kraal->id)
                                {{-- {{ $kraal->$kraalid }} --}}
                                {{-- {{ $kraal->image }} --}}
                                <div class="col-sm-3 col-md-6" style="padding-left: 0px;  padding-right: 0px;">
                                    <a href="{{ route('kralen.show', $kraal->id) }}"><img
                                            src="{{ url('images/' . $kraal->image) }}"></a>

                                    {{-- <a href="{{ route('kralen.show', $kraal->kraalnr) }}">
                                <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli"
                                    width="500px"></a> --}}
                                </div>
                            @else
                                <p>nee</p>
                            @endif
                            {{-- <div class="col-sm-3 col-md-6" style="padding-left: 0px;  padding-right: 0px;">
                            <a href="{{ route('kralen.show', $kraal->kraalid) }}"><img
                                    src="{{ url('images/' . $kraal->image) }}"></a>

                            {{-- <a href="{{ route('kralen.show', $kraal->kraalnr) }}">
                                <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli"
                                    width="500px"></a> --}}
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
                        @if ($mix->contains('kraalnr', $kraal->id))
                            <p>ja</p>
                        @else
                            <p>nee</p>
                        @endif
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
                    <select name="kleurid">
                        {{-- {{ Form::open(['action' => 'KralenController@storemix']) }} --}}
                        <option value="Empty">
                            @foreach ($kleuren as $kleur)
                        <option value="{{ $kleur->id }}" {{ $kleur->name == $kraal->name ? 'selected' : '' }}>
                            {{ $kleur->kleur }}
                        </option>
        @endforeach
        {{-- {{ Form::close() }} --}}

        </select>
        {{-- @if ($kraal->kleur)
                        <strong>KLeur:</strong>
                        <div>{{ $kraal->kleur }}
                        </div>
                    @else
                        <p>nee</p>
                    @endif --}}

        {{-- <strong>KLeur:</strong>
                        <div>{{ $kraal->kleur }}
                        </div> --}}
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
    {{-- @foreach ($kleurcollectie as $collectie)
        {{ $collectie->kleur }}
    @endforeach --}}
    </div>


    </form>
@endsection
