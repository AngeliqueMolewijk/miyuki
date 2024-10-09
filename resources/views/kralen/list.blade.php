@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col margin-tb">
            <div class="">
                <h2>Lijst met alle kralen</h2>
            </div>
        </div>
    </div>
    <button onclick="topFunction()" id="myBtn" title="Go to top">Top</button>
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
    {{-- <div class="container sticky-top" id="sticktableheader">
        <div class="row border bg-light mb-2 pb-2">
            <div class="col-lg-1">Image</div>
            <div class="col-lg-3 col-md-3">@sortablelink('name', trans('Naam'), ['filter' => 'active, visible'], ['class' => 'btn-block', 'rel' => 'nofollow'])</div>
            <div class="col-lg-2 col-md-2"> @sortablelink('nummer', trans('Nummer'), ['filter' => 'active, visible'], ['class' => 'btn-block', 'rel' => 'nofollow'])</div>
            <div class="col-lg-1 col-md-1">zit in mix</div>
            <div class="col-lg-1 col-md-1"> @sortablelink('stock', 'Stock')</div>
            <div class="col-lg-1 col-md-1">Aantal</div>
            <div class="col-lg-1 col-md-1">kies kleur</div>
            <div class="col-lg-1 col-md-1">in kleur</div>
        </div>
    </div> --}}
    </tr>
    <div class="container">
        @foreach ($kralen as $kraal)
            <form action="{{ route('kralen.update', $kraal->id) }}" #anchor method="POST" enctype="multipart/form-data">
                @method('PUT')
                @csrf
                <div class="card">
                    <div class="row mb-2">
                        <div class="col-lg-4">
                            <div class="col-md-2 col-lg-12">
                                <div id='component{{ $kraal->id }}'>
                                    <div class="d-xs-block d-sm-block d-md-none  d-lg-none d-xl-none d-xxl-none">Image</div>
                                    <a href="{{ route('kralen.show', $kraal->id) }}"><img
                                            src="{{ url('images/' . $kraal->image) }}" loading="lazy"></a>
                                </div>
                            </div>
                        </div>
                        <div class="col-lg-8">
                            <div class="card">
                                <div class="row">
                                    <div class="col-md-5 col-lg-8">
                                        <div class="form-group h6">
                                            <div class="">Naam
                                                <input type="text" name="name" class="form-control" placeholder="Name"
                                                    value="{{ $kraal->name }}">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-5 col-lg-4">
                                        <div class="form-group">
                                            <div class="">Nummer
                                            </div>
                                            <input type="text" name="nummer" class="form-control" placeholder="Nummer"
                                                value="{{ $kraal->nummer }}">
                                        </div>
                                    </div>

                                    <div class="col-md-2 col-lg-4">
                                        <div class="form-group">
                                            <div class="">Voorraad
                                                gram
                                            </div>
                                            <input type="text" name="stock" class="form-control" placeholder="Stock"
                                                value="{{ $kraal->stock }}">
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-4">
                                        <div class="form-group">
                                            <div class="">Voorraad
                                                aantal
                                            </div>
                                            <input type="text" name="countstock" class="form-control"
                                                placeholder="countstock" value="{{ $kraal->stock * 200 }}"readonly>
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-4">
                                        <div class="">Aan kleurmix
                                        </div>

                                        <select name="kleurid">
                                            <option value="Empty"></option>
                                            @foreach ($kleuren as $kleur)
                                                <option value="{{ $kleur->id }}"
                                                    {{ $kleur->kleur == $kraal->kleur ? 'selected' : '' }}>
                                                    {{ $kleur->kleur }}</option>
                                            @endforeach
                                        </select>
                                    </div>
                                    <div class="col-md-2 col-lg-4">
                                        <div class="">In kleurmix
                                        </div>

                                        <div class="form-group">
                                            @foreach ($kleurcollectie as $kleuritem)
                                                @if ($kleuritem->kraalid == $kraal->id)
                                                    <a class="text-decoration-none"
                                                        href="{{ route('kleuren.show', $kleuritem->kleurid) }}">
                                                        {{ $kleuritem->kleur }}
                                                    </a>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-4">
                                        <div class="form-group">
                                            <div class="">In mix
                                            </div>

                                            @foreach ($mix as $kraleninmix)
                                                @if ($kraleninmix->kraalnr == $kraal->id)
                                                    <a class="text-decoration-none"
                                                        href="{{ route('kralen.show', $kraleninmix->mixnr) }}">
                                                        {{ $kraleninmix->mixnr }} {{ ' ' }}
                                                    </a>
                                                @endif
                                            @endforeach
                                        </div>
                                    </div>
                                    <div class="col-md-2 col-lg-4 mt-2">
                                        <div class="text-center">
                                            <button type="submit" class="btn btn-primary">Submit</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
        @endforeach
    </div>
@endsection
