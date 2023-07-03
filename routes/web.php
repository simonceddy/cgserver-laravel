<?php

use App\Http\Controllers\AdminController;
use App\Http\Controllers\FrontController;
use App\Http\Controllers\UploadFile;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

// Route::post('/tokens/create', function (Request $request) {
//     $token = $request->user()->createToken($request->token_name);

//     return ['token' => $token->plainTextToken];
// });

Route::post('/files/upload', UploadFile::class)
    // ->middleware('auth')
    ;
Route::get('/login', '\\App\\Http\\Controllers\\LoginController@show');

Route::post('/login', '\\App\\Http\\Controllers\\LoginController@authenticate');
Route::get('/admin/{path?}', AdminController::class);
Route::get('/{path?}', FrontController::class);
