from django.shortcuts import render
from django.http import request
from django.conf import settings

def annotation_result (request):
    render(request, settings.BASE_DIR+"/reactapp/public/index.html")

