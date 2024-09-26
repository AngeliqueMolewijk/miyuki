@extends('kralen.layout')

@section('content')
    <div class="row">
        <div class="col-lg-12 margin-tb">
            <div class="pull-left">
                <h2>Edit Product</h2>
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
    {{-- <div class="container"> --}}
    <div class="card">
        <div class="row">
            <div class="col-md-2" style="padding-left: 0px;  padding-right: 0px;">
                <img class="card-img-top" src="{{ url('images/' . $project->image) }}" alt="Italian Trulli" width="500px"
                    height="500px">
            </div>
            <div class="col-md-2" style="padding-left: 0px;  padding-right: 0px;">
                <img class="card-img-top" src="{{ url('images/' . $project->image2) }}" alt="Italian Trulli" width="500px"
                    height="500px">
            </div>
            <div class="col-sm-9 col-md-8">
                <form action="{{ route('projects.update', $project->id) }}" method="POST" enctype="multipart/form-data">
                    @method('PUT')
                    @csrf
                    <div class="form-group">
                        <label for="image1">Choose a photo!</label>
                        <input type="file" class="form-control" name="image1" value="{{ $project->image }}">
                    </div>
                    <div class="form-group">
                        <label for="image2">Choose a photo!</label>
                        <input type="file" class="form-control" name="image2" value="{{ $project->image2 }}">
                    </div>
                    <div class="form-group">
                        <strong>Name:</strong>
                        <input type="text" name="name" class="form-control" value="{{ $project->naam }}"
                            placeholder="Name">
                    </div>
                    <div class="form-group">
                        <strong>description:</strong>
                        <textarea name="description" class="form-control" value= "{{ $project->omschrijving }}" placeholder="stock">{{ $project->omschrijving }}
                        </textarea>
                    </div>

                    <div class="text-center">
                        <button type="submit" class="btn btn-primary">Submit</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
    <form action="{{ url('/storekraalproject') }}" method="POST" enctype="multipart/form-data">
        @csrf
        <select class="form-control" name="kraalid">
            {{-- {{ Form::open(['action' => 'KralenController@storemix']) }} --}}
            @foreach ($kralen as $kraal)
                <option value="{{ $kraal->id }}">
                    {{ $kraal->nummer }} - {{ $kraal->name }}
                </option>
            @endforeach
            {{-- {{ Form::close() }} --}}

        </select>

        <input type="hidden" name="projectid" value="{{ $project->id }}">
        <div class="col-xs-12 col-sm-12 col-md-12 text-center mt-2">
            <button type="submit" class="btn btn-primary">kralen aan project Toevoegen</button>
        </div>
    </form>
    <div class="col-md-12">
        <div class="row mt-2">
            <div class="cardsgrid">
                {{-- <ul class="cardgrid"> --}}
                {{-- @foreach ($kraleninproject as $kraleninproject) --}}
                @foreach ($kraleninproject as $kraallos)
                    <div class="card mr-2" style="width: 10rem;">
                        {{-- @foreach ($chunk as $kraalchunck) --}}
                        {{-- <li class="cards_item"> --}}
                        {{-- <div class="card text-center" style="width: 12rem;"> --}}
                        <a href="{{ route('kralen.show', $kraallos->kraalid) }}"><img class="card-img-top1"
                                src="{{ url('images/' . $kraallos->image) }}"></a>
                        <div class="card-body">
                            <h5 class="card-title"> {{ $kraallos->name }}</h5>
                            <h5 class="card-title"> Nummer: {{ $kraallos->nummer }}</h5>

                        </div>
                        <div class="card-footer">
                            <small class="text-muted">Voorraad: {{ $kraallos->stock }} gram</small>
                        </div>
                        <form
                            action="{{ route('delete-from-project', ['projectid' => $project->id, 'kraalid' => $kraallos->kraalid]) }}"
                            method="get">

                            <a class="btn btn-info" href="{{ route('kralen.show', $kraallos->kraalid) }}">Show</a>

                            <a class="btn btn-primary" href="{{ route('kralen.edit', $kraallos->kraalid) }}">Edit</a>
                            {{-- @method('DELETE')
                            @csrf --}}

                            <button type="submit" class="btn btn-danger"
                                onclick="return confirm('Do you want to delete this product?');">Delete from
                                project</button>
                        </form>





                        {{-- <a href="{{ route('projects.index') }}"
                                onclick="event.preventDefault(); 
                                 document.getElementById( 
                                   'delete-form-{{ $kraal->id }}').submit();">
                                Delete
                            </a>

                            <form id="delete-form-{{ $kraal->id }}" +
                                action="{{ route('projects.destroyuitproject', $kraal->id) }}" method="post">
                                @csrf @method('DELETE')
                            </form>

                            @csrf
                            @method('DELETE')

                            <button type="submit" class="btn btn-danger" onclick="return myFunction();">Delete</button>
                        </form> --}}
                        {{-- <div class="card-footer">
                                        <small class="text-muted">aantal: {{ $kraallos->stock * 200 }} stuks</small>
                                    </div> --}}
                    </div>
                @endforeach
                {{-- @endforeach --}}
                {{-- </ul> --}}
            </div>
        </div>
    </div>

@endsection
