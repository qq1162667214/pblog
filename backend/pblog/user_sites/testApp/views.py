from django.http import JsonResponse
# Create your views here.
def test(request):
  return JsonResponse(data={'status':0, 'msg': 'Django server is ready.'})