<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\HasMany;

class TenderApplication extends Model
{
    protected $fillable = ['name', 'email', 'file_url', 'tender_id'];

    /**
     * @return HasMany
     */
    public function tender()
    {
        return $this->hasMany('App\Models\Tender');
    }
}
