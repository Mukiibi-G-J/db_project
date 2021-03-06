from django.contrib import admin

from django.contrib import admin
from . import models


@admin.register(models.Post)
class AuthorAdmin(admin.ModelAdmin):
    list_display = ('title', 'id', 'status', 'slug', 'author')
    prepopulated_fields = {'slug': ('title',), }


@admin.register(models.Category)
class CategoryAdmin(admin.ModelAdmin):
    prepopulated_fields ={'slug': ('name',)}