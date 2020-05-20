<?php

namespace App\Models;

use Illuminate\Support\Carbon;

class SearchItem {

    public $type;
    public $title;
    public $description;
    public $category;
    public $date;
    public $item_id;

    public function __construct(String $type, String $title, String $description, String $category, Carbon $date, int $item_id){
        $this->type = $type;
        $this->title = $title;
        $this->description = $description;
        $this->category = $category;
        $this->date = $date;
        $this->item_id = $item_id;
    }
}
