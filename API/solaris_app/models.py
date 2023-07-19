from django.db import models
from django.contrib.auth.models import User


class TypeVaisseau(models.Model):
    nom = models.CharField(max_length=100)


class TypePlanete(models.Model):
    nom = models.CharField(max_length=100)


class Planete(models.Model):
    nom = models.CharField(max_length=100)
    type_planete = models.ForeignKey(TypePlanete, on_delete=models.DO_NOTHING)
    description = models.CharField(max_length=100)


class ActivitePlanete(models.Model):
    planete = models.ForeignKey(Planete, on_delete=models.DO_NOTHING)
    nom = models.CharField(max_length=100)
    description = models.TextField()


class Vol(models.Model):
    planete_depart = models.ForeignKey(Planete, related_name='vols_depart', on_delete=models.DO_NOTHING)
    planete_arrivee = models.ForeignKey(Planete, related_name='vols_arrivee', on_delete=models.DO_NOTHING)
    type_vaisseau = models.ForeignKey(TypeVaisseau, on_delete=models.DO_NOTHING)
    date_vol = models.DateField()
    duree_vol = models.IntegerField()


class Reservation(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING)
    vol = models.ForeignKey(Vol, on_delete=models.DO_NOTHING)


class Hotel(models.Model):
    planete = models.ForeignKey(Planete, on_delete=models.DO_NOTHING)
    nom = models.CharField(max_length=100)
    adresse = models.CharField(max_length=200)
