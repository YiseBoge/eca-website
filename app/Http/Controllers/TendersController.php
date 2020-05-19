<?php

namespace App\Http\Controllers;

use App\Http\Resources\TenderCollection;
use App\Http\Resources\TenderResource;
use App\Models\Tender;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;

class TendersController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $categories = request()->input("category", "");
        $type = request()->input("type", "All");
        $size = request()->input("size", 0);
        $cat = $categories == "" ? Tender::getEnum('category') : explode(',', $categories);

        $models = Tender::select('id as id', 'title as title', 'description as list_description', 'category as category', 'deadline as deadline', 'image_url as image_url', 'file_url as file_url', 'created_at as created_at', 'updated_at as updated_at')
            ->orderBy('created_at', 'DESC');
        $models = $models->whereIn('category', $cat);

        if ($type == "Past")
            $models = $models->where('deadline', '<', date('Y-m-d'));
        else if ($type == "Upcoming")
            $models = $models->where('deadline', '>=', date('Y-m-d'));

        return new TenderCollection($models->paginate($size));
    }

    /**
     * Display a listing of the resource.
     *
     * @return array
     */
    public function categories()
    {
        return Tender::getEnum('category');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'title' => 'required',
            'description' => 'required',
            'category' => 'required|in:Category 1,Category 2',
            'deadline' => 'required|date',
        ]);

        $errors = $validation->errors();

        if(count($errors) != 0){
            return response($errors->toJson(), 400);
        }else{
            $image_url = "";
            if($request->file('image') != ""){
                $image_url = $request->file('image')->store('public/tender_images');
                $image_url = "/storage" . substr($image_url, 6);
            }

            $file_url = "";
            if($request->file('file') != ""){
                $file_url = $request->file('file')->store('public/tender_files');
                $file_url = "/storage" . substr($file_url, 6);
            }

            $model = Tender::create([
                'title' => $request->input("title"),
                'description' => $request->input("description"),
                'category' => $request->input("category"),
                'deadline' => $request->input("deadline"),
                'image_url' => $image_url,
                'file_url' => $file_url
            ]);
            return new TenderResource($model);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Tender::findOrFail($id);
        return new TenderResource($model);
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
        $validation = Validator::make($request->all(),[
            'title' => 'required',
            'description' => 'required',
            'category' => 'required|in:Category 1,Category 2',
            'deadline' => 'required|date',
        ]);

        $errors = $validation->errors();

        if(count($errors) != 0){
            return response($errors->toJson(), 400);
        }else{
            $model = Tender::findOrFail($id);
            $image_url = $model->image_url;
            if($request->file('image') != ""){
                $image_url = $request->file('image')->store('public/tender_images');
                $image_url = "/storage" . substr($image_url, 6);
            }

            $file_url = $model->file_url;
            if($request->file('file') != ""){
                $file_url = $request->file('file')->store('public/tender_files');
                $file_url = "/storage" . substr($file_url, 6);
            }

            $model->title = $request->input("title");
            $model->description = $request->input("description");
            $model->category = $request->input("category");
            $model->deadline = $request->input("deadline");
            $model->image_url = $image_url;
            $model->file_url = $file_url;
            $model->save();
            return new TenderResource($model);
        }
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Tender::destroy($id);
    }
}
