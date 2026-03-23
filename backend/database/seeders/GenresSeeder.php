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

        foreach ($genres as $genre) {
            Genres::create(['name' => $genre]);
        }
    }
}
