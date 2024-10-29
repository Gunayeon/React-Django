from django.urls import path
from . import views

urlpatterns = [
    path('', views.ListPost.as_view(), name='listpost'),
    path('<int:pk>/', views.DetailPost.as_view(), name='detailpost')
]
