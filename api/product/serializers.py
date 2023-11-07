from rest_framework import serializers

class ProductSerializer(serializers.Serializer):
    name = serializers.CharField(max_length=200)
    price = serializers.FloatField()
    created_at =serializers.DateTimeField()
    updated_at =serializers.DateTimeField()

