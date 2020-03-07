<?php

namespace App\Http\Controllers;

use App\Http\Resources\PublicationCollection;
use App\Http\Resources\PublicationResource;
use App\Models\Publication;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class PublicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return PublicationCollection
     */
    public function index()
    {
        $category = request()->input("category", "");
        $models = $category == "" ? Publication::all() : Publication::where("category", $category);
        return new PublicationCollection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return PublicationResource
     */
    public function store(Request $request)
    {
        $model = Publication::create([
            'title' => $request->input("title"),
            'description' => $request->input("description"),
            'category' => $request->input("category"),
            'image_url' => $request->input("image_url"),
        ]);
        return new PublicationResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return PublicationResource
     */
    public function show($id)
    {
        $model = Publication::findOrFail($id);
        return new PublicationResource($model);
    }

    /**
     * Update the specified resource.
     *
     * @param int $id
     * @return PublicationResource
     */
    public function update($id)
    {
        $model = Publication::findOrFail($id);
        $model->fill(Input::all())->save();
        return new PublicationResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return int
     */
    public function destroy($id)
    {
        $model = Publication::findOrFail($id);
        return Publication::destroy($model);
    }
}
