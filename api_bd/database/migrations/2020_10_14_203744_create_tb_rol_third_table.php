<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbRolThirdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_rol_third', function (Blueprint $table) {
            $table->bigInteger('id_third'); // Se declaran los campos por separado de la llave primaria compuesta
            $table->unsignedBigInteger('id_rol');
            $table->primary(['id_third','id_rol']);
            $table->timestamps();
            $table->foreign('id_rol')->references('id')->on('tb_roles');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_rol_third');
    }
}
