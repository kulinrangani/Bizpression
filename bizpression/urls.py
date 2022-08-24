from django.contrib import admin
from django.urls import path, include
from django.conf import settings
from django.conf.urls.static import static


urlpatterns = [
    path('', include('pages.urls')),
    path('shop/', include('shop.urls')),
    path('contact/', include('contacts.urls')),

    path('admin/', admin.site.urls),
]

# linking static files
if settings.DEBUG:
    urlpatterns += static(settings.STATIC_URL,
                          document_root=settings.STATIC_ROOT)
