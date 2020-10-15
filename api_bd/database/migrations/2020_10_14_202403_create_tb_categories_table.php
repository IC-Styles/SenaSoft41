<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbCategoriesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_categories', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name',20);
            $table->unsignedBigInteger('cod_ter_cat_fk');
            $table->timestamps();
            $table->foreign('cod_ter_cat_fk')->references('code')->on('tb_third');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_categories');
    }
}
