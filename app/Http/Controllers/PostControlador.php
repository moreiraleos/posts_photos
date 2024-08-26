<?php

namespace App\Http\Controllers;

use App\Http\Controllers\Controller;
use App\Models\Post;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;

class PostControlador extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Post::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $post = new Post();

        $path = $request->file('arquivo')->store('imagens', 'public');

        $post->nome = $request->nome;
        $post->email = $request->email;
        $post->titulo = $request->titulo;
        $post->titulo = $request->titulo;
        $post->subtitulo = $request->subtitulo;
        $post->mensagem = $request->mensagem;
        $post->arquivo = $path;
        $post->likes = 0;

        if ($post->save()) {
            return response($post, 200);
        }
        return response("Erro", 500);
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        if ($post = Post::find($id)) {
            // Post::destroy($id);
            // DB::delete($id);
            Storage::disk('public')->delete($post->arquivo);
            $post->delete();
            return 204;
        }
        return response('Post não encontrado!', 404);
    }

    public function like(string $id)
    {
        if ($post = Post::find($id)) {
            $post->like++;
            $post->save();
            return $post;
        }
        return response('Post não encontrado!', 404);
    }
}
