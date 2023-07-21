from django.db import models
from django.contrib.auth.models import User

class TypeVaisseau(models.Model):
    nom = models.CharField(max_length=100)
    description = models.TextField()
    vitesse = models.FloatField()
    autonomie = models.FloatField()
    nbr_passager_max = models.PositiveIntegerField()
    nbr_equipage = models.PositiveIntegerField()

    def __str__(self):
        return self.nom


class TypePlanete(models.Model):
    nom = models.CharField(max_length=100)

    def __str__(self):
        return self.nom


class Planete(models.Model):
    nom = models.CharField(max_length=100)
    type_planete = models.ForeignKey(TypePlanete, on_delete=models.DO_NOTHING)
    description = models.CharField(max_length=100)

    def __str__(self):
        return self.nom


class ActivitePlanete(models.Model):
    planete = models.ForeignKey(Planete, on_delete=models.DO_NOTHING)
    nom = models.CharField(max_length=100)
    description = models.TextField()

    def __str__(self):
        return self.nom


class Vol(models.Model):
    planete_depart = models.ForeignKey(Planete, related_name='vols_depart', on_delete=models.DO_NOTHING)
    planete_arrivee = models.ForeignKey(Planete, related_name='vols_arrivee', on_delete=models.DO_NOTHING)
    type_vaisseau = models.ForeignKey(TypeVaisseau, on_delete=models.DO_NOTHING)
    date_vol = models.DateField()
    duree_vol = models.IntegerField()

    def __str__(self):
        return f"Vol de {self.planete_depart} à {self.planete_arrivee}"
    
    def titre(self):
        return f"Vol de {self.planete_depart} à {self.planete_arrivee}"


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    vol = models.ForeignKey(Vol, on_delete=models.DO_NOTHING)

    def __str__(self):
        return f"Réservation de {self.user} pour le vol {self.vol}"


class Hotel(models.Model):
    planete = models.ForeignKey(Planete, on_delete=models.DO_NOTHING)
    nom = models.CharField(max_length=100)
    adresse = models.CharField(max_length=200)
    theme = models.CharField(max_length=200)

    def __str__(self):
        return self.nom

