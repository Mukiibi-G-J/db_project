
from django.shortcuts import render
from rest_framework.generics import UpdateAPIView,RetrieveDestroyAPIView ,ListAPIView, RetrieveAPIView, CreateAPIView
from blog import models
from blog.models import Post, Category
from blogapi.Serializers import PostSerializer, CategorySerializer
# from rest_framework import

class PostListView(ListAPIView):
    queryset=Post.objects.all()
    serializer_class=PostSerializer
    

class Post(RetrieveAPIView):
    lookup_field = "slug"
    queryset=Post.objects.all()
    serializer_class = PostSerializer

class CategoryItemView(ListAPIView):
    serializer_class = PostSerializer
    
    def get_queryset(self):
         return models.Post.objects.filter(category__slug=self.kwargs['slug'])
    # def get_queryset(self):
            # return models.Post.objects.filter(category__slug=self.kwargs['slug'].get_descendant(include_self=True))

class CategoryListView(ListAPIView):
    
    # queryset = Category.Category.objects.filter(category__slug=self.kwargs['slug'])
    serializer_class = CategorySerializer
    def get_queryset(self):
        return models.Category.objects.filter(category__slug=self.kwargs['slug'])
    
    
    
    
class CreatePost(CreateAPIView):
    # permission_classes = [permissions.IsAuthenticated]
    queryset = models.Post.objects.all()
    serializers_class = PostSerializer

class AdminPostDetail(RetrieveAPIView):
    queryset = models.Post.objects.all()
    serializers_class = PostSerializer

class EditPost(UpdateAPIView):
    serializer_class =PostSerializer
    queryset = models.Post.objects.all()

class DeletePost(RetrieveDestroyAPIView):
    serializer_class = PostSerializer
    queryset = models.Post.objects.all()
    
    
    