<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class AnswerQuestion extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('answer_question', function (Blueprint $table) {
            $table->id('id');        
            $table->integer('question_id')->unsigned();
            $table->foreign('question_id')
                  ->references('id')
                  ->on('questions')->onDelete('cascade');
            $table->integer('answer_id')->unsigned();
            $table->foreign('answer_id')
                  ->references('id')
                  ->on('answers')->onDelete('cascade');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        //
    }
}
