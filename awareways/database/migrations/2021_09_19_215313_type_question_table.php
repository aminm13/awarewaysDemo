<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class TypeQuestionTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('type_question', function (Blueprint $table) {
            $table->id('id');        
            $table->integer('question_id')->unsigned();
            $table->foreign('question_id')
                  ->references('id')
                  ->on('questions')->onDelete('cascade');
            $table->integer('type_id')->unsigned();
            $table->foreign('type_id')
                  ->references('id')
                  ->on('types')->onDelete('cascade');
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
