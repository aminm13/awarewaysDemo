<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\models\Question;
use App\models\Answer;
use App\models\Category;
use App\models\Type;
use App\models\Tag;
class QuestionController extends Controller
{
    public function createQuestion(Request $request){
        $request->validate([
            'title' => 'required',
            'body' => 'required',
            'type' => 'required',
            'category' => 'required',
        ]);
        $data = $request->all();
        $check = $this->create($data);
        return 'success';
    }

    public function create(array $data){        
    if($data['type']='ml'){
        $type = Type::find(1);
    }elseif($data['type']='open'){
        $type = Type::find(2);
    }
    if($data['category']==='laravel'){
        $category = Category::find(1);    
    }elseif($data['category']==='php'){
        $category = Category::find(2);
    }

    Question::create([
        'title' => $data['title'],
        'body' => $data['body'],
        'author'=>'testing author'
    ]);
    
    Question::latest()->first()->categories()->attach($category);
    Question::latest()->first()->types()->attach($type);

    return Question::latest()->first();

        // $q = new Question;
        // $q->title = $data['title'];
        // $q->body = $data['body'];
        // $q->categories()->attach($category->id);
        // $q->types()->attach($type);

        // $q->save();

    }
}
