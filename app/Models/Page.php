<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Page extends Model
{
    use HasFactory;

    // For consistency with node server
    const CREATED_AT = 'createdAt';
    const UPDATED_AT = 'updatedAt';

    protected $fillable = [
        'title',
        'body'
    ];
}
