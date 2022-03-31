from django.db import models



from django.db import models
from django.utils import timezone
from django.conf import settings
from django.utils.translation import gettext_lazy as _


class Category(models.Model):
    name = models.CharField(max_length=100)
    slug = models.SlugField(max_length=250, unique=True)

    def __str__(self):
        return self.name
    
    class Meta:
        db_table = 'Category'


class Post(models.Model):

    class PostObjects(models.Manager):
        def get_queryset(self):
            return super().get_queryset() .filter(status='published')

    options = (
        ('draft', 'Draft'),
        ('published', 'Published'),
    )

    category = models.ForeignKey(
        Category, on_delete=models.PROTECT, default=1)
    title = models.CharField(max_length=250)
    excerpt = models.TextField(null=True)
    content = models.TextField()
    slug = models.SlugField(max_length=250, unique_for_date='published')
    image=models.ImageField(verbose_name=_('image'), help_text=_('Upload a product image'), upload_to="images/", default="images/default.png")
    alt_text = models.CharField(verbose_name =_('Alternative text'), max_length=255, help_text=_("Please add alternative text"), null=True, blank=True)
    
    published = models.DateTimeField(default=timezone.now)
    author = models.ForeignKey(
        settings.AUTH_USER_MODEL, on_delete=models.CASCADE, related_name='blog_posts')
    status = models.CharField(
        max_length=10, choices=options, default='published')
    objects = models.Manager()  # default manager
    postobjects = PostObjects()  # custom manager

    class Meta:
        db_table = 'Posts'
        ordering = ('-published',)
    
    def __str__(self):
        return self.title
