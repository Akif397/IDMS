from django.urls import path
from . import views
urlpatterns = [
    path('result/', views.annotation_result , name="annotation_result"),
]