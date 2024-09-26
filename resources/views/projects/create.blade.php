@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Add New Project</h2>
            </div>
            <div class="pull-right">
                <a class="btn btn-primary" href="{{ route('projects.index') }}"> Back</a>
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

    <form action="{{ route('projects.store') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <div class="row">
            <div class="col-xs-12 col-sm-12 col-md-12">
                <div class="form-group">
                    <label for="image1">Choose a photo!</label>
                    <input type="file" class="form-control" name="image1">
                </div>
                <div class="form-group">
                    <label for="image2">Choose a photo!</label>
                    <input type="file" class="form-control" name="image2">
                </div>
                <div class="form-group">
                    <strong>Name:</strong>
                    <input type="text" name="title" class="form-control" placeholder="Name">
                </div>
                <div class="form-group">
                    <strong>Description:</strong>
                    <textarea name="description" class="form-control" placeholder="description">
                    </textarea>
                </div>
                {{-- <div class="form-group">
                    <strong>Kraalid:</strong>
                    <input type="text" name="Kraalid" class="form-control" placeholder="Kraalid">
                </div> --}}
            </div>
            <div class="col-xs-12 col-sm-12 col-md-12 text-center">
                <button type="submit" class="btn btn-primary">Submit</button>
            </div>
        </div>

    </form>

@endsection
