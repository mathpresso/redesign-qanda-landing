from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'home/$', views.home_view, name="home"),
    url(r'franchise/$', views.franchise_view, name="franchise")
]
