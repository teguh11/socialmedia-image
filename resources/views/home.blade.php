@extends('layouts.app')
<style type="text/css">
    .border{border: 1px solid black;}
</style>
@section('content')
<div class="container">
    <div class="row">
        <!-- Profile  -->
        <div class="col-md-3 border">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">Panel title</h3>
                </div>
                <div class="panel-body">
                    <a href="#" class="thumbnail" style="border-radius: 50%">
                        <img src="https://dummyimage.com/1000" alt="..." style="border-radius: 50%">
                    </a>
                </div>
            </div>
        </div>
        <!-- your timeline -->
        <div class="col-md-6 border">
            asdad
        </div>

        <!-- other widget. like ads, etc -->
        <div class="col-md-3 border">
            asdasd
        </div>
    </div>
</div>
@endsection
