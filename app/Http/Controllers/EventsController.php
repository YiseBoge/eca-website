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
     * @return EventCollection
     */
    public function index()
    {
        $size = request()->input("size", 0);
        $past = request()->input("past");

        $models = Event::orderBy('created_at', 'DESC');
        if($past == "true"){
            $models = $models->where('end_date', '<', date('Y-m-d H:i:s'));
        }else{
            $models = $models->where('end_date', '>', date('Y-m-d H:i:s'));
        }
        $models = $models->paginate($size);

        return new EventCollection($models);
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param Request $request
     * @return EventResource
     */
    public function store(Request $request)
    {
        $model = Event::create([
            'title' => $request->input("title"),
            'description' => $request->input("description"),
            'start_date' => $request->input("start_date"),
            'end_date' => $request->input("end_date"),
            'location' => $request->input("location")
        ]);
        return new EventResource($model);
    }

    /**
     * Display the specified resource.
     *
     * @param int $id
     * @return EventResource
     */
    public function show($id)
    {
        $model = Event::findOrFail($id);
        return new EventResource($model);
    }

    /**
     * Update the specified resource in storage.
     *
     * @param Request $request
     * @param int $id
     * @return EventResource
     */
    public function update(Request $request, $id)
    {
        $model = Event::findOrFail($id);
        $model->title = $request->input("title");
        $model->description = $request->input("description");
        $model->start_date = $request->input("start_date");
        $model->end_date = $request->input("end_date");
        $model->location = $request->input("location");
        $model->save();
        return new EventResource($model);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param int $id
     * @return int
     */
    public function destroy($id)
    {
        return Event::destroy($id);
    }
}
