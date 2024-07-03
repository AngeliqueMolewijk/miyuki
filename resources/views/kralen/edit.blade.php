@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Product</h2>
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
    <div class="container">
        <div class="row">
            <div class="col-sm-3 col-md-6" style="padding-left: 0px;  padding-right: 0px;">
                <img class="card-img-top" src="{{ url('images/' . $kraal->image) }}" alt="Italian Trulli" width="500px">
            </div>
            <div class="col-sm-9 col-md-6">
                <form action="{{ route('kralen.update', $kraal->id) }}" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="image">Choose a photo!</label>
                        <input type="file" class="form-control" name="image">
                    </div>
                    <div class="form-group">
                        <strong>Name:</strong>
                        <input type="text" name="name" class="form-control"value="{{ $kraal->name }}"
                            placeholder="Name">
                    </div>
                    <div class="form-group">
                        <strong>Stock:</strong>
                        <input type="text" name="stock" class="form-control" value= "{{ $kraal->stock }}"
                            placeholder="stock">
                    </div>
                    <div class="form-group">
                        <strong>Nummer:</strong>
                        <input type="text" name="nummer" class="form-control" value= "{{ $kraal->nummer }}"
                            placeholder="nummer">
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>

@endsection
