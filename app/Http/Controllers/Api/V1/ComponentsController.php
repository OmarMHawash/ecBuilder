<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Http\Requests\StoreComponentRequest;
use App\Models\Component;
use App\Models\ComponentsWebapp;
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
        if ($added == 0) {
            return response()->json("failed to add components", 400, ['Content-Type' => 'application/json']);
        }
        return response()->json(['added' => $added], 201, ['Content-Type' => 'application/json']);
    }

    public function active_components(string $id)
    {
        $webapp_components = ComponentsWebapp::where('webapp_id', $id)->get();
        $components = Component::all();
        $active_components = [];
        foreach ($components as $component) {
            foreach ($webapp_components as $webapp_component) {
                $component->visible = false;
                if ($webapp_component->component_id == $component->id) {
                    $component->visible = true;
                    break;
                }
            }
            array_push($active_components, $component);
        }
        // dd($active_components);
        return response()->json($active_components, 200, ['Content-Type' => 'application/json']);
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

    public function show_by_name(string $name)
    {
        //
        $component = Component::where('name', $name)->first();
        return response()->json($component, 200, ['Content-Type' => 'application/json']);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $component = Component::find($id);
        $component->update($request->all());
        $component->save();
        return response()->json($component, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $component = Component::find($id);
        $component->delete();
        return response()->json("deleted", 202, ['Content-Type' => 'application/json']);
    }
}
