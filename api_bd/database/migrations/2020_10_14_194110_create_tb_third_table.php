<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbThirdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_third', function (Blueprint $table) {
            $table->bigIncrements('code');
            $table->Integer('id');
            $table->string('email',20);
            $table->Integer('phone');
            $table->Integer('token');
            $table->unsignedBigInteger('id_type_fk');
            $table->timestamps();
            $table->foreign('id_type_fk')->references('id')->on('tb_type_third');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_third');
    }
}
