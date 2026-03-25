<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Songs extends Model
{
    use HasFactory;

    // again allows mass assignment 
    protected $fillable = [
        'name',
        'artist_id',
        'genre_id',
        'price',
        'thumbnail',
        'thumbnail_alt'
    ];

    // relationships
    // each songs belongs to one artist and one genre
    public function artist() {
        return $this->belongsTo(Artists::class);
    }

    public function genre() {
        return $this->belongsTo(Genres::class);
    }
}
