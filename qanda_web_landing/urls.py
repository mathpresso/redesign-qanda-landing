from django.conf.urls import url, include
from django.contrib import admin

urlpatterns = [
    url(r'^', include('landing_web.urls', namespace="landing")),
    url(r'^admin/', admin.site.urls),
]
