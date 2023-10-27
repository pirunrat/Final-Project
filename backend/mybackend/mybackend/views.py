from .authenticate_request import authenticate_request
from django.http import JsonResponse
from rest_framework.authtoken.models import Token
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@authenticate_request
def landing_page(request):
    token = 'asdasewadsdsdasd3232564231dsasdasdasd'
    return JsonResponse({'token': token, 'status': 'success'})