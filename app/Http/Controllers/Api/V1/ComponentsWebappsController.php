<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\ComponentWebapp;
use Illuminate\Http\Request;

class ComponentsWebappsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $components_webapps = ComponentWebapp::all();
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
        $component_webapp = ComponentWebapp::create($request->all());
        return response()->json($component_webapp, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $component_webapp = ComponentWebapp::find($id);
        return response()->json($component_webapp, 200, ['Content-Type' => 'application/json']);
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
