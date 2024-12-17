<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class patternnew extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'size',
        'kind',
        'user'
    ];
    protected $table = 'patternnew';
}
