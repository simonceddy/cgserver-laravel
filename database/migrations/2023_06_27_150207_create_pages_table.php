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
        Schema::create('pages', function (Blueprint $table) {
            $table->id();
            // Keep timestamps consistent with node server db
            $table->timestamp('createdAt', 0)->nullable()->useCurrent();
            $table->timestamp('updatedAt', 0)->nullable()->useCurrentOnUpdate();
            $table->string('title');
            $table->longText('body');
            $table->string('slug')->unique();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('pages');
    }
};
