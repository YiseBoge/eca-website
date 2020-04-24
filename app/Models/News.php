<?php

namespace App\Models;

use App\Traits\Enums;
use Illuminate\Database\Eloquent\Model;
use \Illuminate\Support\Str;

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
        return Str::limit($description, 150, '...');
    }
    
}
