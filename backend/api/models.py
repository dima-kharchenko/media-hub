from django.db import models
from django.contrib.auth.models import User


class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    avatar = models.ImageField(default="default.jpg", upload_to='profile_images', blank=True, null=True)
    bio = models.TextField(blank=True, null=True, max_length=400)

    def __str__(self):
        return self.user.username
