<?php

namespace App\Http\Controllers;

use App\Http\Resources\LeaderCollection;
use App\Http\Resources\LeaderResource;
use App\Models\Leader;
use Illuminate\Http\Request;

class LeadersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $size = request()->input("size", 0);
        $models = Leader::orderBy('level')->paginate($size);
             
        return new LeaderCollection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = Leader::create([
            'name' => $request->input("name"),
            'position' => $request->input("position"),
            'description' => $request->input("description"),
            'level' => $request->input("level"),
            'image_url' => $request->input("image_url"),
        ]);
        return new LeaderResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Leader::findOrFail($id);
        return new LeaderResource($model);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $model = Leader::findOrFail($id);
        $model->name = $request->input("title");
        $model->position = $request->input("position");
        $model->description = $request->input("description");
        $model->level = $request->input("level");
        $model->image_url = $request->input("image_url");
        $model->save();
        return new LeaderResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Leader::destroy($id);
    }
}
