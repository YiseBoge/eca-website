<?php

namespace App\Http\Controllers;

use App\Http\Resources\TenderApplicationCollection;
use App\Http\Resources\TenderApplicationResource;
use App\Models\TenderApplication;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Support\Facades\Validator;


class TenderApplicationsController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $size = request()->input("size", 0);
        $email = request()->input("email");
        $tender_id = request()->input("tender_id");

        $models = TenderApplication::orderBy('created_at', 'DESC');

        if ($email){
            $models = $models->where('email', $email);
        }

        if ($tender_id){
            $models = $models->where('tender_id', $tender_id);
        }

        return new TenderApplicationCollection($models->paginate($size));
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $validation = Validator::make($request->all(),[
            'tender_id' => 'exists:tenders,id',
            'name' => 'required',
            'email' => 'required|email|unique:tender_applications,email,NULL,id,tender_id,' . $request->input("tender_id"),
            'file' => 'required',
        ]);

        $errors = $validation->errors();

        if(count($errors) != 0){
            return response($errors->toJson(), 400);
        }else{
            $file_url = "";
            if($request->file('file') != ""){
                $file_url = $request->file('file')->store('public/tender_application_files');
                $file_url = "/storage" . substr($file_url, 6);
            }

            $model = TenderApplication::create([
                'name' => $request->input("name"),
                'email' => $request->input("email"),
                'tender_id' => $request->input("tender_id"),
                'file_url' => $file_url
            ]);
            return new TenderApplicationResource($model);
        }
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        $model = TenderApplication::findOrFail($id);
        return new TenderApplicationResource($model);
    }
}
