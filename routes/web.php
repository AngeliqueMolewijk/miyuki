<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KralenController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ProductController;


Route::get('/1', function () {
    return view('welcome');
});

Route::get('/test', function () {
    return view('welcome');
});
Route::resource('/kralen', KralenController::class);
Route::resource('My', TestController::class);
Route::resource('/products', ProductController::class);
Route::post('/storemix', [KralenController::class, 'storemix']);
Route::post('/search', [KralenController::class, 'search']);
Route::get('/searchmix', [KralenController::class, 'searchmix']);
Route::get('/list', [KralenController::class, 'list']);
