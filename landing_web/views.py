from django.shortcuts import render
from utils import documents
import json


def home_view(request):
    document = open('landing_web/docs/questions_reviews_content.json', encoding='utf8').read()
    ctx = {
        'data': json.loads(document),
    }
    return render(request, "landing_web/home/index.html", ctx)


def franchise_view(request):
    ctx = {

    }
    return render(request, "landing_web/franchise/index.html", ctx)
