<?php

namespace App\Models;

use App\Models\Topfive;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Country extends Model
{
    use HasFactory;

    protected $guarded = [];

    public function Topfive()
    {
        return $this->hasMany(Topfive::class, 'country_id');
    }
}
