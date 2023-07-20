from rest_framework import serializers
import solaris_app.models as models


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
