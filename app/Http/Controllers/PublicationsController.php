<?php

namespace App\Http\Controllers;

use App\Http\Resources\PublicationCollection;
use App\Http\Resources\PublicationResource;
use App\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

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
        $models = Publication::select('id as id', 'title as title', 'description as list_description', 'category as category', 'image_url as image_url', 'file_url as file_url', 'created_at as created_at', 'updated_at as updated_at');
        
        $models = $models->whereIn('category', $cat)->orderBy('created_at', 'DESC');

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
        $validation = Validator::make($request->all(),[ 
            'title' => 'required',
            'description' => 'required',
            'category' => 'required|in:Press Release,Proclamations,Directives and Regulations,Procedures,Other'
        ]);

        $errors = $validation->errors();

        if(count($errors) != 0){
            return response($errors->toJson(), 400);
        }else{
            $image_url = "";
            if($request->file('image') != ""){
                $image_url = $request->file('image')->store('public/publication_images'); 
                $image_url = "/storage" . substr($image_url, 6);
            }
            
            $file_url = "";
            if($request->file('file') != ""){
                $file_url = $request->file('file')->store('public/publication_files'); 
                $file_url = "/storage" . substr($file_url, 6);
            } 

            $model = Publication::create([
                'title' => $request->input("title"),
                'description' => $request->input("description"),
                'category' => $request->input("category"),
                'image_url' => $image_url,
                'file_url' => $file_url,
            ]);
            return new PublicationResource($model);
        }   
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
        $validation = Validator::make($request->all(),[ 
            'title' => 'required',
            'description' => 'required',
            'category' => 'required|in:Press Release,Proclamations,Directives and Regulations,Procedures,Other'
        ]);

        $errors = $validation->errors();

        if(count($errors) != 0){
            return response($errors->toJson(), 400);
        }else{
            $model = Publication::findOrFail($id);
            $image_url = $model->image_url;
            if($request->file('image') != ""){
                $image_url = $request->file('image')->store('public/publication_images'); 
                $image_url = "/storage" . substr($image_url, 6);
            }
            
            $file_url = $model->file_url;
            if($request->file('file') != ""){
                $file_url = $request->file('file')->store('public/publication_files'); 
                $file_url = "/storage" . substr($file_url, 6);
            } 
            $model->title = $request->input("title");
            $model->description = $request->input("description");
            $model->category = $request->input("category");
            $model->image_url = $image_url;
            $model->file_url = $file_url;
            $model->save();
            return new PublicationResource($model);
        }
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
