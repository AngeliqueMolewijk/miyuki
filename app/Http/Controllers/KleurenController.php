<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kleur;
use App\Models\Kleurtype;
use App\Models\Kraal;
use Illuminate\Support\Facades\Validator;

class KleurenController extends Controller
{
    /** 
     * 
     * Display a listing of the resource.
     */
    public function index()
    {
        $kleurcollectie = kleurtype::Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
            ->join('kraals', 'kraals.id', '=', 'kleurtypes.kraalid')
            // ->where('kleurs.id', '=', $id)
            ->get();
        $kleuren = Kleur::all();
        // dd($kleurcollectie);
        return redirect()->route('kleuren.show', '1');
        // return view('kleuren.index', compact('kleuren', 'kleurcollectie'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validator = Validator::make($request->all(), [
            'kleur' => 'unique:kleurs,kleur|string|max:255',

        ]);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $kleur = new Kleur();
        // dd($request->file('image'));
        $kleur->hexa = $request->hexa;
        $kleur->kleur = $request->kleur;


        // $puzzel->own = $request->eigen;
        // $puzzel->gelegd = $request->gelegd;
        // $puzzel->image = $imageName;
        $kleur->save();

        return redirect()->route('kralen.createkleuren')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        // $results = kleurtype::Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
        //     ->join('kraals', 'kraals.id', '=', 'kleurtypes.kraalid')
        //     ->where('kleurs.id', '=', $id)
        //     ->get();


        $kleurcollectie = kleurtype::Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
            ->join('kraals', 'kraals.id', '=', 'kleurtypes.kraalid')
            // ->join('mixes', 'mixes.kraalnr', '=', 'kraals.id')
            ->where('kleurs.id', '=', $id)
            // ->groupBy('kraals.id')
            ->get();
        $kleuren = Kleur::all();
        // dd($kleurcollectie);
        return view('kleuren.show', compact('kleuren', 'kleurcollectie'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
    public function kralenopkleur(string $id)
    {
        //nog niet compleet, moet met join worden
        // $kleuren = kleurtype::where('kraalid', '=', $id)->all();
        // $kralenkleurarray = array();
        // foreach ($kleuren as $kleur) {
        //     $kralenuitkleur = Kraal::where('id', '=', $kleur->kraalid);
        //     array_push($kralenkleurarray)
        // }
        // return view('kralen.index', compact('kleuren'));
    }
}
