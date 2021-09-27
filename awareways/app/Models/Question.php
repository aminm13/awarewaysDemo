<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Question extends Model
{
    use HasFactory;

    protected $fillable = [
        'title',
        'body',
        'author'
    ];

    public function answers()
    {
        return $this->hasMany(Answer::class , 'answer_question',
        'question_id',
        'answer_id');
    }
    public function categories()
    {
        return $this->belongsToMany(Category::class,'category_question',
        'question_id',
        'category_id');
    }
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    public function types()
    {
        return $this->belongsToMany(Type::class,'type_question',
        'question_id',
        'type_id');
    }
}
