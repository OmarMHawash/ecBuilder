<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\ComponentsWebapp;
use Illuminate\Http\Request;

class ComponentsWebappsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $components_webapps = ComponentsWebapp::all();
        return response()->json($components_webapps, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //

    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        // do it
        $webapp_components = ComponentsWebapp::create($request->all());
        return response()->json($webapp_components, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Display the specified resource.
     */
    public function show_web_comp(string $id)
    {
        //
        $webapp_components = ComponentsWebapp::where('webapp_id', $id)->get();
        return response()->json($webapp_components, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
