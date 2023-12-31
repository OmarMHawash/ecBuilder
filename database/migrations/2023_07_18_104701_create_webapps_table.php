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
        Schema::create('webapps', function (Blueprint $table) {
            $table->id();
            $table->string('name')->default('my-project');
            $table->string('description', 1000)->default('This is a full lemgth description for your project. make it good! my-project');
            $table->string('mini_description', 1000)->default('short description');
            $table->string('logo')->default('https://seeklogo.com/images/L/logo-com-hr-logo-5636A4D2D5-seeklogo.com.png');
            $table->unsignedBigInteger('palette_id')->default(1);
            $table->foreign('palette_id')->references('id')->on('palettes');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('webapps');
    }
};
