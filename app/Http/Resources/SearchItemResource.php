<?php

namespace App\Http\Resources;

use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class SearchItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'type' => $this->type,
            'item_id' => $this->item_id,
            'title' => $this->title,
            'description' => $this->description,
            'category' => $this->category,
            'date_created' => $this->date
        ];
    }
}
