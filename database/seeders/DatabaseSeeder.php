<?php

namespace Database\Seeders;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Date;
use Illuminate\Support\Facades\DB;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        DB::table('pages')->insert([
            [
                'title' => 'Home',
                'slug' => 'home',
                'body' => '<p>Homepage content</p><img src="http://localhost:8888/media/get/1687234390984-image.png" width="399" height="399"><p>Greetings this is the home page and above is the homepage beetle guardian. No ball problems for Kate Corss!</p>',
            ],
            [
                'title' => 'About',
                'slug' => 'about',
                'body' => '<p>About page!!!!!!!!!</p><p>asdasdasd</p><h1 level="1" class="text-5xl"><em>This </em>is where about lives.?</h1>'
            ],
            [
                'title' => 'Contact',
                'slug' => 'contact',
                'body' => '<p>Contact details...</p><img src="http://localhost:8888/media/get/1687235840312-MC_Olgas_pano.jpg" width="900" height="320">'
            ],
            [
                'title' => 'Books/Sales',
                'slug' => 'books-sales',
                'body' => '<p><strong>Books for sale</strong> my friends!</p>'
            ],
        ]);
        // \App\Models\User::factory(10)->create();

        // \App\Models\User::factory()->create([
        //     'name' => 'Test User',
        //     'email' => 'test@example.com',
        // ]);
    }
}
