<?php

namespace App\Http\Controllers;

use APP\Tb_rol;
use Illuminate\Http\Request;

class Tb_rolController extends Controller
{
    public function index(){ // Metodo para rescatar los datos del modelo
        $Tb_rol = Tb_rol::all();
        return $Tb_rol;
    }
    public function findOfCode($id){ // Rescatar el dato de ese rol
        $Tb_rol = Tb_rol::findOrFail($id);
        return $Tb_rol;
    }
    public function create(Request $request){ // Para crear otro rol
        $nuevoRol = new Tb_rol();

        $nuevoRol ->id = $request->id;
        $nuevoRol ->name = $request->name;

        $nuevoRol->save();
    }
    public function editar(Request $request){ // Metodo para editar los roles

        $editarRol = Tb_rol::findOrFail($request->id);

        $editareditarRol->id = $request->id;
        $editareditarRol->name = $request->name;

        $editarLibro->save();
    }
}
