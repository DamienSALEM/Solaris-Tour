from django.shortcuts import render
import solaris_app.models as models
import solaris_app.serializers as seria
from rest_framework.response import Response
from rest_framework.decorators import api_view
# Create your views here.


@api_view(['GET', 'POST'])
def vol_list(request):
    if request.method == 'GET':
        vols = models.Vol.objects.all()
        serializer = seria.VolSerializer(vols, many=True)
        return Response(serializer.data)
    elif request.method == 'POST':
        serializer = seria.VolSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=201)
        return Response(serializer.errors, status=400)


@api_view(['GET', 'PUT', 'DELETE'])
def unique_vol(request, pk):
    try:
        vol = models.Vol.objects.get(pk=pk)
    except models.Vol.DoesNotExist:
        return Response(status=404)
    if request.method == 'GET':
        serializer = seria.VolSerializer(vol)
        
        # Récupérer les hôtels de la planète d'arrivée
        hotels_arrivee = models.Hotel.objects.filter(planete=vol.planete_arrivee)
        serializer_hotels = seria.HotelSerializer(hotels_arrivee, many=True)
        
        # Récupérer les activités de la planète d'arrivée
        activites_arrivee = models.ActivitePlanete.objects.filter(planete=vol.planete_arrivee)
        serializer_activites = seria.ActivitePlaneteSerializer(activites_arrivee, many=True)
        
        # Récupérer le type de vaisseau
        type_vaisseau = models.TypeVaisseau.objects.get(pk=vol.type_vaisseau.id)
        serializer_type_vaisseau = seria.TypeVaisseauSerializer(type_vaisseau)
        
        # Ajouter les données aux champs appropriés de la réponse
        response_data = {
            'vol': serializer.data,
            'hotels_arrivee': serializer_hotels.data,
            'activites_arrivee': serializer_activites.data,
            'type_vaisseau': serializer_type_vaisseau.data
        }
        
        return Response(response_data)
    elif request.method == 'PUT':
        serializer = seria.VolSerializer(vol, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        vol.delete()
        return Response(status=204)
