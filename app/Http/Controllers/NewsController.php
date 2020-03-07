<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;
use Symfony\Component\Console\Input\Input;

class NewsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return NewsCollection
     */
    public function index()
    {
        $category = request()->input("category", "");
        $models = $category == "" ? News::all() : News::where("category", $category);
        return new NewsCollection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return NewsResource
     */
    public function store(Request $request)
    {
        $model = News::create([
            'title' => $request->input("title"),
            'description' => $request->input("description"),
            'category' => $request->input("category"),
            'image_url' => $request->input("image_url"),
            'file_url' => $request->input("file_url"),
        ]);
        return new NewsResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return NewsResource
     */
    public function show($id)
    {
        $model = News::findOrFail($id);
        return new NewsResource($model);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return NewsResource
     */
    public function update(Request $request, $id)
    {
        $model = News::findOrFail($id);
        $model->fill(Input::all())->save();
        return new NewsResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return int
     */
    public function destroy($id)
    {
        $model = News::findOrFail($id);
        return News::destroy($model);
    }
}
