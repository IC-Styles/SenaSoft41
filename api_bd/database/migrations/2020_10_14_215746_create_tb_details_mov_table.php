<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbDetailsMovTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_details_mov', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->Integer('cant');
            $table->unsignedBigInteger('id_pro_fk');
            $table->Integer('id_mov');
            $table->timestamps();
            $table->foreign('id_pro_fk')->references('id')->on('tb_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_details_mov');
    }
}
