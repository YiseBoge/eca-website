<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    protected $fillable = ['title', 'description', 'category', "image_url", "file_url"];
}
