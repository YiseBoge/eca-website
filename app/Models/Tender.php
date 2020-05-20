<?php

namespace App\Models;

use App\Traits\Enums;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;
use \Illuminate\Support\Str;

class Tender extends Model
{
    use Enums;

    protected $fillable = ['title', 'description', 'category', 'deadline', 'image_url', 'file_url'];

    protected $enumCategories = [
        'Category 1',
        'Category 2'
    ];

    public function getListDescriptionAttribute() {
        $description = strip_tags($this->attributes['list_description']);
        return Str::limit($description, 150, '...');
    }

    /**
     * @return HasMany
     */
    public function applications()
    {
        return $this->hasMany('App\Models\TenderApplication');
    }
}
