<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    /**
     * Get the user it (the post) belongs to.
     */
    public function user()
    {
        return $this->belongsTo('App\User');
    }
}
