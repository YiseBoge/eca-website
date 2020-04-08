<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| is assigned the "api" middleware group. Enjoy building your API!
|
*/

//Route::group(['middleware' => 'auth:api'], function () {
//    Route::post('logout', 'Auth\LoginController@logout');
//
//    Route::get('/user', function (Request $request) {
//        return $request->user();
//    });
//
//    Route::patch('settings/profile', 'Settings\ProfileController@update');
//    Route::patch('settings/password', 'Settings\PasswordController@update');
//});

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function () {
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
    });
});


Route::get('news/categories', 'NewsController@categories')->name('news.categories');
Route::get('publication/categories', 'PublicationsController@categories')->name('publication.categories');

Route::resource('news', 'NewsController')->only(['index', 'show']);
Route::resource('publication', 'PublicationsController')->only(['index', 'show']);
Route::resource('event', 'EventsController')->only(['index', 'show']);
Route::resource('leadership', 'LeadersController')->only(['index', 'show']);


Route::group(['middleware' => 'auth:api'], function () {
    Route::post('login', 'Auth\LoginController@login');
    Route::post('register', 'Auth\RegisterController@register');

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');

    Route::resource('news', 'NewsController')->only(['store', 'update', 'destroy']);
    Route::resource('publication', 'PublicationsController')->only(['store', 'update', 'destroy']);
    Route::resource('event', 'EventsController')->only(['store', 'update', 'destroy']);
    Route::resource('leadership', 'LeadersController')->only(['store', 'update', 'destroy']);
});
