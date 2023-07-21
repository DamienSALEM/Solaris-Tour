from rest_framework import serializers
import solaris_app.models as models
from django.contrib.auth.models import User


class PlaneteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Planete
        fields = '__all__'


class TypeVaisseauSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TypeVaisseau
        fields = '__all__'


class TypePlaneteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.TypePlanete
        fields = '__all__'


class ActivitePlaneteSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.ActivitePlanete
        fields = '__all__'


class VolSerializer(serializers.ModelSerializer):

    planete_depart_nom = serializers.CharField(source='planete_depart.nom')
    planete_arrivee_nom = serializers.CharField(source='planete_arrivee.nom')
    type_vaisseau_nom = serializers.CharField(source='type_vaisseau.nom')

    class Meta:
        model = models.Vol
        fields = '__all__'


class ReservationSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Reservation
        fields = '__all__'


class HotelSerializer(serializers.ModelSerializer):
    class Meta:
        model = models.Hotel
        fields = '__all__'


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['password', 'first_name', 'last_name', 'email']

    def create(self, data):
        user = User.objects.create(username=f'{data["first_name"]}_{data["last_name"]}',
                                   first_name=data['first_name'], last_name=data['last_name'], email=data['email'])
        user.set_password(data['password'])
        user.save()
        return user
