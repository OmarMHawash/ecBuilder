<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Palette;
use Illuminate\Http\Request;

require_once base_path() . '/helpers/scripts/replacers.php';
require_once base_path() . '/helpers/scripts/execs.php';

class PalettesController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $palettes = Palette::all();
        return response()->json($palettes, 200, ['Content-Type' => 'application/json']);
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
        $palette = Palette::create($request->all());
        return response()->json($palette, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $palette = Palette::find($id);

        $webapps_base = '\storage\webapps';
        copy_folder($webapps_base, $palette->id);
        zip_folder($palette->id);

        $result = replace_palette($palette, $palette->id);

        dd($result);
        // return response()->json($palette, 200, ['Content-Type' => 'application/json']);
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
