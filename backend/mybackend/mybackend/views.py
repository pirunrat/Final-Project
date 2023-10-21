from .authenticate_request import authenticate_request
from django.http import JsonResponse
from django.views.decorators.csrf import csrf_exempt

@csrf_exempt
@authenticate_request
def landing_page(request):
    return JsonResponse({'status': 'success'})