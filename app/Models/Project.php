<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use app\Models\projectkraal;

class Project extends Model
{
    protected $fillable = [
        'naam',
        'image',
        'image2',
        'omschrijving'
    ];
    // public function projectkraal()
    // {

    //     return $this->hasMany(projectkraal::class);
    // }
}
