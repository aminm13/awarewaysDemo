<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

use App\models\Question;
use App\models\Answer;
use App\models\Category;
use App\models\Tag;
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

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});

Route::get('/answers', function(){
    return Answer::all();
});


Route::get('/questions', function(){
    return Question::all();
});

Route::get('/questions/create', 'App\Http\Controllers\QuestionController@createQuestion');
