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
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $palette = Palette::create($request->all());
        return response()->json($palette, 201, ['Content-Type' => 'application/json']);
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $palette = Palette::find($id);
        return response()->json($palette, 200, ['Content-Type' => 'application/json']);
    }

    public function show_by_name(string $name)
    {
        $palette = Palette::where('name', $name)->first();
        return response()->json($palette, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $palette = Palette::find($id);
        $palette->update(request()->all());
        $palette->save();
        return response()->json($palette, 200, ['Content-Type' => 'application/json']);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $palette = Palette::find($id);
        $palette->delete();
        return response()->json("deleted", 202, ['Content-Type' => 'application/json']);
    }
}
