<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Models\Kraal;
use App\Models\Mix;
use Illuminate\Support\Facades\Validator;

use Redirect;

class KralenController extends Controller
{
    public function index()
    {
        $kralen = Kraal::all();
        return view('kralen.index', compact('kralen'));
    }
    public function create()
    {
        return view('kralen.create');
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {

        $validator = Validator::make($request->all(), [
            'nummer' => 'unique:kraals,nummer|string|max:255',

        ]);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $kraal = new Kraal;
        // dd($request->file('image'));
        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $kraal->image = $filename;
        }
        $kraal->name = $request->title;
        $kraal->nummer = $request->nummer;
        $kraal->stock = $request->stock;

        // $puzzel->own = $request->eigen;
        // $puzzel->gelegd = $request->gelegd;
        // $puzzel->image = $imageName;
        $kraal->save();

        return redirect()->route('kralen.create')
            ->with('success', 'Product created successfully.');
    }
    public function storemix(Request $request)
    {
        $Mix = new Mix();
        // dd($request);
        // $Mix->name = $request->title;
        $Mix->kraalnr = $request->kraalid;
        $Mix->mixnr = $request->mixid;

        $Mix->save();
        // return $this->show($Mix->kraalnr);
        return redirect()->route('kralen.show', $request->mixid);
        // return redirect()->route('kralen.show', [$Mix->kraalnr])
        //     ->with('success', 'Product created successfully.');
    }
    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $kraal = Kraal::findOrFail($id);
        // $mix = Mix::findOrFail('1');
        $mix = Mix::where('mixnr', '=', $id)->get();
        // $kralenmix = Kraal::where('id', '=', $mix->kraalnr)->get();

        $kralen = array();
        foreach ($mix as $mixes) {
            $kralenmix = Kraal::where('id', '=', $mixes->kraalnr)->get();
            array_push($kralen, $kralenmix);
        }

        $mixkiezen = Kraal::where('nummer', 'not like', '%mix%')->orderBy('nummer', 'ASC')->get();

        $mixvoorkomt = Mix::where('kraalnr', '=', $id)->get();
        $kraleninmix = array();
        foreach ($mixvoorkomt as $kraalvoorkomt) {
            $kraalinmix = Kraal::where('id', '=', $kraalvoorkomt->mixnr)->get();
            array_push($kraleninmix, $kraalinmix);
        }

        return view('kralen.show', compact('kraal', 'mix', 'kralen', 'mixkiezen', 'kraleninmix'));
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit(string $id)
    {
        $kraal = Kraal::findOrFail($id);
        return view('kralen.edit', compact('kraal'));
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        // dd($request);
        $kraal = Kraal::find($id);
        // dd($kraal);
        // dd($request->image);
        // dd($request->hasFile('image'));
        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $kraal->image = $filename;
        }
        $kraal->name = $request->name;
        $kraal->stock = $request->stock;
        $kraal->nummer = $request->nummer;
        // dd($request->stock);
        // $puzzel->own = $request->eigen;
        // $puzzel->gelegd = $request->gelegd;
        $kraal->save();

        return back()
            ->with('success', 'Puzzel updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Kraal $kraal)
    {
        $kraal->delete();

        return redirect()->route('kralen.index')
            ->with('success', 'Puzzel deleted successfully');
    }
    public function search(Request $request)
    {
        // dd($request);

        $search = $request->input('search');
        $results = Kraal::where('name', 'like', "%$search%")->get();

        return view('kralen.index', ['kralen' => $results]);
    }
    public function searchmix()
    {
        // dd($request);

        // $search = $request->input('search');
        $results = Kraal::where('name', 'like', "%mix%")->get();

        return view('kralen.index', ['kralen' => $results]);
    }
    public function list()
    {
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();
        return view('kralen.list', compact('kralen'));
    }
}
