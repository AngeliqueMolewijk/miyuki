<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class projectkraal extends Model
{
    protected $fillable = [
        'projectid',
        'kraalid'
    ];
    use HasFactory;
}
