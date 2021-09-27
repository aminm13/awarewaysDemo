<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Type extends Model
{
    use HasFactory;
    public function questions()
    {
        return $this->belongsToMany(Type::class,'type_question',
        'type_id',
        'question_id');
    }
}
