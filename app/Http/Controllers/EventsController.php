<?php

namespace App\Http\Controllers;

use App\Http\Resources\EventCollection;
use App\Http\Resources\EventResource;
use App\Models\Event;
use Illuminate\Http\Request;

class EventsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $category = request()->input("category", "");
        $size = request()->input("size", 0);

        $models = $category == "" ? Event::orderBy('created_at', 'DESC')->paginate($size) : Event::where("category", $category)->orderBy('created_at', 'DESC')->paginate($size); 

        return new EventCollection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $model = Event::create([
            'title' => $request->input("title"),
            'description' => $request->input("description"),
            'category' => $request->input("category"),
            'date' => $request->input("date"),
            'time' => $request->input("time"),
            'location' => $request->input("location")
        ]);
        return new EventResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = Event::findOrFail($id);
        return new EventResource($model);
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
        $model = Event::findOrFail($id);
        $model->title = $request->input("title");
        $model->description = $request->input("description");
        $model->category = $request->input("category");
        $model->date = $request->input("date");
        $model->time = $request->input("time");
        $model->location = $request->input("location");
        $model->save();
        return new EventResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        return Event::destroy($id);
    }
}
