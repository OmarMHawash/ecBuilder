<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreComponentRequest;
use App\Models\Component;
use Illuminate\Http\Request;

class ComponentsController extends Controller
{
    public function index()
    {
        $components = Component::all();
        return response()->json($components, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Store many newly created resources in storage.
     */
    public function store_many(Request $request)
    {
        $added = 0;
        foreach ($request->all() as $component) {
            Component::create($component);
            $added++;
        }
        return response()->json(['added' => $added], 201, ['Content-Type' => 'application/json']);
    }
    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $component = Component::find($id);
        return response()->json($component, 200, ['Content-Type' => 'application/json']);
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
