<?php

namespace Database\Seeders;

use App\Models\Genres;
use Illuminate\Database\Seeder;

class GenresSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // created an array to choose form
        $genres = [
            'Pop',
            'Rock',
            'Hip-Hop',
            'Jazz',
            'Classical',
            'R&B',
            'Electronic',
            'Country'
        ];

        // same as INSERT INTO genres (name) VALUES ('Pop'); for each value
        foreach ($genres as $genre) {
            Genres::create(['name' => $genre]);
        }
    }
}
