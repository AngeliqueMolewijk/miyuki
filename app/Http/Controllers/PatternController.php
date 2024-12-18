<?php

namespace App\Http\Controllers;

use App\Models\patternnew;
use App\Models\patterncolorsnew;
use Illuminate\Support\Facades\Auth;

use Illuminate\Http\Request;

class PatternController extends Controller
{

    public function index()
    {
        //
    }


    public function newpattern(Request $request)
    {
        $userid = Auth::id();
        $newpattern = new patternnew();
        $newpattern->name = $request['name'];
        $newpattern->size = $request['size'];
        $newpattern->kind = $request['kind'];
        $newpattern->user = $userid;
        $newpattern->save();
        return redirect()->action([PatternController::class, 'readbuildpatternew'], ['pattern' => $newpattern->id]);
    }

    public function store(Request $request)
    {
        //
    }


    public function readbuildpatternew(string $id = null)
    {
        if (!$id) {
            $userid = Auth::id();

            $pattern = patternnew::where('user', $userid)->first();
            // dd($pattern);
            // return response()->json($pattern);
            if (empty($pattern)) {

                $userid = Auth::id();
                $newpattern = new patternnew();
                $newpattern->name = "new";
                $newpattern->size = "20";
                $newpattern->kind = "cross";
                $newpattern->user = $userid;
                $newpattern->save();
            }
            $pattern = patternnew::where('user', $userid)->first();

            return redirect("readbuildpatternew/$pattern->id");
        }

        $patterncolordata = patterncolorsnew::where('patternid', $id)->where('number', '#72cc66')->get();


        $userid = Auth::id();
        $pattern = patternnew::find($id);
        $patternall = patternnew::all();
        $patternstring = [];
        $patternstring[] = $pattern;
        $patterncolors = patterncolorsnew::where('patternid', $id)->get();
        $patterncolorsstring = [];
        foreach ($patterncolors as $colors) {
            $patterncolorsstring[] = $patterncolors;
        }
        $patternnew = patternnew::where('user', $userid)->get();
        // dd($pattern);
        return view('projects.readbuildpatternew', compact('userid', 'pattern', 'patternnew', 'patterncolors', 'patternstring', 'patterncolorsstring', 'patternall', 'patterncolordata'));
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Request $request, $id)
    {
        // dd($request->name);
        // dd($id);
        $patternew = patternnew::find($id);
        // dd($patternew);
        $patternew->name = $request->name;
        $patternew->size = $request->size;
        $patternew->kind = $request->kind;
        $patternew->save();
        return redirect()->action([PatternController::class, 'readbuildpatternew'], ['pattern' => $patternew->id]);
    }


    public function updatepattern(Request $request, $id)
    {

        foreach ($request->input("data") as $data) {
            $patterncolordata = patterncolorsnew::where('patternid', $id)->where('number', $data['colornumber'])->first();

            if ($patterncolordata != '') {
                $patterncolordata->color = $data['color'];
                $patterncolordata->save();
            } else {
                $patterncolor = new patterncolorsnew();
                $patterncolor->patternid = $data['patternid'];
                $patterncolor->number = $data['colornumber'];
                $patterncolor->color = $data['color'];
                $patterncolor->save();
            }
        }

        return response()->json([
            // "status" => true,
            "data" => $patterncolordata
        ]);
    }


    public function destroy(string $id)
    {
        //
    }
}
