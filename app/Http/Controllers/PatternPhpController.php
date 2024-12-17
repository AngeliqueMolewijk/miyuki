<?php

namespace App\Http\Controllers;

use App\Models\patternnew;
use App\Models\patterncolorsnew;
use Illuminate\Support\Facades\Auth;
use Illuminate\Http\Request;

class PatternPhpController extends Controller
{
    public function newpatternphp(Request $request)
    {
        $userid = Auth::id();
        $newpattern = new patternnew();
        $newpattern->name = $request['name'];
        $newpattern->size = $request['size'];
        $newpattern->kind = $request['kind'];
        $newpattern->user = $userid;
        $newpattern->save();
        return redirect("readpatternphp/{$newpattern->id}");
    }
    public function updatepattern(Request $request)
    {
        foreach ($request->input("data") as $data) {

            // dd($data);
            $newcolor = new patterncolorsnew();
            $newcolor->patternid = $data['patternid'];
            $newcolor->number = $data['colornumber'];
            $newcolor->color = $data['color'];
            $newcolor->save();
        }
    }
    public function readpatternphp(string $id = null)
    {
        $userid = Auth::id();

        if (!$id) {
            $pattern = patternnew::where('user', $userid)->first();
            // dd($pattern->id);
            if (empty($pattern)) {
                $userid = Auth::id();
                $newpattern = new patternnew();
                $newpattern->name = "new";
                $newpattern->size = "20";
                $newpattern->kind = "cross";
                $newpattern->user = $userid;
                $newpattern->save();
            }
            return redirect("readpatternphp/{$pattern->id}");
        } else {

            $pattern = patternnew::find($id);
        }
        $patternnew = patternnew::where('user', $userid)->get();
        $patterncolors = patternnew::Join('patterncolorsnew', 'patterncolorsnew.patternid', '=', 'patternnew.id')
            ->where('user', $userid)
            ->where('patternid', $id)
            ->get();
        // dd($patterncolors);
        $sizes = [$pattern->size, $pattern->size + 1];
        $switch = 0;
        $arrayspan = [];
        $num = 0;
        for ($x = 0; $x <= $pattern->size * $pattern->size; $x++) {
            array_push($arrayspan, $num);
            $num += $sizes[$switch];
            if ($switch == 0) {
                $switch = 1;
            } else {
                $switch = 0;
            }
        }
        // dd($arrayspan);
        return view('projects.readpatternphp', compact('pattern', 'patternnew', 'patterncolors', 'arrayspan'));
    }
}
