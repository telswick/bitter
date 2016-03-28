<?php

use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // $this->call(UserTableSeeder::class);
        // change # to 10 for now
        factory(App\User::class, 10)->create()->each(function($user) {
            $user->posts()->save(factory(App\Post::class)->make());

            
        });
    }
}
