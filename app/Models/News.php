<?php

namespace App\Models;

use App\Traits\Enums;
use Illuminate\Database\Eloquent\Model;

class News extends Model
{
    use Enums;
    protected $fillable = ['title', 'description', 'category', 'image_url', 'is_featured', 'link'];

    protected $enumCategories = [
        'External News',
        'Other'
    ];

    public function getListDescriptionAttribute() {
        $description = strip_tags($this->attributes['list_description']);
        return \Illuminate\Support\Str::limit($description, 150, '...');
    }
    
}
