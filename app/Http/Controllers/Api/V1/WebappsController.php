<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\ComponentWebapp;
use App\Models\Palette;
use App\Models\Webapp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

require_once base_path() . '/helpers/scripts/replacers.php';
require_once base_path() . '/helpers/scripts/execs.php';

class WebappsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        // 
        $webapps = Webapp::all();
        return response()->json($webapps, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //
        $webapp = Webapp::create($request->all());
        $palette = Palette::create([
            'name' => $webapp->name . '_' . $webapp->id,
        ]);
        $webapp->palette_id = $palette->id;
        $webapp->save();
        return response()->json($webapp, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Stores the modified palette and components of the webapp.
     */
    public function store_config(Request $request)
    {
        //
        $webapp = Webapp::find($request->webapp_id);
        $palette = Palette::find($webapp->palette_id);
        $palette->update($request->all());
        $palette->save();
        ComponentWebapp::where('webapp_id', $webapp->id)->delete();

        foreach ($request->components as $new_app_component) {
            ComponentWebapp::create([
                'webapp_id' => $webapp->id,
                'component_id' => $new_app_component['id'],
            ]);
        }

        return response()->json($webapp, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $webapp = Webapp::find($id);
        return response()->json($webapp, 200, ['Content-Type' => 'application/json']);
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
        // do it 
        $webapp = Webapp::find($id);
        $webapp->delete();
        return response()->json(null, 204);
    }

    public function download(string $id)
    {
        $webapp = Webapp::find($id);
        $palette = Palette::find($webapp->palette_id);

        $webapps_base = '/storage/webapps';
        copy_folder($webapps_base, $webapp->id);
        $result = replace_palette($palette, $webapp->id);

        zip_folder($webapp->id);

        $url = base_path() . Storage::url('webapps/zipped/webapp_' . $id . '.zip');
        return response()->download($url, 'webapp_' . $id . '.zip', ['Content-Type' => 'application/zip']);
    }
}
