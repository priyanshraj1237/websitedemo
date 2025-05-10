from django.urls import path
from . import views

urlpatterns = [
    path('api/trending-courses/', views.trending_courses, name='trending-courses'),
    path('api/skills-courses/', views.skills_courses, name='skills-courses'),
]
