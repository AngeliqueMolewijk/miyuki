<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Kleur extends Model
{
    use HasFactory;
    protected $fillable = [
        'kleur',
        'hexa'
    ];
}
