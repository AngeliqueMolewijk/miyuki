<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kleur;
use App\Models\Kleurtype;
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
            ->get();
        // dd($kleurcollectie);
        return redirect()->route('kleuren.show', '2');
    }

    public function create()
    {
        return view('kleuren.createkleuren');
    }


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
        if (Kleur::where('kleur', $request->kleur)->exists()) {
            return back()->with('success', 'Deze kleur bestaat al');;
        } else {
            $kleur = new Kleur();
            $kleur->hexa = $request->hexa;
            $kleur->kleur = $request->kleur;
            $kleur->save();

            return redirect()->route('kleuren.index')
                ->with('success', 'Product created successfully.');
        }
    }


    public function show(string $id)
    {

        $kleurcollectie = kleurtype::Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
            ->join('kraals', 'kraals.id', '=', 'kleurtypes.kraalid')
            ->orderBy('kraals.stock', 'DESC')
            ->where('kleurs.id', '=', $id)
            ->get();
        $currentkleur = Kleur::findOrFail($id);

        $kleuren = Kleur::orderBy('kleur', 'ASC')->get();
        return view('kleuren.show', compact('kleuren', 'kleurcollectie', 'currentkleur'));
    }


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
}
