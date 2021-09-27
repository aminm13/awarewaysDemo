<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     *
     * @return void
     */
    public function run()
    {       
        \App\Models\Type::factory()->count(2)->create();;
        \App\Models\Category::factory()->count(5)->create();;
        // \App\Models\Answer::factory(10)->create();
        // \App\Models\Tag::factory(2)->create();
        // \App\Models\Question::factory(5);


    }
}
