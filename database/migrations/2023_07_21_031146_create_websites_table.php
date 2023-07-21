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
        Schema::create('websites', function (Blueprint $table) {
            $table->id();
            $table->string('name')->unique()->default('ecBuilder');
            $table->string('description', 1000)->nullable();
            $table->string('def_proj_path')->default('storage/webapps/default_app');
            $table->string('domain')->default('localhost:8000');
            $table->string('client_path')->default('app/client');
            $table->string('config')->nullable();
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('websites');
    }
};
