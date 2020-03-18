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
        $categories = request()->input("category", "");
        $year = request()->input("year", "All");
        $size = request()->input("size", 0);
        $featured = request()->has("featured");
        $cat = $categories == "" ? News::getEnum('category') : explode(',', $categories);


        if ($featured) {
            $models = News::whereIn('category', $cat)->orderBy('is_featured', 'DESC')->orderBy('created_at', 'DESC');
        } else {
            $models = News::whereIn('category', $cat)->orderBy('created_at', 'DESC');
        }

        if ($year != "All")
            $models = $models->whereYear('created_at', strval($year));
        return new NewsCollection($models->paginate($size));
    }

    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function categories()
    {
        return News::getEnum('category');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return NewsResource
     */
    public function store(Request $request)
    {
        $image_url = $request->file('image')->store('public/news_images'); 
        $image_url = "/storage" . substr($image_url, 6); 
        $model = News::create([
            'title' => $request->input("title"),
            'description' => $request->input("description"),
            'category' => $request->input("category"),
            'image_url' => $image_url,
            'is_featured' => $request->has("is_featured"),
            'link' => $request->input("link")
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
        // $model->image_url = $request->input("image_url");
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
