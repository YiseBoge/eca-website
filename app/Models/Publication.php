<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use App\Traits\Enums;

class Publication extends Model
{
    use Enums;
    protected $fillable = ['title', 'description', 'category', "image_url", "file_url"];

    protected $enumCategories = [
        'Press Release',
        'Proclamations',
        'Directives and Regulations',
        'Procedures',
    ];
}
