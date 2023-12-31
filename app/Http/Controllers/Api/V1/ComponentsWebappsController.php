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

    public function store_many(Request $request, string $id)
    {
        $added = 0;
        $web_comps = ComponentsWebapp::where('webapp_id', $id)->get();

        foreach ($web_comps as $webcomp) {
            $webcomp->delete();
        }
        foreach ($request->all() as $webcomp) {
            ComponentsWebapp::create($webcomp);
            $added++;
        }
        if ($added == 0) {
            return response()->json("failed to add components to webapp", 400, ['Content-Type' => 'application/json']);
        }
        return response()->json(['added components' => $added], 201, ['Content-Type' => 'application/json']);

        // foreach ($request->all() as $component) {
        //     Component::create($component);
        //     $added++;
        // }
        // if ($added == 0) {
        //     return response()->json("failed to add components", 400, ['Content-Type' => 'application/json']);
        // }
        // return response()->json(['added' => $added], 201, ['Content-Type' => 'application/json']);
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
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        // do it
        $webapp_components = ComponentsWebapp::where('webapp_id', $id)->get();
        foreach ($webapp_components as $webapp_component) {
            $webapp_component->delete();
        }
        return response()->json("deleted", 202, ['Content-Type' => 'application/json']);
    }
}
