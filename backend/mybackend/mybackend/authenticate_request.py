from django.http import JsonResponse
import json

list_authenticated = {"username":"pirunrat","password":"Pirunrat37@"}

def authenticate_request(function):

    def wrapper(request, *args, **kwargs):

        data = json.loads(request.body.decode('utf-8'))

        if(request.method == 'POST'):

            username = data.get('username')
            password = data.get('password')
            try:
                if(username == list_authenticated['username'] and password == list_authenticated['password']):

                    return function(request, *args, **kwargs)
                else:
                    return JsonResponse({'status': 'error', 'message': 'Authentication failed.'}, status=401)
            except Exception as error:
                print(f"An error occurred: {error}")
        else:
            print(request.method)
    return wrapper


# The potential code qwe can use for APIs protection system


# decorators.py

# from django.http import JsonResponse

# def authenticate_request(func):
#     def wrapper(request, *args, **kwargs):
#         if not authenticate_token(request):
#             return JsonResponse({'status': 'failure', 'message': 'Unauthorized'}, status=401)
#         return func(request, *args, **kwargs)
#     return wrapper
    