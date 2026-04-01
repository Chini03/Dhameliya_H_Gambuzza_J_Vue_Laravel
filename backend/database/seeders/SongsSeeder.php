<?php

namespace Database\Seeders;

use App\Models\Songs;
use Illuminate\Database\Seeder;

class SongsSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        Songs::factory()->count(12)->create();
    }
}
