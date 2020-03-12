<?php

namespace App\Http\Controllers;

use App\Http\Resources\NewsCollection;
use App\Http\Resources\NewsResource;
use App\Models\News;
use Illuminate\Http\Request;

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
        $featured = request()->has("featured");
        $size = request()->input("size", 0);

        if($featured){
            $models = News::orderBy('is_featured', 'DESC')->orderBy('created_at', 'DESC')->paginate($size);
        }else{
            $models = $category == "" ? News::orderBy('created_at', 'DESC')->paginate($size) : News::where("category", $category)->orderBy('created_at', 'DESC')->paginate($size);
        }            
               
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
            'is_featured' => $request->has("is_featured"),
            'link' => $request->input("link")
//            'file_url' => $request->input("file_url"),
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
        $model->title = $request->input("title");
        $model->description = $request->input("description");
        $model->category = $request->input("category");
        $model->image_url = $request->input("image_url");
        $model->is_featured = $request->has("is_featured");
        $model->link = $request->input("link");
        $model->save();
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
        return News::destroy($id);
    }
}
