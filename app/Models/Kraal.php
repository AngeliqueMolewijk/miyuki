<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Kyslik\ColumnSortable\Sortable;


class Kraal extends Model
{
    use HasFactory;
    use Sortable;
    protected $fillable = [
        'nummer',
        'name',
        'stock',
        'image'
    ];
    public $sortable = ['nummer', 'name', 'stock',];
}
