<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbSuppliesProdTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_supplies_prod', function (Blueprint $table) {
            $table->unsignedBigInteger('id_supp_fk');
            $table->unsignedBigInteger('id_prod_fk');
            $table->timestamps();
            $table->foreign('id_supp_fk')->references('id')->on('tb_supplies');
            $table->foreign('id_prod_fk')->references('id')->on('tb_products');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_supplies_prod');
    }
}
