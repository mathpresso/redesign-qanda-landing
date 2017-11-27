from django.shortcuts import render


def home_view(request):
    ctx = {

    }
    return render(request, "landing_web/home/index.html", ctx)


def franchise_view(request):
    ctx = {

    }
    return render(request, "landing_web/franchise/index.html", ctx)
