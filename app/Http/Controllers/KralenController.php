<?php

namespace App\Http\Controllers;

use App\Models\Kleur;
use Illuminate\Http\Request;
use App\Models\Kraal;
use App\Models\Mix;
use App\Models\Kleurtype;
use App\Models\Project;
use App\Models\KleurNumber;
use Illuminate\Support\Facades\Validator;


class KralenController extends Controller
{
    public function index()
    {
        $kralen = Kraal::sortable(['stock' => 'desc'])->get();
        $aantalmix = Mix::all();
        return view('kralen.index', compact('kralen', 'aantalmix'));
    }
    public function opvoorraad()
    {
        // show all beads that are on stock

        $kralen = Kraal::sortable(['stock' => 'desc'])->where('stock', '>', 0)->get();
        $aantalmix = Mix::all();
        return view('kralen.index', compact('kralen', 'aantalmix'));
    }
    public function create()
    {
        return view('kralen.create');
    }
    public function createkleuren()
    {
        return view('kralen.createkleuren');
    }

    public function store(Request $request)
    {
        //to store new beads    
        $validator = Validator::make($request->all(), [
            'nummer' => 'unique:kraals,nummer|string|max:255',

        ]);
        if ($validator->fails()) {
            return redirect()->back()
                ->withErrors($validator)
                ->withInput();
        }

        $kraal = new Kraal;
        if ($request->file('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $kraal->image = $filename;
        }
        $kraal->name = $request->title;
        $kraal->nummer = $request->nummer;
        $kraal->stock = $request->stock;
        $kraal->save();

        return redirect()->route('kralen.create')
            ->with('success', 'Product created successfully.');
    }

    public function storemix(Request $request)
    {
        //store a bead as mix
        $Mix = new Mix();
        $Mix->kraalnr = $request->kraalid;
        $Mix->mixnr = $request->mixid;

        $Mix->save();

        return redirect()->route('kralen.show', $request->mixid);
    }
    public function destroymix(Mix $Mix)
    {
        //check if both are in use destroymix / destroyuitmix
        $Mix->delete();

        return redirect()->route('kralen.index')
            ->with('success', 'Mix deleted successfully');
    }
    public function destroyuitmix($mixid, $kraalid)
    {
        //check if both are in use destroymix / destroyuitmix

        $mixkraal = Mix::where('kraalnr', $kraalid)->where('mixnr', $mixid);
        $mixkraal->delete();
        return back();
    }

    public function show($id)
    {
        // show beads,mix and colors
        $kraal = Kraal::findOrFail($id);

        $projecten = Project::rightJoin('projectkraals', 'projectkraals.projectid', '=', 'projects.id')
            ->where('projectkraals.kraalid', '=', $id)
            ->get();

        $mixkiezen = Kraal::where('nummer', 'not like', '%mix%')->orderBy('nummer', 'ASC')->get();

        $kraleninmix = Mix::Join('kraals', 'kraals.id', '=', 'mixes.kraalnr')
            ->orderBy('kraals.stock', 'DESC')
            ->where('mixes.mixnr', '=', $id)
            ->get();

        $mixvankraal = Mix::Join('kraals', 'kraals.id', '=', 'mixes.mixnr')
            ->where('mixes.kraalnr', '=', $id)
            ->get();


        $inkleurtypes = kleurtype::Join('kleurs', 'kleurs.id', '=', 'kleurtypes.kleurid')
            ->where('kleurtypes.kraalid', '=', $id)
            ->get();
        return view('kralen.show', compact('kraal', 'mixkiezen', 'kraleninmix', 'inkleurtypes', 'projecten', 'mixvankraal'));
    }


    public function edit(string $id)
    {
        $kleuren = Kleur::orderBy('kleur', 'ASC')->get();

        $kraal = Kraal::findOrFail($id);
        $mixkiezen = Kraal::where('nummer', 'not like', '%mix%')->orderBy('nummer', 'ASC')->get();
        $kleurcollectie = kleurtype::Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
            ->where('kleurtypes.kraalid', '=', $id)
            ->get();

        $kraleninmix = Mix::Join('kraals', 'kraals.id', '=', 'mixes.kraalnr')
            ->where('mixes.mixnr', '=', $id)
            ->get();

        return view('kralen.edit', compact('kraal', 'kleuren', 'kleurcollectie', 'mixkiezen', 'kraleninmix'));
    }

    public function update(Request $request, $id)
    {

        $kraal = Kraal::find($id);

        if ($request->hasFile('image')) {
            $file = $request->file('image');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $kraal->image = $filename;
        }
        $kraal->name = $request->name;
        $kraal->stock = $request->stock;
        $kraal->nummer = $request->nummer;

        $kraal->save();
        if ($request->kleurid != 'Empty') {
            $kleurtype = new kleurtype();
            $kleurtype->kraalid = $id;
            $kleurtype->kleurid = $request->kleurid;
            $kleurtype->save();
        }
        return redirect(url()->previous() . '#component' . $kraal->id);
    }

    public function destroy($id)
    {
        $kraal = Kraal::find($id);
        $kraal->delete();

        $inkleurtypes = Kleurtype::where('kleurtypes.kraalid', $id);
        $inkleurtypes->delete();
        return redirect()->route('kralen.index')
            ->with('success', 'Kraal deleted successfully');
    }
    public function search(Request $request)
    {

        $search = $request->input('search');
        $kralen = Kraal::where('name', 'like', "%$search%")->get();
        $aantalmix = Mix::all();
        return view('kralen.index', compact('kralen', 'aantalmix'));
    }
    public function searchmix()
    {
        // show all beads that are mixes
        $kralen = Kraal::sortable(['name' => 'desc'])->where('name', 'like', "%mix%")->get();

        $aantalmix = Mix::all();

        return view('kralen.index', compact('kralen', 'aantalmix'));
    }
    public function list()
    {
        // a table in edit view to quick edit data
        $kralen = Kraal::sortable(['stock' => 'desc'])->orderBy('nummer', 'ASC')->get();
        $kleuren = Kleur::orderBy('kleur', 'ASC')->get();
        $mix = Mix::join('kraals', 'kraals.id', '=',  'mixes.mixnr')->get();

        $kleurcollectie = Kraal::join('kleurtypes', 'kraals.id', '=', 'kleurtypes.kraalid')
            ->Join('kleurs', 'kleurtypes.kleurid', '=', 'kleurs.id')
            ->get();

        // return response()->json($mix);

        return view('kralen.list', compact('kralen', 'mix', 'kleurcollectie', 'kleuren'));
    }

    public function testgrid()
    {
        // no longer in use
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();
        return view('kralen.test', compact('kralen'));
    }
    public function allekralen()
    {
        $kralen = KleurNumber::join('allekralen', 'allekralen.code', '=', 'kleurnumber.number')
        ->select('kleurnumber.*', 'allekralen.name as allekralename', 'allekralen.image')
        ->get();


        $aantalmix = Mix::all();
        return view('kralen.allekralen', compact('kralen', 'aantalmix'));
    }
}
