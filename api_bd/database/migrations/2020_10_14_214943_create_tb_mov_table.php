<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbMovTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_mov', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->datetime('fecha');
            $table->unsignedBigInteger('id_type_fk');
            $table->boolean('estado');
            $table->unsignedBigInteger('id_third_fk');
            $table->timestamps();
            $table->foreign('id_type_fk')->references('id')->on('tb_type_movements');
            $table->foreign('id_third_fk')->references('code')->on('tb_third');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_mov');
    }
}
