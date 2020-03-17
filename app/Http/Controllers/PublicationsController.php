<?php

namespace App\Http\Controllers;

use App\Http\Resources\PublicationCollection;
use App\Http\Resources\PublicationResource;
use App\Models\Publication;
use Illuminate\Http\Request;

class PublicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return PublicationCollection
     */
    public function index()
    {
        $categories = request()->input("category", "");
        $year = request()->input("year", "All");
        $size = request()->input("size", 0);
        $cat = $categories == "" ? Publication::getEnum('category') : explode(',', $categories);
        $models = Publication::whereIn('category', $cat)->orderBy('created_at', 'DESC');

        if ($year != "All")
            $models = $models->whereYear('created_at', strval($year));
        return new PublicationCollection($models->paginate($size));
    }


    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function categories()
    {
        return Publication::getEnum('category');
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
            'file_url' => $request->input("file_url"),
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
     * @param Request $request
     * @param int $id
     * @return PublicationResource
     */
    public function update(Request $request, $id)
    {
        $model = Publication::findOrFail($id);
        $model->title = $request->input("title");
        $model->description = $request->input("description");
        $model->category = $request->input("category");
        $model->image_url = $request->input("image_url");
        $model->file_url = $request->input("file_url");
        $model->save();
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
        return Publication::destroy($id);
    }
}
