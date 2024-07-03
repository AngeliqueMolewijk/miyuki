@extends('layouts.app')

@section('content')
    <h1>Items</h1>
    <ul>
        @foreach ($kralen as $kraal)
            <li>{{ $kraal->name }}</li>
        @endforeach
    </ul>
@endsection
