<?php

namespace App\Models;

use App\Models\Country;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Relations\BelongsTo;

class Topfive extends Model
{
    use HasFactory;

    public function Country() : BelongsTo
    {
        return $this->belongsTo(Country::class);
    }
}
