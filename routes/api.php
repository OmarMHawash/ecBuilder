<?php

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use App\Http\Controllers\Api\V1\ComponentsController;
use App\Http\Controllers\Api\V1\ComponentsWebappsController;
use App\Http\Controllers\Api\V1\PalettesController;
use App\Http\Controllers\Api\V1\UsersController;
use App\Http\Controllers\Api\V1\UsersWebappsController;
use App\Http\Controllers\Api\V1\WebappsController;
use App\Http\Controllers\Api\V1\WebsitesController;

Route::group(['prefix' => 'v1'], function () {
    Route::apiResource('components', ComponentsController::class);
    Route::apiResource('palettes', PalettesController::class);
    Route::apiResource('webapps', WebappsController::class);
    Route::apiResource('components_webapps', ComponentsWebappsController::class, 'show_web_comp');

    Route::get('webapps/{id}/download', [WebappsController::class, 'download']);
    Route::post('webapps/config', [WebappsController::class, 'store_config']);

    Route::post('components/many', [ComponentsController::class, 'store_many']);
});
