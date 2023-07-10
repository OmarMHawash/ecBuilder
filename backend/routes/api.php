<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ComponentsController;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('components', ComponentsController::class);
    Route::get('/header', [ComponentsController::class, 'test_header']);
});
