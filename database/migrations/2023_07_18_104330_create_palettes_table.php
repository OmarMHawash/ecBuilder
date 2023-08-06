<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('palettes', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique();
            $table->string('text')->require()->default('#000000');
            $table->string('background')->require()->default('#ffffff');
            $table->string('primary')->require()->default('#8fb3ff');
            $table->string('secondary')->require()->default('#ebf1ff');;
            $table->string('accent')->require()->default('#a849d750');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('palettes');
    }
};
