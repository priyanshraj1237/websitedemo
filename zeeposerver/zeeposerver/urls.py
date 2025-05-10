"""
URL configuration for zeeposerver project.

The `urlpatterns` list routes URLs to views. For more information please see:
    https://docs.djangoproject.com/en/5.1/topics/http/urls/
Examples:
Function views
    1. Add an import:  from my_app import views
    2. Add a URL to urlpatterns:  path('', views.home, name='home')
Class-based views
    1. Add an import:  from other_app.views import Home
    2. Add a URL to urlpatterns:  path('', Home.as_view(), name='home')
Including another URLconf
    1. Import the include() function: from django.urls import include, path
    2. Add a URL to urlpatterns:  path('blog/', include('blog.urls'))
"""
from django.contrib import admin
from django.urls import path
from . import views

# from .views import hello, trending_courses, skills_courses, ongoing_courses




urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/hello/', views.hello),
    path('api/trending-courses/', views.trending_courses, name='trending-courses'),
    path('api/skills-courses/', views.skills_courses, name='skills-courses'),    
    path('api/ongoing-courses/', views.ongoing_courses, name='ongoing-courses'),
   path('api/upload-instructor/', views.upload_instructor2, name='upload_instructor'),

]
