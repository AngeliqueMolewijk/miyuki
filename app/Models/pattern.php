<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class pattern extends Model
{
    use HasFactory;
    protected $fillable = [
        'name',
        'number',
        'color',
        'user'
    ];
    protected $table = 'pattern';
}
