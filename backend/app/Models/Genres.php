<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Genres extends Model
{
    use HasFactory;
    // allows mass assignment since we are using an array, allows only name to be created like mentioned in GenreSeeder
    protected $fillable = ['name'];
}
