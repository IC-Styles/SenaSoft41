<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbProductsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_products', function (Blueprint $table) {
            $table->bigIncrements('id');
            $table->string('name');
            $table->string('descrip',256);
            $table->Integer('stock_min');
            $table->Integer('stock_max');
            $table->unsignedBigInteger('id_cate');
            $table->Integer('cant_dis');
            $table->unsignedBigInteger('id_third');
            $table->timestamps();
            $table->foreign('id_cate')->references('id')->on('tb_categories');
            $table->foreign('id_third')->references('code')->on('tb_third');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_products');
    }
}
