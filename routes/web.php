<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KralenController;
use App\Http\Controllers\KleurenController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProjectController;
use App\Livewire\Counter;

Route::get('/1', function () {
    return view('welcome');
});
Route::get('/counter', Counter::class);
Route::get('/test', function () {
    return view('kralen.test');
});
Route::get('/testgrid', [KralenController::class, 'testgrid']);

Route::resource('/kralen', KralenController::class);
Route::resource('/kleuren', KleurenController::class);
Route::resource('/projects', ProjectController::class);
Route::resource('My', TestController::class);
Route::resource('/products', ProductController::class);
Route::post('/storemix', [KralenController::class, 'storemix']);
Route::post('/storekleuren', [KralenController::class, 'storekleuren']);
Route::post('/destroymix', [KralenController::class, 'destroymix']);
Route::post('/search', [KralenController::class, 'search']);
Route::get('/searchmix', [KralenController::class, 'searchmix']);
Route::get('/list', [KralenController::class, 'list']);
Route::get('/opvoorraad', [KralenController::class, 'opvoorraad']);
Route::get('clickgrid', [ProjectController::class, 'clickgrid']);
Route::post('storekraalproject', [ProjectController::class, 'storekraalproject']);
// Route::get('destroyuitproject/{kraalid}/{projectid}', 'ProjectController@destroyuitproject');
Route::GET('/destroyuitproject/{projectid}/{kraalid})', [ProjectController::class, 'destroyuitproject'])->name('become-a-customer');

// Route::delete('/destroyuitproject/{id}', 'projectController@destroyuitproject')->name('projects.destroyuitproject');
// Route::delete('destroyuitproject/{{kraalid}}{{projectid}}', [ProjectController::class, 'destroyuitproject']);
