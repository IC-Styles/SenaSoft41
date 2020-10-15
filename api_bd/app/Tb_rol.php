<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class Tb_rol extends Model
{
    protected $primaryKey = 'id';

    protected $fillable = [
        'id','name','created_at','updated_at'
    ];
}
