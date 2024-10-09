@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Nieuwe categorie</h2>
            </div>
            {{-- <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('projects.index') }}"> Back</a>
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

    <form action="{{ route('storecategorie') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <label for="categorieName">Categorienaam</label>
                    <input type="text" class="form-control" name="categorieName">
                </div>
                <div> Kies een project voor deze nieuwe categorie</div>
                <select class="form-control" name="projectid">
                    <option value="null" selected>Please select one option</option>

                    @foreach ($Projecten as $Project)
                        <option value="{{ $Project->id }}">
                            {{ $Project->naam }}
                        </option>
                    @endforeach

                </select>
                <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                    <button type="submit" class="btn btn-primary">Submit</button>
                </div>
            </div>
        </div>

    </form>
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Bestaande categorieen</h2>
            </div>
            @foreach ($categories as $categorie)
                <div>
                    {{ $categorie->categoriename }}
                </div>
            @endforeach
        </div>
    </div>

@endsection
