<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KralenController;
use App\Http\Controllers\KleurenController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ProductController;


Route::get('/1', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('kralen.test');
});
Route::get('/testgrid', [KralenController::class, 'testgrid']);

Route::resource('/kralen', KralenController::class);
Route::resource('/kleuren', KleurenController::class);

Route::resource('My', TestController::class);
Route::resource('/products', ProductController::class);
Route::post('/storemix', [KralenController::class, 'storemix']);
Route::post('/storekleuren', [KralenController::class, 'storekleuren']);
Route::post('/destroymix', [KralenController::class, 'destroymix']);
Route::post('/search', [KralenController::class, 'search']);
Route::get('/searchmix', [KralenController::class, 'searchmix']);
Route::get('/list', [KralenController::class, 'list']);
Route::get('/opvoorraad', [KralenController::class, 'opvoorraad']);
