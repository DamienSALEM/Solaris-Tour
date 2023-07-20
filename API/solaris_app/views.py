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
        return Response(serializer.data)
    elif request.method == 'PUT':
        serializer = seria.VolSerializer(vol, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=400)
    elif request.method == 'DELETE':
        vol.delete()
        return Response(status=204)
