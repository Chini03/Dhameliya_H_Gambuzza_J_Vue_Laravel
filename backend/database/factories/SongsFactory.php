<?php

namespace Database\Factories;

use App\Models\Artists;
use App\Models\Genres;
use Illuminate\Database\Eloquent\Factories\Factory;

class SongsFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        return [
            // choses from the list of songs provided and doesnt repeat them
            'name' => $this->faker->unique()->randomElement([
                'Midnight Echo',
                'Electric Love',
                'Lost in the Echo',
                'Neon Nights',
                'Silent Waves',
                'Golden Skies',
                'Broken Rhythm',
                'Echoes of You',
                'Endless Horizon',
                'Fading Memories',
                'Kind of Blue',
                'The Dark Side of the Moon'
            ]),
            // shuffles the artists entires and picks their ids
            'artist_id' => Artists::inRandomOrder()->value('id'),
            // same as artists
            'genre_id' => Genres::inRandomOrder()->value('id'),
            // creates random 2 digit float numbers between the specified range
            'price' => $this->faker->randomFloat(2, 0.99, 19.99),
            // 
            'description' => $this->faker->paragraph(),
            // null because to be entered manually
            'thumbnail' => $this->faker->unique()->randomElement([
                'images/vinyl/vinyl-1.webp',
                'images/vinyl/vinyl-2.webp',
                'images/vinyl/vinyl-3.webp',
                'images/vinyl/vinyl-4.webp',
                'images/vinyl/vinyl-5.webp',
                'images/vinyl/vinyl-6.webp',
                'images/vinyl/vinyl-7.webp',
                'images/vinyl/vinyl-8.webp',
                'images/vinyl/vinyl-9.webp',
                'images/vinyl/vinyl-10.webp',
                'images/vinyl/vinyl-11.webp',
                'images/vinyl/vinyl-12.webp'
            ]),
            'thumbnail_alt' => null
        ];
    }
}
