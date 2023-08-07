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
    Route::apiResource('palettes', PalettesController::class);
    Route::get('palettes/name/{name}', [PalettesController::class, 'show_by_name']);

    Route::apiResource('components', ComponentsController::class);
    Route::post('components/many', [ComponentsController::class, 'store_many']);
    Route::get('components/name/{name}', [ComponentsController::class, 'show_by_name']);
    Route::get('active_components/{id}', [ComponentsController::class, 'active_components']);

    Route::apiResource('webapps', WebappsController::class);
    Route::get('webapps/{id}/download', [WebappsController::class, 'download']);
    Route::post('webapps/config', [WebappsController::class, 'store_config']);

    Route::get('components_webapps/{id}', [ComponentsWebappsController::class, 'show_web_comp']);
    Route::post('components_webapps/{id}', [ComponentsWebappsController::class, 'store_many']);
    Route::apiResource('components_webapps', ComponentsWebappsController::class);
});
