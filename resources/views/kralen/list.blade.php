@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 col-sm-1 margin-tb">
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
    {{-- @sortablelink('stock') --}}
    <div class="table-responsive">
        <table class="table table-bordered data-table">
            <tr class="table-secondary">
                <th scope="30%">Image</th>
                <th width="25%">@sortablelink('name', 'Naam') </th>
                <th width="10%"> @sortablelink('nummer', 'Nummer')</th>
                <th width="10%">zit in mix</th>
                {{-- <th width="10%">Voorraad</th> --}}
                <th width="10%"> @sortablelink('stock', 'Voorraad')</th>
                <th width="10%">Aantal</th>
                <th width="10%">kies kleur</th>
                <th width="5%">in kleur</th>
                <th></th>

            </tr>
            @foreach ($kralen as $kraal)
                {{-- @foreach ($kleurcollectie as $kraal) --}}
                <div>
                    <form action="{{ route('kralen.update', $kraal->id) }}" #anchor method="POST"
                        enctype="multipart/form-data">
                        @method('PUT')
                        @csrf
                        <div style="overflow-x:auto;">
                            <tr id='component{{ $kraal->id }}'>
                                <td>
                                    <div class="col-sm-1 col-md-6" style="padding-left: 0px;  padding-right: 0px;">
                                        <a href="{{ route('kralen.show', $kraal->id) }}"><img
                                                src="{{ url('images/' . $kraal->image) }}" loading="lazy"></a>

                                    </div>

                                </td>
                                {{-- </div> --}}
                                <td>
                                    <div class="form-group">
                                        <strong>Name:</strong>
                                        <input type="text" name="name" class="form-control" placeholder="Name"
                                            value="{{ $kraal->name }}" size="40">
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
                                        {{-- <strong>Zit in mix:</strong> --}}
                                        @foreach ($mix as $kraleninmix)
                                            @if ($kraleninmix->kraalnr == $kraal->id)
                                                <a href="{{ route('kralen.show', $kraleninmix->mixnr) }}">
                                                    {{ $kraleninmix->mixnr }} {{ ',' }}
                                                </a>
                                                {{-- @else
                                <p>nee</p> --}}
                                            @endif
                                        @endforeach
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
                                    <div class="form-group">
                                        <strong>aantal:</strong>
                                        <input type="text" name="countstock" class="form-control"
                                            placeholder="countstock" value="{{ $kraal->stock * 200 }}"readonly>
                                    </div>
                                </td>
                                <td>
                                    <select name="kleurid">
                                        {{-- {{ Form::open(['action' => 'KralenController@storemix']) }} --}}
                                        <option value="Empty"></option>
                                        @foreach ($kleuren as $kleur)
                                            <option value="{{ $kleur->id }}"
                                                {{ $kleur->kleur == $kraal->kleur ? 'selected' : '' }}>
                                                {{ $kleur->kleur }}</option>
                                        @endforeach
                                    </select>
                                </td>

                                <td>
                                    <div class="form-group">
                                        {{-- <strong>Zit in kleur:</strong> --}}
                                        @foreach ($kleurcollectie as $kleuritem)
                                            @if ($kleuritem->kraalid == $kraal->id)
                                                <a href="{{ route('kleuren.show', $kleuritem->kleurid) }}">
                                                    <p> {{ $kleuritem->kleur }}</p>
                                                </a>
                                                {{-- @else
                                            <p>nee</p> --}}
                                            @endif
                                        @endforeach
                                    </div>
                                </td>
                                <td>
                                    <div class="text-center">
                                        <button type="submit" class="btn btn-primary">Submit</button>
                                    </div>
                                </td>
                            </tr>
                        </div>
                        {{-- </div> --}}
                    </form>
                </div>
            @endforeach
        </table>
    </div>
@endsection
