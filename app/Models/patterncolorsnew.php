<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patterncolorsnew extends Model
{
    use HasFactory;
    protected $fillable = [
        'patternid',
        'number',
        'color'
    ];
    protected $table = 'patterncolorsnew';
}
