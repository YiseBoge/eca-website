<?php

namespace App\Models;

use App\Traits\Enums;
use Illuminate\Database\Eloquent\Model;

class Publication extends Model
{
    use Enums;
    protected $fillable = ['title', 'description', 'category', "image_url", "file_url"];

    protected $enumCategories = [
        'Press Release',
        'Proclamations',
        'Directives and Regulations',
        'Procedures',
        'Other'
    ];
}
