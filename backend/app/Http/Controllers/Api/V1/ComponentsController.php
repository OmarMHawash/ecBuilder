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

    public function store(StoreComponentRequest $request)
    {
        $component = Component::create($request->validated());
        return response()->json($component, 201, ['Content-Type' => 'application/json']);
    }

    public function test_header()
    {
        $component = Component::where('name', 'header')->first();
        // Response::make($component, 201, ['Content-Type' => 'application/json',])->send();
        return response()->json($component, 201, ['Content-Type' => 'application/json']);
    }
}
