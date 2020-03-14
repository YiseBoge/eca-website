<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Enums;

class News extends Model
{
    use Enums; 
    protected $fillable = ['title', 'description', 'category', 'image_url', 'is_featured', 'link'];

    protected $enumCategories = [
        'Category 1',
        'Category 2',
    ];
}
