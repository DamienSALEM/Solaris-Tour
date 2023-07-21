
from django.urls import path
import solaris_app.views as views

urlpatterns = [
    path('register', views.register_user, name='register'),
    path('login', views.login, name='login'),
    path('vols', views.vol_list, name='vols'),
    path('planetes', views.planetes_list, name='planetes'),
    path('vaisseaux', views.type_vaisseau_list, name='vaisseaux'),
    path('activites', views.type_activite_list, name='activites'),
    path('hotels', views.hotel_list, name='hotels'),
    path('vol/<int:pk>', views.unique_vol, name='vol'),
    path('reservation/<int:vol_id>', views.create_reservation, name='reservation'),
    path('details-planete/<int:planete_id>', views.get_planete_details),
    path('details-vol/<int:vol_id>', views.vol_details)

]
