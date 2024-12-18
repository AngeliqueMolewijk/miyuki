<?php

namespace App\Http\Controllers;

use App\Models\Categorie;
use App\Models\Kraal;
use App\Models\Project;
use App\Models\ProjectCategorie;
use App\Models\projectkraal;
use App\Models\pattern;
use App\Models\User;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class ProjectController extends Controller
{

    public function index()
    {

        $userid = Auth::id();

        $projecten = Project::where('user', $userid)->get();
        $cattoproject = ProjectCategorie::leftJoin('categories', 'categories.id', '=', 'project_categories.categorieid')
            ->get();

        $categories = Categorie::all();
        $allcategories = Categorie::all();

        // dd($cattoproject);
        return view('projects.index', compact('projecten', 'categories', 'cattoproject', 'allcategories'));
    }
    public function filter($name)
    {
        //
        $projecten = ProjectCategorie::Join('categories', 'categories.id', '=', 'project_categories.categorieid')
            ->join('projects', 'projects.id', '=', 'project_categories.projectid')
            ->where('categories.categoriename', 'like', '%' . $name . '%')
            ->get();
        $cattoproject = ProjectCategorie::leftJoin('categories', 'categories.id', '=', 'project_categories.categorieid')
            ->get();
        $categories = Categorie::all();
        $allcategories = Categorie::all();

        // dd($categories);
        return view('projects.index', compact('projecten', 'categories', 'cattoproject', 'allcategories'));
    }

    public function create()
    {
        $kralen = Kraal::all();
        $allcategories = Categorie::all();

        return view('projects.create', compact('kralen', 'allcategories'));
    }

    public function store(Request $request)
    {
        $userid = Auth::id();

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
        $project->user = $userid;

        $project->save();

        $insertedId = $project->id;
        if ($request->kraalid != 'null') {
            $projectkraal = new projectkraal();
            $projectkraal->kraalid = $request->kraalid;
            $projectkraal->projectid = $insertedId;
            $projectkraal->save();
        }

        if ($request->categorieid != 'null') {
            $projectcat = new ProjectCategorie();
            $projectcat->projectid = $insertedId;
            $projectcat->categorieid = $request->categorieid;
            $projectcat->save();
        }
        return $this->show($insertedId);
    }

    public function show(string $id)
    {
        $project = Project::findOrFail($id);
        // $mix = Mix::findOrFail('1');
        // $kralenmix = Kraal::where('id', '=', $mix->kraalnr)->get();
        $kraleninproject = Kraal::Join('projectkraals', 'projectkraals.kraalid', '=', 'kraals.id')
            ->where('projectkraals.projectid', '=', $id)
            ->get();
        $categories = ProjectCategorie::Join('categories', 'categories.id', '=', 'project_categories.categorieid')
            ->where('project_categories.projectid', '=', $id)
            ->get();
        // dd($categories);
        $allcategories = Categorie::all();
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();


        return view('projects.show', compact('project', 'kraleninproject', 'kralen', 'categories', 'allcategories'));
    }

    public function edit(string $id)
    {
        $project = Project::findOrFail($id);
        $projectkraal = projectkraal::where('projectid', '=', $id)->get();
        $kraleninproject = Kraal::Join('projectkraals', 'projectkraals.kraalid', '=', 'kraals.id')
            ->where('projectkraals.projectid', '=', $id)
            ->get();
        $categoriesproject = ProjectCategorie::Join('categories', 'categories.id', '=', 'project_categories.categorieid')
            ->where('project_categories.projectid', '=', $id)
            ->get();
        // dd($categoriesproject);
        $kralen = Kraal::orderBy('nummer', 'ASC')->get();
        $allcategories = Categorie::all();
        return view('projects.edit', compact('project', 'projectkraal', 'kraleninproject', 'kralen', 'categoriesproject', 'allcategories'));
    }
    public function storekraalproject(Request $request)
    {
        $projectkraal = new projectkraal();
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

    public function update(Request $request, string $id)
    {
        // dd($request);
        $project = Project::find($id);
        // dd($request->image);
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

        $project->save();

        $insertedId = $project->id;
        if ($request->kraalid != 'null') {
            $projectkraal = new projectkraal();
            $projectkraal->kraalid = $request->kraalid;
            $projectkraal->projectid = $insertedId;
            $projectkraal->save();
        }
        if ($request->categorieid != 'null') {
            $categorieid = new ProjectCategorie();
            $categorieid->categorieid = $request->categorieid;
            $categorieid->projectid = $insertedId;
            $categorieid->save();
        }
        // dd($request->kleurid);
        return redirect()->route('projects.edit',  ['project' => $project->id])->with('message', 'State saved correctly!!!');
    }

    public function destroy(string $id)
    {
        // dd($id);
        $project = Project::where('id', $id);
        $project->delete();
        $projectkraal = projectkraal::where('projectid', $id);
        $projectkraal->delete();
        $projectkraal = ProjectCategorie::where('projectid', $id);
        $projectkraal->delete();

        return redirect()->route('projects.index')
            ->with('success', 'Project verwijderd');
    }
    public function clickgrid()
    {
        return view('projects.clickgrid');
    }
    public function createCategorie()
    {
        $Projecten = Project::all();
        $categories = Categorie::all();
        return view('projects.createCategorie', compact('Projecten', 'categories'));
    }
    public function categories()
    {
        //
        $categrories = ProjectCategorie::all();
        return view('projects.categories', compact('categrories'));
    }
    public function storecategorie(Request $request)
    {
        // dd($request);
        $categorie = new Categorie();
        $categorie->categoriename = $request->categorieName;
        $categorie->save();
        if ($request->projectid != 'null') {
            $insertedId = $categorie->id;
            $project = new ProjectCategorie();
            $project->projectid = $request->projectid;
            $project->categorieid = $insertedId;
            $project->save();
            return redirect()->route('projects.show', $request->projectid);
        }
        return redirect()->route('projects.index');
    }
    public function buildpattern(Request $request)
    {

        // $test = response()->json($request->input("data"));
        // $newObject = json_decode($request, true);

        foreach ($request->input("data") as $data) {
            $patterndata = pattern::where('name', $data['name'])
                ->where('number', $data['number'])
                ->where('user', $data['user'])
                ->first();

            if ($patterndata != '') {
                $patternUpdate = pattern::find($patterndata['id']);
                $patternUpdate->color = $data['color'];
                $patternUpdate->save();
            } else {
                $pattern = new pattern();
                $pattern->number = $data['number'];
                $pattern->color = $data['color'];
                $pattern->name = $data['name'];
                $pattern->size = $data['size'];
                $pattern->user = $data['user'];
                $pattern->kind = $data['kind'];
                $pattern->save();
            }
        }

        return response()->json([
            "data" => $request->data
        ]);
    }
    public function buildpatternget()
    {
        return view('projects.buildproject');
    }
    public function readbuildpattern()
    {
        $id = Auth::id();
        // dd($id);
        $Pattern = pattern::where('user', $id)->get();
        $patternNames = pattern::where('user', $id)->select('name')
            ->orderBy('name')
            ->groupBy('name')
            ->get();
        // dd($Pattern);
        // dd(response()->json($Pattern));
        $x = 10;

        return view('projects.readbuildproject', compact('Pattern', 'patternNames'));
    }
    public function readbuildpatternew($pattern)
    {
        $id = Auth::id();
        // dd($id);
        $Pattern = pattern::findOrFail($pattern);
        $patternNames = pattern::where('user', $id)->select('name')
            ->orderBy('name')
            ->groupBy('name')
            ->get();
        return view('projects.readbuildprojectnew', compact('Pattern', 'patternNames'));
    }
    public function deleteproject(Request $request)
    {
        $pattern = pattern::where('name', $request->data[0])->where('user', $request->data[1])->get();
        foreach ($pattern as $pat) {
            $pat =  pattern::findOrFail($pat->id);
            $pat->delete();
        }
        return response()->json([
            "data" => $request->data
        ]);
    }
}
