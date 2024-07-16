<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kleurtype extends Model
{
    use HasFactory;
    protected $fillable = [
        'kraalid',
        'kleurid'
    ];
}
