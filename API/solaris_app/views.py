from django.shortcuts import render
import solaris_app.models as models
import solaris_app.serializers as seria
from rest_framework.response import Response
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.authtoken.models import Token
from django.contrib.auth import authenticate
from django.contrib.auth.hashers import check_password


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
@permission_classes([IsAuthenticated])
def unique_vol(request, pk):
    try:
        vol = models.Vol.objects.get(pk=pk)
    except models.Vol.DoesNotExist:
        return Response(status=404)
    if request.method == 'GET':
        serializer = seria.VolSerializer(vol)

        # Récupérer les hôtels de la planète d'arrivée
        hotels_arrivee = models.Hotel.objects.filter(
            planete=vol.planete_arrivee)
        serializer_hotels = seria.HotelSerializer(hotels_arrivee, many=True)

        # Récupérer les activités de la planète d'arrivée
        activites_arrivee = models.ActivitePlanete.objects.filter(
            planete=vol.planete_arrivee)
        serializer_activites = seria.ActivitePlaneteSerializer(
            activites_arrivee, many=True)

        # Récupérer le type de vaisseau
        type_vaisseau = models.TypeVaisseau.objects.get(
            pk=vol.type_vaisseau.id)
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


@api_view(['POST'])
@permission_classes([IsAuthenticated])
def create_reservation(request, vol_id):
    user = models.User.objects.get(id=request.data['user_id'])
    try:
        vol = models.Vol.objects.get(pk=vol_id)
    except models.Vol.DoesNotExist:
        return Response({'error': 'Le vol spécifié est introuvable.'}, status=400)

    reservation = models.Reservation(user=user, vol=vol)
    reservation.save()

    serializer = seria.ReservationSerializer(reservation)
    return Response(serializer.data, status=201)


@api_view(['GET'])
def planetes_list(request):
    planetes = models.Planete.objects.all()
    serializer = seria.PlaneteSerializer(planetes, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def type_activite_list(request):
    types_activite = models.TypeActivite.objects.all()
    serializer = seria.TypeActiviteSerializer(types_activite, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def hotel_list(request):
    hotels = models.Hotel.objects.all()
    serializer = seria.HotelSerializer(hotels, many=True)
    return Response(serializer.data)


@api_view(['GET'])
def type_vaisseau_list(request):
    types_vaisseau = models.TypeVaisseau.objects.all()
    serializer = seria.TypeVaisseauSerializer(types_vaisseau, many=True)
    return Response(serializer.data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def get_planete_details(request, planete_id):
    try:
        planete = models.Planete.objects.get(pk=planete_id)
    except models.Planete.DoesNotExist:
        return Response({'error': 'La planète spécifiée est introuvable.'}, status=400)

    vols = models.Vol.objects.filter(planete_arrivee=planete_id)
    hotels = models.Hotel.objects.filter(planete=planete_id)
    activites = models.ActivitePlanete.objects.filter(planete=planete_id)

    serializer_planete = seria.PlaneteSerializer(planete)
    serializer_vols = seria.VolSerializer(vols, many=True)
    serializer_hotels = seria.HotelSerializer(hotels, many=True)
    serializer_activites = seria.ActivitePlaneteSerializer(
        activites, many=True)
    response_data = {
        'planete': serializer_planete.data,
        'vols': serializer_vols.data,
        'hotels': serializer_hotels.data,
        'activites': serializer_activites.data
    }

    return Response(response_data)


@api_view(['GET'])
@permission_classes([IsAuthenticated])
def vol_details(request, vol_id):
    try:
        vol = models.Vol.objects.get(pk=vol_id)
    except models.Vol.DoesNotExist:
        return Response({'error': 'Le vol spécifié est introuvable.'}, status=400)

    serializer = seria.VolSerializer(vol)
    return Response(serializer.data, status=200)


@api_view(['POST'])
def register_user(request):
    serializer = seria.UserSerializer(data=request.data)
    if serializer.is_valid():
        serializer.save()
        user = models.User.objects.get(email=serializer.data['email'])
        token, _ = Token.objects.get_or_create(user=user)
        return Response({'status': 200, 'données': serializer.data, 'token': str(token)})
    return Response({'status': 403, 'erreur': serializer.errors})


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')
    if email and password:
        try:
            user = models.User.objects.get(email=email)
        except models.User.DoesNotExist:
            return Response({'status': 401, 'message': 'Identifiants invalides'})
        if user:
            if check_password(password,user.password):
                token, _ = Token.objects.get_or_create(user=user)
                return Response({'status': 200, 'token': str(token), 'user_id': user.id})
            else:
                return Response({'status':401,'message':'Invalid identifiers'})
        else:
            print(email,password)
            return Response({'status': 401, 'message': 'User not found'})
    else:
        return Response({'status': 400, 'message': 'Please use email and password to login'})
