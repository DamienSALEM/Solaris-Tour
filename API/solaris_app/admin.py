from django.contrib import admin
from .models import TypeVaisseau, TypePlanete, Planete, ActivitePlanete, Vol, Reservation, Hotel


class TypeVaisseauAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'description', 'nbr_passager_max')
    list_display_links = ('id', 'nom')

admin.site.register(TypeVaisseau, TypeVaisseauAdmin)


class TypePlaneteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom')
    list_display_links = ('id', 'nom')

admin.site.register(TypePlanete, TypePlaneteAdmin)


class PlaneteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'type_planete', 'description')
    list_display_links = ('id', 'nom')

admin.site.register(Planete, PlaneteAdmin)


class ActivitePlaneteAdmin(admin.ModelAdmin):
    list_display = ('id', 'nom', 'planete', 'description')
    list_display_links = ('id', 'nom')

admin.site.register(ActivitePlanete, ActivitePlaneteAdmin)


class VolAdmin(admin.ModelAdmin):
    list_display = ('id', 'planete_depart', 'planete_arrivee', 'type_vaisseau', 'date_vol', 'duree_vol')
    list_display_links = ('id', 'planete_depart', 'planete_arrivee')

admin.site.register(Vol, VolAdmin)


class ReservationAdmin(admin.ModelAdmin):
    list_display = ('id', 'user', 'vol')
    list_display_links = ('id', 'user', 'vol')

admin.site.register(Reservation, ReservationAdmin)


class HotelAdmin(admin.ModelAdmin):
    list_display = ('id', 'planete', 'nom', 'theme')
    list_display_links = ('id', 'planete', 'nom')

admin.site.register(Hotel, HotelAdmin)
