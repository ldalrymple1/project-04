# pylint: disable=no-member, arguments-differ
from rest_framework.authentication import BaseAuthentication
from rest_framework.exceptions import PermissionDenied # exceptions is another word for errors
from django.contrib.auth import get_user_model
from django.conf import settings
import jwt
User = get_user_model()



class JWTAuthentication(BaseAuthentication):

    def authenticate(self, request):
        header = request.headers.get('Authorization')
        print(f'header: {header}')


        if not header:
            return None

        if header.startswith('Basic'): # Add this line in
            return None

        if not header.startswith('Bearer'):
            raise PermissionDenied({'message': 'new Invalid Authorization Header'})

        token = header.replace('Bearer ', '')

        try:
            payload = jwt.decode(token, settings.SECRET_KEY, algorithms=['HS256'])
            user = User.objects.get(pk=payload.get('sub'))
        except jwt.exceptions.InvalidTokenError:
            raise PermissionDenied({'message': 'Invalid Token'}) # raise an error
        except User.DoesNotExist:
            raise PermissionDenied({'message': 'User not found'})

        return (user, token)