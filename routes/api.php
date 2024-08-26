<?php

use Illuminate\Support\Facades\Route;
use App\Http\Controllers\API\ExampleController;
use App\Http\Controllers\PostControlador;

// Rota GET para listar recursos
Route::get('/', [PostControlador::class, 'index']);
Route::post('/', [PostControlador::class, 'store']);
Route::delete('/{id}', [PostControlador::class, 'destroy']);
Route::get('/like/{id}', [PostControlador::class, 'like']);
