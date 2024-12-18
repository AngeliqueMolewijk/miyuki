<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\KralenController;
use App\Http\Controllers\KleurenController;
use App\Http\Controllers\TestController;
use App\Http\Controllers\ProductController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\PatternController; // controller with only javascript
use App\Http\Controllers\PatternPhpController; //controller with php and javascript
use App\Http\Controllers\Auth\LoginRegisterController;



use App\Livewire\Counter;

Route::controller(LoginRegisterController::class)->group(function () {
    Route::get('/register', 'register')->name('register');
    Route::post('/store', 'store')->name('store');
    Route::get('/login', 'login')->name('login');
    Route::post('/authenticate', 'authenticate')->name('authenticate');
    Route::get('/home', 'home')->name('home');
    Route::post('/logout', 'logout')->name('logout');
});

Route::get('/1', function () {
    return view('welcome');
});
Route::get('/counter', Counter::class);
Route::get('/test', function () {
    return view('kralen.test');
});
Route::get('/testgrid', [KralenController::class, 'testgrid']);;
Route::resource('My', TestController::class);
Route::resource('/products', ProductController::class);
Route::post('/storemix', [KralenController::class, 'storemix']);
Route::post('/storekleuren', [KralenController::class, 'storekleuren']);
Route::post('/destroymix', [KralenController::class, 'destroymix']);
Route::get('/searchmix', [KralenController::class, 'searchmix']);
Route::middleware(['auth', 'auth.session'])->group(
    function () {
        Route::get('/list', [KralenController::class, 'list']);
        Route::resource('/kralen', KralenController::class);
        Route::resource('/kleuren', KleurenController::class);
        Route::resource('/projects', ProjectController::class);
        Route::post('/search', [KralenController::class, 'search']);
        Route::get('/opvoorraad', [KralenController::class, 'opvoorraad']);
        Route::get('/createCategorie', [ProjectController::class, 'createCategorie'])
            ->name('createCategorie');
        Route::get('/readbuildpattern', [ProjectController::class, 'readbuildpattern']);
        Route::get('/readbuildpatternew/{pattern?}', [PatternController::class, 'readbuildpatternew']);
        Route::post('/readbuildpatternew/{pattern?}', [PatternController::class, 'updatepattern']);
        Route::post('/editfrom/{pattern?}', [PatternController::class, 'edit']);
        Route::get('posts/{id}', [PatternController::class, 'show']);
        Route::get('/readpatternphp/{id?}', [PatternPhpController::class, 'readpatternphp'])->name('readpatternphp');

        Route::post('/newpattern', [PatternController::class, 'newpattern']);
        Route::post('/newpatternphp', [PatternPhpController::class, 'newpatternphp']);
        Route::post('/updatepattern', [PatternPhpController::class, 'updatepattern']);

        Route::post('/testroute', [ProjectController::class, 'buildpattern']);
        Route::post('/deleteproject', [ProjectController::class, 'deleteproject']);
    }
);

Route::get('/beadographer', function () {
    return view('projects.beadographer');
});

Route::get('/allekralen', [KralenController::class, 'allekralen']);
Route::get('clickgrid', [ProjectController::class, 'clickgrid']);

Route::get('/categories', [ProjectController::class, 'Categories'])->name('categories');
Route::post('/storecategorie', [ProjectController::class, 'storecategorie'])->name('storecategorie');
Route::get('/filter/{name}', [ProjectController::class, 'filter'])->name('filter');

Route::post('storekraalproject', [ProjectController::class, 'storekraalproject']);
Route::GET('/destroyuitproject/{projectid}/{kraalid})', [ProjectController::class, 'destroyuitproject'])->name('delete-from-project');
Route::GET('/destroyuitmix/{mixid}/{kraalid})', [KralenController::class, 'destroyuitmix'])->name('delete-from-mix');
