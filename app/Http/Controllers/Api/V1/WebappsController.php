<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
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
        //
        $webapp = Webapp::create($request->all());
        echo $webapp;
        // return response()->json($webapp, 201, ['Content-Type' => 'application/json']);
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
