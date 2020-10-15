<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTbThirdSuppliesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('tb_third_supplies', function (Blueprint $table) {
            $table->bigIncrements('code_prov');
            $table->unsignedBigInteger('id_fk');
            $table->timestamps();
            $table->foreign('id_fk')
                ->references('id')
                ->on('tb_supplies');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('tb_third_supplies');
    }
}
