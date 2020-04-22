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

Route::prefix('auth')->group(function () {
    Route::post('register', 'AuthController@register');
    Route::post('login', 'AuthController@login');
    Route::get('refresh', 'AuthController@refresh');
    Route::group(['middleware' => 'auth:api'], function(){
        Route::get('user', 'AuthController@user');
        Route::post('logout', 'AuthController@logout');
        Route::post('change-password', 'AuthController@changePwd');
    });
});

Route::group(['middleware' => 'auth:api'], function () {

    Route::post('password/email', 'Auth\ForgotPasswordController@sendResetLinkEmail');
    Route::post('password/reset', 'Auth\ResetPasswordController@reset');

    Route::post('email/verify/{user}', 'Auth\VerificationController@verify')->name('verification.verify');
    Route::post('email/resend', 'Auth\VerificationController@resend');

    Route::post('oauth/{driver}', 'Auth\OAuthController@redirectToProvider');
    Route::get('oauth/{driver}/callback', 'Auth\OAuthController@handleProviderCallback')->name('oauth.callback');

    Route::post('user-profile/update', 'AuthController@updateProfile');

    Route::apiResource('news', 'NewsController')->only(['destroy', 'store', 'update']);
    Route::apiResource('event', 'EventsController')->only(['destroy', 'store', 'update']);
    Route::apiResource('leadership', 'LeadersController')->only(['destroy', 'store', 'update']);
    Route::apiResource('publication', 'PublicationsController')->only(['destroy', 'store', 'update']);
});

Route::get('/news', 'NewsController@index');
Route::get('/news/categories', 'NewsController@categories')->name('news.categories');
Route::get('/news/{id}', 'NewsController@show');

Route::get('/event', 'EventsController@index');
Route::get('/event/{id}', 'EventsController@show');

Route::get('/leadership', 'LeadersController@index');
Route::get('/leadership/{id}', 'LeadersController@show');

Route::get('/publication', 'PublicationsController@index');
Route::get('/publication/categories', 'PublicationsController@categories')->name('publication.categories');
Route::get('/publication/{id}','PublicationsController@show');
