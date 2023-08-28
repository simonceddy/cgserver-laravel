<?php

use App\Http\Controllers\{
    AdminController,
    FrontController,
    GetFile,
    LogoutController,
    PagesController,
    UploadFile,
    UploadImage
};
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

Route::post('/files/upload', UploadImage::class)
    ->middleware('auth')
    ;

// Route::get('/upload', function () {
//     return view('imageTest');
// });
// Route::post('/upload', UploadImage::class);

Route::get('/files/get/{filename}', GetFile::class);
Route::get('/login', '\\App\\Http\\Controllers\\LoginController@show')->name('login');

Route::post('/login', '\\App\\Http\\Controllers\\LoginController@authenticate');

Route::get('/logout', LogoutController::class)->name('logout');

Route::get('/admin', AdminController::class);

Route::resource('/pages', PagesController::class);
Route::get('/', FrontController::class);
