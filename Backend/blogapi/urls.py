from django.urls import path
from . import views

app_name='blogapi'


urlpatterns = [
    path('', views.PostListView.as_view(), name='post_home'),
    # path('category', views.CategoryListView.as_view(), name='categories'),
    path('category/<slug:slug>', views.CategoryItemView.as_view(), name='category_item'),
    path('<slug:slug>', views.Post.as_view(), name='post'),
    path('admin/create', views.CreateAPIView.as_view(), name='createpost'),
    path('admin/edit/postdetail/<int:pk>/', views.AdminPostDetail.as_view(), name='admindetailpost'),
    path('admin/edit/<int:pk>/', views.UpdateAPIView.as_view(), name='updatepost'),
    path('admin/delete/<int:pk>/', views.DeletePost.as_view(), name='deletepost')
]

