<?php

namespace App\Http\Controllers;

use App\Http\Resources\SearchItemResource;
use App\Models\SearchItem;
use App\Models\News;
use App\Models\Leader;
use App\Models\Event;
use App\Models\Publication;
use Illuminate\Http\Resources\Json\AnonymousResourceCollection;

class SearchController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @param String $keyword
     * @return AnonymousResourceCollection
     */
    public function index(String $keyword)
    {
        $result = collect();
        $news = News::select('id as id', 'title as title', 'description as list_description', 'category as category', 'created_at as created_at')
            ->where('title', 'LIKE', '%' . $keyword . '%')
            ->orWhere('description', 'LIKE', '%' . $keyword . '%')
            ->orWhere('category', 'LIKE', '%' . $keyword . '%')->get();
        foreach ($news as $item){
            $result->push(new SearchItem("News", $item->title, $item->list_description, $item->category, $item->created_at, $item->id));
        }

        $leaders = Leader::where('name', 'LIKE', '%' . $keyword . '%')
            ->orWhere('description', 'LIKE', '%' . $keyword . '%')
            ->orWhere('position', 'LIKE', '%' . $keyword . '%')->get();
        foreach ($leaders as $item){
            $result->push(new SearchItem("Leader", $item->name, $item->description, "", $item->created_at, $item->id));
        }

        $events = Event::where('title', 'LIKE', '%' . $keyword . '%')
            ->orWhere('description', 'LIKE', '%' . $keyword . '%')
            ->orWhere('location', 'LIKE', '%' . $keyword . '%')->get();
        foreach ($events as $item){
            $result->push(new SearchItem("Event", $item->title, $item->description, "", $item->created_at, $item->id));
        }

        $publications = Publication::select('id as id', 'title as title', 'description as list_description', 'category as category', 'created_at as created_at')
            ->where('title', 'LIKE', '%' . $keyword . '%')
            ->orWhere('description', 'LIKE', '%' . $keyword . '%')
            ->orWhere('category', 'LIKE', '%' . $keyword . '%')->get();
        foreach ($publications as $item){
            $result->push(new SearchItem("Publication", $item->title, $item->list_description, $item->category, $item->created_at, $item->id));
        }

        $result = $result->sortByDesc('date');

        return SearchItemResource::collection($result->forPage(1, 10));
    }
}
