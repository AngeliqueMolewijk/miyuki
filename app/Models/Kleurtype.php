<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class kleurtype extends Model
{
    use HasFactory;
    protected $fillable = [
        'kraalid',
        'kleurid'
    ];
}
