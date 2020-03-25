from django.urls import path
from api.views import GradedAssignmentListView

urlpatterns = [
    path('', GradedAssignmentListView.as_view())
]
