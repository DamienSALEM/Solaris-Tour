
from django.urls import path
import solaris_app.views as views

urlpatterns = [
    path('vols', views.vol_list, name='vols'),
    path('vol/<int:pk>', views.unique_vol, name='vol')
]
