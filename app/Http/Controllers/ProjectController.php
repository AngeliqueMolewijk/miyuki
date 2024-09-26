<?php

namespace App\Http\Controllers;

use App\Models\Kraal;
use App\Models\Project;
use App\Models\projectkraal;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;
use Illuminate\Support\Facades\DB;

class ProjectController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $projecten = Project::all();
        return view('projects.index', compact('projecten'));
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        return view('projects.create');
    }

    /**
     * Store a newly created resource in storage.
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

        $project = new Project();
        // dd($request->file('image'));
        if ($request->file('image1')) {
            $file = $request->file('image1');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $project->image = $filename;
        }
        if ($request->file('image2')) {
            $file = $request->file('image2');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $project->image = $filename;
        }
        $project->naam = $request->title;
        $project->omschrijving = $request->description;
        $project->kraalid = $request->Kraalid;

        // $puzzel->own = $request->eigen;
        // $puzzel->gelegd = $request->gelegd;
        // $puzzel->image = $imageName;
        $project->save();
        return redirect()->route('projects.create')
            ->with('success', 'Product created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        $project = Project::findOrFail($id);
        // $mix = Mix::findOrFail('1');
        // $kralenmix = Kraal::where('id', '=', $mix->kraalnr)->get();
        $kraleninproject = Kraal::Join('projectkraals', 'projectkraals.kraalid', '=', 'kraals.id')
            // ->join('kraals', 'kraals.id', '=', $kleurtype->kraalid)
            ->where('projectkraals.projectid', '=', $id)
            ->get();
        // dd($kraleninproject);
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();


        return view('projects.show', compact('project', 'kraleninproject', 'kralen'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        // $projectkraal = projectkraal::findOrFail($id);
        $projectkraal = projectkraal::where('projectid', '=', $id)->get();
        $kraleninproject = Kraal::Join('projectkraals', 'projectkraals.kraalid', '=', 'kraals.id')
            // ->join('kraals', 'kraals.id', '=', $kleurtype->kraalid)
            ->where('projectkraals.projectid', '=', $id)
            ->get();
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();
        // dd($kraleninproject);
        // dd($projectkraal);
        // $projectkralenarray = array();
        // foreach ($projectkraal as $kraalinproject) {
        //     $projectkraaltypes = Kraal::where('id', '=', $kraalinproject->kraalid)->get();
        //     array_push($projectkralenarray, $projectkraaltypes);
        // }
        // dd($projectkralenarray);
        return view('projects.edit', compact('project', 'projectkraal', 'kraleninproject', 'kralen'));
    }
    public function storekraalproject(Request $request)
    {
        $projectkraal = new projectkraal();
        // dd($request);
        // $Mix->name = $request->title;
        $projectkraal->kraalid = $request->kraalid;
        $projectkraal->projectid = $request->projectid;

        $projectkraal->save();
        return redirect()->route('projects.show', $request->projectid);
    }
    public function destroyuitproject($projectid, $kraalid)
    {
        // dd($projectid, $kraalid);
        $projectkraal = projectkraal::where('kraalid', $kraalid)->where('projectid', $projectid);
        $projectkraal->delete();

        return redirect()->route('projects.show', $projectid);
    }
    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        // dd($request);
        // dd($request);
        $project = Project::find($id);
        // dd($kraal);
        // dd($request->image);
        // dd($request->hasFile('image'));
        if ($request->hasFile('image1')) {
            $file = $request->file('image1');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $project->image = $filename;
        }
        if ($request->hasFile('image2')) {
            $file = $request->file('image2');
            $filename = date('YmdHi') . $file->getClientOriginalName();
            $file->move(public_path('images'), $filename);
            $project->image2 = $filename;
        }
        $project->naam = $request->name;
        $project->omschrijving = $request->description;
        $project->kraalid = $request->kraalid;
        // dd($request->stock);
        // $puzzel->own = $request->eigen;
        // $puzzel->gelegd = $request->gelegd;
        $project->save();
        // dd($request->kleurid);

        return back()
            ->with('success', 'Project updated successfully');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $project->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Puzzel deleted successfully');
    }
    public function clickgrid()
    {
        return view('projects.clickgrid');
    }
}
