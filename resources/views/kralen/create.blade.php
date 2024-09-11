@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Add New Product</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('kralen.index') }}"> Back</a>
            </div>
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

    <form action="{{ route('kralen.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <label for="image">Choose a photo!</label>
                    <input type="file" class="form-control" name="image">
                </div>
                <div class="form-group">
                    <strong>Name:</strong>
                    <input type="text" name="title" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <strong>Nummer:</strong>
                    <input type="text" name="nummer" class="form-control" placeholder="Nummer">
                </div>
                <div class="form-group">
                    <strong>stock:</strong>
                    <input type="text" name="stock" class="form-control" placeholder="Stock">
                </div>
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>

@endsection
