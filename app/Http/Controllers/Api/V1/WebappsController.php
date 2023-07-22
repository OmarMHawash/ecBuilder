<?php

namespace App\Http\Controllers\Api\V1;

use App\Http\Controllers\Controller;
use App\Models\Webapp;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;

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
        //
    }

    public function download()
    {
        $url = base_path() . Storage::url('text.txt');
        return response()->download($url, 'text.txt', ['Content-Type' => 'text/plain']);
    }
}
