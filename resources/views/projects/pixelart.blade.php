@extends('kralen.layout')
@section('content')
    <h1>Pixel Art Maker</h1>
    <section class="settings">
        <form id="sizePicker">
            <h2>Choose Grid Size</h2>
            Grid Height:
            <input type="number" id="input_height" name="height" min="1" value="10">
            Grid Width:
            <input type="number" id="input_width" name="width" min="1" value="10">
            <input class="submit" type="submit" value="Make grid">
        </form>
    </section>

    <section class="main">
        <div class="col color">
            <h2>Color</h2>
            <input type="color" id="colorPicker">
        </div>
        <div class="col canvas">
            <h2>Design Canvas</h2>
            <table id="pixel_canvas">
            </table>
            <div id="save">
                <button>Save image</button>
                <div class="info_box">
                    <p class="info"></p>
                </div>
            </div>
        </div>
        <div class="col change">
            <h2>Zoom</h2>
            <input type="range" id="pixel_resize" name="pixels" orient="vertical" min="1" step="1">
        </div>
    </section>
    <section class="gallery">
        <h2>Gallery</h2>
        <div class="images">

        </div>
        <button id="show">Show more</button>
    </section>
    <script type="text/javascript" src="{{ asset('js/designs.js') }}"></script>
    <script type="text/javascript" src="{{ asset('js/html2canvas.js') }}"></script>
@endsection
